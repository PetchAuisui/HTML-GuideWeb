/**
 * Step-by-Step HTML5 Structure Interactive Walkthrough
 * Demonstrates the step-by-step evolution of a webpage from plain text to a complete HTML5 document.
 */

const StepGuide = (() => {
  const steps = [
    {
      step: 1,
      title: "จุดเริ่มต้น: ข้อความดิบไร้โครงสร้าง (Plain Text)",
      badge: "ยังไม่มี Tag ใดๆ",
      badgeColor: "bg-slate-800 text-slate-400 border-slate-700",
      targetTag: "ไม่มีโครงสร้าง",
      explanation: "เมื่อเบราว์เซอร์ได้รับข้อความดิบโดยไม่มีแท็กโครงสร้าง จะไม่รู้ว่าเอกสารนี้ใช้มาตรฐานใด ขาดข้อมูลชื่อเว็บ (Tab Title) และหากบันทึกไฟล์ไม่ตรงระบบ อาจแสดงภาษาไทยผิดเพี้ยนเป็นภาษาต่างดาวทันที",
      focusPoint: "สังเกต: แถบแท็บจะแสดงเป็นชื่อไฟล์ index.html และไม่มีการกำหนดโหมดมาตรฐาน",
      calloutTarget: "tab",
      calloutText: "แท็บแสดงชื่อไฟล์ 'index.html' เพราะยังไม่มีแท็ก <title>",
      code: `ยินดีต้อนรับสู่เว็บไซต์ของเรา`,
      highlightLines: [1],
      browserState: {
        tabTitle: "index.html (Untitled)",
        tabIcon: "file",
        modeBadge: "Quirks / Unspecified Mode",
        modeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
        langBadge: "lang: ไม่ได้ระบุ",
        langColor: "bg-slate-800 text-slate-400 border-slate-700",
        charsetBadge: "Charset: Auto-Detect (เสี่ยงเพี้ยน)",
        charsetColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
        headingText: "ยินดีต้อนรับสู่เว็บไซต์ของเรา",
        headingStyle: "font-normal text-slate-300 text-base font-serif",
        bodyContentHtml: ``,
        arrowDirection: "tab"
      }
    },
    {
      step: 2,
      title: "ก้าวที่ 1: ประกาศชนิดเอกสารด้วย <!DOCTYPE html>",
      badge: "กลุ่มแท็กควบคุมระบบ",
      badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/40",
      targetTag: "<!DOCTYPE html>",
      explanation: "คำสั่ง <!DOCTYPE html> ต้องวางไว้ที่บรรทัดแรกสุดเสมอ เพื่อบอกเว็บเบราว์เซอร์ว่าเอกสารนี้เขียนด้วยมาตรฐาน HTML5 สั่งให้เปิด 'Standards Mode' ป้องกันไม่ให้ตกไปอยู่ใน 'Quirks Mode'",
      focusPoint: "สไลด์หน้า 7: ป้องกัน Quirks Mode และทำให้เบราว์เซอร์ทุกค่ายเรนเดอร์โครงสร้างหน้าเว็บตามมาตรฐาน HTML5 เดียวกัน",
      calloutTarget: "mode",
      calloutText: "โหมดเปลี่ยนเป็น HTML5 Standards Mode ทันที!",
      code: `<!DOCTYPE html>
ยินดีต้อนรับสู่เว็บไซต์ของเรา`,
      highlightLines: [1],
      browserState: {
        tabTitle: "index.html",
        tabIcon: "file",
        modeBadge: "Standards Mode (HTML5) ✓",
        modeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
        langBadge: "lang: ไม่ได้ระบุ",
        langColor: "bg-slate-800 text-slate-400 border-slate-700",
        charsetBadge: "Charset: Auto-Detect",
        charsetColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
        headingText: "ยินดีต้อนรับสู่เว็บไซต์ของเรา",
        headingStyle: "font-normal text-slate-300 text-base",
        bodyContentHtml: ``,
        arrowDirection: "mode"
      }
    },
    {
      step: 3,
      title: "ก้าวที่ 2: ครอบขอบเขตหลักด้วย <html>",
      badge: "กลุ่มแท็กควบคุมระบบ",
      badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/40",
      targetTag: "<html>",
      explanation: "แท็ก <html> คือ Container สูงสุด (Root Element) ที่ทำหน้าที่ครอบโครงสร้างของเว็บเพจทั้งหมด",
      focusPoint: "สไลด์หน้า 8: Root Element กำหนดขอบเขตเริ่มต้นและสิ้นสุดของเอกสาร HTML",
      calloutTarget: "lang",
      calloutText: "แท็ก <html> กำหนดโครงสร้าง Root ของเว็บเพจ",
      code: `<!DOCTYPE html>
<html>
  ยินดีต้อนรับสู่เว็บไซต์ของเรา
</html>`,
      highlightLines: [2, 4],
      browserState: {
        tabTitle: "index.html",
        tabIcon: "file",
        modeBadge: "Standards Mode (HTML5) ✓",
        modeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
        langBadge: "HTML Root Active ✓",
        langColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
        charsetBadge: "Charset: Auto-Detect",
        charsetColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
        headingText: "ยินดีต้อนรับสู่เว็บไซต์ของเรา",
        headingStyle: "text-slate-300 text-base",
        bodyContentHtml: ``,
        arrowDirection: "lang"
      }
    },
    {
      step: 4,
      title: "ก้าวที่ 3: สร้างส่วนหัว <head> และล็อครหัสภาษาด้วย <meta charset=\"UTF-8\">",
      badge: "กลุ่มแท็กควบคุมระบบ",
      badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/40",
      targetTag: "<meta charset=\"UTF-8\">",
      explanation: "แท็ก <head> ใช้รวบรวมข้อมูลเกี่ยวกับเว็บเพจ (Metadata) โดยแท็ก <meta charset=\"UTF-8\"> จะสั่งให้เบราว์เซอร์แปลงรหัสตัวอักษรแบบ UTF-8 ป้องกันปัญหาภาษาต่างดาว",
      focusPoint: "สไลด์หน้า 9 & 12: ป้องกันภาษาต่างดาว และเปิดอ่านได้ถูกต้องบนทุกอุปกรณ์",
      calloutTarget: "charset",
      calloutText: "UTF-8 กำหนดเรียบร้อย! ป้องกันภาษาต่างดาว 100%",
      code: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  ยินดีต้อนรับสู่เว็บไซต์ของเรา
</html>`,
      highlightLines: [3, 4, 5],
      browserState: {
        tabTitle: "index.html",
        tabIcon: "file",
        modeBadge: "Standards Mode (HTML5) ✓",
        modeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
        langBadge: "HTML Root Active ✓",
        langColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
        charsetBadge: "UTF-8 Unicode Active ✨",
        charsetColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/40",
        headingText: "ยินดีต้อนรับสู่เว็บไซต์ของเรา",
        headingStyle: "text-slate-300 text-base",
        bodyContentHtml: ``,
        arrowDirection: "charset"
      }
    },
    {
      step: 5,
      title: "ก้าวที่ 4: ตั้งชื่อหน้าเว็บบนแท็บด้วย <title>",
      badge: "กลุ่มแท็กควบคุมระบบ",
      badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/40",
      targetTag: "<title>",
      explanation: "แท็ก <title> อยู่ภายใน <head> ใช้กำหนดชื่อเรื่องที่จะไปแสดงผลบน 'แท็บของเว็บเบราว์เซอร์' และแสดงเป็นหัวข้อลิงก์หลักในผลการค้นหาของ Google",
      focusPoint: "สไลด์หน้า 10-11: มีลูกศรชี้จาก <title> ไปยัง Tab Bar บนสุดของเบราว์เซอร์โดยตรง",
      calloutTarget: "tab",
      calloutText: "ดูที่นี่! ข้อความใน <title> ปรากฏบนแท็บเบราว์เซอร์ทันที 🎯",
      code: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  ยินดีต้อนรับสู่เว็บไซต์ของเรา
</html>`,
      highlightLines: [5],
      browserState: {
        tabTitle: "Document",
        tabIcon: "globe",
        modeBadge: "Standards Mode (HTML5) ✓",
        modeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
        langBadge: "HTML Root Active ✓",
        langColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
        charsetBadge: "UTF-8 Active ✨",
        charsetColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/40",
        headingText: "ยินดีต้อนรับสู่เว็บไซต์ของเรา",
        headingStyle: "text-slate-300 text-base",
        bodyContentHtml: `<div class="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center mt-4">
          <p class="text-xs text-indigo-400 font-medium">สังเกตที่แท็บเบราว์เซอร์ด้านบนสุด!</p>
          <p class="text-[11px] text-slate-400 mt-0.5">ชื่อแท็บเปลี่ยนเป็น <strong>"Document"</strong> แล้ว</p>
        </div>`,
        arrowDirection: "tab"
      }
    },
    {
      step: 6,
      title: "ก้าวที่ 5: สร้างพื้นที่แสดงผลด้วย <body> และแท็ก <h1>",
      badge: "กลุ่มแท็กแสดงผล (Display Tags)",
      badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/40",
      targetTag: "<body> & <h1>",
      explanation: "ทุกสิ่งที่ผู้ใช้มองเห็นและโต้ตอบได้ จะต้องเขียนอยู่ภายในแท็ก <body> เท่านั้น โดยใช้แท็กแสดงผล เช่น <h1> สำหรับหัวข้อ",
      focusPoint: "สไลด์หน้า 13 & 16: เนื้อหาทั้งหมดที่ผู้ใช้มองเห็นจะถูกใส่ไว้ใน <body>",
      calloutTarget: "body",
      calloutText: "เนื้อหาทั้งหมดแสดงบนพื้นที่สีขาว (Viewport) สมบูรณ์แบบ!",
      code: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    <h1>ยินดีต้อนรับสู่เว็บไซต์ของเรา</h1>
  </body>
</html>`,
      highlightLines: [7, 8, 9],
      browserState: {
        tabTitle: "Document",
        tabIcon: "globe",
        modeBadge: "Standards Mode (HTML5) ✓",
        modeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
        langBadge: "HTML Root Active ✓",
        langColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
        charsetBadge: "UTF-8 Active ✨",
        charsetColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/40",
        headingText: "",
        headingStyle: "hidden",
        bodyContentHtml: `
          <div class="space-y-4">
            <h1 class="text-2xl sm:text-3xl font-bold text-slate-900 font-prompt">ยินดีต้อนรับสู่เว็บไซต์ของเรา</h1>
            <div class="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
              <i data-lucide="check-circle" class="w-4 h-4 text-emerald-400 shrink-0"></i>
              <span>โครงสร้าง HTML5 สมบูรณ์แบบตามมาตรฐานสากล!</span>
            </div>
          </div>
        `,
        arrowDirection: "body"
      }
    }
  ];

  let currentStep = 1;

  function init() {
    renderStepNav();
    renderCurrentStep();
    attachListeners();
  }

  const stepNavInfo = [
    { num: 1, title: "Plain Text", desc: "ข้อความดิบ" },
    { num: 2, title: "<!DOCTYPE>", desc: "ประกาศ HTML5" },
    { num: 3, title: "<html>", desc: "Root Element" },
    { num: 4, title: "<head>", desc: "ตั้งค่า UTF-8" },
    { num: 5, title: "<title>", desc: "ชื่อแท็บบนสุด" },
    { num: 6, title: "<body>", desc: "พื้นที่แสดงผล" }
  ];

  function renderStepNav() {
    const navContainer = document.getElementById('step-stepper-container');
    if (!navContainer) return;

    navContainer.innerHTML = steps.map((s, idx) => {
      const info = stepNavInfo[idx] || { num: s.step, title: s.targetTag, desc: `ขั้นตอนที่ ${s.step}` };
      const isActive = s.step === currentStep;
      const isDone = s.step < currentStep;

      let statusClass = "step-indicator-pending";
      let icon = `<span class="text-xs font-mono font-bold">${s.step}</span>`;

      if (isActive) {
        statusClass = "step-indicator-active";
        icon = `<span class="text-xs font-mono font-bold">${s.step}</span>`;
      } else if (isDone) {
        statusClass = "step-indicator-done";
        icon = `<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
      }

      return `
        <button 
          class="step-nav-btn w-full p-2.5 rounded-xl border transition-all text-left flex items-center gap-2 ${statusClass} cursor-pointer"
          data-step="${s.step}"
          title="ขั้นตอนที่ ${s.step}: ${escapeHtml(info.title)}"
        >
          <div class="w-6 h-6 rounded-lg flex items-center justify-center shrink-0">
            ${icon}
          </div>
          <div class="truncate min-w-0 flex-1">
            <div class="text-[10px] opacity-80 font-mono">ขั้นที่ ${s.step}: ${escapeHtml(info.desc)}</div>
            <div class="text-xs font-bold truncate font-mono">${escapeHtml(info.title)}</div>
          </div>
        </button>
      `;
    }).join('');

    if (window.lucide) lucide.createIcons();
  }

  function renderCurrentStep() {
    const s = steps[currentStep - 1];

    // Update Step Number & Title
    const stepNumberEl = document.getElementById('step-current-number');
    const stepTitleEl = document.getElementById('step-current-title');
    const stepBadgeEl = document.getElementById('step-current-badge');
    const stepExplanationEl = document.getElementById('step-current-explanation');
    const stepFocusEl = document.getElementById('step-current-focus');
    const stepPrevBtn = document.getElementById('step-prev-btn');
    const stepNextBtn = document.getElementById('step-next-btn');

    if (stepNumberEl) stepNumberEl.textContent = `ขั้นตอนที่ ${s.step} / ${steps.length}`;
    if (stepTitleEl) stepTitleEl.textContent = s.title;
    if (stepBadgeEl) {
      stepBadgeEl.textContent = s.badge;
      stepBadgeEl.className = `px-2.5 py-1 rounded-full text-xs font-sarabun border ${s.badgeColor}`;
    }
    if (stepExplanationEl) stepExplanationEl.textContent = s.explanation;
    if (stepFocusEl) stepFocusEl.innerHTML = `<i data-lucide="sparkles" class="w-4 h-4 text-amber-400 shrink-0"></i> <span>${s.focusPoint}</span>`;

    // Buttons disable/enable
    if (stepPrevBtn) {
      stepPrevBtn.disabled = currentStep === 1;
      stepPrevBtn.classList.toggle('opacity-40', currentStep === 1);
      stepPrevBtn.classList.toggle('cursor-not-allowed', currentStep === 1);
    }
    if (stepNextBtn) {
      if (currentStep === steps.length) {
        stepNextBtn.innerHTML = `<span>สำเร็จครบทุกขั้นตอน 🎉</span>`;
        stepNextBtn.classList.remove('bg-indigo-600', 'hover:bg-indigo-500');
        stepNextBtn.classList.add('bg-emerald-600', 'hover:bg-emerald-500');
      } else {
        stepNextBtn.innerHTML = `<span>ขั้นตอนถัดไป (${currentStep + 1})</span> <i data-lucide="arrow-right" class="w-4 h-4"></i>`;
        stepNextBtn.classList.add('bg-indigo-600', 'hover:bg-indigo-500');
        stepNextBtn.classList.remove('bg-emerald-600', 'hover:bg-emerald-500');
      }
    }

    // Render Code Block with highlighted lines
    renderCodeBlock(s);

    // Update Browser Mockup
    renderBrowserMockup(s);

    renderStepNav();
    if (window.lucide) lucide.createIcons();
  }

  function formatAttrs(attrs) {
    if (!attrs) return '';
    return attrs.replace(/\s+([a-zA-Z0-9_-]+)=(&quot;[^&]*&quot;|&#039;[^&]*&#039;|"[^"]*")/g, (m, attrName, attrVal) => {
      return ` <span style="color:#9cdcfe">${attrName}</span><span style="color:#808080">=</span><span style="color:#ce9178">${attrVal}</span>`;
    });
  }

  function formatVSCodeLine(rawLine) {
    // 1. Separate leading indentation
    const indentMatch = rawLine.match(/^(\s*)/);
    const leadingSpaces = indentMatch ? indentMatch[1] : '';
    const content = rawLine.slice(leadingSpaces.length);

    // Indent guides: each 2 spaces gets an indent guide
    let indentHtml = '';
    const numGuides = Math.floor(leadingSpaces.length / 2);
    for (let i = 0; i < numGuides; i++) {
      indentHtml += '<span style="display:inline-block;width:16px;border-left:1px solid #404040;height:16px;vertical-align:middle"></span>';
    }
    const remSpaces = leadingSpaces.length % 2;
    if (remSpaces > 0) {
      indentHtml += '&nbsp;'.repeat(remSpaces);
    }

    // 2. Tokenize content
    let html = escapeHtml(content);

    // Comments
    if (html.startsWith('&lt;!--')) {
      html = `<span style="color:#6a9955;font-style:italic">${html}</span>`;
      return indentHtml + html;
    }

    // DOCTYPE
    html = html.replace(/&lt;!DOCTYPE\s+html&gt;/gi, 
      '<span style="color:#808080">&lt;!</span><span style="color:#569cd6">DOCTYPE</span> <span style="color:#9cdcfe">html</span><span style="color:#808080">&gt;</span>');

    // Full tags with text: e.g. <title>Document</title> or <h1>...</h1>
    html = html.replace(/&lt;([a-zA-Z0-9]+)([^&]*)&gt;(.*?)&lt;\/([a-zA-Z0-9]+)&gt;/g, (m, tag1, attrs, innerText, tag2) => {
      const formattedAttrs = formatAttrs(attrs);
      return `<span style="color:#808080">&lt;</span><span style="color:#569cd6">${tag1}</span>${formattedAttrs}<span style="color:#808080">&gt;</span><span style="color:#d4d4d4">${innerText}</span><span style="color:#808080">&lt;/</span><span style="color:#569cd6">${tag2}</span><span style="color:#808080">&gt;</span>`;
    });

    // Self-closing or opening tags: e.g. <meta charset="UTF-8"> or <html lang="th">
    html = html.replace(/&lt;([a-zA-Z0-9]+)([^&]*)&gt;/g, (m, tag, attrs) => {
      const formattedAttrs = formatAttrs(attrs);
      return `<span style="color:#808080">&lt;</span><span style="color:#569cd6">${tag}</span>${formattedAttrs}<span style="color:#808080">&gt;</span>`;
    });

    // Closing tags: e.g. </html> or </head>
    html = html.replace(/&lt;\/([a-zA-Z0-9]+)&gt;/g, (m, tag) => {
      return `<span style="color:#808080">&lt;/</span><span style="color:#569cd6">${tag}</span><span style="color:#808080">&gt;</span>`;
    });

    // Plain text (no tags)
    if (!rawLine.includes('<') && !rawLine.includes('>')) {
      html = `<span style="color:#d4d4d4">${html}</span>`;
    }

    return indentHtml + html;
  }

  function renderCodeBlock(s) {
    const codeEl = document.getElementById('step-code-content');
    if (!codeEl) return;

    const lines = s.code.split('\n');
    const formattedHtml = lines.map((line, idx) => {
      const lineNum = idx + 1;
      const isHighlighted = s.highlightLines.includes(lineNum);

      const rowBg = isHighlighted 
        ? 'background:rgba(255,255,255,0.06);border-left:2px solid #007acc;' 
        : 'background:transparent;border-left:2px solid transparent;';
      const numColor = isHighlighted ? '#c6c6c6' : '#858585';

      return `<div style="display:flex;align-items:center;min-height:24px;padding:2px 0;${rowBg}">
        <span style="width:34px;text-align:right;padding-right:16px;color:${numColor};font-size:13px;font-family:Consolas,'Courier New','Fira Code',monospace;user-select:none;flex-shrink:0">${lineNum}</span>
        <span style="font-family:Consolas,'Courier New','Fira Code','Prompt','Sarabun',monospace;font-size:13.5px;line-height:22px;color:#d4d4d4;white-space:pre">${formatVSCodeLine(line)}</span>
      </div>`;
    }).join('');

    codeEl.innerHTML = formattedHtml;
  }

  function renderBrowserMockup(s) {
    const tabTitleEl = document.getElementById('step-mockup-tab-title');
    const tabIconEl = document.getElementById('step-mockup-tab-icon');
    const modeBadgeEl = document.getElementById('step-mockup-mode');
    const langBadgeEl = document.getElementById('step-mockup-lang');
    const charsetBadgeEl = document.getElementById('step-mockup-charset');
    const headingEl = document.getElementById('step-mockup-heading');
    const bodyContentEl = document.getElementById('step-mockup-body-content');
    const calloutOverlay = document.getElementById('step-callout-overlay');

    if (tabTitleEl) tabTitleEl.textContent = s.browserState.tabTitle;
    if (tabIconEl) {
      tabIconEl.setAttribute('data-lucide', s.browserState.tabIcon);
    }
    if (modeBadgeEl) {
      modeBadgeEl.textContent = s.browserState.modeBadge;
      modeBadgeEl.className = `px-2 py-0.5 rounded text-[11px] font-mono border ${s.browserState.modeColor}`;
    }
    if (langBadgeEl) {
      langBadgeEl.textContent = s.browserState.langBadge;
      langBadgeEl.className = `px-2 py-0.5 rounded text-[11px] font-mono border ${s.browserState.langColor}`;
    }
    if (charsetBadgeEl) {
      charsetBadgeEl.textContent = s.browserState.charsetBadge;
      charsetBadgeEl.className = `px-2 py-0.5 rounded text-[11px] font-mono border ${s.browserState.charsetColor}`;
    }
    if (headingEl) {
      headingEl.textContent = s.browserState.headingText;
      headingEl.className = s.browserState.headingStyle;
    }
    if (bodyContentEl) {
      bodyContentEl.innerHTML = s.browserState.bodyContentHtml;
    }

    // Callout Box & Arrow
    if (calloutOverlay) {
      let calloutHtml = `
        <div style="padding:10px 14px;border-radius:12px;background:#312e81;border:2px solid #6366f1;color:#ffffff;box-shadow:0 8px 24px rgba(99,102,241,0.4);display:inline-flex;align-items:center;gap:10px" class="float-badge">
          <div style="width:32px;height:32px;border-radius:8px;background:#4f46e5;display:flex;align-items:center;justify-content:center;flex-shrink:0">
            <i data-lucide="pointer" style="width:16px;height:16px;color:#ffffff"></i>
          </div>
          <div style="font-size:12px;font-family:Sarabun,sans-serif;line-height:1.5;font-weight:600;color:#e0e7ff">
            ${s.calloutText}
          </div>
        </div>
      `;
      calloutOverlay.innerHTML = calloutHtml;
    }

    // Animate target pulse
    const tabEl = document.getElementById('step-mockup-tab-container');
    const canvasEl = document.getElementById('step-mockup-canvas');
    if (tabEl) tabEl.classList.remove('pulse-target');
    if (canvasEl) canvasEl.classList.remove('pulse-target');

    if (s.calloutTarget === 'tab' && tabEl) {
      tabEl.classList.add('pulse-target');
    } else if (s.calloutTarget === 'body' && canvasEl) {
      canvasEl.classList.add('pulse-target');
    }
  }

  function attachListeners() {
    const prevBtn = document.getElementById('step-prev-btn');
    const nextBtn = document.getElementById('step-next-btn');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentStep > 1) {
          currentStep--;
          renderCurrentStep();
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (currentStep < steps.length) {
          currentStep++;
          renderCurrentStep();
        } else {
          // Scroll to simulator lab
          const lab = document.getElementById('lab');
          if (lab) lab.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // Delegate step nav clicks
    const navContainer = document.getElementById('step-stepper-container');
    if (navContainer) {
      navContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.step-nav-btn');
        if (btn) {
          const stepNum = parseInt(btn.dataset.step);
          if (stepNum && stepNum >= 1 && stepNum <= steps.length) {
            currentStep = stepNum;
            renderCurrentStep();
          }
        }
      });
    }
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  return {
    init,
    goToStep: (num) => {
      if (num >= 1 && num <= steps.length) {
        currentStep = num;
        renderCurrentStep();
      }
    }
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  StepGuide.init();
});
