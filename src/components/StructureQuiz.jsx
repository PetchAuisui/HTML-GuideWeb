import { useEffect, useRef, useState } from 'react'
import { items } from '../data/items'

function shuffledOptions() {
  const result = [...items]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}
export default function StructureQuiz() {
  const [answers, setAnswers] = useState({})
  const [index, setIndex] = useState(0)
  const [options, setOptions] = useState(shuffledOptions)
  const [summary, setSummary] = useState(false)
  const [hint, setHint] = useState(false)
  const [sound, setSound] = useState(true)
  const audio = useRef(null)
  useEffect(() => () => { audio.current?.close() }, [])
  const item = items[index]
  const answer = answers[item.id] || { category: '', meaning: '', checked: false }
  const isCorrect = candidate => candidate?.category === items.find(q => q.id === candidate.id)?.category && candidate.meaning === candidate.id
  const score = Object.values(answers).filter(a => a.checked && isCorrect(a)).length
  function change(field, value) { setAnswers(current => ({ ...current, [item.id]: { ...answer, id: item.id, [field]: value, checked: false } })) }
  function check() {
    setAnswers(current => ({ ...current, [item.id]: { ...answer, id: item.id, checked: true } }))
    if (sound) {
      try {
        const Audio = window.AudioContext || window.webkitAudioContext
        if (!Audio) return
        audio.current ||= new Audio()
        const ctx = audio.current
        ctx.resume()
        const oscillator = ctx.createOscillator(), gain = ctx.createGain()
        oscillator.frequency.value = isCorrect({ ...answer, id: item.id }) ? 660 : 260
        gain.gain.setValueAtTime(0.06, ctx.currentTime)
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2)
        oscillator.connect(gain); gain.connect(ctx.destination)
        oscillator.start(); oscillator.stop(ctx.currentTime + 0.2)
      } catch { /* Sound is optional; scoring remains available. */ }
    }
  }
  function reset() { setAnswers({}); setIndex(0); setSummary(false); setHint(false); setOptions(shuffledOptions()) }
  return <div id="quiz-container" className="react-panel react-quiz"><div className="react-actions"><strong>จับคู่ 6 แท็กโครงสร้าง</strong><button className="secondary-btn" aria-pressed={sound} onClick={() => setSound(value => !value)}>{sound ? 'ปิดเสียง' : 'เปิดเสียง'}</button></div>
    <div className="react-step-nav">{items.map((question, i) => <button key={question.id} className={i === index && !summary ? 'active' : ''} aria-label={`ไปข้อ ${i + 1}`} onClick={() => { setIndex(i); setSummary(false); setHint(false) }}>{i + 1}{answers[question.id]?.checked && (isCorrect(answers[question.id]) ? ' ✓' : ' ✕')}</button>)}</div>
    {!summary ? <><p>ข้อ {index + 1} / {items.length}</p><h3><code>{item.tag}</code></h3><div className="react-quiz-fields"><label>ประเภทแท็ก<select aria-label="ประเภทแท็ก" value={answer.category} onChange={event => change('category', event.target.value)}><option value="">เลือกประเภท</option><option value="system">ควบคุมระบบ (System)</option><option value="display">แสดงผล (Display)</option></select></label><label>ความหมาย<select aria-label="ความหมายของแท็ก" value={answer.meaning} onChange={event => change('meaning', event.target.value)}><option value="">เลือกความหมาย</option>{options.map(option => <option value={option.id} key={option.id}>{option.meaningText}</option>)}</select></label></div>
      <div className="react-actions"><button className="primary-btn" disabled={!answer.category || !answer.meaning} onClick={check}>ตรวจคำตอบ</button><button className="secondary-btn" onClick={() => setHint(value => !value)}>คำใบ้</button></div>{hint && <p className="react-notice">{item.hint}</p>}{answer.checked && <div className={isCorrect({ ...answer, id: item.id }) ? 'react-success' : 'react-notice'} role="status"><strong>{isCorrect({ ...answer, id: item.id }) ? 'ถูกต้อง!' : 'ลองทบทวนอีกครั้ง'}</strong><p>{item.explanation}</p><p>ประเภท: {item.category === 'system' ? 'ควบคุมระบบ' : 'แสดงผล'} · {item.meaningText}</p></div>}
      <div className="react-actions"><button className="secondary-btn" disabled={index === 0} onClick={() => { setIndex(i => i - 1); setHint(false) }}>ข้อก่อนหน้า</button><button className="primary-btn" onClick={() => { if (index === items.length - 1) setSummary(true); else setIndex(i => i + 1); setHint(false) }}>{index === items.length - 1 ? 'ดูสรุปคะแนน' : 'ข้อถัดไป'}</button></div></> : <div aria-live="polite"><h3>คะแนน {score} / {items.length}</h3>{items.map(question => <p key={question.id}><code>{question.tag}</code> — {answers[question.id]?.checked ? isCorrect(answers[question.id]) ? 'ถูกต้อง' : 'ควรทบทวน' : 'ยังไม่ได้ตรวจคำตอบ'}</p>)}{score === items.length && <p className="react-success">ยอดเยี่ยม! เข้าใจครบทั้ง 6 แท็กแล้ว 🎉</p>}</div>}
    <button className="secondary-btn" onClick={reset}>เริ่มใหม่และสุ่มตัวเลือก</button>
  </div>
}
