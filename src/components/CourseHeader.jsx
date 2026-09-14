import { Menu, Moon, Sun } from 'lucide-react'

const lessons = [
  { href: 'index.html', label: 'ภาพรวม', short: 'หน้าหลัก', page: 'home' },
  { href: 'lesson1.html', label: 'หน่วยที่ 1', short: 'บท 1', page: 'lesson1' },
  { href: 'lesson2.html', label: 'หน่วยที่ 2', short: 'บท 2', page: 'lesson2' },
]

export default function CourseHeader({ page, hasSidebar, progress, theme, onMenu, onTheme }) {
  return (
    <header className="course-header">
      {hasSidebar && (
        <button className="header-menu" aria-label="เปิดหรือปิดสารบัญ" aria-expanded="true" onClick={onMenu}>
          <Menu aria-hidden="true" />
        </button>
      )}
      <a className="header-brand" href="index.html">
        <span className="header-mark">T</span>
        <span><strong>HTML Learning Lab</strong><small>บทเรียนพื้นฐาน HTML5</small></span>
      </a>
      <nav className="lesson-nav" aria-label="เลือกบทเรียน">
        {lessons.map(item => (
          <a key={item.page} className={page === item.page ? 'active' : ''} href={item.href} data-short={item.short}>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
      <div className="header-actions">
        {hasSidebar && <div className="header-progress"><span>{progress}%</span><div className="header-progress-track"><div className="header-progress-fill" style={{ width: `${progress}%` }} /></div></div>}
        <button className="header-theme" aria-label={theme === 'dark' ? 'เปลี่ยนเป็นธีมสว่าง' : 'เปลี่ยนเป็นธีมมืด'} onClick={onTheme}>
          {theme === 'dark' ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
        </button>
      </div>
    </header>
  )
}
