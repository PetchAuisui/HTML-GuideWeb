import { useState } from 'react'
import { Code2, Monitor, Play, RotateCcw } from 'lucide-react'

export const defaultCode = `<!DOCTYPE html>
<html lang="th">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    <h1>ยินดีต้อนรับสู่เว็บไซต์ของเรา</h1>
  </body>
</html>`
const textCode = `<!DOCTYPE html>
<html lang="th">
<head><meta charset="UTF-8"><title>คู่มือห้องสมุด</title></head>
<body>
  <h1>คู่มือห้องสมุดสีเขียว</h1>
  <p>ยินดีต้อนรับสู่ระบบค้นหาหนังสือ</p>
  <h2>ข้อมูลบริการ</h2>
  <p>อาคาร A ชั้น 2<br>08.00–20.00 น.</p>
</body>
</html>`

export default function CodeSandbox({ lesson2 = false }) {
  const initialCode = lesson2 ? textCode : defaultCode
  const [code, setCode] = useState(initialCode)
  const [preview, setPreview] = useState(initialCode)
  const [missions, setMissions] = useState([false, false, false])
  const reset = () => { setCode(initialCode); setPreview(initialCode); setMissions([false, false, false]) }
  return <section id={lesson2 ? 'playground' : 'sandbox'} className="section-shell playground-section react-learning-section">
    <div className="section-heading"><span>ลงมือทำ · Live Code Sandbox</span><h2>{lesson2 ? 'แก้โค้ด แล้วดูผลลัพธ์ทันที' : 'ทดลองเขียนโครงสร้าง HTML5'}</h2><p>{lesson2 ? 'ลองเปลี่ยนระดับหัวข้อ เพิ่มย่อหน้า หรือจัดข้อมูลหลายบรรทัด' : 'แก้ไขโค้ด แล้วกดรันเพื่อดูผลลัพธ์ในเบราว์เซอร์จำลอง'}</p></div>
    <div className="playground react-code-grid">
      <div className="editor-pane"><div className="pane-title"><span><Code2 size={16} /> HTML</span><div className="react-actions"><button onClick={reset}><RotateCcw size={14} /> เริ่มใหม่</button>{!lesson2 && <button id="sandbox-run-btn" onClick={() => setPreview(code)}><Play size={14} /> รันโค้ด</button>}</div></div>
        <textarea id={lesson2 ? 'code-editor' : 'sandbox-editor'} spellCheck={false} aria-label="พื้นที่แก้ไขโค้ด HTML" value={code} onChange={event => { setCode(event.target.value); if (lesson2) setPreview(event.target.value) }} />
      </div>
      <div className="preview-pane"><div className="pane-title"><span><Monitor size={16} /> PREVIEW</span>{lesson2 && <span className="live-dot">LIVE</span>}</div><iframe id={lesson2 ? 'code-preview' : 'sandbox-preview-iframe'} title="ผลลัพธ์โค้ด HTML" sandbox="" srcDoc={preview} /></div>
    </div>
    {lesson2 && <div className="missions"><strong>ภารกิจทดลอง</strong>{['เปลี่ยนหัวข้อหลักจาก h1 เป็น h2', 'เพิ่มย่อหน้าใหม่ด้วย p', 'เพิ่มข้อมูลหลายบรรทัดด้วย br'].map((label, index) => <label key={label}><input type="checkbox" checked={missions[index]} onChange={event => setMissions(current => current.map((value, i) => i === index ? event.target.checked : value))} /> {label}</label>)}</div>}
  </section>
}
