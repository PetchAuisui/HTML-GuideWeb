import { useRef } from 'react'
import HtmlCode from './HtmlCode'

export default function CodeEditor({ id, value, onChange, ariaLabel }) {
  const highlight = useRef(null)
  const syncScroll = event => {
    if (!highlight.current) return
    highlight.current.scrollTop = event.currentTarget.scrollTop
    highlight.current.scrollLeft = event.currentTarget.scrollLeft
  }

  return <div className="vscode-editor">
    <pre ref={highlight} aria-hidden="true" className="vscode-editor-highlight"><HtmlCode>{`${value}\n`}</HtmlCode></pre>
    <textarea id={id} spellCheck={false} aria-label={ariaLabel} value={value} onChange={onChange} onScroll={syncScroll} />
  </div>
}
