/**
 * Gamified Classroom Exercise (4.2 แบบฝึกหัดในชั้นเรียน)
 * 6 แท็กโครงสร้างหลัก HTML5: ตรวจคำตอบเฉลยทันทีรายข้อ + สุ่มสลับตัวเลือก
 */

const ClassroomExercise = (() => {
  const items = [
    {
      id: "doctype",
      tag: "<!DOCTYPE html>",
      tagDisplay: `<span style="color:#808080">&lt;!</span><span style="color:#569cd6;font-weight:bold">DOCTYPE</span> <span style="color:#9cdcfe">html</span><span style="color:#808080">&gt;</span>`,
      category: "system",
      correctMeaning: "doctype",
      meaningText: "กำหนดมาตรฐาน HTML5 / ไม่แสดงผลบนหน้าเว็บ",
      explanation: "คำสั่งประกาศชนิดเอกสาร HTML5 ต้องอยู่บรรทัดแรกสุดเสมอ เพื่อสั่งให้เบราว์เซอร์เปิด Standards Mode ไม่แสดงผลบนหน้าจอ",
      hint: "คำสั่งเริ่มต้นบรรทัดแรกสุด เพื่อประกาศมาตรฐานเว็บ HTML5"
    },
    {
      id: "html",
      tag: "<html>",
      tagDisplay: `<span style="color:#808080">&lt;</span><span style="color:#569cd6;font-weight:bold">html</span><span style="color:#808080">&gt;</span>`,
      category: "system",
      correctMeaning: "html",
      meaningText: "ครอบคลุมโครงสร้างของเว็บเพจทั้งหมด (Root Element)",
      explanation: "แท็กรากสูงสุด (Root Element) ที่ทำหน้าที่โอบอุ้มและครอบคลุมทุกองค์ประกอบในเอกสาร HTML ทั้งหมด",
      hint: "แท็กแม่บทสูงสุดที่ครอบทุกแท็กในหน้าเว็บ"
    },
    {
      id: "head",
      tag: "<head>",
      tagDisplay: `<span style="color:#808080">&lt;</span><span style="color:#569cd6;font-weight:bold">head</span><span style="color:#808080">&gt;</span>`,
      category: "system",
      correctMeaning: "head",
      meaningText: "กำหนดข้อมูลและการตั้งค่าของเอกสาร (Metadata)",
      explanation: "ส่วนหัวของเอกสารสำหรับเก็บการตั้งค่าระบบ, ข้อมูลกำกับเอกสาร (Metadata) และการเชื่อมโยงไฟล์ภายนอก",
      hint: "ส่วนหัวเอกสารที่เก็บการตั้งค่าเบื้องหลัง"
    },
    {
      id: "title",
      tag: "<title>",
      tagDisplay: `<span style="color:#808080">&lt;</span><span style="color:#569cd6;font-weight:bold">title</span><span style="color:#808080">&gt;</span>`,
      category: "system",
      correctMeaning: "title",
      meaningText: "แสดงชื่อบนแท็บของเว็บเบราว์เซอร์ (Tab Bar)",
      explanation: "กำหนดชื่อเรื่องของเว็บเพจที่จะไปปรากฏบนแท็บบนสุดของเว็บเบราว์เซอร์ และเป็นหัวข้อในผลการค้นหาของ Google",
      hint: "ข้อความบนแถบแท็บด้านบนสุดของเว็บเบราว์เซอร์"
    },
    {
      id: "charset",
      tag: '<meta charset="UTF-8">',
      tagDisplay: `<span style="color:#808080">&lt;</span><span style="color:#569cd6;font-weight:bold">meta</span> <span style="color:#9cdcfe">charset</span><span style="color:#808080">=</span><span style="color:#ce9178">"UTF-8"</span><span style="color:#808080">&gt;</span>`,
      category: "system",
      correctMeaning: "charset",
      meaningText: "กำหนดรหัสภาษา UTF-8 ป้องกันภาษาต่างดาว / ไม่แสดงผลบนหน้าเว็บ",
      explanation: "กำหนดการถอดรหัสตัวอักษรสากล UTF-8 เพื่อให้อ่านภาษาไทยและ Emoji ได้ถูกต้อง 100% ป้องกันปัญหาภาษาต่างดาว",
      hint: "กุญแจสำคัญในการปลดล็อคการอ่านภาษาไทยให้ถูกต้อง"
    },
    {
      id: "body",
      tag: "<body>",
      tagDisplay: `<span style="color:#808080">&lt;</span><span style="color:#569cd6;font-weight:bold">body</span><span style="color:#808080">&gt;</span>`,
      category: "display",
      correctMeaning: "body",
      meaningText: "เป็นส่วนที่แสดงเนื้อหาบนหน้าเว็บ (พื้นที่สีขาว)",
      explanation: "พื้นที่แสดงผลหลัก (Viewport) ที่บรรจุเนื้อหาทั้งหมดที่ผู้ใช้มองเห็นและมีปฏิสัมพันธ์ได้บนหน้าจอ",
      hint: "ผืนผ้าใบสีขาวสำหรับแสดงผลเนื้อหาทั้งหมด"
    }
  ];

  // Base 6 Meaning Options (Will be shuffled dynamically)
  const baseMeaningOptions = [
    { value: "doctype", text: "กำหนดมาตรฐาน HTML5 / ไม่แสดงผลบนหน้าเว็บ", icon: "file-code-2" },
    { value: "html",    text: "ครอบคลุมโครงสร้างของเว็บเพจทั้งหมด (Root Element)", icon: "box" },
    { value: "head",    text: "กำหนดข้อมูลและการตั้งค่าของเอกสาร (Metadata)", icon: "settings-2" },
    { value: "title",   text: "แสดงชื่อบนแท็บของเว็บเบราว์เซอร์ (Tab Bar)", icon: "app-window" },
    { value: "charset", text: "กำหนดรหัสภาษา UTF-8 ป้องกันภาษาต่างดาว", icon: "languages" },
    { value: "body",    text: "เป็นส่วนที่แสดงเนื้อหาบนหน้าเว็บ (พื้นที่สีขาว)", icon: "layout-template" }
  ];

  // Game state per item: { [id]: { category: '', meaning: '', checked: false, isCorrect: false } }
  let itemStates = {};
  let currentMeaningOptions = [];
  let currentPage = 0;
  let showSummary = false;
  let soundEnabled = true;

  function shuffleMeaningOptions() {
    const shuffled = [...baseMeaningOptions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    // Ensure the 1st option is not always the 1st question for anti-order bias
    if (shuffled[0].value === 'doctype' && shuffled.length > 1) {
      const swapIdx = Math.floor(Math.random() * (shuffled.length - 1)) + 1;
      [shuffled[0], shuffled[swapIdx]] = [shuffled[swapIdx], shuffled[0]];
    }
    return shuffled;
  }

  // Web Audio Synthesizer for Interactive Sound Effects
  const AudioEffects = (() => {
    let ctx = null;
    function getContext() {
      if (!ctx && (window.AudioContext || window.webkitAudioContext)) {
        ctx = new (window.AudioContext || window.webkitAudioContext)();
      }
      return ctx;
    }

    function playTone(freq, type, duration, gainVal = 0.08) {
      if (!soundEnabled) return;
      try {
        const audioCtx = getContext();
        if (!audioCtx) return;
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
      } catch (e) {}
    }

    return {
      select() { playTone(587.33, 'sine', 0.08, 0.06); },
      step() { playTone(659.25, 'triangle', 0.1, 0.08); },
      correct() {
        playTone(523.25, 'sine', 0.1, 0.08);
        setTimeout(() => playTone(659.25, 'sine', 0.15, 0.08), 80);
        setTimeout(() => playTone(783.99, 'sine', 0.25, 0.1), 160);
      },
      wrong() {
        playTone(349.23, 'sawtooth', 0.15, 0.06);
        setTimeout(() => playTone(293.66, 'sawtooth', 0.25, 0.06), 100);
      },
      victory() {
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((f, i) => {
          setTimeout(() => playTone(f, 'sine', 0.3, 0.12), i * 120);
        });
      }
    };
  })();

  // ─── Simple Confetti Burst ─────────────────────────────────
  function launchConfetti() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '99999';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#6366f1', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6'];
    const particles = [];
    for (let i = 0; i < 90; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.7) * 16,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 10,
        opacity: 1
      });
    }

    let start = null;
    function animate(t) {
      if (!start) start = t;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.3;
        p.rotation += p.vr;
        p.opacity -= 0.012;
        if (p.opacity > 0) {
          alive = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(0, p.opacity);
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        }
      });
      if (alive) {
        requestAnimationFrame(animate);
      } else {
        canvas.remove();
      }
    }
    requestAnimationFrame(animate);
  }

  // ─── Init & Reset ──────────────────────────────────────────
  function init() {
    resetState();
    renderUI();
  }

  function resetState() {
    itemStates = {};
    items.forEach(item => {
      itemStates[item.id] = { category: '', meaning: '', checked: false, isCorrect: false };
    });
    currentMeaningOptions = shuffleMeaningOptions();
    currentPage = 0;
    showSummary = false;
  }

  // ─── Render Engine ─────────────────────────────────────────
  function renderUI() {
    const container = document.getElementById('quiz-container');
    if (!container) return;

    if (showSummary) {
      container.innerHTML = buildSummaryHTML();
    } else {
      container.innerHTML = buildQuestionHTML();
    }

    attachEventListeners();
    if (window.lucide) lucide.createIcons();
  }

  function buildQuestionHTML() {
    const item = items[currentPage];
    const state = itemStates[item.id] || { category: '', meaning: '', checked: false, isCorrect: false };
    const isLast = currentPage === items.length - 1;

    // Count checked questions & score
    let checkedCount = 0;
    let score = 0;
    items.forEach(it => {
      const s = itemStates[it.id] || {};
      if (s.checked) {
        checkedCount++;
        if (s.isCorrect) score++;
      }
    });

    const progressPct = Math.round((checkedCount / items.length) * 100);
    const isAnswerComplete = Boolean(state.category && state.meaning);

    // ── Navigation Level Dots ────────────────────────────────
    const dotsHtml = items.map((it, idx) => {
      const s = itemStates[it.id] || {};
      const isCur = idx === currentPage;

      let dotBg = '#ffffff';
      let dotBorder = '#cbd5e1';
      let textColor = '#64748b';
      let iconOrNum = `${idx + 1}`;

      if (s.checked) {
        if (s.isCorrect) {
          dotBg = '#dcfce7';
          dotBorder = '#86efac';
          textColor = '#15803d';
          iconOrNum = `<i data-lucide="check" style="width:14px;height:14px"></i>`;
        } else {
          dotBg = '#fee2e2';
          dotBorder = '#fca5a5';
          textColor = '#b91c1c';
          iconOrNum = `<i data-lucide="x" style="width:14px;height:14px"></i>`;
        }
      } else if (isCur) {
        dotBg = '#4f46e5';
        dotBorder = '#4338ca';
        textColor = '#ffffff';
      }

      return `
        <button 
          data-dot="${idx}"
          class="cursor-pointer transition-all flex items-center justify-center font-mono font-bold text-xs rounded-xl"
          style="width:36px;height:36px;background:${dotBg};border:2px solid ${dotBorder};color:${textColor};transform:${isCur ? 'scale(1.1)' : 'scale(1)'};box-shadow:${isCur ? '0 4px 12px rgba(79,70,229,0.3)' : 'none'}"
          title="ข้อที่ ${idx + 1}: ${escapeHtml(it.tag)}"
        >
          ${iconOrNum}
        </button>
      `;
    }).join('');

    // ── Category Option Cards ─────────────────────────────────
    const isSystemSelected = state.category === 'system';
    const isDisplaySelected = state.category === 'display';

    let systemCardBorder = isSystemSelected ? '2px solid #7c3aed' : '2px solid #e2e8f0';
    let systemCardBg = isSystemSelected ? '#f5f3ff' : '#ffffff';
    let displayCardBorder = isDisplaySelected ? '2px solid #e11d48' : '2px solid #e2e8f0';
    let displayCardBg = isDisplaySelected ? '#fff1f2' : '#ffffff';

    // Highlight correct / wrong borders after check
    if (state.checked) {
      if (item.category === 'system') {
        systemCardBorder = '2px solid #16a34a';
        systemCardBg = '#f0fdf4';
      } else {
        displayCardBorder = '2px solid #16a34a';
        displayCardBg = '#f0fdf4';
      }
      if (!state.isCorrect) {
        if (state.category === 'system' && item.category !== 'system') {
          systemCardBorder = '2px solid #dc2626';
          systemCardBg = '#fef2f2';
        }
        if (state.category === 'display' && item.category !== 'display') {
          displayCardBorder = '2px solid #dc2626';
          displayCardBg = '#fef2f2';
        }
      }
    }

    // ── Shuffled Meaning Grid Option Cards ────────────────────
    const meaningOptionsHtml = currentMeaningOptions.map((opt, optIdx) => {
      const isSelected = state.meaning === opt.value;
      const isThisCorrect = opt.value === item.correctMeaning;

      let cardBg = '#ffffff';
      let borderStyle = '2px solid #e2e8f0';
      let textColor = '#1e293b';
      let badgeBg = '#f1f5f9';
      let badgeColor = '#475569';
      let rightBadge = '';

      if (state.checked) {
        if (isThisCorrect) {
          cardBg = '#f0fdf4';
          borderStyle = '2px solid #22c55e';
          textColor = '#14532d';
          badgeBg = '#22c55e';
          badgeColor = '#ffffff';
          rightBadge = '<span style="font-size:11px;font-weight:700;color:#16a34a;background:#dcfce7;padding:2px 8px;border-radius:6px;border:1px solid #86efac">✓ คำตอบที่ถูกต้อง</span>';
        } else if (isSelected && !isThisCorrect) {
          cardBg = '#fef2f2';
          borderStyle = '2px solid #ef4444';
          textColor = '#991b1b';
          badgeBg = '#ef4444';
          badgeColor = '#ffffff';
          rightBadge = '<span style="font-size:11px;font-weight:700;color:#dc2626;background:#fee2e2;padding:2px 8px;border-radius:6px;border:1px solid #fca5a5">✕ คุณเลือกข้อนี้</span>';
        }
      } else if (isSelected) {
        cardBg = '#eef2ff';
        borderStyle = '2px solid #4f46e5';
        textColor = '#312e81';
        badgeBg = '#4f46e5';
        badgeColor = '#ffffff';
        rightBadge = '<i data-lucide="check-circle-2" style="width:18px;height:18px;color:#4f46e5;flex-shrink:0"></i>';
      }

      return `
        <button
          type="button"
          data-meaning-val="${opt.value}"
          class="meaning-choice-card cursor-pointer text-left transition-all p-3.5 rounded-2xl flex items-start gap-3 relative"
          style="background:${cardBg};border:${borderStyle};box-shadow:${isSelected ? '0 4px 14px rgba(79,70,229,0.15)' : 'none'}"
          ${state.checked ? 'disabled style="cursor:default;opacity:1"' : ''}
        >
          <span style="width:26px;height:26px;border-radius:8px;background:${badgeBg};color:${badgeColor};display:flex;align-items:center;justify-content:center;font-size:11px;font-family:monospace;font-weight:800;flex-shrink:0">
            ${optIdx + 1}
          </span>
          <div style="flex:1;min-width:0">
            <span style="font-size:12.5px;font-weight:${isSelected ? '700' : '500'};color:${textColor};line-height:1.45;font-family:Sarabun,sans-serif;display:block">
              ${opt.text}
            </span>
          </div>
          ${rightBadge}
        </button>
      `;
    }).join('');

    // ── Instant Explanation Card (After Checked) ─────────────
    let instantFeedbackHtml = '';
    if (state.checked) {
      if (state.isCorrect) {
        instantFeedbackHtml = `
          <div style="background:#f0fdf4;border:2px solid #86efac;border-radius:18px;padding:18px 22px;margin-top:24px;display:flex;align-items:flex-start;gap:14px;animation:fade-in 0.3s ease">
            <div style="width:40px;height:40px;border-radius:12px;background:#22c55e;color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 4px 12px rgba(34,197,94,0.3)">
              <i data-lucide="check" style="width:22px;height:22px"></i>
            </div>
            <div>
              <div style="font-weight:800;color:#15803d;font-size:15px;display:flex;align-items:center;gap:8px">
                <span>เฉลย: ตอบถูกต้องสมบูรณ์แบบ! (+1 คะแนน) 🎉</span>
              </div>
              <div style="color:#166534;font-size:13px;margin-top:6px;line-height:1.55;font-family:Sarabun,sans-serif">
                ${item.explanation}
              </div>
            </div>
          </div>
        `;
      } else {
        const expectedCategoryName = item.category === 'system' ? '⚙️ Tag ควบคุมและจัดการระบบพื้นฐาน' : '🖥️ Tag แสดงผลเนื้อหา';
        instantFeedbackHtml = `
          <div style="background:#fff1f2;border:2px solid #fca5a5;border-radius:18px;padding:18px 22px;margin-top:24px;display:flex;align-items:flex-start;gap:14px;animation:fade-in 0.3s ease">
            <div style="width:40px;height:40px;border-radius:12px;background:#ef4444;color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 4px 12px rgba(239,68,68,0.3)">
              <i data-lucide="x" style="width:22px;height:22px"></i>
            </div>
            <div>
              <div style="font-weight:800;color:#b91c1c;font-size:15px">
                เฉลยข้อนี้: ยังไม่ถูกต้องนะ มาดูคำตอบที่ถูกต้องกัน 👇
              </div>
              <div style="margin-top:8px;font-size:13px;color:#7f1d1d;font-family:Sarabun,sans-serif;line-height:1.6">
                <div><strong>1. กลุ่มที่ถูกต้อง:</strong> <span style="color:#991b1b;font-weight:700">${expectedCategoryName}</span></div>
                <div><strong>2. หน้าที่ที่ถูกต้อง:</strong> <span style="color:#991b1b;font-weight:700">${item.meaningText}</span></div>
              </div>
              <div style="margin-top:8px;font-size:12.5px;color:#991b1b;line-height:1.55;font-family:Sarabun,sans-serif;padding-top:8px;border-top:1px dashed #fca5a5">
                💡 <strong>คำอธิบาย:</strong> ${item.explanation}
              </div>
            </div>
          </div>
        `;
      }
    }

    // ── Primary Action Button Label & Style ───────────────────
    let nextBtnLabel = '';
    let nextBtnStyle = '';

    if (state.checked) {
      if (isLast) {
        nextBtnLabel = `<i data-lucide="trophy" style="width:16px;height:16px"></i> ดูผลคะแนนรวมทั้งหมด`;
        nextBtnStyle = 'background:linear-gradient(135deg, #10b981 0%, #059669 100%);color:#ffffff;box-shadow:0 4px 16px rgba(16,185,129,0.35)';
      } else {
        nextBtnLabel = `ไปข้อถัดไป (${currentPage + 2}/${items.length}) <i data-lucide="arrow-right" style="width:16px;height:16px"></i>`;
        nextBtnStyle = 'background:#4f46e5;color:#ffffff;box-shadow:0 4px 16px rgba(79,70,229,0.35)';
      }
    } else {
      nextBtnLabel = `<i data-lucide="check-circle" style="width:16px;height:16px"></i> ตรวจคำตอบ & ดูเฉลยข้อนี้`;
      nextBtnStyle = isAnswerComplete 
        ? 'background:#4f46e5;color:#ffffff;box-shadow:0 4px 16px rgba(79,70,229,0.35);transform:scale(1.02)' 
        : 'background:#6366f1;color:#ffffff;opacity:0.9';
    }

    return `
      <div>

        <!-- ─── Header & Game Stats Bar ─── -->
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:14px;padding-bottom:18px;border-bottom:2px solid #e2e8f0;margin-bottom:20px">
          <div>
            <div style="display:inline-flex;align-items:center;gap:6px;padding:4px 12px;border-radius:999px;background:#eef2ff;border:1px solid #c7d2fe;color:#4338ca;font-size:11px;font-family:monospace;font-weight:700;margin-bottom:6px">
              <i data-lucide="gamepad-2" style="width:14px;height:14px"></i> ภารกิจพิชิต HTML5 (4.2 แบบฝึกหัด)
            </div>
            <h3 style="font-size:20px;font-weight:800;color:#0f172a;margin:0 0 2px;letter-spacing:-0.01em">
              จำแนกกลุ่มและหน้าที่ของโครงสร้าง Tag ทั้ง 6 ตัว
            </h3>
            <p style="font-size:12.5px;color:#64748b;font-family:Sarabun,sans-serif;margin:0">
              เลือกคำตอบแล้วกด <strong>"ตรวจคำตอบ & ดูเฉลยข้อนี้"</strong> เพื่อรับคำอธิบายทันทีก่อนไปข้อถัดไป
            </p>
          </div>

          <!-- Controls: Sound, Solve Current, Reset -->
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
            <button id="exercise-sound-btn" style="padding:8px 12px;border-radius:12px;background:#f8fafc;color:#475569;border:1.5px solid #cbd5e1;font-size:12px;cursor:pointer;display:flex;align-items:center;gap:6px" title="เปิด/ปิดเสียง">
              <i data-lucide="${soundEnabled ? 'volume-2' : 'volume-x'}" style="width:15px;height:15px"></i>
            </button>
            <button id="exercise-solve-current-btn" style="padding:9px 14px;border-radius:12px;background:#fffbeb;color:#92400e;font-size:12.5px;font-weight:600;border:1.5px solid #fde68a;cursor:pointer;display:flex;align-items:center;gap:6px" title="เฉลยข้อปัจจุบัน">
              <i data-lucide="lightbulb" style="width:15px;height:15px"></i> เฉลยข้อนี้
            </button>
            <button id="exercise-reset-btn" style="padding:9px 12px;border-radius:12px;background:#f1f5f9;color:#475569;font-size:13px;border:1.5px solid #e2e8f0;cursor:pointer" title="สุ่มสลับตัวเลือก & เริ่มใหม่ทั้งหมด">
              <i data-lucide="shuffle" style="width:16px;height:16px"></i> สลับตัวเลือก
            </button>
          </div>
        </div>

        <!-- ─── Progress Bar & Level Navigation ─── -->
        <div style="background:#f8fafc;border:2px solid #e2e8f0;border-radius:18px;padding:16px 20px;margin-bottom:24px">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;flex-wrap:wrap;gap:8px">
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-size:13px;font-weight:700;color:#0f172a;font-family:Sarabun,sans-serif">ตรวจแล้ว:</span>
              <span style="font-size:12px;padding:2px 8px;border-radius:999px;background:#eef2ff;color:#4338ca;font-weight:700;font-family:monospace">${checkedCount} / ${items.length} ข้อ (${progressPct}%)</span>
              ${checkedCount > 0 ? `<span style="font-size:12px;padding:2px 8px;border-radius:999px;background:#dcfce7;color:#15803d;font-weight:700;font-family:monospace">คะแนน: ${score} ถูก</span>` : ''}
            </div>
            <span style="font-size:12px;font-weight:700;color:#4f46e5;font-family:monospace">Tag ที่ ${currentPage + 1} จาก ${items.length}</span>
          </div>

          <!-- Progress Bar -->
          <div style="height:8px;background:#e2e8f0;border-radius:999px;overflow:hidden;margin-bottom:14px">
            <div style="height:100%;background:linear-gradient(90deg, #6366f1 0%, #4f46e5 100%);border-radius:999px;width:${progressPct}%;transition:width 0.4s cubic-bezier(0.4,0,0.2,1)"></div>
          </div>

          <!-- Interactive Level Number Dots -->
          <div style="display:flex;gap:8px;align-items:center;justify-content:space-between;flex-wrap:wrap">
            ${dotsHtml}
          </div>
        </div>

        <!-- ─── MAIN HERO CHALLENGE CARD ─── -->
        <div style="background:#ffffff;border:2px solid #e2e8f0;border-radius:22px;padding:28px 24px;box-shadow:0 8px 30px rgba(0,0,0,0.04);position:relative">
          
          <!-- Tag Hero Display (VS Code Style) -->
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:14px;margin-bottom:28px">
            <div style="display:flex;align-items:center;gap:14px">
              <span style="width:40px;height:40px;border-radius:12px;background:#4f46e5;color:#ffffff;display:flex;align-items:center;justify-content:center;font-size:16px;font-family:monospace;font-weight:800;box-shadow:0 4px 12px rgba(79,70,229,0.3)">
                ${currentPage + 1}
              </span>
              <div>
                <span style="font-size:11px;font-family:monospace;text-transform:uppercase;letter-spacing:0.05em;color:#64748b">โจทย์ข้อที่ ${currentPage + 1}:</span>
                <div style="font-size:18px;font-weight:800;color:#0f172a;font-family:Sarabun,sans-serif">พิจารณาแท็ก HTML นี้:</div>
              </div>
            </div>

            <!-- VS Code Glowing Tag Card -->
            <div style="background:#1e1e1e;border:1.5px solid #333333;border-radius:14px;padding:12px 24px;box-shadow:0 6px 20px rgba(0,0,0,0.2);display:inline-flex;align-items:center;gap:10px">
              <i data-lucide="code" style="width:18px;height:18px;color:#569cd6"></i>
              <span style="font-family:Consolas,'Fira Code','Courier New',monospace;font-size:18px;letter-spacing:0.02em">
                ${item.tagDisplay}
              </span>
            </div>
          </div>

          <!-- Question 1: Category Selection Cards -->
          <div style="margin-bottom:28px">
            <label style="display:flex;align-items:center;gap:8px;font-size:14px;font-weight:800;color:#0f172a;font-family:Sarabun,sans-serif;margin-bottom:12px">
              <span style="width:22px;height:22px;border-radius:6px;background:#eef2ff;color:#4f46e5;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800">1</span>
              เลือกกลุ่มของแท็กนี้:
            </label>

            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:12px">
              
              <!-- System Card -->
              <button
                type="button"
                data-category-val="system"
                class="category-choice-card cursor-pointer text-left transition-all p-4 rounded-2xl flex items-start gap-3.5"
                style="background:${systemCardBg};border:${systemCardBorder};box-shadow:${isSystemSelected ? '0 4px 16px rgba(124,58,237,0.18)' : 'none'};transform:${isSystemSelected ? 'translateY(-2px)' : 'none'}"
                ${state.checked ? 'disabled style="cursor:default;opacity:1"' : ''}
              >
                <div style="width:40px;height:40px;border-radius:12px;background:${isSystemSelected ? '#7c3aed' : '#f5f3ff'};color:${isSystemSelected ? '#ffffff' : '#7c3aed'};display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">
                  ⚙️
                </div>
                <div style="flex:1">
                  <div style="font-size:14px;font-weight:800;color:${isSystemSelected ? '#5b21b6' : '#0f172a'};font-family:Sarabun,sans-serif">
                    Tag ควบคุมและจัดการระบบพื้นฐาน
                  </div>
                  <div style="font-size:11.5px;color:#64748b;margin-top:2px;font-family:Sarabun,sans-serif;line-height:1.4">
                    ทำงานเบื้องหลัง, ตั้งค่าเอกสาร Metadata, ไม่แสดงผลเป็นเนื้อหาหลักบนหน้าเว็บ
                  </div>
                </div>
                ${isSystemSelected ? '<i data-lucide="check-circle-2" style="width:20px;height:20px;color:#7c3aed;flex-shrink:0"></i>' : ''}
              </button>

              <!-- Display Card -->
              <button
                type="button"
                data-category-val="display"
                class="category-choice-card cursor-pointer text-left transition-all p-4 rounded-2xl flex items-start gap-3.5"
                style="background:${displayCardBg};border:${displayCardBorder};box-shadow:${isDisplaySelected ? '0 4px 16px rgba(225,29,72,0.18)' : 'none'};transform:${isDisplaySelected ? 'translateY(-2px)' : 'none'}"
                ${state.checked ? 'disabled style="cursor:default;opacity:1"' : ''}
              >
                <div style="width:40px;height:40px;border-radius:12px;background:${isDisplaySelected ? '#e11d48' : '#fff1f2'};color:${isDisplaySelected ? '#ffffff' : '#e11d48'};display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">
                  🖥️
                </div>
                <div style="flex:1">
                  <div style="font-size:14px;font-weight:800;color:${isDisplaySelected ? '#9f1239' : '#0f172a'};font-family:Sarabun,sans-serif">
                    Tag แสดงผลเนื้อหา
                  </div>
                  <div style="font-size:11.5px;color:#64748b;margin-top:2px;font-family:Sarabun,sans-serif;line-height:1.4">
                    แสดงข้อความและวัตถุบนหน้าจอ (พื้นที่สีขาว), ผู้ใช้มองเห็นและมีปฏิสัมพันธ์ได้
                  </div>
                </div>
                ${isDisplaySelected ? '<i data-lucide="check-circle-2" style="width:20px;height:20px;color:#e11d48;flex-shrink:0"></i>' : ''}
              </button>

            </div>
          </div>

          <!-- Question 2: Meaning Selection Grid (Shuffled) -->
          <div>
            <label style="display:flex;align-items:center;gap:8px;font-size:14px;font-weight:800;color:#0f172a;font-family:Sarabun,sans-serif;margin-bottom:12px">
              <span style="width:22px;height:22px;border-radius:6px;background:#eef2ff;color:#4f46e5;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800">2</span>
              เลือกหน้าที่ / ความหมาย / ตำแหน่งที่ทำงาน (สลับตัวเลือก):
            </label>

            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:10px">
              ${meaningOptionsHtml}
            </div>
          </div>

          <!-- Result / Validation Feedback Card -->
          ${instantFeedbackHtml}

        </div>

        <!-- ─── Bottom Navigation Actions ─── -->
        <div style="display:flex;align-items:center;justify-content:space-between;margin-top:24px;gap:12px;flex-wrap:wrap">
          <button id="quiz-prev-btn"
            style="padding:12px 22px;border-radius:14px;background:${currentPage === 0 ? '#f1f5f9' : '#ffffff'};color:${currentPage === 0 ? '#94a3b8' : '#1e293b'};border:2px solid ${currentPage === 0 ? '#e2e8f0' : '#cbd5e1'};font-weight:700;font-size:13px;cursor:${currentPage === 0 ? 'not-allowed' : 'pointer'};display:flex;align-items:center;gap:8px;min-width:130px;justify-content:center"
            ${currentPage === 0 ? 'disabled' : ''}
          >
            <i data-lucide="arrow-left" style="width:16px;height:16px"></i> ย้อนกลับ
          </button>

          <div style="display:flex;align-items:center;gap:6px">
            <span style="font-size:14px;font-weight:800;color:#4f46e5;font-family:monospace">
              ${currentPage + 1} / ${items.length}
            </span>
          </div>

          <button id="quiz-action-btn"
            style="padding:12px 26px;border-radius:14px;${nextBtnStyle};border:none;font-weight:800;font-size:13.5px;cursor:pointer;display:flex;align-items:center;gap:8px;min-width:180px;justify-content:center;transition:all 0.2s"
          >
            ${nextBtnLabel}
          </button>
        </div>

      </div>
    `;
  }

  // ─── Summary Report Screen (After completing all 6) ────────
  function buildSummaryHTML() {
    let score = 0;
    items.forEach(it => {
      const s = itemStates[it.id] || {};
      if (s.isCorrect) score++;
    });

    const scorePct = Math.round((score / items.length) * 100);
    const isPerfect = score === items.length;

    const cardsHtml = items.map((it, idx) => {
      const s = itemStates[it.id] || {};
      const isCorrect = s.isCorrect;
      const statusIcon = isCorrect 
        ? '<div style="width:28px;height:28px;border-radius:8px;background:#22c55e;color:#fff;display:flex;align-items:center;justify-content:center"><i data-lucide="check" style="width:16px;height:16px"></i></div>'
        : '<div style="width:28px;height:28px;border-radius:8px;background:#ef4444;color:#fff;display:flex;align-items:center;justify-content:center"><i data-lucide="x" style="width:16px;height:16px"></i></div>';

      return `
        <div style="background:#ffffff;border:2px solid ${isCorrect ? '#86efac' : '#fca5a5'};border-radius:16px;padding:16px 20px;display:flex;align-items:flex-start;gap:14px">
          ${statusIcon}
          <div style="flex:1;min-width:0">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:4px">
              <span style="font-family:monospace;font-weight:800;color:#0f172a;font-size:14px">${escapeHtml(it.tag)}</span>
              <span style="font-size:11px;font-weight:700;padding:2px 8px;border-radius:999px;background:${it.category === 'system' ? '#f5f3ff;color:#7c3aed' : '#fff1f2;color:#e11d48'}">
                ${it.category === 'system' ? '⚙️ กลุ่มควบคุมระบบ' : '🖥️ กลุ่มแสดงผล'}
              </span>
            </div>
            <div style="font-size:12.5px;color:#334155;font-family:Sarabun,sans-serif">${it.meaningText}</div>
            <div style="font-size:11.5px;color:#64748b;margin-top:4px;font-family:Sarabun,sans-serif">${it.explanation}</div>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div>
        <!-- Final Victory Hero Card -->
        <div style="background:linear-gradient(135deg, ${isPerfect ? '#10b981 0%, #059669' : (scorePct >= 50 ? '#6366f1 0%, #4f46e5' : '#f59e0b 0%, #d97706')} 100%);border-radius:24px;padding:32px 28px;color:#ffffff;text-align:center;box-shadow:0 12px 36px rgba(0,0,0,0.15);margin-bottom:28px">
          <div style="width:64px;height:64px;border-radius:20px;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:32px">
            ${isPerfect ? '🏆' : (scorePct >= 50 ? '🎉' : '📚')}
          </div>
          <h2 style="font-size:24px;font-weight:800;margin:0 0 6px;letter-spacing:-0.02em">
            ${isPerfect ? 'ยอดเยี่ยมระดับเซียน HTML5 สมบูรณ์แบบ 100%!' : (scorePct >= 50 ? 'เก่งมาก! ผ่านเกณฑ์การจำแนกแท็ก HTML5' : 'สรุปผลคะแนน: ทบทวนอีกนิดเก่งแน่นอน!')}
          </h2>
          <p style="font-size:14px;opacity:0.9;font-family:Sarabun,sans-serif;margin:0 0 20px">
            คุณทำคะแนนได้ <strong>${score} เต็ม ${items.length} ข้อ</strong> (${scorePct}%)
          </p>

          <div style="display:flex;justify-content:center;gap:12px">
            <button id="summary-replay-btn" style="padding:12px 24px;border-radius:14px;background:#ffffff;color:#0f172a;font-weight:800;font-size:14px;border:none;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,0.15);display:flex;align-items:center;gap:8px">
              <i data-lucide="rotate-ccw" style="width:16px;height:16px"></i> สลับตัวเลือก & เล่นใหม่อีกครั้ง
            </button>
          </div>
        </div>

        <!-- Breakdown List -->
        <h3 style="font-size:17px;font-weight:800;color:#0f172a;margin-bottom:16px;display:flex;align-items:center;gap:8px">
          <i data-lucide="list-checks" style="width:20px;height:20px;color:#4f46e5"></i> สรุปเฉลยและคำอธิบายทั้ง 6 ข้อ:
        </h3>

        <div style="display:flex;flex-direction:column;gap:12px">
          ${cardsHtml}
        </div>
      </div>
    `;
  }

  // ─── Attach Listeners ──────────────────────────────────────
  function attachEventListeners() {
    const curItem = items[currentPage];
    const curState = itemStates[curItem.id] || {};

    // Category Card Selection (Only if not checked)
    if (!curState.checked) {
      document.querySelectorAll('.category-choice-card').forEach(btn => {
        btn.addEventListener('click', () => {
          const val = btn.dataset.categoryVal;
          if (!itemStates[curItem.id]) itemStates[curItem.id] = { category: '', meaning: '', checked: false, isCorrect: false };
          itemStates[curItem.id].category = val;
          AudioEffects.select();
          renderUI();
        });
      });

      // Meaning Card Selection (Only if not checked)
      document.querySelectorAll('.meaning-choice-card').forEach(btn => {
        btn.addEventListener('click', () => {
          const val = btn.dataset.meaningVal;
          if (!itemStates[curItem.id]) itemStates[curItem.id] = { category: '', meaning: '', checked: false, isCorrect: false };
          itemStates[curItem.id].meaning = val;
          AudioEffects.select();
          renderUI();
        });
      });
    }

    // Main Action Button (Handles Check First -> Then Next)
    const actionBtn = document.getElementById('quiz-action-btn');
    if (actionBtn) {
      actionBtn.addEventListener('click', () => {
        const state = itemStates[curItem.id] || { category: '', meaning: '', checked: false, isCorrect: false };

        if (!state.checked) {
          // If user hasn't selected options, default to prompt or auto-fill hint
          if (!state.category) state.category = curItem.category;
          if (!state.meaning) state.meaning = curItem.correctMeaning;

          // Check answer for this item
          state.checked = true;
          state.isCorrect = (state.category === curItem.category && state.meaning === curItem.correctMeaning);

          if (state.isCorrect) {
            AudioEffects.correct();
          } else {
            AudioEffects.wrong();
          }

          renderUI();
        } else {
          // Already checked: go to next or summary
          if (currentPage < items.length - 1) {
            currentPage++;
            AudioEffects.step();
            renderUI();
          } else {
            // Completed all!
            showSummary = true;
            let finalScore = 0;
            items.forEach(it => { if (itemStates[it.id]?.isCorrect) finalScore++; });
            if (finalScore === items.length) {
              AudioEffects.victory();
              launchConfetti();
            } else {
              AudioEffects.correct();
            }
            renderUI();
          }
        }
      });
    }

    // Previous Button
    const prevBtn = document.getElementById('quiz-prev-btn');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
          currentPage--;
          AudioEffects.step();
          renderUI();
        }
      });
    }

    // Solve Current Item
    const solveCurrentBtn = document.getElementById('exercise-solve-current-btn');
    if (solveCurrentBtn) {
      solveCurrentBtn.addEventListener('click', () => {
        const state = itemStates[curItem.id];
        state.category = curItem.category;
        state.meaning = curItem.correctMeaning;
        state.checked = true;
        state.isCorrect = true;
        AudioEffects.correct();
        renderUI();
      });
    }

    // Dot Level Navigation
    document.querySelectorAll('[data-dot]').forEach(btn => {
      btn.addEventListener('click', () => {
        currentPage = parseInt(btn.dataset.dot);
        AudioEffects.step();
        renderUI();
      });
    });

    // Sound Toggle Button
    const soundBtn = document.getElementById('exercise-sound-btn');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        if (soundEnabled) AudioEffects.select();
        renderUI();
      });
    }

    // Reset / Shuffle Button
    const resetBtn = document.getElementById('exercise-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        resetState();
        renderUI();
      });
    }

    // Replay Buttons
    const replayBtn = document.getElementById('summary-replay-btn');
    if (replayBtn) {
      replayBtn.addEventListener('click', () => {
        resetState();
        renderUI();
      });
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  return { init, reset: resetState };
})();

document.addEventListener('DOMContentLoaded', () => {
  ClassroomExercise.init();
});
