import { useEffect } from 'react'
import CourseHeader from './components/CourseHeader'
import LessonSidebar from './components/LessonSidebar'
import useLessonLayout from './hooks/useLessonLayout'
import Home from './pages/Home'
import LessonOne from './pages/LessonOne'
import LessonTwo from './pages/LessonTwo'

function getPage() {
  if (location.pathname.endsWith('lesson1.html')) return 'lesson1'
  if (location.pathname.endsWith('lesson2.html')) return 'lesson2'
  return 'home'
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
      <CourseHeader page={page} hasSidebar={hasSidebar} progress={layout.progress} theme={layout.theme} onMenu={layout.toggleSidebar} onTheme={layout.toggleTheme} sidebarExpanded={layout.sidebarExpanded} />
      {hasSidebar && <LessonSidebar page={page} progress={layout.progress} activeSection={layout.activeSection} theme={layout.theme} onClose={layout.closeMobile} onCollapse={layout.collapse} onTheme={layout.toggleTheme} />}
      <div className={page === 'home' ? 'home-page-content' : 'lesson-layout-content'}>{page === 'home' ? <Home /> : page === 'lesson1' ? <LessonOne /> : <LessonTwo />}</div>
    </div>
  )
}
