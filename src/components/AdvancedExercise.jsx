import { useMemo, useState } from 'react'
import { Lightbulb } from 'lucide-react'

const options = ['h1', 'h2', 'h3', 'h4', 'p', 'br', 'hr']

const questions = [
  { answer: 'h1', role: 'ชื่อเรื่องหลักเพียงหนึ่งเดียวของหน้า', text: 'คู่มือใช้งานห้องสมุดสีเขียวฉบับสมบูรณ์', reason: 'เป็นชื่อเรื่องที่บอกหัวข้อหลักของทั้งหน้า จึงต้องใช้ h1' },
  { answer: 'p', role: 'คำเกริ่นนำหนึ่งใจความ', text: 'คู่มือนี้รวบรวมวิธีค้นหา ยืม คืน และดูแลหนังสือสำหรับนักศึกษาใหม่', reason: 'เป็นข้อความอธิบายที่สมบูรณ์หนึ่งใจความ จึงใช้ p' },
  { answer: 'h2', role: 'หัวข้อใหญ่ลำดับแรกใต้ชื่อหน้า', text: 'การค้นหาหนังสือ', reason: 'เป็นหมวดหลักภายใต้ h1 จึงลดระดับลงมาเป็น h2' },
  { answer: 'p', role: 'รายละเอียดของหมวดการค้นหา', text: 'ค้นหาได้จากชื่อหนังสือ ผู้แต่ง หรือเลขมาตรฐานสากลผ่านช่องค้นหาด้านบน', reason: 'เป็นเนื้อหาที่อธิบายหัวข้อ h2 จึงใช้ p' },
  { answer: 'h3', role: 'หัวข้อย่อยภายในหมวดการค้นหา', text: 'ค้นหาจากคำสำคัญ', reason: 'เป็นหัวข้อย่อยที่อยู่ภายใต้ h2 จึงใช้ h3 ไม่ควรกระโดดไป h4' },
  { answer: 'p', role: 'คำแนะนำของหัวข้อย่อย', text: 'ใช้คำสั้นและเฉพาะเจาะจง เช่น HTML5 หรือ การออกแบบเว็บไซต์', reason: 'เป็นคำอธิบายของ h3 และเป็นหนึ่งใจความ จึงใช้ p' },
  { answer: 'br', role: 'ข้อมูลติดต่อชุดเดียวกันหลายบรรทัด', text: 'เคาน์เตอร์บริการ ↵ อาคาร A ชั้น 2 ↵ โทร. 02-000-0000', reason: 'ข้อมูลทั้งหมดเป็นชุดเดียวกัน แต่ต้องการเปลี่ยนบรรทัด จึงใช้ br' },
  { answer: 'hr', role: 'เปลี่ยนจากเรื่องการค้นหาไปสู่ขั้นตอนบริการ', text: 'วางตัวแบ่งระหว่างสองหมวดเนื้อหา', reason: 'เนื้อหากำลังเปลี่ยนช่วงอย่างมีความหมาย จึงใช้ hr ไม่ใช่ใช้เพื่อเว้นที่ว่าง' },
  { answer: 'h2', role: 'หมวดหลักใหม่ระดับเดียวกับการค้นหา', text: 'การยืมและคืนหนังสือ', reason: 'เป็นหมวดหลักใหม่ที่มีระดับเท่ากับ “การค้นหาหนังสือ” จึงใช้ h2' },
  { answer: 'h3', role: 'หัวข้อย่อยของหมวดการยืมและคืน', text: 'กำหนดวันคืน', reason: 'หัวข้อนี้อยู่ภายใต้หมวด h2 จึงใช้ h3' },
  { answer: 'h4', role: 'รายละเอียดหัวข้อย่อยภายใต้กำหนดวันคืน', text: 'กรณีหนังสืออ้างอิง', reason: 'เป็นประเด็นย่อยที่ซ้อนอยู่ใต้ h3 จึงใช้ h4 และรักษาลำดับโครงสร้าง' },
  { answer: 'p', role: 'ข้อกำหนดหนึ่งใจความใต้หัวข้อระดับสี่', text: 'หนังสืออ้างอิงใช้ได้ภายในห้องสมุดและไม่สามารถยืมออกนอกอาคาร', reason: 'เป็นข้อความอธิบายของ h4 ไม่ใช่หัวข้อใหม่ จึงใช้ p' },
]

export default function AdvancedExercise() {
  const [answers, setAnswers] = useState(() => Array(questions.length).fill(''))
  const [checked, setChecked] = useState(false)
  const [hintLevel, setHintLevel] = useState(0)
  const answered = answers.filter(Boolean).length
  const score = useMemo(() => answers.filter((answer, index) => answer === questions[index].answer).length, [answers])
  const complete = checked && score === questions.length

  const choose = (index, value) => {
    setAnswers(current => current.map((answer, itemIndex) => itemIndex === index ? value : answer))
    setChecked(false)
  }

  const reset = () => {
    setAnswers(Array(questions.length).fill(''))
    setChecked(false)
    setHintLevel(0)
  }

  return (
    <section id="quiz" className="quiz-section advanced-exercise">
      <div className="section-heading">
        <span>05 · แบบฝึกหัดระดับท้าทาย</span>
        <h2>วางโครงสร้างคู่มือห้องสมุด 12 จุด</h2>
        <p>วิเคราะห์ทั้งความหมายและลำดับชั้นของเนื้อหา ห้ามเลือกจากขนาดตัวอักษรเพียงอย่างเดียว</p>
      </div>
      <div className="exercise-card">
        <div className="exercise-intro">
          <div>
            <span className="exercise-kicker">สถานการณ์จำลอง · ระดับ ADVANCED</span>
            <h3>เลือกแท็กให้โครงสร้างไม่กระโดดระดับ</h3>
            <p>แท็กสามารถใช้ซ้ำได้ และบางข้อมีคำตอบที่ดูคล้ายกัน ต้องพิจารณาว่าข้อความอยู่ใต้หัวข้อระดับใด</p>
          </div>
          <div className="exercise-meter"><span>{answered ? `ตอบแล้ว ${answered} จาก ${questions.length} ข้อ` : 'ยังไม่ได้ตอบ'}</span><div><i style={{ width: `${answered / questions.length * 100}%` }} /></div></div>
        </div>
        <div className="tag-bank" aria-label="ตัวเลือกแท็ก">
          {options.map(tag => <span key={tag}>&lt;{tag}&gt;</span>)}
        </div>
        <div className="exercise-lines">
          {questions.map((question, index) => {
            const correct = answers[index] === question.answer
            const stateClass = checked ? (correct ? 'correct' : 'wrong') : ''
            return (
              <label key={`${question.text}-${index}`}>
                <b>{index + 1}</b>
                <select className={`tag-select ${stateClass}`} value={answers[index]} onChange={event => choose(index, event.target.value)} aria-label={`ข้อ ${index + 1}: ${question.role}`}>
                  <option value="">เลือกแท็ก</option>
                  {options.map(tag => <option key={tag} value={tag}>&lt;{tag}&gt;</option>)}
                </select>
                <span><small>หน้าที่: {question.role}</small>{question.text}</span>
              </label>
            )
          })}
        </div>
        <div className="hint-box">
          <Lightbulb aria-hidden="true" />
          <div><strong>คำใบ้แบบไม่เฉลย</strong><p>{hintLevel === 0 ? 'เริ่มจากหา h1 เพียงหนึ่งตัว แล้วมองหาหมวดหลักที่อยู่ระดับเดียวกัน' : hintLevel === 1 ? 'หัวข้อหลักสองหมวดใช้ h2 ส่วนหัวข้อที่อยู่ภายในหมวดใช้ h3 และ h4 ตามลำดับ' : 'p ใช้กับใจความ, br ใช้ในข้อมูลชุดเดียวกัน และ hr ใช้เมื่อเปลี่ยนช่วงเนื้อหา'}</p></div>
          {hintLevel < 2 && <button className="secondary-btn" onClick={() => setHintLevel(level => level + 1)}>คำใบ้ถัดไป</button>}
        </div>
        <div className="exercise-actions">
          <button className="primary-btn" onClick={() => setChecked(true)}>ตรวจคำตอบทั้ง 12 ข้อ</button>
          <button className="secondary-btn" onClick={reset}>เริ่มทำใหม่</button>
          <strong aria-live="polite">{checked ? `${score} / ${questions.length} คะแนน` : ''}</strong>
        </div>
        {checked && (
          <div id="exercise-feedback" aria-live="polite">
            {questions.map((question, index) => (
              <div className={`feedback-row ${answers[index] === question.answer ? 'ok' : 'fix'}`} key={question.text}>
                <strong>ข้อ {index + 1} {answers[index] === question.answer ? 'ถูกต้อง' : `ควรใช้ <${question.answer}>`}</strong>
                <span>{question.reason}</span>
              </div>
            ))}
          </div>
        )}
        {complete && (
          <div className="exercise-solution">
            <div><span>โครงสร้างคำตอบ</span><h3>ลำดับหัวข้อที่สมบูรณ์</h3><pre><code>{`<h1>คู่มือใช้งานห้องสมุด...</h1>\n<p>คู่มือนี้รวบรวม...</p>\n<h2>การค้นหาหนังสือ</h2>\n<p>ค้นหาได้จาก...</p>\n<h3>ค้นหาจากคำสำคัญ</h3>\n<p>ใช้คำสั้น...</p>\n<p>เคาน์เตอร์บริการ<br>อาคาร A ชั้น 2<br>โทร. 02-000-0000</p>\n<hr>\n<h2>การยืมและคืนหนังสือ</h2>\n<h3>กำหนดวันคืน</h3>\n<h4>กรณีหนังสืออ้างอิง</h4>\n<p>หนังสืออ้างอิงใช้ได้...</p>`}</code></pre></div>
            <div className="solution-preview"><h2>คู่มือใช้งานห้องสมุด</h2><p>เนื้อหาถูกจัดจากเรื่องหลัก → หมวด → หัวข้อย่อย → รายละเอียด โดยไม่กระโดดระดับ</p><hr /><strong>ยอดเยี่ยม — ผ่านระดับท้าทายครบ 12 ข้อ</strong></div>
          </div>
        )}
      </div>
    </section>
  )
}
