/**
 * HTML System Tags Simulator
 * Manages the state of tags (doctype, html, head, title, charset)
 * and updates the Browser Preview Mockup in real-time.
 */

const Simulator = (() => {
  // State for the 5 tags (true = included, false = missing)
  const state = {
    doctype: true,
    html: true,
    head: true,
    title: true,
    charset: true
  };

  // Preset scenarios
  const presets = {
    all_correct: { doctype: true, html: true, head: true, title: true, charset: true },
    no_charset: { doctype: true, html: true, head: true, title: true, charset: false },
    no_doctype: { doctype: false, html: true, head: true, title: true, charset: true },
    no_title: { doctype: true, html: true, head: true, title: false, charset: true },
    bare_minimum_broken: { doctype: false, html: false, head: false, title: false, charset: false }
  };

  // Mojibake text mappings (simulating UTF-8 bytes read as Windows-1252 / ISO-8859-1 / MacThai)
  const mojibakeSamples = {
    title: "Document (เธชเธฐเธ เธ”เธœเธดเธ”เธฃเธซเธฑเธช)",
    heading: "เธขเธดเธเธ”เธตเธ•เนเธญเธเธฃเธฑเธ (ภาษาต่างดาว)",
    subheading: "",
    paragraph: "",
    btnText: ""
  };

  const normalSamples = {
    title: "Document",
    heading: "ยินดีต้อนรับสู่เว็บไซต์ของเรา",
    subheading: "",
    paragraph: "",
    btnText: ""
  };

  function init() {
    // Attach listeners to switches
    const toggles = document.querySelectorAll('.tag-toggle-input');
    toggles.forEach(toggle => {
      toggle.addEventListener('change', (e) => {
        const tag = e.target.dataset.tag;
        state[tag] = e.target.checked;
        updateUI();
      });
    });

    // Preset buttons
    document.querySelectorAll('[data-preset]').forEach(btn => {
      btn.addEventListener('click', () => {
        const presetName = btn.dataset.preset;
        if (presets[presetName]) {
          applyPreset(presets[presetName]);
        }
      });
    });

    updateUI();
  }

  function applyPreset(presetState) {
    Object.keys(presetState).forEach(tag => {
      state[tag] = presetState[tag];
      const toggle = document.querySelector(`.tag-toggle-input[data-tag="${tag}"]`);
      if (toggle) toggle.checked = presetState[tag];
    });
    updateUI();
  }

  function updateUI() {
    updateToggleBadges();
    updateBrowserTab();
    updateBrowserContent();
    updateCodeSnippet();
    updateStatusSummary();
    updateQuirksVisualizer();
  }

  function updateToggleBadges() {
    const tags = ['doctype', 'html', 'head', 'title', 'charset'];
    tags.forEach(tag => {
      const badge = document.getElementById(`badge-toggle-${tag}`);
      if (!badge) return;
      if (state[tag]) {
        badge.className = "tag-status-badge tag-status-badge-active inline-flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-0.5 rounded-full shadow-sm";
        badge.innerHTML = '<svg class="w-3 h-3 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> เปิดใช้งาน';
      } else {
        badge.className = "tag-status-badge tag-status-badge-inactive inline-flex items-center gap-1 text-[10px] font-mono font-bold text-rose-400 bg-rose-950/80 border border-rose-500/40 px-2.5 py-0.5 rounded-full shadow-sm";
        badge.innerHTML = '<svg class="w-3 h-3 text-rose-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> ปิดใช้งาน';
      }
    });
  }

  function updateBrowserTab() {
    const tabTitleEl = document.getElementById('mockup-tab-title');
    const tabIconEl = document.getElementById('mockup-tab-icon');
    const addressBarTitleEl = document.getElementById('mockup-address-url');

    if (!tabTitleEl) return;

    if (state.title) {
      if (state.charset) {
        tabTitleEl.textContent = "Document";
      } else {
        tabTitleEl.textContent = mojibakeSamples.title;
      }
      tabIconEl.className = "w-3.5 h-3.5 text-indigo-400";
    } else {
      // Without <title> tag: browser shows filename or IP/URL
      tabTitleEl.textContent = "index.html (Untitled)";
      tabIconEl.className = "w-3.5 h-3.5 text-slate-500";
    }

    if (addressBarTitleEl) {
      addressBarTitleEl.textContent = "http://127.0.0.1:5500/index.html";
    }
  }

  function updateBrowserContent() {
    const headingEl = document.getElementById('mockup-content-heading');
    const subheadingEl = document.getElementById('mockup-content-subheading');
    const paragraphEl = document.getElementById('mockup-content-paragraph');
    const btnEl = document.getElementById('mockup-content-btn');
    const viewportContainer = document.getElementById('mockup-viewport');
    const langBadgeEl = document.getElementById('mockup-lang-badge');
    const quirksBannerEl = document.getElementById('mockup-quirks-banner');
    const charsetBannerEl = document.getElementById('mockup-charset-banner');
    const headBannerEl = document.getElementById('mockup-head-banner');

    if (!headingEl) return;

    // 1. Handle Charset (UTF-8 vs Mojibake)
    if (state.charset) {
      headingEl.textContent = normalSamples.heading;
      subheadingEl.textContent = normalSamples.subheading;
      paragraphEl.textContent = normalSamples.paragraph;
      btnEl.textContent = normalSamples.btnText;
      if (charsetBannerEl) charsetBannerEl.classList.add('hidden');
    } else {
      headingEl.textContent = mojibakeSamples.heading;
      subheadingEl.textContent = mojibakeSamples.subheading;
      paragraphEl.textContent = mojibakeSamples.paragraph;
      btnEl.textContent = mojibakeSamples.btnText;
      if (charsetBannerEl) charsetBannerEl.classList.remove('hidden');
      headingEl.classList.add('mojibake-glitch');
      setTimeout(() => headingEl.classList.remove('mojibake-glitch'), 400);
    }

    // 2. Handle DOCTYPE (Standards Mode vs Quirks Mode)
    const boxModelSample = document.getElementById('mockup-box-sample');
    if (!state.doctype) {
      if (viewportContainer) viewportContainer.classList.add('quirks-active');
      if (quirksBannerEl) quirksBannerEl.classList.remove('hidden');
      if (boxModelSample) {
        boxModelSample.classList.add('border-dashed', 'opacity-80');
        boxModelSample.style.width = '140px'; // Simulating box model difference
      }
    } else {
      if (viewportContainer) viewportContainer.classList.remove('quirks-active');
      if (quirksBannerEl) quirksBannerEl.classList.add('hidden');
      if (boxModelSample) {
        boxModelSample.classList.remove('border-dashed', 'opacity-80');
        boxModelSample.style.width = '200px';
      }
    }

    // 3. Handle <html> and lang attribute
    if (langBadgeEl) {
      if (state.html) {
        langBadgeEl.innerHTML = '<span style="display:inline-flex;align-items:center;gap:6px;background:#dcfce7;color:#14532d;border:1.5px solid #86efac;padding:4px 10px;border-radius:8px;font-size:11px;font-family:monospace;font-weight:600"><svg style="width:14px;height:14px;color:#16a34a;flex-shrink:0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> &lt;html&gt; ใช้งานอยู่ (Root Element)</span>';
      } else {
        langBadgeEl.innerHTML = '<span style="display:inline-flex;align-items:center;gap:6px;background:#fef3c7;color:#92400e;border:1.5px solid #fcd34d;padding:4px 10px;border-radius:8px;font-size:11px;font-family:monospace;font-weight:600"><svg style="width:14px;height:14px;color:#d97706;flex-shrink:0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> ขาด &lt;html&gt; (ไม่มี Root Element)</span>';
      }
    }

    // 4. Handle <head>
    if (headBannerEl) {
      if (!state.head) {
        headBannerEl.classList.remove('hidden');
      } else {
        headBannerEl.classList.add('hidden');
      }
    }
  }

  function updateCodeSnippet() {
    const codeSnippetEl = document.getElementById('simulator-generated-code');
    if (!codeSnippetEl) return;

    let lines = [];

    if (state.doctype) {
      lines.push('<span class="code-token-punct">&lt;!</span><span class="code-token-tag">DOCTYPE</span> <span class="code-token-attr">html</span><span class="code-token-punct">&gt;</span>');
    } else {
      lines.push('<span class="code-token-comment">&lt;!-- ⚠️ ขาด &lt;!DOCTYPE html&gt; (ทำให้เบราว์เซอร์เข้า Quirks Mode) --&gt;</span>');
    }

    if (state.html) {
      lines.push('<span class="code-token-punct">&lt;</span><span class="code-token-tag">html</span><span class="code-token-punct">&gt;</span>');
    } else {
      lines.push('<span class="code-token-comment">&lt;!-- ⚠️ ขาด &lt;html&gt; --&gt;</span>');
    }

    if (state.head) {
      lines.push('  <span class="code-token-punct">&lt;</span><span class="code-token-tag">head</span><span class="code-token-punct">&gt;</span>');
      if (state.charset) {
        lines.push('    <span class="code-token-punct">&lt;</span><span class="code-token-tag">meta</span> <span class="code-token-attr">charset</span>=<span class="code-token-val">"UTF-8"</span><span class="code-token-punct">&gt;</span>');
      } else {
        lines.push('    <span class="code-token-comment">&lt;!-- ⚠️ ขาด &lt;meta charset="UTF-8"&gt; --&gt;</span>');
      }

      if (state.title) {
        lines.push('    <span class="code-token-punct">&lt;</span><span class="code-token-tag">title</span><span class="code-token-punct">&gt;</span>Document<span class="code-token-punct">&lt;/</span><span class="code-token-tag">title</span><span class="code-token-punct">&gt;</span>');
      } else {
        lines.push('    <span class="code-token-comment">&lt;!-- ⚠️ ขาด &lt;title&gt; (ชื่อแท็บจะแสดงเป็นชื่อไฟล์) --&gt;</span>');
      }
      lines.push('  <span class="code-token-punct">&lt;/</span><span class="code-token-tag">head</span><span class="code-token-punct">&gt;</span>');
    } else {
      lines.push('  <span class="code-token-comment">&lt;!-- ⚠️ ขาดแท็ก &lt;head&gt; --&gt;</span>');
      if (state.charset) lines.push('  <span class="code-token-punct">&lt;</span><span class="code-token-tag">meta</span> <span class="code-token-attr">charset</span>=<span class="code-token-val">"UTF-8"</span><span class="code-token-punct">&gt;</span>');
      if (state.title) lines.push('  <span class="code-token-punct">&lt;</span><span class="code-token-tag">title</span><span class="code-token-punct">&gt;</span>Document<span class="code-token-punct">&lt;/</span><span class="code-token-tag">title</span><span class="code-token-punct">&gt;</span>');
    }

    lines.push('  <span class="code-token-punct">&lt;</span><span class="code-token-tag">body</span><span class="code-token-punct">&gt;</span>');
    lines.push('    <span class="code-token-punct">&lt;</span><span class="code-token-tag">h1</span><span class="code-token-punct">&gt;</span>' + (state.charset ? 'ยินดีต้อนรับสู่เว็บไซต์ของเรา' : mojibakeSamples.heading) + '<span class="code-token-punct">&lt;/</span><span class="code-token-tag">h1</span><span class="code-token-punct">&gt;</span>');
    lines.push('  <span class="code-token-punct">&lt;/</span><span class="code-token-tag">body</span><span class="code-token-punct">&gt;</span>');

    if (state.html) {
      lines.push('<span class="code-token-punct">&lt;/</span><span class="code-token-tag">html</span><span class="code-token-punct">&gt;</span>');
    }

    codeSnippetEl.innerHTML = lines.join('\n');
  }

  function updateStatusSummary() {
    const summaryContainer = document.getElementById('simulator-impact-summary');
    if (!summaryContainer) return;

    const issues = [];
    const goods = [];

    if (!state.doctype) {
      issues.push({ tag: '&lt;!DOCTYPE html&gt;', text: 'เข้าสู่ Quirks Mode: เบราว์เซอร์ลดระดับไปแสดงผลตามมาตรฐานเก่า (Legacy Mode) ทำให้การเรนเดอร์เอกสารและฟอนต์อาจเพี้ยน' });
    } else {
      goods.push({ tag: '&lt;!DOCTYPE html&gt;', text: 'Standards Mode (HTML5): ทำงานตามมาตรฐานเว็บยุคใหม่ 100%' });
    }

    if (!state.charset) {
      issues.push({ tag: '&lt;meta charset="UTF-8"&gt;', text: 'ข้อความภาษาไทยอาจกลายเป็นภาษาต่างดาว (Mojibake) เช่น เธชเธงเธฑเธชเธ”เธต' });
    } else {
      goods.push({ tag: '&lt;meta charset="UTF-8"&gt;', text: 'ถอดรหัสตัวอักษร UTF-8 ถูกต้อง รองรับภาษาไทย สระ วรรณยุกต์ และ Emoji' });
    }

    if (!state.title) {
      issues.push({ tag: '&lt;title&gt;', text: 'แท็บเบราว์เซอร์แสดงเป็นชื่อไฟล์ index.html และ Google Search ไม่สามารถดึงชื่อบทความได้' });
    } else {
      goods.push({ tag: '&lt;title&gt;', text: 'มีชื่อเว็บชัดเจนบนแท็บ บันทึก Bookmark สวยงาม และช่วยอันดับ SEO ใน Google' });
    }

    if (!state.html) {
      issues.push({ tag: '&lt;html&gt;', text: 'ขาดการระบุภาษาหลัก (เช่น lang="th") ทำให้ Screen Reader ออกเสียงเพี้ยน และส่งผลต่อ Accessibility' });
    } else {
      goods.push({ tag: '&lt;html&gt;', text: 'มี Root Element ถูกต้อง มีการระบุ lang="th" ชัดเจน' });
    }

    if (!state.head) {
      issues.push({ tag: '&lt;head&gt;', text: 'ไม่มีที่เก็บ Metadata และข้อมูลการตั้งค่าเอกสาร ทำให้โครงสร้าง HTML ผิดหลักมาตรฐานสากล' });
    } else {
      goods.push({ tag: '&lt;head&gt;', text: 'มีส่วนหัวเอกสารที่แยกเก็บ Metadata ก่อนเรนเดอร์เนื้อหาใน body อย่างเป็นระเบียบ' });
    }

    let html = '';
    if (issues.length > 0) {
      html += `
        <div style="padding:14px 16px;border-radius:12px;background:#fff1f2;border:1.5px solid #fca5a5;margin-bottom:12px">
          <h4 style="color:#991b1b;font-weight:700;display:flex;align-items:center;gap:8px;margin-bottom:8px;font-size:13px">
            <i data-lucide="alert-octagon" style="width:16px;height:16px"></i> ผลกระทบที่พบ (${issues.length} ปัญหา):
          </h4>
          <ul style="margin:0;padding-left:0;list-style:none;font-family:Sarabun,sans-serif;font-size:12px;color:#7f1d1d;display:flex;flex-direction:column;gap:6px">
            ${issues.map(item => `<li><span style="font-family:monospace;font-weight:700;color:#b91c1c">${item.tag}</span>: ${item.text}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    if (goods.length > 0) {
      html += `
        <div style="padding:14px 16px;border-radius:12px;background:#f0fdf4;border:1.5px solid #86efac">
          <h4 style="color:#166534;font-weight:700;display:flex;align-items:center;gap:8px;margin-bottom:8px;font-size:13px">
            <i data-lucide="shield-check" style="width:16px;height:16px;color:#16a34a"></i> จุดที่ทำงานถูกต้อง (${goods.length} รายการ):
          </h4>
          <ul style="margin:0;padding-left:0;list-style:none;font-family:Sarabun,sans-serif;font-size:12px;color:#14532d;display:flex;flex-direction:column;gap:6px">
            ${goods.map(item => `<li><span style="font-family:monospace;font-weight:700;color:#15803d">${item.tag}</span>: ${item.text}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    summaryContainer.innerHTML = html;
    if (window.lucide) lucide.createIcons();
  }

  function updateQuirksVisualizer() {
    const boxStandards = document.getElementById('quirks-box-standards');
    const boxQuirks = document.getElementById('quirks-box-quirks');
    if (!boxStandards || !boxQuirks) return;

    // Both boxes have width: 200px, padding: 20px, border: 5px
    // Standards (content-box): total width = 200 + 40 + 10 = 250px
    // Quirks (IE box model): total width = 200px (content is 200 - 40 - 10 = 150px)
  }

  return {
    init,
    state,
    applyPreset
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  Simulator.init();
});
