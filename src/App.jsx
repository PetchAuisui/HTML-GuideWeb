import { useEffect, useMemo } from 'react'
import CourseHeader from './components/CourseHeader'
import LessonSidebar from './components/LessonSidebar'
import AdvancedExercise from './components/AdvancedExercise'
import useLessonLayout from './hooks/useLessonLayout'
import homeDocument from '../legacy/index.html?raw'
import lesson1Document from '../legacy/lesson1.html?raw'
import lesson2Document from '../legacy/lesson2.html?raw'
import lesson1App from '../js/lesson1-app.js?raw'
import stepGuide from '../js/stepGuide.js?raw'
import simulator from '../js/simulator.js?raw'
import quiz from '../js/quiz.js?raw'
import lesson2App from '../js/app.js?raw'

function getPage() {
  if (location.pathname.endsWith('lesson1.html')) return 'lesson1'
  if (location.pathname.endsWith('lesson2.html')) return 'lesson2'
  return 'home'
}

function extract(documentText, selector, inner = false) {
  const parsed = new DOMParser().parseFromString(documentText, 'text/html')
  const node = parsed.querySelector(selector)
  return node ? (inner ? node.innerHTML : node.outerHTML) : ''
}

function extractLesson2Main() {
  const parsed = new DOMParser().parseFromString(lesson2Document, 'text/html')
  parsed.querySelector('#quiz')?.remove()
  return parsed.querySelector('main')?.innerHTML || ''
}

function runLegacy(source) {
  const script = document.createElement('script')
  script.textContent = source
  document.body.appendChild(script)
  return script
}

function LegacyContent({ page }) {
  const html = useMemo(() => {
    if (page === 'home') return `${extract(homeDocument, 'style')}${extract(homeDocument, '.home')}`
    if (page === 'lesson1') return extract(lesson1Document, '#main-content-wrapper', true)
    return extractLesson2Main()
  }, [page])

  useEffect(() => {
    if (page === 'home') return undefined
    const scripts = page === 'lesson1'
      ? [stepGuide, simulator, quiz, lesson1App].map(runLegacy)
      : [lesson2App.replace(/const selects=[\s\S]*?(?=const structureToggles)/, '')].map(runLegacy)
    if (page === 'lesson1') document.dispatchEvent(new Event('DOMContentLoaded'))
    window.lucide?.createIcons()
    return () => scripts.forEach(script => script.remove())
  }, [page])

  if (page === 'lesson2') {
    return <div className="lesson-layout-content"><main id="top" dangerouslySetInnerHTML={{ __html: html }} /><AdvancedExercise /><div dangerouslySetInnerHTML={{ __html: extract(lesson2Document, 'footer') }} /></div>
  }

  return <div className={page === 'home' ? 'home-page-content' : 'lesson-layout-content'} dangerouslySetInnerHTML={{ __html: html }} />
}

export default function App() {
  const page = getPage()
  const hasSidebar = page !== 'home'
  const layout = useLessonLayout(hasSidebar)
  const shellClass = ['react-app-shell', `page-${page}`, hasSidebar && 'has-sidebar', layout.collapsed && 'sidebar-collapsed', layout.mobileOpen && 'sidebar-mobile-open'].filter(Boolean).join(' ')

  useEffect(() => {
    const titles = { home: 'HTML Learning Lab · เลือกบทเรียน', lesson1: 'หน่วยที่ 1 · โครงสร้างพื้นฐาน HTML5', lesson2: 'หน่วยที่ 2 · การใส่เนื้อหาด้วยข้อความ' }
    document.title = titles[page]
    const pageClasses = page === 'lesson1' ? 'font-prompt antialiased bg-grid-pattern' : page === 'lesson2' ? 'font-prompt' : ''
    document.body.className = `${pageClasses} ${layout.theme}`.trim()
  }, [page, layout.theme])

  return (
    <div className={shellClass}>
      <CourseHeader page={page} hasSidebar={hasSidebar} progress={layout.progress} theme={layout.theme} onMenu={layout.toggleSidebar} onTheme={layout.toggleTheme} />
      {hasSidebar && <LessonSidebar page={page} progress={layout.progress} activeSection={layout.activeSection} theme={layout.theme} onClose={layout.closeMobile} onCollapse={layout.collapse} onTheme={layout.toggleTheme} />}
      <LegacyContent page={page} />
    </div>
  )
}
