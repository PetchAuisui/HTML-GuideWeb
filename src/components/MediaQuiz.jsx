import { useState } from 'react'
import { CheckCircle2, XCircle, RotateCcw, Sparkles, HelpCircle, Check } from 'lucide-react'

export default function MediaQuiz() {
  const [answers, setAnswers] = useState({
    q1_1: '',
    q1_2: '',
    q1_3: '',
    q2_1: '',
    q3_1: '',
    q4_1: '',
    q4_2: '',
    q5_1: '',
  })
  const [isChecked, setIsChecked] = useState(false)
  const [showSolution, setShowSolution] = useState(false)

  const handleChange = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }))
    if (isChecked) setIsChecked(false)
  }

  const normalize = (str) => (str || '').trim().toLowerCase()

  const checkMatch = (val, target) => {
    const u = normalize(val)
    const t = normalize(target)
    if (u === t) return true
    if (t === '<img>' && (u === 'img' || u === '<img>' || u === '<img/>' || u === '<img >')) return true
    return false
  }

  // Question evaluations
  const q1_ok = checkMatch(answers.q1_1, 'src') && checkMatch(answers.q1_2, 'alt') && (checkMatch(answers.q1_3, 'width') || normalize(answers.q1_3) === '')
  const q2_ok = checkMatch(answers.q2_1, 'href')
  const q3_ok = checkMatch(answers.q3_1, '<img>')
  const q4_ok = checkMatch(answers.q4_1, 'width') || checkMatch(answers.q4_2, 'width')
  const q5_ok = checkMatch(answers.q5_1, 'href')

  const totalScore = [q1_ok, q2_ok, q3_ok, q4_ok, q5_ok].filter(Boolean).length

  const handleReset = () => {
    setAnswers({
      q1_1: '',
      q1_2: '',
      q1_3: '',
      q2_1: '',
      q3_1: '',
      q4_1: '',
      q4_2: '',
      q5_1: '',
    })
    setIsChecked(false)
    setShowSolution(false)
  }

  // High-contrast input style for dark code box containers
  const codeBoxInputStyle = (isCorrect) => {
    let borderColor = '#475569'
    let bg = '#1e1e2e'
    let textColor = '#ffffff'

    if (isChecked) {
      if (isCorrect) {
        borderColor = '#22c55e'
        bg = 'rgba(34, 197, 94, 0.25)'
        textColor = '#86efac'
      } else {
        borderColor = '#ef4444'
        bg = 'rgba(239, 68, 68, 0.25)'
        textColor = '#fca5a5'
      }
    }

    return {
      padding: '7px 10px',
      borderRadius: '8px',
      border: `2px solid ${borderColor}`,
      background: bg,
      color: textColor,
      fontFamily: 'Fira Code, monospace',
      fontSize: '14px',
      fontWeight: '700',
      outline: 'none',
      width: '95px',
      minWidth: '70px',
      maxWidth: '115px',
      textAlign: 'center',
      transition: 'all 0.2s ease',
    }
  }

  // Input style for outside code boxes
  const regularInputStyle = (isCorrect) => {
    let borderColor = 'var(--line)'
    let bg = 'var(--bg)'
    let textColor = 'var(--text)'

    if (isChecked) {
      if (isCorrect) {
        borderColor = '#22c55e'
        bg = 'rgba(34, 197, 94, 0.15)'
        textColor = '#10b981'
      } else {
        borderColor = '#ef4444'
        bg = 'rgba(239, 68, 68, 0.15)'
        textColor = '#f43f5e'
      }
    }

    return {
      padding: '8px 14px',
      borderRadius: '8px',
      border: `2px solid ${borderColor}`,
      background: bg,
      color: textColor,
      fontFamily: 'Fira Code, monospace',
      fontSize: '15px',
      fontWeight: '700',
      outline: 'none',
      width: '150px',
      textAlign: 'center',
      transition: 'all 0.2s ease',
    }
  }

  return (
    <section id="quiz" className="quiz-section react-learning-section">
      <div className="section-heading">
        <span>4.2 · แบบฝึกหัดในชั้นเรียน</span>
        <h2>4.2 แบบฝึกหัดในชั้นเรียน</h2>
        <p>
          จงเติม <code>&lt;img&gt;</code>, <code>&lt;a&gt;</code>, <code>src</code>, <code>alt</code>, <code>width</code> หรือ <code>href</code> ลงในช่องว่างให้ถูกต้อง
        </p>
      </div>

      <div className="quiz-box react-panel" style={{ padding: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#c4b5fd', fontFamily: 'Fira Code, monospace', fontWeight: 600 }}>
            <Sparkles size={18} /> เติมคำในช่องว่าง (5 ข้อ)
          </div>
          {isChecked && (
            <div style={{ fontSize: '16px', fontWeight: 700, color: totalScore === 5 ? '#34d399' : '#fb7185' }}>
              ผลการตรวจ: ได้ {totalScore} / 5 คะแนน {totalScore === 5 ? '🎉 สมบูรณ์แบบ!' : ''}
            </div>
          )}
        </div>

        <div style={{ display: 'grid', gap: '24px' }}>
          {/* Question 1 */}
          <div style={{
            padding: '20px',
            borderRadius: '14px',
            border: '1px solid var(--line)',
            background: 'var(--panel2)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <strong style={{ fontSize: '16px', color: 'var(--text)', fontFamily: 'Sarabun' }}>
                1. เติม Attribute ในแท็กรูปภาพให้ถูกต้อง (src, alt, width)
              </strong>
              {isChecked && (q1_ok ? <CheckCircle2 size={22} color="#22c55e" /> : <XCircle size={22} color="#ef4444" />)}
            </div>
            <div style={{
              background: '#0d0d17',
              padding: '16px 20px',
              borderRadius: '10px',
              fontFamily: 'Fira Code, monospace',
              fontSize: '15px',
              color: '#ddd6fe',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexWrap: 'wrap',
              border: '1px solid var(--line)',
            }}>
              <span>&lt;img</span>
              <input
                type="text"
                placeholder="____"
                value={answers.q1_1}
                onChange={e => handleChange('q1_1', e.target.value)}
                style={codeBoxInputStyle(checkMatch(answers.q1_1, 'src'))}
                aria-label="ช่องว่างที่ 1 ของข้อ 1"
              />
              <span>="school.jpg"</span>
              <input
                type="text"
                placeholder="____"
                value={answers.q1_2}
                onChange={e => handleChange('q1_2', e.target.value)}
                style={codeBoxInputStyle(checkMatch(answers.q1_2, 'alt'))}
                aria-label="ช่องว่างที่ 2 ของข้อ 1"
              />
              <span>="รูปโรงเรียน"</span>
              <input
                type="text"
                placeholder="____"
                value={answers.q1_3}
                onChange={e => handleChange('q1_3', e.target.value)}
                style={codeBoxInputStyle(checkMatch(answers.q1_3, 'width'))}
                aria-label="ช่องว่างที่ 3 ของข้อ 1"
              />
              <span>="300"&gt;</span>
            </div>
            {isChecked && !q1_ok && (
              <p style={{ margin: '8px 0 0', fontSize: '13px', color: '#fb7185', fontFamily: 'Sarabun' }}>
                💡 เฉลย: เติม <code>src</code>, <code>alt</code> และ <code>width</code>
              </p>
            )}
          </div>

          {/* Question 2 */}
          <div style={{
            padding: '20px',
            borderRadius: '14px',
            border: '1px solid var(--line)',
            background: 'var(--panel2)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <strong style={{ fontSize: '16px', color: 'var(--text)', fontFamily: 'Sarabun' }}>
                2. เติม Attribute ในแท็กลิงก์ให้ถูกต้อง (href)
              </strong>
              {isChecked && (q2_ok ? <CheckCircle2 size={22} color="#22c55e" /> : <XCircle size={22} color="#ef4444" />)}
            </div>
            <div style={{
              background: '#0d0d17',
              padding: '16px 20px',
              borderRadius: '10px',
              fontFamily: 'Fira Code, monospace',
              fontSize: '15px',
              color: '#ddd6fe',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexWrap: 'wrap',
              border: '1px solid var(--line)',
            }}>
              <span>&lt;a</span>
              <input
                type="text"
                placeholder="____"
                value={answers.q2_1}
                onChange={e => handleChange('q2_1', e.target.value)}
                style={codeBoxInputStyle(checkMatch(answers.q2_1, 'href'))}
                aria-label="ช่องว่างของข้อ 2"
              />
              <span>="https://www.school.com"&gt;เว็บไซต์โรงเรียน&lt;/a&gt;</span>
            </div>
            {isChecked && !q2_ok && (
              <p style={{ margin: '8px 0 0', fontSize: '13px', color: '#fb7185', fontFamily: 'Sarabun' }}>
                💡 เฉลย: เติม <code>href</code>
              </p>
            )}
          </div>

          {/* Question 3 */}
          <div style={{
            padding: '20px',
            borderRadius: '14px',
            border: '1px solid var(--line)',
            background: 'var(--panel2)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <strong style={{ fontSize: '16px', color: 'var(--text)', fontFamily: 'Sarabun' }}>
                3. หากต้องการแสดงรูปภาพ student.jpg บนหน้าเว็บ ควรใช้แท็ก ________
              </strong>
              {isChecked && (q3_ok ? <CheckCircle2 size={22} color="#22c55e" /> : <XCircle size={22} color="#ef4444" />)}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '15px', color: 'var(--text)', fontFamily: 'Sarabun' }}>ระบุแท็ก:</span>
              <input
                type="text"
                placeholder="____"
                value={answers.q3_1}
                onChange={e => handleChange('q3_1', e.target.value)}
                style={regularInputStyle(checkMatch(answers.q3_1, '<img>'))}
                aria-label="ช่องว่างของข้อ 3"
              />
            </div>
            {isChecked && !q3_ok && (
              <p style={{ margin: '8px 0 0', fontSize: '13px', color: '#fb7185', fontFamily: 'Sarabun' }}>
                💡 เฉลย: เติม <code>&lt;img&gt;</code>
              </p>
            )}
          </div>

          {/* Question 4 */}
          <div style={{
            padding: '20px',
            borderRadius: '14px',
            border: '1px solid var(--line)',
            background: 'var(--panel2)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <strong style={{ fontSize: '16px', color: 'var(--text)', fontFamily: 'Sarabun' }}>
                4. Attribute ________ ใช้กำหนดข้อความอธิบายรูปภาพ (alt) หรือความกว้างรูปภาพ (width) เช่น
              </strong>
              {isChecked && (q4_ok ? <CheckCircle2 size={22} color="#22c55e" /> : <XCircle size={22} color="#ef4444" />)}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '15px', color: 'var(--text)', fontFamily: 'Sarabun' }}>ระบุ Attribute:</span>
              <input
                type="text"
                placeholder="____"
                value={answers.q4_1}
                onChange={e => handleChange('q4_1', e.target.value)}
                style={regularInputStyle(checkMatch(answers.q4_1, 'width') || checkMatch(answers.q4_1, 'alt'))}
                aria-label="ชื่อ Attribute ของข้อ 4"
              />
            </div>
            <div style={{
              background: '#0d0d17',
              padding: '14px 18px',
              borderRadius: '10px',
              fontFamily: 'Fira Code, monospace',
              fontSize: '15px',
              color: '#ddd6fe',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexWrap: 'wrap',
              border: '1px solid var(--line)',
            }}>
              <span>&lt;img src="book.jpg" alt="รูปหนังสือ"</span>
              <input
                type="text"
                placeholder="____"
                value={answers.q4_2}
                onChange={e => handleChange('q4_2', e.target.value)}
                style={codeBoxInputStyle(checkMatch(answers.q4_2, 'width'))}
                aria-label="ช่องว่างตัวอย่างโค้ดข้อ 4"
              />
              <span>="200"&gt;</span>
            </div>
            {isChecked && !q4_ok && (
              <p style={{ margin: '8px 0 0', fontSize: '13px', color: '#fb7185', fontFamily: 'Sarabun' }}>
                💡 เฉลย: เติม <code>width</code> (หรือ <code>alt</code>)
              </p>
            )}
          </div>

          {/* Question 5 */}
          <div style={{
            padding: '20px',
            borderRadius: '14px',
            border: '1px solid var(--line)',
            background: 'var(--panel2)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <strong style={{ fontSize: '16px', color: 'var(--text)', fontFamily: 'Sarabun' }}>
                5. หากต้องการให้ข้อความ “หน้าถัดไป” สามารถคลิกเพื่อไปยัง page2.html ได้ ควรเติม Attribute ใดลงในช่องว่าง
              </strong>
              {isChecked && (q5_ok ? <CheckCircle2 size={22} color="#22c55e" /> : <XCircle size={22} color="#ef4444" />)}
            </div>
            <div style={{
              background: '#0d0d17',
              padding: '16px 20px',
              borderRadius: '10px',
              fontFamily: 'Fira Code, monospace',
              fontSize: '15px',
              color: '#ddd6fe',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexWrap: 'wrap',
              border: '1px solid var(--line)',
            }}>
              <span>&lt;a</span>
              <input
                type="text"
                placeholder="____"
                value={answers.q5_1}
                onChange={e => handleChange('q5_1', e.target.value)}
                style={codeBoxInputStyle(checkMatch(answers.q5_1, 'href'))}
                aria-label="ช่องว่างของข้อ 5"
              />
              <span>="page2.html"&gt;หน้าถัดไป&lt;/a&gt;</span>
            </div>
            {isChecked && !q5_ok && (
              <p style={{ margin: '8px 0 0', fontSize: '13px', color: '#fb7185', fontFamily: 'Sarabun' }}>
                💡 เฉลย: เติม <code>href</code>
              </p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '14px', marginTop: '28px', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              className="primary-btn"
              onClick={() => setIsChecked(true)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <Check size={18} />
              <span>ตรวจคำตอบ</span>
            </button>

            <button
              className="secondary-btn"
              onClick={() => setShowSolution(v => !v)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <HelpCircle size={18} />
              <span>{showSolution ? 'ซ่อนเฉลย' : 'ดูเฉลยคำตอบ'}</span>
            </button>
          </div>

          <button
            className="secondary-btn"
            onClick={handleReset}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <RotateCcw size={16} />
            <span>เริ่มล้างคำตอบใหม่</span>
          </button>
        </div>

        {/* Answer Key Box */}
        {showSolution && (
          <div style={{
            marginTop: '24px',
            padding: '20px 24px',
            background: 'var(--panel2)',
            borderRadius: '14px',
            border: '1px solid var(--line)',
            textAlign: 'left'
          }}>
            <h4 style={{ margin: '0 0 14px', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text)' }}>
              <HelpCircle size={18} color="#8b5cf6" />
              <span>เฉลยคำตอบแบบฝึกหัด 4.2</span>
            </h4>
            <ol style={{ margin: 0, paddingLeft: '20px', fontFamily: 'Sarabun', fontSize: '15px', lineHeight: '2.2', color: 'var(--text)' }}>
              <li><strong>1.</strong> <code>src</code>, <code>alt</code> และ <code>width</code></li>
              <li><strong>2.</strong> <code>href</code></li>
              <li><strong>3.</strong> <code>&lt;img&gt;</code></li>
              <li><strong>4.</strong> <code>width</code> (หรือ <code>alt</code>)</li>
              <li><strong>5.</strong> <code>href</code></li>
            </ol>
          </div>
        )}
      </div>
    </section>
  )
}
