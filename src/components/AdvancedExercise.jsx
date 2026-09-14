import { useState } from 'react'
import { Lightbulb } from 'lucide-react'
import '../styles/article-exercise.css'

const tags = ['h1', 'h2', 'h3', 'h4', 'p', 'br', 'hr']
const article = [
  { tag: 'h1', text: 'คู่มือใช้งานห้องสมุดสีเขียวสำหรับนักศึกษาใหม่', reason: 'ชื่อบทความเป็นหัวข้อหลักของทั้งหน้า จึงใช้ h1 เพียงหนึ่งหัวข้อ' },
  { tag: 'p', text: 'ในวันแรกของการเรียน หลายคนอาจมองห้องสมุดเป็นเพียงสถานที่เงียบ ๆ สำหรับอ่านหนังสือ แต่ห้องสมุดสีเขียวมีทั้งหนังสือเรียน พื้นที่ทำงานร่วมกัน และแหล่งข้อมูลดิจิทัลที่ช่วยให้การเรียนรู้เกิดขึ้นได้ทุกวัน คู่มือนี้จะพาคุณเริ่มตั้งแต่การค้นหาหนังสือที่ต้องการ ไปจนถึงการยืมและคืนอย่างรับผิดชอบ เพื่อให้ทุกคนใช้ทรัพยากรร่วมกันได้อย่างคุ้มค่า ไม่ว่าคุณจะกำลังเตรียมรายงานชิ้นแรกหรือค้นคว้าหัวข้อที่สนใจด้วยตนเอง', reason: 'ข้อความเกริ่นนำอธิบายภาพรวมหนึ่งประเด็น จึงรวมเป็นย่อหน้าด้วย p' },
  { tag: 'h2', text: 'การค้นหาหนังสือ', reason: 'การค้นหาหนังสือเป็นหมวดหลักแรกภายใต้ชื่อบทความ จึงใช้ h2' },
  { tag: 'p', text: 'ก่อนเดินไปที่ชั้นหนังสือ ให้เริ่มจากระบบสืบค้นของห้องสมุด คุณสามารถค้นหาด้วยชื่อเรื่อง ชื่อผู้แต่ง หรือคำที่เกี่ยวข้องกับเนื้อหา เมื่อพบรายการที่สนใจ ควรอ่านรายละเอียดปีที่พิมพ์ ตำแหน่งจัดเก็บ และสถานะการให้บริการร่วมกัน หนังสือชื่อคล้ายกันอาจมีเนื้อหาต่างระดับ บางเล่มเหมาะกับผู้เริ่มต้น ขณะที่บางเล่มเหมาะกับผู้มีพื้นฐานแล้ว การใช้เวลาอ่านรายละเอียดสักเล็กน้อยจะช่วยให้เลือกหนังสือได้ตรงกับงานที่ต้องทำ และลดเวลาที่ใช้เดินค้นหาบนชั้น', reason: 'เป็นเนื้อหาอธิบายวิธีค้นหาใต้หมวดหลัก จึงใช้ p' },
  { tag: 'h3', text: 'ค้นหาจากคำสำคัญ', reason: 'วิธีค้นหาจากคำสำคัญเป็นหัวข้อย่อยของการค้นหาหนังสือ จึงใช้ h3' },
  { tag: 'p', text: 'หากยังไม่ทราบชื่อหนังสือ ให้ลองเขียนคำสำคัญสองหรือสามคำที่อธิบายสิ่งที่ต้องการเรียนรู้ เช่น HTML5 การออกแบบเว็บไซต์ หรือการเข้าถึงข้อมูล จากนั้นเริ่มค้นหาทีละคำแล้วค่อยปรับให้เฉพาะเจาะจงขึ้น เมื่อผลลัพธ์มีจำนวนมากเกินไป อาจเพิ่มคำที่บอกระดับความรู้หรือหัวข้อย่อย แต่ถ้าไม่พบรายการใดเลย ให้ลดจำนวนคำหรือใช้คำที่มีความหมายใกล้เคียงกัน จดเลขเรียกหนังสือไว้ก่อนออกจากหน้าค้นหา และหากยังหาหนังสือไม่พบ สามารถขอคำแนะนำจากเจ้าหน้าที่ตามข้อมูลติดต่อด้านล่าง', reason: 'เป็นคำแนะนำต่อเนื่องหนึ่งย่อหน้าภายใต้หัวข้อย่อย จึงใช้ p' },
  { tag: 'br', before: 'เคาน์เตอร์บริการห้องสมุดสีเขียว', text: 'อาคาร A ชั้น 2', after: 'เปิดให้บริการวันจันทร์–ศุกร์ เวลา 08.00–20.00 น.', reason: 'ข้อมูลติดต่อเป็นข้อความชุดเดียวกัน ต้องการขึ้นบรรทัดภายในย่อหน้า จึงใช้ br ซึ่งไม่มีแท็กปิด' },
  { tag: 'hr', text: '', reason: 'ตรงนี้เปลี่ยนจากเรื่องการค้นหาไปสู่เรื่องการยืมและคืน จึงใช้ hr เพื่อแบ่งช่วงเนื้อหาอย่างมีความหมาย' },
  { tag: 'h2', text: 'การยืมและคืนหนังสือ', reason: 'เป็นหมวดหลักใหม่ระดับเดียวกับการค้นหาหนังสือ จึงกลับมาใช้ h2', follow: 'เมื่อเลือกหนังสือได้แล้ว ให้นำหนังสือพร้อมบัตรนักศึกษาไปที่จุดบริการ ตรวจสอบชื่อรายการและวันคืนทุกครั้งก่อนออกจากห้องสมุด ระหว่างใช้งานควรเก็บหนังสือให้ห่างจากน้ำและอาหาร ใช้ที่คั่นแทนการพับมุม และหลีกเลี่ยงการขีดเขียนลงบนหน้ากระดาษ การดูแลเล่มที่ยืมไปช่วยให้เพื่อนคนถัดไปได้รับหนังสือที่พร้อมใช้งานเช่นเดียวกับคุณ' },
  { tag: 'h3', text: 'กำหนดวันคืน', reason: 'กำหนดวันคืนเป็นหัวข้อย่อยภายใต้การยืมและคืนหนังสือ จึงใช้ h3', follow: 'บันทึกวันครบกำหนดไว้ในปฏิทินและตั้งการเตือนล่วงหน้า หากยังอ่านไม่จบ ควรตรวจสอบเงื่อนไขการยืมต่อก่อนถึงกำหนด เพราะบางรายการอาจมีผู้จองคิวรออยู่ เมื่อนำหนังสือมาคืน ให้ตรวจสอบว่าระบบบันทึกการคืนเรียบร้อยแล้ว หากพบความเสียหายหรือข้อมูลรายการไม่ตรงกัน ควรแจ้งเจ้าหน้าที่ทันทีเพื่อให้ตรวจสอบร่วมกัน' },
  { tag: 'h4', text: 'กรณีหนังสืออ้างอิง', reason: 'เป็นกรณีเฉพาะที่ซ้อนอยู่ใต้หัวข้อกำหนดวันคืน จึงใช้ h4 ต่อจาก h3' },
  { tag: 'p', text: 'หนังสืออ้างอิงบางประเภท เช่น พจนานุกรม สารานุกรม และคู่มือเฉพาะทาง กำหนดให้ใช้งานภายในห้องสมุดเท่านั้น จึงต้องตรวจสอบป้ายกำกับและเงื่อนไขของแต่ละรายการก่อนนำไปใช้ เมื่ออ่านเสร็จแล้ว ให้วางไว้ในจุดพักหนังสือที่จัดเตรียมไว้ เพื่อให้เจ้าหน้าที่นำกลับเข้าชั้นอย่างถูกต้อง หากต้องใช้ข้อมูลในรายงาน ควรจดชื่อผู้แต่ง ชื่อหนังสือ ปีที่พิมพ์ และหน้าที่อ้างอิงให้ครบ การใช้ห้องสมุดอย่างใส่ใจในรายละเอียดเล็ก ๆ เหล่านี้จะทำให้พื้นที่แห่งนี้เป็นแหล่งเรียนรู้ที่ทุกคนเข้าถึงได้อย่างต่อเนื่อง', reason: 'เป็นข้อความอธิบายเงื่อนไขและข้อปฏิบัติใต้หัวข้อ h4 จึงใช้ p' },
]

function normalize(value) {
  const match = value.trim().toLowerCase().match(/^(?:([a-z][a-z0-9]*)|<\s*([a-z][a-z0-9]*)\s*\/?>)$/)
  if (!match) return ''
  const tag = match[1] || match[2]
  return /\/\s*>$/.test(value.trim()) && !['br', 'hr'].includes(tag) ? '' : tag
}

function solutionLine(item) {
  if (item.tag === 'hr') return '<hr>'
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
    return <code className="article-closing">{tags.includes(tag) && !['br', 'hr'].includes(tag) ? `</${tag}>` : '</…>'}</code>
  }

  function reset() { setAnswers(article.map(() => '')); setChecked(false); setHint(false) }

  return <section id="quiz" className="quiz-section advanced-exercise article-exercise">
    <div className="section-heading"><span>05 · แบบฝึกหัดเติมแท็กในบทความ</span><h2>อ่านบทความ แล้วเติม HTML ให้ครบ 12 จุด</h2><p>อ่านเนื้อหาทั้งเรื่อง แล้วเลือกแท็กที่สื่อความหมายและลำดับของแต่ละส่วน</p></div>
    <div className="exercise-card">
      <div className="article-exercise-top"><div><span className="exercise-kicker">ภารกิจ · จัดโครงสร้างบทความ</span><h3>หนึ่งบทความ หลายหน้าที่ของข้อความ</h3></div><span className="article-progress" aria-live="polite">เติมแล้ว {answered} / {article.length} ช่อง</span></div>
      <p id="article-instructions" className="article-instructions">พิมพ์แท็กลงในช่องหมายเลข เช่น h1 หรือ &lt;h1&gt; ใช้แท็กซ้ำได้ ระบบเติมแท็กปิดของข้อความแต่ละช่วงตามที่พิมพ์ให้อัตโนมัติ ส่วน br และ hr เป็นแท็กเดี่ยว อ่านบริบทก่อนตัดสินใจ แล้วกดตรวจเมื่อพร้อม</p>
      <div className="tag-bank" aria-label="แท็กที่ใช้ในบทความ">{tags.map(tag => <span key={tag}>&lt;{tag}&gt;</span>)}</div>
      <article className="article-manuscript" aria-label="บทความคู่มือห้องสมุดพร้อมช่องเติมแท็ก">
        <div className="article-paper-heading"><span>ต้นฉบับบทความ</span><span>เติมแท็กที่หายไป</span></div>
        {article.map((item, index) => <div className={`article-passage ${item.tag === 'hr' ? 'article-divider-gap' : ''}`} key={index}>
          {item.tag === 'br' ? <><code className="article-closing">&lt;p&gt;</code>{item.before} {blank(index)}<br />{item.text} <code className="article-closing">&lt;br&gt;</code><br />{item.after}<code className="article-closing">&lt;/p&gt;</code></> : item.tag === 'hr' ? blank(index) : <>{blank(index)}{' '}{item.text}{' '}{closing(index)}</>}
          {item.follow && <div className="article-given-paragraph"><code className="article-closing">&lt;p&gt;</code>{item.follow}<code className="article-closing">&lt;/p&gt;</code></div>}
        </div>)}
      </article>
      <div className="article-hint"><Lightbulb size={20} aria-hidden="true" /><div><button className="secondary-btn" aria-expanded={hint} onClick={() => setHint(value => !value)}>{hint ? 'ซ่อนคำใบ้' : 'ขอคำใบ้'}</button>{hint && <p>เริ่มจากชื่อเรื่องหลัก แล้วหา 2 หมวดใหญ่ที่มีระดับเท่ากัน หัวข้อย่อยซ้อนลงมาตามลำดับ ส่วนข้อความอธิบายใช้ย่อหน้า ข้อมูลติดต่อขึ้นบรรทัดภายในย่อหน้า และช่วงเปลี่ยนเรื่องใช้ตัวแบ่งเนื้อหา</p>}</div></div>
      <div className="exercise-actions"><button className="primary-btn" onClick={() => setChecked(true)}>ตรวจคำตอบทั้ง 12 จุด</button><button className="secondary-btn" onClick={reset}>เริ่มทำใหม่</button><strong role="status">{checked ? `${score} / ${article.length} คะแนน` : ''}</strong></div>
      {checked && <div id="exercise-feedback">{article.map((item, index) => <div id={`article-feedback-${index}`} className={`feedback-row ${normalize(answers[index]) === item.tag ? 'ok' : 'fix'}`} key={index}><strong>ช่องที่ {index + 1} {normalize(answers[index]) === item.tag ? 'ถูกต้อง' : `ควรใช้ <${item.tag}>`}</strong><span>{item.reason}</span></div>)}</div>}
      {complete && <details className="article-full-solution"><summary>ครบทุกจุดแล้ว! ดูโค้ดบทความฉบับสมบูรณ์</summary><pre><code>{article.map(solutionLine).join('\n\n')}</code></pre></details>}
    </div>
  </section>
}
