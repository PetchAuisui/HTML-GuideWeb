import { useState } from 'react'
import { Copy } from 'lucide-react'

export default function CopyButton({ text }) {
  const [status, setStatus] = useState('คัดลอก')
  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
      setStatus('คัดลอกแล้ว!')
    } catch {
      setStatus('คัดลอกไม่ได้ กรุณาเลือกข้อความแล้วคัดลอก')
    }
  }
  return <button type="button" className="secondary-btn copy-code-btn" onClick={copy}><Copy size={14} /><span aria-live="polite">{status}</span></button>
}
