import { useState } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2, Code2 } from 'lucide-react'
import { steps } from '../data/steps'
import CopyButton from './CopyButton'

export default function StepGuide() {
  const [index, setIndex] = useState(0)
  const step = steps[index]
  const browser = step.browserState
  return <section id="step-by-step" className="react-learning-section">
    <div className="section-heading"><span>Step-by-Step · 6 ขั้นตอน</span><h2>สร้างโครงสร้าง HTML5 ทีละขั้น</h2><p>จากข้อความธรรมดา สู่เอกสารที่มีโครงสร้างครบถ้วน</p></div>
    <div className="react-step-nav" aria-label="เลือกขั้นตอน">{steps.map((item, i) => <button key={item.step} className={i === index ? 'active' : ''} aria-current={i === index ? 'step' : undefined} onClick={() => setIndex(i)}><span>{i < index ? <CheckCircle2 size={18} /> : item.step}</span><code>{item.targetTag}</code></button>)}</div>
    <div className="react-code-grid">
      <div className="react-panel"><span id="step-current-number">ขั้นตอนที่ {step.step} / {steps.length}</span><h3 id="step-current-title">{step.title}</h3><span className="react-badge">{step.badge}</span><p id="step-current-explanation">{step.explanation}</p><aside className="react-notice">{step.focusPoint}</aside>
        <div className="pane-title"><span><Code2 size={16} /> index.html</span><CopyButton key={index} text={step.code} /></div>
        <pre className="react-code" id="step-code-content"><code>{step.code.split('\n').map((line, i) => <span className={step.highlightLines.includes(i + 1) ? 'highlight-line' : ''} key={i}><small>{i + 1}</small>{line}{'\n'}</span>)}</code></pre>
        <div className="react-actions"><button id="step-prev-btn" className="secondary-btn" disabled={index === 0} onClick={() => setIndex(i => i - 1)}><ArrowLeft size={16} /> ย้อนกลับ</button><button id="step-next-btn" className="primary-btn" disabled={index === steps.length - 1} onClick={() => setIndex(i => i + 1)}>{index === steps.length - 1 ? 'สำเร็จครบทุกขั้นตอน 🎉' : 'ขั้นตอนถัดไป'}<ArrowRight size={16} /></button></div>
      </div>
      <div className="react-panel"><div className="pane-title"><span id="step-mockup-tab-title">{browser.tabTitle}</span></div><div className="react-badges"><span>{browser.modeBadge}</span><span>{browser.langBadge}</span><span>{browser.charsetBadge}</span></div><iframe className="react-preview" title="ผลลัพธ์ของขั้นตอน HTML" sandbox="" srcDoc={step.code} /><p className="react-notice" aria-live="polite">{step.calloutText}</p></div>
    </div>
  </section>
}
