import { useState } from 'react'

const image = '<img src="https://placehold.co/240x140" alt="รูปภาพ">'
const textTasks = [
  { title: 'เปลี่ยนหัวข้อเป็น h2', prompt: 'เปลี่ยน h1 ทั้งแท็กเปิดและแท็กปิดเป็น h2 โดยคงข้อความเดิมไว้', code: '<h1>ห้องสมุดของเรา</h1>', check: d => !d.querySelector('h1') && [...d.querySelectorAll('h2')].some(e => e.textContent.trim() === 'ห้องสมุดของเรา') },
  { title: 'เพิ่มย่อหน้า', prompt: 'คงย่อหน้าเดิมไว้ แล้วเพิ่ม <p> อีกหนึ่งย่อหน้าพร้อมข้อความที่คุณต้องการ', code: '<p>ยินดีต้อนรับสู่ห้องสมุด</p>', check: d => [...d.querySelectorAll('p')].filter(e => e.textContent.trim()).length >= 2 && [...d.querySelectorAll('p')].some(e => e.textContent.trim() === 'ยินดีต้อนรับสู่ห้องสมุด') },
  { title: 'แยกข้อความเป็นสองบรรทัด', prompt: 'ใส่ <br> ระหว่าง “วันจันทร์–ศุกร์” กับ “08.00–20.00 น.”', code: '<p>วันจันทร์–ศุกร์ 08.00–20.00 น.</p>', check: d => [...d.querySelectorAll('p')].some(e => e.innerHTML.match(/วันจันทร์–ศุกร์\s*<br\s*\/?>\s*08\.00–20\.00 น\./i)) },
]
const mediaTasks = [
  { title: 'ใส่คำอธิบายรูปภาพ', prompt: 'แก้ค่า alt จาก “รูปภาพ” เป็น “ภาพตัวอย่างของฉัน” โดยคง src ไว้', code: image, check: d => !!d.querySelector('img[src="https://placehold.co/240x140"][alt="ภาพตัวอย่างของฉัน"]') },
  { title: 'เปลี่ยนปลายทางลิงก์', prompt: 'แก้ href ให้เป็น https://example.com โดยคงข้อความ “อ่านเพิ่มเติม” ไว้', code: '<a href="https://th.wikipedia.org">อ่านเพิ่มเติม</a>', check: d => [...d.querySelectorAll('a')].some(e => e.getAttribute('href') === 'https://example.com' && e.textContent.trim() === 'อ่านเพิ่มเติม') },
  { title: 'เปิดลิงก์ในแท็บใหม่', prompt: 'เพิ่ม target="_blank" ในแท็ก a แล้วกดตรวจคำตอบ จากนั้นลองคลิกลิงก์ในผลลัพธ์', code: '<a href="https://example.com">เปิดเว็บไซต์</a>', check: d => [...d.querySelectorAll('a')].some(e => e.getAttribute('href') === 'https://example.com' && e.getAttribute('target') === '_blank' && e.textContent.trim()) },
  { title: 'ทำให้รูปภาพคลิกได้', prompt: 'ใช้ <a href="https://example.com"> ครอบแท็ก img และปิดด้วย </a>', code: image, check: d => !!d.querySelector('a[href="https://example.com"] img[src="https://placehold.co/240x140"]') },
]

function Task({ task, number }) {
  const [answer, setAnswer] = useState(task.code)
  const [result, setResult] = useState(null)
  const [preview, setPreview] = useState(null)
  const run = () => {
    const parsed = new DOMParser().parseFromString(answer, 'text/html')
    setResult(Boolean(task.check(parsed.body)))
    setPreview(answer)
  }
  return <article className="practice-task">
    <h3>{number}. {task.title}</h3>
    <p><strong>โจทย์:</strong> {task.prompt}</p>
    <div className="practice-source"><strong>โค้ดเริ่มต้น</strong><pre><code>{task.code}</code></pre></div>
    <label htmlFor={`practice-answer-${number}`}><strong>ลงมือทำ — แก้โค้ดในช่องสีขาวนี้</strong></label>
    <textarea id={`practice-answer-${number}`} aria-label={`คำตอบข้อ ${number}`} spellCheck={false} value={answer} onChange={e => { setAnswer(e.target.value); setResult(null); setPreview(null) }} />
    <div className="react-actions"><button className="primary-btn" onClick={run}>ตรวจคำตอบและดูผลลัพธ์</button><button className="secondary-btn" onClick={() => { setAnswer(task.code); setResult(null); setPreview(null) }}>เริ่มข้อนี้ใหม่</button></div>
    <p role="status" className={result === true ? 'practice-pass' : result === false ? 'practice-retry' : ''}>{result === true ? '✓ ถูกต้อง! ทำข้อต่อไปได้เลย' : result === false ? 'ยังไม่ตรงโจทย์ ลองตรวจชื่อแท็กและค่าที่โจทย์กำหนด แล้วแก้ในช่องด้านบนอีกครั้ง' : 'แก้โค้ดแล้วกดปุ่มตรวจคำตอบของข้อนี้'}</p>
    {preview !== null && <div className="practice-result"><strong>ผลลัพธ์ของข้อ {number}</strong><iframe title={`ผลลัพธ์ข้อ ${number}`} sandbox="allow-popups allow-popups-to-escape-sandbox" srcDoc={preview} /></div>}
  </article>
}

export default function ExercisePractice({ media }) {
  const tasks = media ? mediaTasks : textTasks
  return <section id="playground" className="section-shell react-learning-section practice-section">
    <div className="section-heading"><span>ลงมือทำทีละข้อ</span><h2>{media ? 'ฝึกใส่ภาพและลิงก์' : 'ฝึกจัดข้อความด้วย HTML'}</h2><p>แต่ละข้อมีโค้ดและช่องคำตอบของตัวเอง อ่านโจทย์ → แก้โค้ดในช่องสีขาว → กดตรวจคำตอบ</p></div>
    {tasks.map((task, index) => <Task key={`${media}-${index}`} task={task} number={index + 1} />)}
  </section>
}
