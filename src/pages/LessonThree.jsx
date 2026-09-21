import { useLayoutEffect, useState } from 'react'
import {
  ArrowRight as IconArrowRight,
  ExternalLink,
  Image as ImageIcon,
  Link2,
  ShieldCheck,
  Compass,
  FolderTree,
  CheckCircle,
  Lightbulb,
  MousePointerClick
} from 'lucide-react'
import CodeSandbox from '../components/CodeSandbox'
import MediaQuiz from '../components/MediaQuiz'
import { htmlToHighlightedMarkup } from '../components/HtmlCode'

export default function LessonThree() {
  const [activeExample, setActiveExample] = useState('img')

  useLayoutEffect(() => {
    document.querySelectorAll('.page-lesson3 .example-work pre code').forEach(code => {
      code.innerHTML = htmlToHighlightedMarkup(code.textContent)
    })
  }, [activeExample])

  return (
    <main id="top">
      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-copy">
          <span className="eyebrow">BASIC WEBSITE DESIGN · LESSON 03</span>
          <h1>
            เว็บมีชีวิตชีวา<br />
            <span>ด้วย Tag &lt;img&gt; และ &lt;a&gt;</span>
          </h1>
          <p>
            เรียนรู้วิธีใส่รูปภาพเพื่อสื่อสาร ดึงดูดสายตา พร้อมเชื่อมโยงหน้าเว็บเข้าหากันด้วยลิงก์ไฮเปอร์เท็กซ์ตามมาตรฐานสากล
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="#playground">
              เริ่มทดลองเขียน
            </a>
            <a className="text-link" href="#lesson-tags">
              ดูแท็กและตัวอย่าง ↓
            </a>
          </div>
        </div>

        <div className="hero-demo">
          <div className="window-bar">
            <span></span>
            <span></span>
            <span></span>
            <small>media-preview.html</small>
          </div>
          <div className="demo-code">
            <code>
              <b>{'<!-- 1. แทรกรูปภาพพร้อมคำอธิบาย -->'}</b><br />
              <b>{'<img'}</b>{' src='}<span>"nature.jpg"</span>{' alt='}<span>"วิวธรรมชาติป่าเขา"</span><b>{'>'}</b><br /><br />
              <b>{'<!-- 2. สร้างลิงก์เปิดแท็บใหม่ -->'}</b><br />
              <b>{'<a'}</b>{' href='}<span>"https://wikipedia.org"</span>{' target='}<span>"_blank"</span><b>{'>'}</b><br />
              {'  ค้นหาข้อมูลเพิ่มเติม &rarr;'}<br />
              <b>{'</a>'}</b>
            </code>
          </div>
          <div className="demo-result">
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{
                width: '100px',
                height: '75px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #f43f5e, #fb923c)',
                display: 'grid',
                placeItems: 'center',
                color: 'white',
                fontSize: '24px',
                boxShadow: '0 4px 12px rgba(244, 63, 94, 0.25)'
              }}>
                🖼️
              </div>
              <div style={{ flex: 1, minWidth: '180px' }}>
                <strong style={{ display: 'block', fontSize: '16px', marginBottom: '4px', color: 'var(--text)' }}>
                  วิวธรรมชาติป่าเขา
                </strong>
                <a
                  href="https://th.wikipedia.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#f43f5e',
                    fontSize: '14px',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  <span>ค้นหาข้อมูลเพิ่มเติม</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="outcomes">
        <div>
          <strong>2</strong>
          <span>แท็กหลัก</span>
        </div>
        <div>
          <strong>5</strong>
          <span>แอตทริบิวต์</span>
        </div>
        <div>
          <strong>3</strong>
          <span>รูปแบบลิงก์</span>
        </div>
        <div>
          <strong>6</strong>
          <span>ข้อทดสอบ</span>
        </div>
        <p>
          หน่วยที่ 3 เป็นก้าวสำคัญในการเปลี่ยนหน้าเว็บจากข้อความเรียบนิ่ง สู่เว็บเพจแบบมัลติมีเดียที่คลิกนำทางและมีรูปภาพสื่อความหมาย
        </p>
      </section>

      {/* Objectives Section */}
      <section id="objectives" className="section-shell detail-section">
        <div className="section-heading">
          <span>01 · ก่อนเริ่มเรียน</span>
          <h2>สื่อสารด้วยภาพ เปิดทางด้วยลิงก์</h2>
          <p>
            รูปภาพและลิงก์มีไวยากรณ์พิเศษที่ต่างจากแท็กข้อความทั่วไป โดยเฉพาะเรื่อง Attributes และการทำงานแบบ Void Element
          </p>
        </div>

        <div className="objective-grid">
          <article>
            <span className="number-badge">01</span>
            <h3>เข้าใจ Attributes สำคัญ</h3>
            <p>
              ใช้งาน <code>src</code>, <code>alt</code>, <code>href</code>, และ <code>target</code> ได้ถูกต้องตามหน้าที่และตรงตามมาตรฐาน
            </p>
          </article>
          <article>
            <span className="number-badge">02</span>
            <h3>แยกแยะ Void vs Paired Tag</h3>
            <p>
              รู้ว่า <code>&lt;img&gt;</code> เป็นแท็กเดี่ยวไม่มีแท็กปิด ส่วน <code>&lt;a&gt;...&lt;/a&gt;</code> เป็นแท็กคู่ที่ต้องมีเนื้อหาภายใน
            </p>
          </article>
          <article>
            <span className="number-badge">03</span>
            <h3>การผสานพลัง Image Link</h3>
            <p>
              นำแท็ก <code>&lt;a&gt;</code> มาครอบ <code>&lt;img&gt;</code> เพื่อสร้างรูปภาพ ปุ่ม หรือโลโก้ที่ผู้ใช้สามารถคลิกข้ามหน้าได้
            </p>
          </article>
        </div>

        {/* Before / After Visual */}
        <div className="before-after">
          <article>
            <span>ก่อนใส่ภาพและลิงก์</span>
            <div className="raw-text" style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
              <p style={{ margin: '0 0 6px', fontWeight: 'bold' }}>อุทยานแห่งชาติเขาใหญ่</p>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                ภาพทิวเขาและผืนป่า หากสนใจศึกษาข้อมูลสามารถค้นหาต่อได้ที่เว็บไซต์วิกิพีเดีย
              </p>
            </div>
            <p>ผู้ใช้เห็นแต่ตัวหนังสือธรรมดา ไม่เห็นทัศนียภาพ และไม่สามารถคลิกเพื่อไปยังแหล่งข้อมูลอื่นได้ทันที</p>
          </article>

          <IconArrowRight aria-hidden="true" />

          <article>
            <span>หลังใส่ Tag &lt;img&gt; และ &lt;a&gt;</span>
            <div className="mini-document">
              <h3 style={{ fontSize: '18px', margin: '0 0 8px' }}>อุทยานแห่งชาติเขาใหญ่</h3>
              <div style={{
                height: '70px',
                borderRadius: '8px',
                background: 'linear-gradient(90deg, #38bdf8, #818cf8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 600,
                fontSize: '13px',
                marginBottom: '10px'
              }}>
                [ &lt;img src="khaoyai.jpg" alt="ทิวทัศน์เขาใหญ่"&gt; ]
              </div>
              <a href="#demo" onClick={e => e.preventDefault()} style={{ color: '#2563eb', fontWeight: 600, fontSize: '13px' }}>
                อ่านข้อมูลเพิ่มเติมบน Wikipedia &rarr;
              </a>
            </div>
            <p>มีรูปภาพดึงดูดสายตา สื่ออารมณ์ได้ชัดเจน พร้อมลิงก์ที่ผู้ใช้คลิกสำรวจหน้าเว็บอื่นได้ทันที</p>
          </article>
        </div>
      </section>

      {/* Core Tags Section */}
      <section id="lesson-tags" className="section-shell">
        <div className="section-heading">
          <span>หน่วยการเรียนรู้ที่ 3 · เจาะลึก 2 แท็กสำคัญ</span>
          <h2>โครงสร้างและไวยากรณ์ของ &lt;img&gt; และ &lt;a&gt;</h2>
          <p>
            แท็กทั้งสองทำงานร่วมกับ Attributes เป็นหลัก จึงจำเป็นต้องเข้าใจชื่อ Attribute และรูปแบบการใส่ค่าอย่างแม่นยำ
          </p>
        </div>

        <div className="tag-grid">
          <article className="tag-card" style={{ '--lesson3-accent': '#f43f5e', '--lesson3-accent-glow': 'rgba(244, 63, 94, 0.15)' }}>
            <div className="tag-icon"><ImageIcon size={22} /></div>
            <span className="tag-code">&lt;img src="…" alt="…"&gt;</span>
            <h3>แท็กแสดงรูปภาพ (Image)</h3>
            <p>
              แท็กเดี่ยว (Void Tag) ไม่มีแท็กปิด ใช้ดึงภาพมาแสดงผ่านแอตทริบิวต์ <code>src</code> และอธิบายภาพด้วย <code>alt</code>
            </p>
          </article>

          <article className="tag-card" style={{ '--lesson3-accent': '#38bdf8', '--lesson3-accent-glow': 'rgba(56, 189, 248, 0.15)' }}>
            <div className="tag-icon"><Link2 size={22} /></div>
            <span className="tag-code">&lt;a href="…"&gt;ข้อความ&lt;/a&gt;</span>
            <h3>แท็กลิงก์เชื่อมโยง (Anchor)</h3>
            <p>
              แท็กคู่ (Paired Tag) มีแท็กเปิดและแท็กปิด ครอบข้อความหรือวัตถุเพื่อสร้างไฮเปอร์ลิงก์ไปยังหน้าอื่นผ่าน <code>href</code>
            </p>
          </article>

          <article className="tag-card" style={{ '--lesson3-accent': '#10b981', '--lesson3-accent-glow': 'rgba(16, 185, 129, 0.15)' }}>
            <div className="tag-icon"><MousePointerClick size={22} /></div>
            <span className="tag-code">&lt;a&gt;&lt;img&gt;&lt;/a&gt;</span>
            <h3>รูปภาพคลิกได้ (Image Link)</h3>
            <p>
              การผสานพลังโดยนำแท็ก <code>&lt;a&gt;</code> มาครอบ <code>&lt;img&gt;</code> นิยมใช้ทำปุ่มกราฟิก แบนเนอร์ หรือโลโก้เว็บไซต์
            </p>
          </article>
        </div>

        {/* Tabbed Interactive Examples */}
        <div className="example-details-heading" style={{ marginTop: '42px', paddingTop: '32px', borderTop: '1px solid var(--line)' }}>
          <span style={{ color: '#fb7185', fontFamily: 'Fira Code', fontSize: '11px', letterSpacing: '.12em' }}>
            ตัวอย่างและโค้ดสาธิต
          </span>
          <h3 style={{ fontSize: '28px', margin: '6px 0' }}>เลือกรูปแบบแท็กเพื่อศึกษาโค้ด</h3>
          <p style={{ margin: 0, color: 'var(--muted)', fontFamily: 'Sarabun' }}>
            คลิกดูแต่ละแท็บเพื่อดูไวยากรณ์ โค้ด HTML และผลลัพธ์การแสดงผลจริง
          </p>
        </div>

        <div className="example-tabs" role="tablist" aria-label="เลือกหัวข้อตัวอย่างแท็ก HTML">
          <button
            onClick={() => setActiveExample('img')}
            aria-selected={activeExample === 'img'}
            className={`example-tab ${activeExample === 'img' ? 'active' : ''}`}
            role="tab"
          >
            <code>&lt;img&gt;</code>
            <span>แสดงภาพ & alt</span>
          </button>

          <button
            onClick={() => setActiveExample('link-ext')}
            aria-selected={activeExample === 'link-ext'}
            className={`example-tab ${activeExample === 'link-ext' ? 'active' : ''}`}
            role="tab"
          >
            <code>&lt;a&gt; แท็บใหม่</code>
            <span>target="_blank"</span>
          </button>

          <button
            onClick={() => setActiveExample('img-link')}
            aria-selected={activeExample === 'img-link'}
            className={`example-tab ${activeExample === 'img-link' ? 'active' : ''}`}
            role="tab"
          >
            <code>&lt;a&gt;&lt;img&gt;&lt;/a&gt;</code>
            <span>รูปภาพคลิกได้</span>
          </button>

          <button
            onClick={() => setActiveExample('anchor')}
            aria-selected={activeExample === 'anchor'}
            className={`example-tab ${activeExample === 'anchor' ? 'active' : ''}`}
            role="tab"
          >
            <code>href="#id"</code>
            <span>สมอลิงก์ในหน้า</span>
          </button>
        </div>

        <div className="all-examples">
          {/* Tab 1: img */}
          <article hidden={activeExample !== 'img'} className={`open-example ${activeExample === 'img' ? 'active' : ''}`}>
            <header>
              <span style={{ color: '#fb7185', fontFamily: 'Fira Code', fontSize: '11px' }}>ตัวอย่างที่ 1</span>
              <h3><code>&lt;img&gt;</code> การแทรกรูปภาพและระบุข้อความอธิบาย</h3>
              <p>
                แท็ก <code>&lt;img&gt;</code> ต้องระบุ <code>src</code> เพื่อบอกที่อยู่ไฟล์ และ <code>alt</code> เพื่อบอกความหมายของภาพ
              </p>
            </header>
            <div className="example-work">
              <pre>
                <code>{`<!-- ระบุที่อยู่ภาพ และคำอธิบายภาพเสมอ -->
<img 
  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80" 
  alt="ชายหาดทะเล ทรายขาว และน้ำทะเลสีฟ้าใส"
  width="360"
>`}</code>
              </pre>
              <div className="example-preview">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80"
                  alt="ชายหาดทะเล ทรายขาว และน้ำทะเลสีฟ้าใส"
                  style={{ width: '100%', maxWidth: '340px', display: 'block', borderRadius: '8px' }}
                />
                <p style={{ fontSize: '13px', color: '#64748b', margin: '8px 0 0' }}>
                  คำอธิบายภาพ (alt): "ชายหาดทะเล ทรายขาว และน้ำทะเลสีฟ้าใส"
                </p>
              </div>
            </div>
          </article>

          {/* Tab 2: link-ext */}
          <article hidden={activeExample !== 'link-ext'} className={`open-example ${activeExample === 'link-ext' ? 'active' : ''}`}>
            <header>
              <span style={{ color: '#38bdf8', fontFamily: 'Fira Code', fontSize: '11px' }}>ตัวอย่างที่ 2</span>
              <h3><code>&lt;a&gt;</code> ลิงก์เปิดหน้าต่างใหม่ พร้อมความปลอดภัย</h3>
              <p>
                เมื่อต้องการให้คลิกลิงก์แล้วเปิดในแท็บใหม่ ให้ใช้ <code>target="_blank"</code> และใส่ <code>rel="noopener noreferrer"</code> เสมอ
              </p>
            </header>
            <div className="example-work">
              <pre>
                <code>{`<p>
  ศึกษามาตรฐาน HTML5 ฉบับเต็มได้ที่
  <a 
    href="https://developer.mozilla.org" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    MDN Web Docs ↗
  </a>
</p>`}</code>
              </pre>
              <div className="example-preview" style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ margin: 0, fontSize: '16px' }}>
                  ศึกษามาตรฐาน HTML5 ฉบับเต็มได้ที่{' '}
                  <a
                    href="https://developer.mozilla.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#2563eb', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  >
                    <span>MDN Web Docs</span>
                    <ExternalLink size={14} />
                  </a>
                </p>
              </div>
            </div>
          </article>

          {/* Tab 3: img-link */}
          <article hidden={activeExample !== 'img-link'} className={`open-example ${activeExample === 'img-link' ? 'active' : ''}`}>
            <header>
              <span style={{ color: '#10b981', fontFamily: 'Fira Code', fontSize: '11px' }}>ตัวอย่างที่ 3</span>
              <h3><code>&lt;a&gt;&lt;img&gt;&lt;/a&gt;</code> รูปภาพที่คลิกเป็นลิงก์ได้</h3>
              <p>
                นำแท็ก <code>&lt;a&gt;</code> มาครอบแท็ก <code>&lt;img&gt;</code> เพื่อเปลี่ยนภาพให้เป็นปุ่มหรือลิงก์นำทาง
              </p>
            </header>
            <div className="example-work">
              <pre>
                <code>{`<!-- นำแท็ก a ครอบ img -->
<a href="https://th.wikipedia.org" target="_blank" rel="noopener noreferrer">
  <img 
    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=80" 
    alt="คอมพิวเตอร์เขียนโค้ดบนโต๊ะทำงาน"
    width="320"
  >
</a>
<p><small>(ลองนำเมาส์ไปชี้หรือคลิกที่รูปภาพ)</small></p>`}</code>
              </pre>
              <div className="example-preview">
                <a
                  href="https://th.wikipedia.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-block', position: 'relative' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=80"
                    alt="คอมพิวเตอร์เขียนโค้ดบนโต๊ะทำงาน"
                    style={{ width: '100%', maxWidth: '300px', display: 'block', borderRadius: '8px', cursor: 'pointer', transition: 'transform 0.2s' }}
                  />
                </a>
                <p style={{ fontSize: '13px', color: '#64748b', margin: '8px 0 0' }}>
                  🖱️ ชี้เมาส์แล้วเคอร์เซอร์จะเปลี่ยนเป็นรูปมือ (คลิกเพื่อเปิดหน้า Wikipedia)
                </p>
              </div>
            </div>
          </article>

          {/* Tab 4: anchor */}
          <article hidden={activeExample !== 'anchor'} className={`open-example ${activeExample === 'anchor' ? 'active' : ''}`}>
            <header>
              <span style={{ color: '#f59e0b', fontFamily: 'Fira Code', fontSize: '11px' }}>ตัวอย่างที่ 4</span>
              <h3><code>href="#id"</code> ลิงก์ข้ามตำแหน่งในหน้าเดียวกัน (Anchor Link)</h3>
              <p>
                ใส่เครื่องหมาย <code>#</code> ตามด้วยค่า <code>id</code> ของแท็กปลายทาง เพื่อกระโดดไปตำแหน่งนั้นทันที
              </p>
            </header>
            <div className="example-work">
              <pre>
                <code>{`<!-- ลิงก์กระโดดไปตำแหน่งปลายทาง -->
<a href="#playground">กระโดดไปห้องทดลองโค้ด &darr;</a>

<!-- ลิงก์กลับขึ้นบนสุดของหน้า -->
<a href="#top">กลับขึ้นด้านบนสุด &uarr;</a>`}</code>
              </pre>
              <div className="example-preview" style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center' }}>
                <a href="#playground" style={{ color: '#2563eb', fontWeight: 600 }}>
                  &darr; คลิกเพื่อกระโดดไปยังห้องทดลอง (#playground)
                </a>
                <a href="#top" style={{ color: '#4b5563', fontSize: '14px' }}>
                  &uarr; คลิกเพื่อเลื่อนกลับไปบนสุดของหน้า (#top)
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Attributes Deep Dive */}
      <section id="tag-attributes" className="section-shell detail-section">
        <div className="section-heading">
          <span>02 · แอตทริบิวต์หลักที่ต้องรู้</span>
          <h2>พลังของ Attributes ที่กำหนดการทำงาน</h2>
          <p>
            แท็ก HTML เพียงอย่างเดียวบอกแค่ชนิดของข้อมูล แต่ Attributes จะเป็นตัวกำหนดว่าดึงข้อมูลจากที่ไหน และทำงานอย่างไร
          </p>
        </div>

        <div className="attributes-grid">
          {/* Attributes for img */}
          <div className="attribute-card">
            <div className="attribute-card-header">
              <h3 style={{ margin: 0, fontSize: '19px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ImageIcon size={18} color="#f43f5e" />
                <span>Attributes ของ &lt;img&gt;</span>
              </h3>
              <span className="attribute-badge">&lt;img&gt;</span>
            </div>
            <table className="attribute-table">
              <thead>
                <tr>
                  <th>Attribute</th>
                  <th>ความหมายและการใช้งาน</th>
                  <th>ความจำเป็น</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>src</code></td>
                  <td>Source URL: ที่อยู่ไฟล์รูปภาพ (เส้นทางหรือลิงก์)</td>
                  <td><strong style={{ color: '#ef4444' }}>จำเป็นสูงสุด</strong></td>
                </tr>
                <tr>
                  <td><code>alt</code></td>
                  <td>Alternative text: ข้อความอธิบายภาพ สำหรับผู้ใช้และ SEO</td>
                  <td><strong style={{ color: '#f59e0b' }}>ต้องมีเสมอ</strong></td>
                </tr>
                <tr>
                  <td><code>width</code></td>
                  <td>กำหนดความกว้าง (เป็นพิกเซล เช่น width="300")</td>
                  <td>แนะนำ</td>
                </tr>
                <tr>
                  <td><code>height</code></td>
                  <td>กำหนดความสูง (เป็นพิกเซล เช่น height="200")</td>
                  <td>แนะนำ</td>
                </tr>
                <tr>
                  <td><code>loading</code></td>
                  <td>ใส่ <code>loading="lazy"</code> ชะลอโหลดรูปเมื่อเลื่อนมาถึง</td>
                  <td>เสริมประสิทธิภาพ</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Attributes for a */}
          <div className="attribute-card">
            <div className="attribute-card-header">
              <h3 style={{ margin: 0, fontSize: '19px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Link2 size={18} color="#38bdf8" />
                <span>Attributes ของ &lt;a&gt;</span>
              </h3>
              <span className="attribute-badge" style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8' }}>&lt;a&gt;</span>
            </div>
            <table className="attribute-table">
              <thead>
                <tr>
                  <th>Attribute</th>
                  <th>ความหมายและการใช้งาน</th>
                  <th>ความจำเป็น</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>href</code></td>
                  <td>Hypertext Reference: ปลายทาง URL, ไฟล์ หรือ #id</td>
                  <td><strong style={{ color: '#ef4444' }}>จำเป็นสูงสุด</strong></td>
                </tr>
                <tr>
                  <td><code>target</code></td>
                  <td><code>_blank</code> (เปิดแท็บใหม่), <code>_self</code> (เปิดที่เดิม)</td>
                  <td>ตามความต้องการ</td>
                </tr>
                <tr>
                  <td><code>rel</code></td>
                  <td><code>noopener noreferrer</code> ป้องกันความปลอดภัยเมื่อเปิดแท็บใหม่</td>
                  <td><strong style={{ color: '#10b981' }}>จำเป็นเมื่อใช้ _blank</strong></td>
                </tr>
                <tr>
                  <td><code>title</code></td>
                  <td>ข้อความ Tooltip ลอยขึ้นมาเมื่อนำเมาส์ไปชี้ลิงก์</td>
                  <td>เสริมการใช้งาน</td>
                </tr>
                <tr>
                  <td><code>download</code></td>
                  <td>บอกเบราว์เซอร์ให้ดาวน์โหลดไฟล์แทนการเปิดดู</td>
                  <td>เฉพาะกรณีดาวน์โหลด</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Path Comparison Section */}
      <section id="compare-paths" className="section-shell detail-section">
        <div className="section-heading">
          <span>03 · การอ้างอิงตำแหน่งไฟล์</span>
          <h2>Relative Path vs Absolute URL ต่างกันอย่างไร?</h2>
          <p>
            การใส่ที่อยู่ใน <code>src</code> และ <code>href</code> ผิดเป็นสาเหตุอันดับ 1 ที่ทำให้รูปไม่ขึ้นหรือลิงก์เสีย
          </p>
        </div>

        <div className="path-guide-grid">
          <div className="path-box">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <FolderTree size={20} color="#38bdf8" />
              <h3 style={{ margin: 0, fontSize: '20px' }}>1. Relative Path (เส้นทางสัมพันธ์ในเครื่อง)</h3>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.7, margin: '0 0 16px' }}>
              อ้างอิงจากตำแหน่งของไฟล์ HTML ปัจจุบัน เหมาะกับไฟล์รูปภาพและหน้าเว็บภายในเว็บไซต์เดียวกัน ย้ายเครื่องแล้วลิงก์ไม่พัง
            </p>

            <div className="path-visual-card">
              <code>src="banner.jpg"</code>
              <p>ไฟล์รูปภาพอยู่ใน <strong>โฟลเดอร์เดียวกัน</strong> กับไฟล์ HTML</p>
            </div>

            <div className="path-visual-card">
              <code>src="images/banner.jpg"</code>
              <p>รูปภาพอยู่ใน <strong>โฟลเดอร์ย่อยชื่อ images</strong> ที่อยู่ระดับเดียวกัน</p>
            </div>

            <div className="path-visual-card">
              <code>src="../images/banner.jpg"</code>
              <p>เครื่องหมาย <code>..</code> หมายถึงการ <strong>ถอยหลังออกไปหนึ่งชั้นโฟลเดอร์</strong> แล้วเข้าไปที่ images</p>
            </div>
          </div>

          <div className="path-box">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <Compass size={20} color="#f43f5e" />
              <h3 style={{ margin: 0, fontSize: '20px' }}>2. Absolute URL (ที่อยู่เต็มบนอินเทอร์เน็ต)</h3>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.7, margin: '0 0 16px' }}>
              ระบุที่อยู่เต็มพร้อมโปรโตคอล (เช่น <code>https://</code>) เหมาะกับลิงก์ข้ามไปยังเว็บไซต์ภายนอก หรือดึงภาพจาก CDN
            </p>

            <div className="path-visual-card">
              <code>href="https://www.google.com"</code>
              <p>ลิงก์เชื่อมโยงไปยังเว็บไซต์ภายนอก ต้องมี <code>https://</code> นำหน้าเสมอ</p>
            </div>

            <div className="path-visual-card">
              <code>src="https://cdn.example.com/logo.png"</code>
              <p>ดึงไฟล์รูปภาพจากเซิร์ฟเวอร์หรือบริการ CDN ภายนอก</p>
            </div>

            <div className="path-visual-card">
              <code>href="mailto:contact@mysite.com"</code>
              <p>ลิงก์พิเศษ <code>mailto:</code> ใช้เปิดโปรแกรมส่งอีเมลอัตโนมัติ</p>
            </div>
          </div>
        </div>

        {/* Best Practice Checklist */}
        <div className="checklist-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={20} color="#10b981" />
            <h3 style={{ margin: 0, fontSize: '19px' }}>กติกาและแนวปฏิบัติที่ดี (Best Practices)</h3>
          </div>
          <div className="checklist-grid">
            <div className="check-item">
              <CheckCircle size={18} />
              <div>
                <strong>ใส่ alt ทุกครั้ง</strong>
                <p>อย่าละเลย alt เพื่อให้ผู้ใช้ Screen Reader และบอทของ Google อ่านเข้าใจ</p>
              </div>
            </div>
            <div className="check-item">
              <CheckCircle size={18} />
              <div>
                <strong>ตั้งชื่อไฟล์ด้วยภาษาอังกฤษตัวเล็ก</strong>
                <p>เช่น <code>my-profile.jpg</code> ห้ามใช้ภาษาไทยหรือเว้นวรรค</p>
              </div>
            </div>
            <div className="check-item">
              <CheckCircle size={18} />
              <div>
                <strong>ใช้ rel="noopener noreferrer"</strong>
                <p>เมื่อใส่ <code>target="_blank"</code> เสมอเพื่อตัดสิทธิ์การควบคุมหน้าเดิม</p>
              </div>
            </div>
            <div className="check-item">
              <CheckCircle size={18} />
              <div>
                <strong>เลือกฟอร์แมตภาพให้เหมาะสม</strong>
                <p>ภาพถ่ายใช้ JPG/WebP, ภาพไอคอน/โลโก้ใช้ SVG หรือ PNG</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Sandbox Playground */}
      <CodeSandbox lesson3 />

      {/* Quiz & Assessment */}
      <MediaQuiz />

      {/* Footer */}
      <footer>
        <span>HTML Media & Link Lab · หน่วยการเรียนรู้ที่ 3</span>
        <span>พื้นฐานแน่น แล้วค่อยแต่งเว็บให้สวย</span>
      </footer>
    </main>
  )
}
