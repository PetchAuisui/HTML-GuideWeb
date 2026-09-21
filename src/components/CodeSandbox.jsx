import { useState } from 'react'
import { Code2, Monitor, Play, RotateCcw } from 'lucide-react'
import CodeEditor from './CodeEditor'

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

const mediaCode = `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>สถานที่ท่องเที่ยวแนะนำ</title>
  <style>
    body { font-family: sans-serif; padding: 18px; line-height: 1.6; color: #1e1b4b; }
    h1 { color: #4338ca; font-size: 22px; margin-bottom: 8px; }
    h2 { color: #3730a3; font-size: 18px; margin-top: 0; }
    img { max-width: 100%; height: auto; border-radius: 10px; border: 1px solid #e2e8f0; display: block; margin: 10px 0; }
    .card { border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; margin-bottom: 16px; background: #faf5ff; }
    a { color: #7c3aed; font-weight: bold; text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <h1>สถานที่ท่องเที่ยวแนะนำ</h1>
  <p>ทดลองใช้แท็ก &lt;img&gt; แสดงภาพ และแท็ก &lt;a&gt; ทำลิงก์เชื่อมโยง</p>

  <div class="card">
    <h2>1. ธรรมชาติอันสวยงาม</h2>
    <!-- แท็ก img: แสดงรูปภาพ ระบุ src และ alt -->
    <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80" alt="วิวชายหาดทะเลและคลื่นน้ำสีฟ้า" width="400">
    <p>สัมผัสสายลมและธรรมชาติเพื่อการพักผ่อน</p>
    <!-- แท็ก a: ลิงก์ไปยังภายนอกพร้อม target="_blank" -->
    <a href="https://th.wikipedia.org" target="_blank" rel="noopener noreferrer">อ่านต่อใน Wikipedia &rarr;</a>
  </div>

  <div class="card">
    <h2>2. รูปภาพที่คลิกได้ (Image Link)</h2>
    <!-- รวมร่างแท็ก: ใช้ <a> ครอบ <img> -->
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
      <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=80" alt="คอมพิวเตอร์เขียนโค้ดบนโต๊ะทำงาน" width="400">
    </a>
    <p><small>(ลองคลิกที่รูปภาพด้านบน เพื่อเปิดหน้า MDN Web Docs)</small></p>
  </div>
</body>
</html>`

export default function CodeSandbox({ lesson2 = false, lesson3 = false }) {
  const isLive = lesson2 || lesson3
  const initialCode = lesson3 ? mediaCode : lesson2 ? textCode : defaultCode
  const missionsList = lesson3
    ? ['เปลี่ยน URL หรือข้อความ alt ในแท็ก img', 'ลองเปลี่ยน href ของแท็ก a หรือเพิ่มลิงก์ใหม่', 'สังเกต target="_blank" เมื่อคลิกจะเปิดแท็บใหม่', 'ลองใช้แท็ก a ครอบ img เพื่อทำ Image Link']
    : ['เปลี่ยนหัวข้อหลักจาก h1 เป็น h2', 'เพิ่มย่อหน้าใหม่ด้วย p', 'เพิ่มข้อมูลหลายบรรทัดด้วย br']
  const [code, setCode] = useState(initialCode)
  const [preview, setPreview] = useState(initialCode)
  const [missions, setMissions] = useState(() => missionsList.map(() => false))
  const reset = () => { setCode(initialCode); setPreview(initialCode); setMissions(missionsList.map(() => false)) }

  const sectionId = isLive ? 'playground' : 'sandbox'
  const title = lesson3 ? 'ลองใส่ภาพ ลิงก์ และทดสอบคลิก' : lesson2 ? 'แก้โค้ด แล้วดูผลลัพธ์ทันที' : 'ทดลองเขียนโครงสร้าง HTML5'
  const subtitle = lesson3 ? 'ทดลองปรับแต่ง src, alt, href, target="_blank" และสร้าง Image Link' : lesson2 ? 'ลองเปลี่ยนระดับหัวข้อ เพิ่มย่อหน้า หรือจัดข้อมูลหลายบรรทัด' : 'แก้ไขโค้ด แล้วกดรันเพื่อดูผลลัพธ์ในเบราว์เซอร์จำลอง'

  return <section id={sectionId} className="section-shell playground-section react-learning-section">
    <div className="section-heading"><span>ลงมือทำ · Live Code Sandbox</span><h2>{title}</h2><p>{subtitle}</p></div>
    <div className="playground react-code-grid">
      <div className="editor-pane"><div className="pane-title"><span><Code2 size={16} /> HTML</span><div className="react-actions"><button onClick={reset}><RotateCcw size={14} /> เริ่มใหม่</button>{!isLive && <button id="sandbox-run-btn" onClick={() => setPreview(code)}><Play size={14} /> รันโค้ด</button>}</div></div>
        <CodeEditor id={isLive ? 'code-editor' : 'sandbox-editor'} ariaLabel="พื้นที่แก้ไขโค้ด HTML" value={code} onChange={event => { setCode(event.target.value); if (isLive) setPreview(event.target.value) }} />
      </div>
      <div className="preview-pane"><div className="pane-title"><span><Monitor size={16} /> PREVIEW</span>{isLive && <span className="live-dot">LIVE</span>}</div><iframe id={isLive ? 'code-preview' : 'sandbox-preview-iframe'} title="ผลลัพธ์โค้ด HTML" sandbox="allow-scripts allow-same-origin allow-popups" srcDoc={preview} /></div>
    </div>
    {isLive && <div className="missions"><strong>ภารกิจทดลอง</strong>{missionsList.map((label, index) => <label key={label}><input type="checkbox" checked={missions[index]} onChange={event => setMissions(current => current.map((value, i) => i === index ? event.target.checked : value))} /> {label}</label>)}</div>}
  </section>
}
