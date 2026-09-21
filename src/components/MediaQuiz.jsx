import { useState, useRef, useEffect } from 'react'
import { CheckCircle2, XCircle, Lightbulb, RotateCcw, Volume2, VolumeX, Sparkles } from 'lucide-react'
import HtmlCode from './HtmlCode'

const questions = [
  {
    id: 1,
    title: 'โครงสร้างและชนิดของแท็ก <img>',
    question: 'ตามมาตรฐาน HTML5 แท็ก <img> มีลักษณะโครงสร้างการเขียนอย่างไร?',
    options: [
      { id: 'a', text: 'เป็น Void Element (แท็กเดี่ยว) ไม่มีแท็กปิด </img> และระบุข้อมูลผ่าน attributes', correct: true },
      { id: 'b', text: 'ต้องมีแท็กปิด </img> เสมอเหมือน <p>...</p>', correct: false },
      { id: 'c', text: 'ต้องใส่ข้อความเนื้อหาแทรกข้างในแท็ก เช่น <img>รูปภาพ</img>', correct: false },
      { id: 'd', text: 'ต้องเขียนคู่กับแท็ก <image> เสมอ', correct: false },
    ],
    hint: 'ลองสังเกตแท็ก <br> หรือ <meta> ในบทก่อนหน้า เป็นแท็กที่บรรจุข้อมูลในตัวเองโดยไม่ต้องมีแท็กปิด',
    explanation: '<img> เป็น Void Element (แท็กเดี่ยว/แท็กว่าง) จึงไม่มีแท็กปิด </img> โดยข้อมูลรูปภาพจะถูกกำหนดผ่าน attributes เช่น src และ alt',
  },
  {
    id: 2,
    title: 'บทบาทของ Attribute alt',
    question: 'Attribute alt ในแท็ก <img> มีความสำคัญต่อหน้าเว็บอย่างไรมากที่สุด?',
    options: [
      { id: 'a', text: 'ใช้ปรับความกว้างและความสูงของรูปภาพให้พอดีหน้าจอ', correct: false },
      { id: 'b', text: 'เป็นข้อความอธิบายภาพสำหรับ Screen Reader (ผู้บกพร่องทางสายตา), ช่วย SEO และแสดงแทนเมื่อโหลดภาพไม่สำเร็จ', correct: true },
      { id: 'c', text: 'ใช้เปลี่ยนรูปภาพให้กลายเป็นโทนสีขาวดำ', correct: false },
      { id: 'd', text: 'เป็นคำสั่งเร่งความเร็วในการดาวน์โหลดไฟล์ภาพ', correct: false },
    ],
    hint: 'alt ย่อมาจาก Alternative Text (ข้อความทดแทน) เพื่อให้ทุกคนรวมถึงระบบค้นหาเข้าใจว่าภาพนี้คืออะไร',
    explanation: 'alt มีประโยชน์ 3 ด้านหลัก: 1) ความเท่าเทียมในการเข้าถึง (Accessibility) สำหรับผู้ใช้ Screen Reader 2) ช่วยให้ Search Engine (SEO) เข้าใจภาพ 3) แสดงข้อความแทนเมื่อไฟล์ภาพโหลดไม่สำเร็จ',
  },
  {
    id: 3,
    title: 'การระบุปลายทางของลิงก์ <a>',
    question: 'หากต้องการให้ผู้ใช้คลิกแท็ก <a> แล้วไปยัง https://example.com ต้องใช้ Attribute ใด?',
    options: [
      { id: 'a', text: 'href="https://example.com"', correct: true },
      { id: 'b', text: 'url="https://example.com"', correct: false },
      { id: 'c', text: 'link="https://example.com"', correct: false },
      { id: 'd', text: 'src="https://example.com"', correct: false },
    ],
    hint: 'จำคำย่อ Hypertext Reference ไว้ให้ดี',
    explanation: 'แท็ก <a> (Anchor) ใช้ attribute ชื่อ href (ย่อมาจาก Hypertext Reference) เพื่อระบุ URL หรือปลายทางที่ต้องการเชื่อมโยงเสมอ (ห้ามสับสนกับ src ที่ใช้กับ img)',
  },
  {
    id: 4,
    title: 'การเปิดลิงก์ในแท็บใหม่ (New Tab)',
    question: 'ต้องการให้คลิกลิงก์แล้วเปิดหน้าเว็บในแท็บใหม่ ต้องกำหนด Attribute ใด และควรใส่คู่กับอะไร?',
    options: [
      { id: 'a', text: 'target="_blank" และใส่ rel="noopener noreferrer" เพื่อความปลอดภัย', correct: true },
      { id: 'b', text: 'target="_new" และใส่ secure="true"', correct: false },
      { id: 'c', text: 'open="newtab" และใส่ safe="yes"', correct: false },
      { id: 'd', text: 'window="blank" และใส่ rel="external"', correct: false },
    ],
    hint: 'ค่าเป้าหมายขึ้นต้นด้วยเครื่องหมายขีดล่าง (underscore) ตามด้วยคำว่า blank',
    explanation: 'target="_blank" เป็นมาตรฐานในการเปิดหน้าต่างหรือแท็บใหม่ และควรเพิ่ม rel="noopener noreferrer" เสมอ เพื่อป้องกันปัญหาความปลอดภัย (Reverse Tabnabbing)',
  },
  {
    id: 5,
    title: 'การสร้างรูปภาพที่เป็นลิงก์ (Image Link)',
    question: 'หากต้องการให้ภาพโลโก้สามารถคลิกเพื่อกลับไปหน้าหลัก (index.html) ได้ ต้องเขียนโครงสร้างแบบใด?',
    options: [
      { id: 'a', text: '<a href="index.html"><img src="logo.png" alt="หน้าหลัก"></a>', correct: true },
      { id: 'b', text: '<img src="logo.png" link="index.html" alt="หน้าหลัก">', correct: false },
      { id: 'c', text: '<img src="logo.png"><a href="index.html">หน้าหลัก</a></img>', correct: false },
      { id: 'd', text: '<a src="logo.png" href="index.html"></a>', correct: false },
    ],
    hint: 'นำแท็กที่ทำหน้าที่เป็นลิงก์ (ครอบคลุม) มาครอบแท็กวัตถุที่ต้องการให้คลิกได้',
    explanation: 'การทำรูปภาพเป็นลิงก์ ให้ใช้แท็ก <a> ครอบแท็ก <img> โดยระบุปลายทางใน href ของแท็ก <a> และระบุที่อยู่ของรูปภาพใน src ของแท็ก <img>',
  },
  {
    id: 6,
    title: 'เส้นทางไฟล์รูปภาพ (Relative Path)',
    question: 'หากไฟล์ภาพ avatar.png เก็บอยู่ในโฟลเดอร์ชื่อ images ซึ่งอยู่ในระดับเดียวกับไฟล์เว็บ HTML ควรเขียน src อย่างไร?',
    options: [
      { id: 'a', text: 'src="images/avatar.png"', correct: true },
      { id: 'b', text: 'src="../avatar.png"', correct: false },
      { id: 'c', text: 'src="C:/Users/Desktop/images/avatar.png"', correct: false },
      { id: 'd', text: 'src="/images/avatar.png/index.html"', correct: false },
    ],
    hint: 'การเข้าโฟลเดอร์ย่อยในระดับเดียวกัน ให้เขียนชื่อโฟลเดอร์ ตามด้วยเครื่องหมายสแลช / แล้วตามด้วยชื่อไฟล์',
    explanation: 'การระบุ Relative Path สำหรับโฟลเดอร์ย่อย ให้เขียนชื่อโฟลเดอร์/ชื่อไฟล์ เช่น images/avatar.png ห้ามระบุ Hardcode Path ของเครื่องตนเอง (เช่น C:/...) เพราะเมื่อนำขึ้นเซิร์ฟเวอร์จะโหลดภาพไม่ขึ้น',
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
  const isComplete = Object.keys(answers).length === questions.length

  const handleReset = () => {
    setAnswers({})
    setIndex(0)
    setShowSummary(false)
    setShowHint(false)
  }

  return (
    <section id="quiz" className="quiz-section react-learning-section">
      <div className="section-heading">
        <span>05 · แบบฝึกหัดทบทวนและประเมินผล</span>
        <h2>ทดสอบความเข้าใจ Tag &lt;img&gt; และ &lt;a&gt;</h2>
        <p>ฝึกฝนการใช้ Attributes, การเลือกแท็ก, และความปลอดภัยของลิงก์ให้ถูกต้องตามมาตรฐาน HTML5</p>
      </div>

      <div className="quiz-box react-panel">
        <div className="quiz-top-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <div className="quiz-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#c4b5fd', fontFamily: 'Fira Code' }}>
            <Sparkles size={16} /> แบบทดสอบ 6 ข้อ
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
        <div className="react-step-nav" style={{ gridTemplateColumns: 'repeat(6, 1fr)', marginBottom: '24px' }}>
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

            <h3 style={{ fontSize: '19px', lineHeight: '1.5', margin: '12px 0 20px', color: 'var(--text)' }}>
              {currentQ.question}
            </h3>

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
                    <span style={{ flex: 1 }}>{opt.text}</span>
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
                  {currentAnswer.isCorrect ? 'คำตอบถูกต้อง!' : 'สรุปข้อสำคัญ:'}
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
                <span>{index === questions.length - 1 ? 'ดูสรุปผลคะแนน' : 'ข้อถัดไป →'}</span>
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
                ? 'ยอดเยี่ยมมาก! คุณมีความเข้าใจเรื่องแท็ก <img> และ <a> ครบถ้วนทุกจุด พร้อมนำไปประยุกต์สร้างเว็บจริงแล้ว'
                : 'ทำได้ดีมาก! ลองทบทวนข้อที่ตอบผิดแล้วกดเริ่มใหม่เพื่อฝึกฝนให้คล่องแคล่วขึ้น'}
            </p>

            <div style={{ display: 'grid', gap: '10px', maxWidth: '600px', margin: '0 auto 24px', textAlign: 'left' }}>
              {questions.map((q, i) => {
                const ans = answers[q.id]
                const ok = ans?.isCorrect
                return (
                  <div
                    key={q.id}
                    style={{
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '1px solid var(--line)',
                      background: 'var(--bg)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontFamily: 'Sarabun',
                      fontSize: '14px',
                    }}
                  >
                    <span>ข้อ {i + 1}: {q.title}</span>
                    <strong style={{ color: ok ? '#34d399' : '#fb7185' }}>
                      {ok ? '✓ ถูกต้อง' : '✕ ยังไม่ถูก'}
                    </strong>
                  </div>
                )
              })}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px' }}>
              <button className="primary-btn" onClick={handleReset}>
                <RotateCcw size={16} />
                <span>ทำแบบทดสอบใหม่อีกครั้ง</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
