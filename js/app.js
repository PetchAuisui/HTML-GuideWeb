/**
 * Main application UI controller for HTML System Tags Web Guide
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // 1. Tag Details Tab Switching
  const tagTabBtns = document.querySelectorAll('.tag-tab-btn');
  const tagDetailPanels = document.querySelectorAll('.tag-detail-panel');

  function switchDeepDiveTab(targetTag) {
    // Update button active state
    tagTabBtns.forEach(b => {
      if (b.dataset.tagTarget === targetTag) {
        b.classList.add('bg-indigo-600', 'text-white', 'shadow-lg', 'shadow-indigo-500/25');
        b.classList.remove('bg-slate-800/80', 'text-slate-400', 'hover:bg-slate-700/80', 'hover:text-slate-200');
      } else {
        b.classList.remove('bg-indigo-600', 'text-white', 'shadow-lg', 'shadow-indigo-500/25');
        b.classList.add('bg-slate-800/80', 'text-slate-400', 'hover:bg-slate-700/80', 'hover:text-slate-200');
      }
    });

    // Show matching panel
    tagDetailPanels.forEach(panel => {
      if (panel.id === `tag-panel-${targetTag}`) {
        panel.classList.remove('hidden');
        panel.classList.add('animate-fade-in');
      } else {
        panel.classList.add('hidden');
        panel.classList.remove('animate-fade-in');
      }
    });

    if (window.lucide) lucide.createIcons();
  }

  tagTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchDeepDiveTab(btn.dataset.tagTarget);
    });
  });

  // Also support hero cards with data-tag-target
  document.querySelectorAll('a[data-tag-target]').forEach(link => {
    link.addEventListener('click', () => {
      const targetTag = link.dataset.tagTarget;
      switchDeepDiveTab(targetTag);
    });
  });

  // 2. Live Sandbox Code Runner (100% Pure HTML Standards)
  const sandboxEditor = document.getElementById('sandbox-editor');
  const sandboxIframe = document.getElementById('sandbox-preview-iframe');
  const sandboxRunBtn = document.getElementById('sandbox-run-btn');
  const sandboxResetBtn = document.getElementById('sandbox-reset-btn');

  const defaultSandboxCode = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    <h1>ยินดีต้อนรับสู่เว็บไซต์ของเรา</h1>
  </body>
</html>`;

  function runSandbox() {
    if (!sandboxEditor || !sandboxIframe) return;
    const code = sandboxEditor.value;
    const doc = sandboxIframe.contentDocument || sandboxIframe.contentWindow.document;
    doc.open();
    doc.write(code);
    doc.close();
  }

  if (sandboxEditor && sandboxIframe) {
    sandboxEditor.value = defaultSandboxCode;
    runSandbox();

    if (sandboxRunBtn) {
      sandboxRunBtn.addEventListener('click', runSandbox);
    }

    if (sandboxResetBtn) {
      sandboxResetBtn.addEventListener('click', () => {
        sandboxEditor.value = defaultSandboxCode;
        runSandbox();
      });
    }
  }

  // 4. Copy Code Snippet Buttons
  document.querySelectorAll('.copy-code-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const codeId = btn.dataset.codeId;
      const targetElement = document.getElementById(codeId);
      if (!targetElement) return;

      const textToCopy = targetElement.innerText || targetElement.textContent;
      navigator.clipboard.writeText(textToCopy).then(() => {
        const origHtml = btn.innerHTML;
        btn.innerHTML = '<i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400"></i> คัดลอกแล้ว!';
        if (window.lucide) lucide.createIcons();
        setTimeout(() => {
          btn.innerHTML = origHtml;
          if (window.lucide) lucide.createIcons();
        }, 2000);
      });
    });
  });

  // 5. Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const targetEl = document.querySelector(href);
      if (targetEl) {
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // 6. Sidebar Controller (Desktop Collapse & Mobile Off-Canvas)
  const sidebarToggleBtn = document.getElementById('sidebar-toggle-btn');
  const sidebarCloseBtn = document.getElementById('sidebar-close-btn');
  const sidebarDesktopCollapseBtn = document.getElementById('sidebar-desktop-collapse-btn');
  const sidebarDrawer = document.getElementById('sidebar-drawer');
  const sidebarBackdrop = document.getElementById('sidebar-backdrop');

  function toggleSidebar() {
    if (window.innerWidth >= 1024) {
      // Desktop: Collapse / Expand sidebar
      document.body.classList.toggle('sidebar-collapsed');
    } else {
      // Mobile: Open off-canvas drawer
      openMobileSidebar();
    }
  }

  function openMobileSidebar() {
    if (!sidebarDrawer || !sidebarBackdrop) return;
    sidebarDrawer.classList.remove('-translate-x-full');
    sidebarBackdrop.classList.remove('hidden');
    setTimeout(() => {
      sidebarBackdrop.classList.remove('opacity-0');
      sidebarBackdrop.classList.add('opacity-100');
    }, 10);
    document.body.style.overflow = 'hidden';
  }

  function closeMobileSidebar() {
    if (!sidebarDrawer || !sidebarBackdrop) return;
    sidebarDrawer.classList.add('-translate-x-full');
    sidebarBackdrop.classList.remove('opacity-100');
    sidebarBackdrop.classList.add('opacity-0');
    setTimeout(() => {
      sidebarBackdrop.classList.add('hidden');
    }, 300);
    document.body.style.overflow = '';
  }

  if (sidebarToggleBtn) sidebarToggleBtn.addEventListener('click', toggleSidebar);
  if (sidebarCloseBtn) sidebarCloseBtn.addEventListener('click', closeMobileSidebar);
  if (sidebarBackdrop) sidebarBackdrop.addEventListener('click', closeMobileSidebar);
  if (sidebarDesktopCollapseBtn) {
    sidebarDesktopCollapseBtn.addEventListener('click', () => {
      document.body.classList.add('sidebar-collapsed');
    });
  }

  // Close mobile sidebar on link click
  document.querySelectorAll('#sidebar-drawer .sidebar-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 1024) {
        closeMobileSidebar();
      }
    });
  });

  // 7. Sidebar Tag Direct Switcher
  document.querySelectorAll('[data-sidebar-tag]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetTag = link.dataset.sidebarTag;
      if (targetTag) {
        switchDeepDiveTab(targetTag);
      }
    });
  });

  // 8. ScrollSpy & Dynamic Reading Progress Tracker
  const sections = document.querySelectorAll('section[id]');
  const sidebarLinks = document.querySelectorAll('.sidebar-link[data-section]');
  const topbarProgressFill = document.getElementById('topbar-progress-fill');
  const topbarProgressText = document.getElementById('topbar-progress-text');
  const sidebarProgressBar = document.getElementById('sidebar-progress-bar');
  const sidebarProgressPercent = document.getElementById('sidebar-progress-percent');

  function updateScrollProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = docHeight > 0 ? Math.min(100, Math.round((scrollTop / docHeight) * 100)) : 0;

    if (topbarProgressFill) topbarProgressFill.style.width = `${scrollPercent}%`;
    if (topbarProgressText) topbarProgressText.textContent = `${scrollPercent}%`;
    if (sidebarProgressBar) sidebarProgressBar.style.width = `${scrollPercent}%`;
    if (sidebarProgressPercent) sidebarProgressPercent.textContent = `${scrollPercent}%`;

    // Active Section Highlighting
    let currentSectionId = "";
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (scrollTop >= top && scrollTop < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    if (currentSectionId) {
      sidebarLinks.forEach(link => {
        if (link.dataset.section === currentSectionId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  }

  // 9. Light / Dark Theme Switcher (Projector High-Contrast Mode)
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeToggleIcon = document.getElementById('theme-toggle-icon');
  const sidebarThemeToggle = document.getElementById('sidebar-theme-toggle');
  const sidebarThemeIcon = document.getElementById('sidebar-theme-icon');
  const sidebarThemeLabel = document.getElementById('sidebar-theme-label');

  function applyTheme(theme) {
    const isDark = theme === 'dark';
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.remove('bg-[#f8fafc]', 'text-slate-800');
      document.body.classList.add('bg-[#0b0f19]', 'text-slate-200');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('bg-[#0b0f19]', 'text-slate-200');
      document.body.classList.add('bg-[#f8fafc]', 'text-slate-800');
    }

    // Update icons and labels
    if (themeToggleIcon) {
      themeToggleIcon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
      themeToggleIcon.className = `w-4 h-4 ${isDark ? 'text-amber-400' : 'text-indigo-600'} transition`;
    }

    if (sidebarThemeIcon) {
      sidebarThemeIcon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
      sidebarThemeIcon.className = `w-3.5 h-3.5 ${isDark ? 'text-amber-400' : 'text-indigo-600'}`;
    }

    if (sidebarThemeLabel) {
      sidebarThemeLabel.textContent = isDark ? 'ธีมสว่าง (Projector)' : 'ธีมมืด (Dark Mode)';
    }

    localStorage.setItem('html_guide_theme', theme);
    if (window.lucide) lucide.createIcons();
  }

  function toggleTheme() {
    const isCurrentlyDark = document.documentElement.classList.contains('dark');
    applyTheme(isCurrentlyDark ? 'light' : 'dark');
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
  if (sidebarThemeToggle) sidebarThemeToggle.addEventListener('click', toggleTheme);

  // Initialize theme from localStorage
  const savedTheme = localStorage.getItem('html_guide_theme') || 'dark';
  applyTheme(savedTheme);

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();
});



