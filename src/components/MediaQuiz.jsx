import { useState, useRef, useEffect } from 'react'
import { CheckCircle2, XCircle, Lightbulb, RotateCcw, Volume2, VolumeX, Sparkles, HelpCircle } from 'lucide-react'

const questions = [
  {
    id: 1,
    title: 'ข้อที่ 1',
    question: 'จงเติม Attribute ในช่องว่างของแท็กรูปภาพให้ถูกต้อง:',
    code: '<img ______="school.jpg" ______="รูปโรงเรียน">',
    options: [
      { id: 'a', text: 'src และ alt', correct: true },
      { id: 'b', text: 'href และ alt', correct: false },
      { id: 'c', text: 'alt และ src', correct: false },
      { id: 'd', text: 'src และ href', correct: false },
    ],
    answerDisplay: 'src และ alt',
    explanation: 'แท็ก <img> ใช้ src สำหรับบอกที่อยู่ไฟล์รูปภาพ ("school.jpg") และใช้ alt สำหรับระบุข้อความอธิบายรูปภาพ ("รูปโรงเรียน")',
    hint: 'ช่องว่างแรกคือที่อยู่ไฟล์รูปภาพ (school.jpg) ช่องว่างที่สองคือข้อความอธิบายรูปภาพ',
  },
  {
    id: 2,
    title: 'ข้อที่ 2',
    question: 'จงเติม Attribute ในช่องว่างของแท็กลิงก์ให้ถูกต้อง:',
    code: '<a ______="https://www.school.com">เว็บไซต์โรงเรียน</a>',
    options: [
      { id: 'a', text: 'href', correct: true },
      { id: 'b', text: 'src', correct: false },
      { id: 'c', text: 'alt', correct: false },
      { id: 'd', text: 'link', correct: false },
    ],
    answerDisplay: 'href',
    explanation: 'แท็ก <a> (Anchor) ใช้ Attribute ชื่อ href ในการระบุ URL ปลายทางที่ต้องการเชื่อมโยง',
    hint: 'href (Hypertext Reference) คือ Attribute ที่ใช้กำหนดปลายทางเว็บไซต์',
  },
  {
    id: 3,
    title: 'ข้อที่ 3',
    question: 'หากต้องการแสดงรูปภาพ student.jpg บนหน้าเว็บ ควรใช้แท็ก ________',
    code: '',
    options: [
      { id: 'a', text: '<img>', correct: true },
      { id: 'b', text: '<a>', correct: false },
      { id: 'c', text: '<picture>', correct: false },
      { id: 'd', text: '<image>', correct: false },
    ],
    answerDisplay: '<img>',
    explanation: 'แท็ก <img> เป็นแท็กเดี่ยว (Void Element) ที่ใช้ในการแทรกรูปภาพลงในหน้าเว็บเพจ',
    hint: 'แท็กสำหรับแสดงรูปภาพโดยเฉพาะใน HTML5',
  },
  {
    id: 4,
    title: 'ข้อที่ 4',
    question: 'Attribute ________ ใช้กำหนดข้อความอธิบายรูปภาพ เช่น',
    code: '<img src="book.jpg" ______="รูปหนังสือ">',
    options: [
      { id: 'a', text: 'alt', correct: true },
      { id: 'b', text: 'src', correct: false },
      { id: 'c', text: 'title', correct: false },
      { id: 'd', text: 'name', correct: false },
    ],
    answerDisplay: 'alt',
    explanation: 'alt (Alternative Text) เป็น Attribute สำหรับใส่ข้อความอธิบายรูปภาพเพื่อช่วยเรื่อง Accessibility และแสดงแทนเมื่อโหลดภาพไม่สำเร็จ',
    hint: 'alt = Alternative Text ใช้แทนภาพเมื่อไม่สามารถแสดงรูปได้',
  },
  {
    id: 5,
    title: 'ข้อที่ 5',
    question: 'หากต้องการให้ข้อความ "หน้าถัดไป" สามารถคลิกเพื่อไปยัง page2.html ได้ ควรเติม Attribute ใดลงในช่องว่าง',
    code: '<a ______="page2.html">หน้าถัดไป</a>',
    options: [
      { id: 'a', text: 'href', correct: true },
      { id: 'b', text: 'src', correct: false },
      { id: 'c', text: 'target', correct: false },
      { id: 'd', text: 'to', correct: false },
    ],
    answerDisplay: 'href',
    explanation: 'Attribute href ใช้ระบุไฟล์ปลายทาง HTML ภายในเว็บไซต์ (page2.html)',
    hint: 'href ใช้คู่กับ <a> เพื่อระบุไฟล์ปลายทาง',
  },
]

export default function MediaQuiz() {
  const [answers, setAnswers] = useState({})
  const [index, setIndex] = useState(0)
  const [showSummary, setShowSummary] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const audioCtx = useRef(null)

  useEffect(() => {
    return () => {
      if (audioCtx.current) audioCtx.current.close()
    }
  }, [])

  const currentQ = questions[index]
  const currentAnswer = answers[currentQ.id]
  const isSelected = !!currentAnswer

  const playSound = (isCorrect) => {
    if (!soundEnabled) return
    try {
      const Audio = window.AudioContext || window.webkitAudioContext
      if (!Audio) return
      audioCtx.current ||= new Audio()
      const ctx = audioCtx.current
      ctx.resume()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.frequency.value = isCorrect ? 640 : 250
      gain.gain.setValueAtTime(0.06, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + 0.22)
    } catch {
      // Audio fallback
    }
  }

  const handleSelect = (option) => {
    if (isSelected) return
    const isCorrect = option.correct
    setAnswers(prev => ({
      ...prev,
      [currentQ.id]: {
        selectedId: option.id,
        isCorrect,
      }
    }))
    playSound(isCorrect)
  }

  const totalScore = Object.values(answers).filter(a => a.isCorrect).length

  const handleReset = () => {
    setAnswers({})
    setIndex(0)
    setShowSummary(false)
    setShowHint(false)
  }

  return (
    <section id="quiz" className="quiz-section react-learning-section">
      <div className="section-heading">
        <span>4.2 · แบบฝึกหัดในชั้นเรียน</span>
        <h2>4.2 แบบฝึกหัดในชั้นเรียน</h2>
        <p>
          จงเติม <code>&lt;img&gt;</code>, <code>&lt;a&gt;</code>, <code>src</code>, <code>alt</code> หรือ <code>href</code> ลงในช่องว่างให้ถูกต้อง
        </p>
      </div>

      <div className="quiz-box react-panel">
        <div className="quiz-top-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <div className="quiz-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#c4b5fd', fontFamily: 'Fira Code' }}>
            <Sparkles size={16} /> แบบฝึกหัด 5 ข้อ
          </div>
          <button
            className="secondary-btn"
            style={{ padding: '6px 12px', fontSize: '13px' }}
            onClick={() => setSoundEnabled(v => !v)}
            aria-label={soundEnabled ? 'ปิดเสียงเอฟเฟกต์' : 'เปิดเสียงเอฟเฟกต์'}
          >
            {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
            <span>{soundEnabled ? 'เสียง: เปิด' : 'เสียง: ปิด'}</span>
          </button>
        </div>

        {/* Question Step Nav */}
        <div className="react-step-nav" style={{ gridTemplateColumns: 'repeat(5, 1fr)', marginBottom: '24px' }}>
          {questions.map((q, i) => {
            const ans = answers[q.id]
            let mark = ''
            if (ans) mark = ans.isCorrect ? ' ✓' : ' ✕'
            return (
              <button
                key={q.id}
                className={i === index && !showSummary ? 'active' : ''}
                onClick={() => { setIndex(i); setShowSummary(false); setShowHint(false) }}
                aria-label={`ไปข้อที่ ${i + 1}`}
              >
                <strong>{i + 1}</strong>{mark}
              </button>
            )
          })}
        </div>

        {!showSummary ? (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', color: 'var(--muted)', fontFamily: 'Sarabun' }}>
                ข้อ {index + 1} จาก {questions.length} · {currentQ.title}
              </span>
              {currentAnswer && (
                <span style={{ fontSize: '13px', fontWeight: 600, color: currentAnswer.isCorrect ? '#34d399' : '#fb7185' }}>
                  {currentAnswer.isCorrect ? 'ถูกต้อง 🎉' : 'ยังไม่ถูกต้อง ลองอ่านคำอธิบาย'}
                </span>
              )}
            </div>

            <h3 style={{ fontSize: '18px', lineHeight: '1.6', margin: '12px 0 14px', color: 'var(--text)', fontFamily: 'Sarabun' }}>
              {currentQ.question}
            </h3>

            {currentQ.code && (
              <div style={{
                background: '#0d0d17',
                color: '#ddd6fe',
                padding: '14px 18px',
                borderRadius: '10px',
                fontFamily: 'Fira Code, monospace',
                fontSize: '14px',
                marginBottom: '20px',
                border: '1px solid var(--line)',
                overflowX: 'auto'
              }}>
                <code>{currentQ.code}</code>
              </div>
            )}

            <div className="quiz-choices" style={{ display: 'grid', gap: '10px', marginBottom: '20px' }}>
              {currentQ.options.map(opt => {
                let statusClass = 'choice'
                if (currentAnswer) {
                  if (opt.correct) statusClass += ' correct'
                  else if (currentAnswer.selectedId === opt.id) statusClass += ' wrong'
                }
                return (
                  <button
                    key={opt.id}
                    className={statusClass}
                    onClick={() => handleSelect(opt)}
                    disabled={isSelected}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '14px 18px',
                      borderRadius: '12px',
                      border: '1px solid var(--line)',
                      background: 'var(--bg)',
                      color: 'var(--text)',
                      textAlign: 'left',
                      fontFamily: 'Sarabun',
                      fontSize: '15px',
                      cursor: isSelected ? 'default' : 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    <span style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: 'var(--panel2)',
                      display: 'grid',
                      placeItems: 'center',
                      fontFamily: 'Fira Code',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#c4b5fd',
                      flexShrink: 0
                    }}>
                      {opt.id.toUpperCase()}
                    </span>
                    <span style={{ flex: 1, fontFamily: 'Fira Code, Sarabun, sans-serif' }}>{opt.text}</span>
                    {currentAnswer && opt.correct && <CheckCircle2 size={18} color="#22c55e" />}
                    {currentAnswer && currentAnswer.selectedId === opt.id && !opt.correct && <XCircle size={18} color="#ef4444" />}
                  </button>
                )
              })}
            </div>

            {/* Explanation & Hint */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '16px' }}>
              <button className="secondary-btn" onClick={() => setShowHint(v => !v)}>
                <Lightbulb size={16} />
                <span>{showHint ? 'ซ่อนคำใบ้' : 'ขอคำใบ้'}</span>
              </button>
            </div>

            {showHint && (
              <div className="react-notice" style={{ marginBottom: '16px' }}>
                <strong>💡 คำใบ้:</strong> {currentQ.hint}
              </div>
            )}

            {currentAnswer && (
              <div className={currentAnswer.isCorrect ? 'react-success' : 'react-notice'} style={{ marginBottom: '20px' }}>
                <strong style={{ display: 'block', marginBottom: '4px' }}>
                  {currentAnswer.isCorrect ? 'คำตอบถูกต้อง!' : 'สรุปเฉลย:'}
                </strong>
                <p style={{ margin: 0, fontFamily: 'Sarabun' }}>{currentQ.explanation}</p>
              </div>
            )}

            {/* Navigation actions */}
            <div className="react-actions" style={{ justifyContent: 'space-between' }}>
              <button
                className="secondary-btn"
                disabled={index === 0}
                onClick={() => { setIndex(i => i - 1); setShowHint(false) }}
              >
                ← ข้อก่อนหน้า
              </button>

              <button
                className="primary-btn"
                onClick={() => {
                  if (index === questions.length - 1) {
                    setShowSummary(true)
                  } else {
                    setIndex(i => i + 1)
                    setShowHint(false)
                  }
                }}
              >
                <span>{index === questions.length - 1 ? 'ดูสรุปและเฉลยคำตอบ' : 'ข้อถัดไป →'}</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="quiz-summary-view" style={{ textAlign: 'center', padding: '24px 12px' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
              display: 'grid',
              placeItems: 'center',
              margin: '0 auto 18px',
              fontSize: '36px'
            }}>
              🏆
            </div>
            <h3 style={{ fontSize: '26px', margin: '0 0 10px' }}>
              ได้คะแนน {totalScore} จาก {questions.length} คะแนน
            </h3>
            <p style={{ color: 'var(--muted)', fontFamily: 'Sarabun', fontSize: '16px', maxWidth: '540px', margin: '0 auto 24px' }}>
              {totalScore === questions.length
                ? 'ยอดเยี่ยมมาก! คุณตอบถูกต้องครบทุกข้อในแบบฝึกหัด 4.2'
                : 'ทำได้ดีมาก! ลองทบทวนคำตอบและเฉลยเพื่อความแม่นยำ'}
            </p>

            {/* Exact Answer Key Box */}
            <div style={{
              maxWidth: '600px',
              margin: '0 auto 24px',
              padding: '20px 24px',
              background: 'var(--panel2)',
              borderRadius: '14px',
              border: '1px solid var(--line)',
              textAlign: 'left'
            }}>
              <h4 style={{ margin: '0 0 14px', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text)' }}>
                <HelpCircle size={18} color="#8b5cf6" />
                <span>สรุปเฉลยคำตอบแบบฝึกหัด 4.2</span>
              </h4>
              <ol style={{ margin: 0, paddingLeft: '20px', fontFamily: 'Sarabun', fontSize: '15px', lineHeight: '2.0', color: 'var(--text)' }}>
                <li><strong>1.</strong> <code>src</code> และ <code>alt</code></li>
                <li><strong>2.</strong> <code>href</code></li>
                <li><strong>3.</strong> <code>&lt;img&gt;</code></li>
                <li><strong>4.</strong> <code>alt</code></li>
                <li><strong>5.</strong> <code>href</code></li>
              </ol>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px' }}>
              <button className="primary-btn" onClick={handleReset}>
                <RotateCcw size={16} />
                <span>ทำแบบฝึกหัดใหม่อีกครั้ง</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
