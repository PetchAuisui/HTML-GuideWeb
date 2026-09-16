import { Fragment } from 'react'

function highlightTag(source, keyPrefix) {
  const parts = source.match(/^(<\/?|<!)([\w-]+)([\s\S]*?)(\/?>)$/)
  if (!parts) return <span className="code-token-text">{source}</span>

  const [, opening, name, attributes, closing] = parts
  const attributeTokens = []
  const pattern = /(\s+)([\w:-]+)(\s*=\s*)("[^"]*"|'[^']*'|[^\s>]+)/g
  let cursor = 0
  let match

  while ((match = pattern.exec(attributes))) {
    attributeTokens.push(attributes.slice(cursor, match.index), match[1])
    attributeTokens.push(<span className="code-token-attr" key={`${keyPrefix}-a-${match.index}`}>{match[2]}</span>)
    attributeTokens.push(<span className="code-token-operator" key={`${keyPrefix}-o-${match.index}`}>{match[3]}</span>)
    attributeTokens.push(<span className="code-token-val" key={`${keyPrefix}-v-${match.index}`}>{match[4]}</span>)
    cursor = match.index + match[0].length
  }
  attributeTokens.push(attributes.slice(cursor))

  return <Fragment>
    <span className="code-token-punct">{opening}</span>
    <span className="code-token-tag">{name}</span>
    {attributeTokens}
    <span className="code-token-punct">{closing}</span>
  </Fragment>
}

export function highlightHtml(source, keyPrefix = 'html') {
  const tokens = source.split(/(<!--[\s\S]*?-->|<![\w-]+(?:\s[^>]*)?>|<\/?[\w-]+(?:\s[^>]*)?\/?>)/g)
  return tokens.filter(Boolean).map((token, index) => token.startsWith('<!--')
    ? <span className="code-token-comment" key={`${keyPrefix}-c-${index}`}>{token}</span>
    : token.startsWith('<')
      ? <Fragment key={`${keyPrefix}-t-${index}`}>{highlightTag(token, `${keyPrefix}-${index}`)}</Fragment>
      : <span className="code-token-text" key={`${keyPrefix}-x-${index}`}>{token}</span>)
}

export function htmlToHighlightedMarkup(source) {
  const escape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  const token = (className, value) => `<span class="${className}">${escape(value)}</span>`
  return source.split(/(<!--[\s\S]*?-->|<![\w-]+(?:\s[^>]*)?>|<\/?[\w-]+(?:\s[^>]*)?\/?>)/g).filter(Boolean).map(part => {
    if (part.startsWith('<!--')) return token('code-token-comment', part)
    if (!part.startsWith('<')) return token('code-token-text', part)
    const pieces = part.match(/^(<\/?|<!)([\w-]+)([\s\S]*?)(\/?>)$/)
    if (!pieces) return token('code-token-text', part)
    const [, opening, name, attributes, closing] = pieces
    let markup = token('code-token-punct', opening) + token('code-token-tag', name)
    let cursor = 0
    const pattern = /(\s+)([\w:-]+)(\s*=\s*)("[^"]*"|'[^']*'|[^\s>]+)/g
    let match
    while ((match = pattern.exec(attributes))) {
      markup += escape(attributes.slice(cursor, match.index) + match[1])
      markup += token('code-token-attr', match[2]) + token('code-token-operator', match[3]) + token('code-token-val', match[4])
      cursor = match.index + match[0].length
    }
    return markup + escape(attributes.slice(cursor)) + token('code-token-punct', closing)
  }).join('')
}

export default function HtmlCode({ children }) {
  return <code>{highlightHtml(String(children))}</code>
}
