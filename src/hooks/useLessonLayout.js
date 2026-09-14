import { useEffect, useState } from 'react'

export default function useLessonLayout(hasSidebar) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('hero')
  const [theme, setTheme] = useState(() => localStorage.getItem('html_guide_theme') || 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.classList.toggle('light', theme === 'light')
    document.body.classList.toggle('dark', theme === 'dark')
    document.body.classList.toggle('light', theme === 'light')
    localStorage.setItem('html_guide_theme', theme)
  }, [theme])

  useEffect(() => {
    if (!hasSidebar) return undefined
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? Math.min(100, Math.max(0, Math.round(window.scrollY / total * 100))) : 0)
      let current = 'hero'
      document.querySelectorAll('.lesson-layout-content section[id]').forEach(section => {
        if (section.getBoundingClientRect().top <= 180) current = section.id
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    update()
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [hasSidebar])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const toggleSidebar = () => window.matchMedia('(min-width: 1024px)').matches
    ? setCollapsed(value => !value)
    : setMobileOpen(value => !value)

  return {
    collapsed, mobileOpen, progress, activeSection, theme,
    toggleSidebar,
    closeMobile: () => setMobileOpen(false),
    collapse: () => setCollapsed(true),
    toggleTheme: () => setTheme(value => value === 'dark' ? 'light' : 'dark'),
  }
}
