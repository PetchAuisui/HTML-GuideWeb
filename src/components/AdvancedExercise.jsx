import { useState } from 'react'
import { Lightbulb } from 'lucide-react'
import '../styles/article-exercise.css'

const tags = ['h1', 'h2', 'h3', 'h4', 'p', 'br']
const article = [
  { tag: 'h1', text: 'คู่มือใช้งานห้องสมุดสีเขียวสำหรับนักศึกษาใหม่', reason: 'ชื่อบทความเป็นหัวข้อหลักของทั้งหน้า จึงใช้ h1 เพียงหนึ่งหัวข้อ' },
  { tag: 'p', text: 'ยินดีต้อนรับสู่ห้องสมุดสีเขียว คู่มือนี้จะช่วยแนะนำขั้นตอนการค้นหา ยืม และคืนหนังสืออย่างถูกต้องเพื่อประโยชน์สูงสุดของนักศึกษาทุกคน', reason: 'ข้อความเกริ่นนำอธิบายภาพรวมหนึ่งประเด็น จึงรวมเป็นย่อหน้าด้วย p' },
  { tag: 'h2', text: 'การค้นหาหนังสือ', reason: 'การค้นหาหนังสือเป็นหมวดหลักแรกภายใต้ชื่อบทความ จึงใช้ h2' },
  { tag: 'p', text: 'เริ่มต้นด้วยการใช้งานระบบสืบค้นออนไลน์ คุณสามารถค้นหาด้วยชื่อเรื่อง ชื่อผู้แต่ง หรือคำสำคัญ เพื่อตรวจสอบตำแหน่งจัดเก็บและสถานะของหนังสือ', reason: 'เป็นเนื้อหาอธิบายวิธีค้นหาใต้หมวดหลัก จึงใช้ p' },
  { tag: 'h3', text: 'ค้นหาจากคำสำคัญ', reason: 'วิธีค้นหาจากคำสำคัญเป็นหัวข้อย่อยของการค้นหาหนังสือ จึงใช้ h3' },
  { tag: 'p', text: 'หากไม่ทราบชื่อหนังสือ ให้ลองใช้คำสำคัญ 2–3 คำที่เกี่ยวข้อง เช่น HTML5 หรือการออกแบบเว็บ แล้วจดเลขเรียกหนังสือเพื่อนำไปค้นหาบนชั้น', reason: 'เป็นคำแนะนำต่อเนื่องหนึ่งย่อหน้าภายใต้หัวข้อย่อย จึงใช้ p' },
  { tag: 'br', before: 'เคาน์เตอร์บริการห้องสมุดสีเขียว', text: 'อาคาร A ชั้น 2', after: 'เปิดให้บริการวันจันทร์–ศุกร์ เวลา 08.00–20.00 น.', reason: 'ข้อมูลติดต่อเป็นข้อความชุดเดียวกัน ต้องการขึ้นบรรทัดภายในย่อหน้า จึงใช้ br ซึ่งไม่มีแท็กปิด' },
  { tag: 'h2', text: 'การยืมและคืนหนังสือ', reason: 'เป็นหมวดหลักใหม่ระดับเดียวกับการค้นหาหนังสือ จึงกลับมาใช้ h2', follow: 'เมื่อได้หนังสือที่ต้องการ ให้นำบัตรนักศึกษาไปยื่นขอยืมที่จุดบริการ และโปรดดูแลรักษาหนังสือให้อยู่ในสภาพสมบูรณ์เสมอ' },
  { tag: 'h3', text: 'กำหนดวันคืน', reason: 'กำหนดวันคืนเป็นหัวข้อย่อยภายใต้การยืมและคืนหนังสือ จึงใช้ h3', follow: 'ตรวจสอบวันครบกำหนดคืนทุกครั้ง หากต้องการยืมต่อควรแจ้งเจ้าหน้าที่หรือทำรายการออนไลน์ก่อนถึงกำหนดส่งคืน' },
  { tag: 'h4', text: 'กรณีหนังสืออ้างอิง', reason: 'เป็นกรณีเฉพาะที่ซ้อนอยู่ใต้หัวข้อกำหนดวันคืน จึงใช้ h4 ต่อจาก h3' },
  { tag: 'p', text: 'หนังสืออ้างอิง เช่น พจนานุกรม หรือสารานุกรม อนุญาตให้ใช้งานภายในห้องสมุดเท่านั้น เมื่ออ่านเสร็จแล้วให้วางไว้ ณ จุดพักหนังสือ', reason: 'เป็นข้อความอธิบายเงื่อนไขและข้อปฏิบัติใต้หัวข้อ h4 จึงใช้ p' },
]

function normalize(value) {
  const match = value.trim().toLowerCase().match(/^(?:([a-z][a-z0-9]*)|<\s*([a-z][a-z0-9]*)\s*\/?>)$/)
  if (!match) return ''
  const tag = match[1] || match[2]
  return /\/\s*>$/.test(value.trim()) && tag !== 'br' ? '' : tag
}

function solutionLine(item) {
  if (item.tag === 'br') return `<p>${item.before}<br>\n${item.text}<br>\n${item.after}</p>`
  return `<${item.tag}>${item.text}</${item.tag}>${item.follow ? `\n<p>${item.follow}</p>` : ''}`
}

export default function AdvancedExercise() {
  const [answers, setAnswers] = useState(() => article.map(() => ''))
  const [checked, setChecked] = useState(false)
  const [hint, setHint] = useState(false)
  const answered = answers.filter(value => value.trim()).length
  const score = answers.filter((value, i) => normalize(value) === article[i].tag).length
  const complete = checked && score === article.length

  function blank(index) {
    const correct = normalize(answers[index]) === article[index].tag
    return <span className={`article-tag-slot ${checked ? correct ? 'is-correct' : 'is-wrong' : ''}`}>
      <label htmlFor={`article-tag-${index}`}>{String(index + 1).padStart(2, '0')}</label>
      <input id={`article-tag-${index}`} aria-label={`เติมแท็กช่องที่ ${index + 1}`} aria-invalid={checked && !correct} aria-describedby={checked ? `article-feedback-${index}` : 'article-instructions'} value={answers[index]} onChange={event => { setAnswers(current => current.map((value, i) => i === index ? event.target.value : value)); setChecked(false) }} placeholder="<…>" autoComplete="off" autoCapitalize="none" spellCheck={false} maxLength={30} />
      {checked && <span aria-label={correct ? 'ถูกต้อง' : 'ยังไม่ถูกต้อง'}>{correct ? '✓' : '✕'}</span>}
    </span>
  }

  function closing(index) {
    const tag = normalize(answers[index])
    return <code className="article-closing">{tags.includes(tag) && tag !== 'br' ? `</${tag}>` : '</…>'}</code>
  }

  function reset() { setAnswers(article.map(() => '')); setChecked(false); setHint(false) }

  return <section id="quiz" className="quiz-section advanced-exercise article-exercise">
    <div className="section-heading"><span>05 · แบบฝึกหัดเติมแท็กในบทความ</span><h2>อ่านบทความ แล้วเติม HTML ให้ครบ 11 จุด</h2><p>อ่านเนื้อหาทั้งเรื่อง แล้วเลือกแท็กที่สื่อความหมายและลำดับของแต่ละส่วน</p></div>
    <div className="exercise-card">
      <div className="article-exercise-top"><div><span className="exercise-kicker">ภารกิจ · จัดโครงสร้างบทความ</span><h3>หนึ่งบทความ หลายหน้าที่ของข้อความ</h3></div><span className="article-progress" aria-live="polite">เติมแล้ว {answered} / {article.length} ช่อง</span></div>
      <p id="article-instructions" className="article-instructions">พิมพ์แท็กลงในช่องหมายเลข เช่น h1 หรือ &lt;h1&gt; ใช้แท็กซ้ำได้ ระบบเติมแท็กปิดของข้อความแต่ละช่วงตามที่พิมพ์ให้อัตโนมัติ ส่วน br เป็นแท็กเดี่ยว อ่านบริบทก่อนตัดสินใจ แล้วกดตรวจเมื่อพร้อม</p>
      <div className="tag-bank" aria-label="แท็กที่ใช้ในบทความ">{tags.map(tag => <span key={tag}>&lt;{tag}&gt;</span>)}</div>
      <article className="article-manuscript" aria-label="บทความคู่มือห้องสมุดพร้อมช่องเติมแท็ก">
        <div className="article-paper-heading"><span>ต้นฉบับบทความ</span><span>เติมแท็กที่หายไป</span></div>
        {article.map((item, index) => <div className="article-passage" key={index}>
          {item.tag === 'br' ? <><code className="article-closing">&lt;p&gt;</code>{item.before} {blank(index)}<br />{item.text} <code className="article-closing">&lt;br&gt;</code><br />{item.after}<code className="article-closing">&lt;/p&gt;</code></> : <>{blank(index)}{' '}{item.text}{' '}{closing(index)}</>}
          {item.follow && <div className="article-given-paragraph"><code className="article-closing">&lt;p&gt;</code>{item.follow}<code className="article-closing">&lt;/p&gt;</code></div>}
        </div>)}
      </article>
      <div className="article-hint"><Lightbulb size={20} aria-hidden="true" /><div><button className="secondary-btn" aria-expanded={hint} onClick={() => setHint(value => !value)}>{hint ? 'ซ่อนคำใบ้' : 'ขอคำใบ้'}</button>{hint && <p>เริ่มจากชื่อเรื่องหลัก แล้วหา 2 หมวดใหญ่ที่มีระดับเท่ากัน หัวข้อย่อยซ้อนลงมาตามลำดับ ส่วนข้อความอธิบายใช้ย่อหน้า ข้อมูลติดต่อขึ้นบรรทัดภายในย่อหน้า</p>}</div></div>
      <div className="exercise-actions"><button className="primary-btn" onClick={() => setChecked(true)}>ตรวจคำตอบทั้ง 11 จุด</button><button className="secondary-btn" onClick={reset}>เริ่มทำใหม่</button><strong role="status">{checked ? `${score} / ${article.length} คะแนน` : ''}</strong></div>
      {checked && <div id="exercise-feedback">{article.map((item, index) => <div id={`article-feedback-${index}`} className={`feedback-row ${normalize(answers[index]) === item.tag ? 'ok' : 'fix'}`} key={index}><strong>ช่องที่ {index + 1} {normalize(answers[index]) === item.tag ? 'ถูกต้อง' : `ควรใช้ <${item.tag}>`}</strong><span>{item.reason}</span></div>)}</div>}
      {complete && <details className="article-full-solution"><summary>ครบทุกจุดแล้ว! ดูโค้ดบทความฉบับสมบูรณ์</summary><pre><code>{article.map(solutionLine).join('\n\n')}</code></pre></details>}
    </div>
  </section>
}
