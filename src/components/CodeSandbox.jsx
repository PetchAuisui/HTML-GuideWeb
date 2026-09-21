import { useState } from 'react'
import ExercisePractice from './ExercisePractice'
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
export default function CodeSandbox({ lesson2 = false, lesson3 = false }) {
  if (lesson2 || lesson3) return <ExercisePractice media={lesson3} />
  return <StructureSandbox />
}

function StructureSandbox() {
  const [code, setCode] = useState(defaultCode)
  const [preview, setPreview] = useState(defaultCode)
  return <section id="sandbox" className="section-shell playground-section react-learning-section">
    <div className="section-heading"><span>ลงมือทำ · Code Sandbox</span><h2>ทดลองเขียนโครงสร้าง HTML5</h2><p>แก้ไขโค้ด แล้วกดรันเพื่อดูผลลัพธ์</p></div>
    <div className="playground react-code-grid">
      <div className="editor-pane"><div className="pane-title"><span>เขียนโค้ดที่นี่</span><div className="react-actions"><button onClick={() => { setCode(defaultCode); setPreview(defaultCode) }}>เริ่มใหม่</button><button id="sandbox-run-btn" onClick={() => setPreview(code)}>รันโค้ด</button></div></div>
        <CodeEditor id="sandbox-editor" ariaLabel="พื้นที่แก้ไขโค้ด HTML" value={code} onChange={event => setCode(event.target.value)} />
      </div>
      <div className="preview-pane"><div className="pane-title">ผลลัพธ์</div><iframe id="sandbox-preview-iframe" title="ผลลัพธ์โค้ด HTML" sandbox="" srcDoc={preview} /></div>
    </div>
  </section>
}
