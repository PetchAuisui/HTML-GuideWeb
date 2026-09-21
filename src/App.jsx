import { useEffect } from 'react'
import CourseHeader from './components/CourseHeader'
import LessonSidebar from './components/LessonSidebar'
import useLessonLayout from './hooks/useLessonLayout'
import Home from './pages/Home'
import LessonOne from './pages/LessonOne'
import LessonTwo from './pages/LessonTwo'
import LessonThree from './pages/LessonThree'

function getPage() {
  if (location.pathname.endsWith('lesson1.html')) return 'lesson1'
  if (location.pathname.endsWith('lesson2.html')) return 'lesson2'
  if (location.pathname.endsWith('lesson3.html')) return 'lesson3'
  return 'home'
}

export default function App() {
  const page = getPage()
  const hasSidebar = page !== 'home'
  const layout = useLessonLayout(hasSidebar)
  const shellClass = ['react-app-shell', `page-${page}`, hasSidebar && 'has-sidebar', layout.collapsed && 'sidebar-collapsed', layout.mobileOpen && 'sidebar-mobile-open'].filter(Boolean).join(' ')

  useEffect(() => {
    const titles = {
      home: 'HTML Learning Lab · เลือกบทเรียน',
      lesson1: 'หน่วยที่ 1 · โครงสร้างพื้นฐาน HTML5',
      lesson2: 'หน่วยที่ 2 · การใส่เนื้อหาด้วยข้อความ',
      lesson3: 'หน่วยที่ 3 · การใส่รูปภาพและลิงก์เชื่อมโยง'
    }
    document.title = titles[page] || titles.home
    const pageClasses = (page === 'lesson1' || page === 'lesson2' || page === 'lesson3') ? 'font-prompt antialiased bg-grid-pattern' : ''
    document.body.className = `${pageClasses} ${layout.theme}`.trim()
  }, [page, layout.theme])

  return (
    <div className={shellClass}>
      <CourseHeader page={page} hasSidebar={hasSidebar} progress={layout.progress} theme={layout.theme} onMenu={layout.toggleSidebar} onTheme={layout.toggleTheme} sidebarExpanded={layout.sidebarExpanded} />
      {hasSidebar && <LessonSidebar page={page} progress={layout.progress} activeSection={layout.activeSection} theme={layout.theme} onClose={layout.closeMobile} onCollapse={layout.collapse} onTheme={layout.toggleTheme} />}
      <div className={page === 'home' ? 'home-page-content' : 'lesson-layout-content'}>
        {page === 'home' ? <Home /> : page === 'lesson1' ? <LessonOne /> : page === 'lesson2' ? <LessonTwo /> : <LessonThree />}
      </div>
    </div>
  )
}
