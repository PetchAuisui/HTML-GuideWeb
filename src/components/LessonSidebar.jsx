import { Award, ChevronLeft, Moon, PanelLeftClose, Sun, X } from 'lucide-react'

const lessonMenus = {
  lesson1: [
    ['บทนำ & พื้นฐาน', [['hero', 'ภาพรวม 6 แท็กหลัก'], ['learning-goals', 'เป้าหมายการเรียนรู้'], ['browser-observation', 'ข้อสังเกตบนเบราว์เซอร์']]],
    ['การสอนทีละสเต็ป', [['step-by-step', 'สร้างโครงเว็บ Step 1-6']]],
    ['ห้องทดลองจำลอง', [['lab', 'Simulator สลับ 5 แท็ก']]],
    ['เจาะลึก 6 แท็ก', [['deep-dive', 'รายละเอียดแท็กพื้นฐาน']]],
    ['ฝึกปฏิบัติ & วัดผล', [['sandbox', 'Live Code Sandbox'], ['quiz', 'แบบฝึกหัดจับคู่แท็ก']]],
  ],
  lesson2: [
    ['บทนำ', [['hero', 'ภาพรวมบทเรียน']]],
    ['เนื้อหา', [['objectives', 'เป้าหมายและภาพรวม'], ['lesson', 'แท็กข้อความ 4 กลุ่ม'], ['headings', 'ลำดับหัวข้อ h1–h6'], ['compare', 'ย่อหน้า p กับ br']]],
    ['ฝึกปฏิบัติ', [['playground', 'Live Code Sandbox'], ['quiz', 'แบบฝึกหัดในชั้นเรียน']]],
  ],
}

export default function LessonSidebar({ page, progress, activeSection, theme, onClose, onCollapse, onTheme }) {
  const unit = page === 'lesson1' ? '1' : '2'
  const nextHref = page === 'lesson1' ? 'lesson2.html' : 'lesson1.html'
  const nextLabel = page === 'lesson1' ? 'ไปยังหน่วยที่ 2' : 'กลับไปหน่วยที่ 1'

  return (
    <>
      <button className="lesson-sidebar-backdrop" aria-label="ปิดสารบัญ" onClick={onClose} />
      <aside className="lesson-sidebar" aria-label={`สารบัญหน่วยที่ ${unit}`}>
        <div>
          <div className="sidebar-heading">
            <span className="header-mark">T</span>
            <div><strong>สารบัญบทเรียน</strong><small>หน่วยการเรียนรู้ที่ {unit}</small></div>
            <div className="sidebar-heading-actions">
              <button className="sidebar-mobile-close" aria-label="ปิดสารบัญ" onClick={onClose}><X /></button>
              <button className="sidebar-desktop-collapse" aria-label="ย่อสารบัญ" onClick={onCollapse}><PanelLeftClose /></button>
            </div>
          </div>
          <div className="sidebar-progress-card">
            <span><Award /> ความคืบหน้า</span><strong>{progress}%</strong>
            <div><i style={{ width: `${progress}%` }} /></div>
          </div>
          <nav>
            {lessonMenus[page].map(([title, links]) => (
              <div className="sidebar-menu-group" key={title}>
                <small>{title}</small>
                {links.map(([id, label]) => (
                  <a key={id} className={`sidebar-link ${activeSection === id ? 'active' : ''}`} href={`#${id}`} data-section={id} onClick={onClose}>
                    <ChevronLeft aria-hidden="true" /><span>{label}</span>
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </div>
        <div className="sidebar-footer">
          <a href={nextHref}><span>{nextLabel}</span><span>→</span></a>
          <button onClick={onTheme}>{theme === 'dark' ? <Sun /> : <Moon />}<span>สลับธีม</span></button>
        </div>
      </aside>
    </>
  )
}
