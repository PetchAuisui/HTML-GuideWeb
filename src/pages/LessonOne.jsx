import { useState } from 'react'
import { AlertOctagon as IconAlertOctagon, AppWindow as IconAppWindow, BookOpen as IconBookOpen, Box as IconBox, Check as IconCheck, CheckCircle as IconCheckCircle, Code2 as IconCode2, CornerDownRight as IconCornerDownRight, FileCode2 as IconFileCode2, HelpCircle as IconHelpCircle, Languages as IconLanguages, LayoutTemplate as IconLayoutTemplate, Puzzle as IconPuzzle, Settings2 as IconSettings2, Target as IconTarget, Terminal as IconTerminal, X as IconX } from 'lucide-react'
import StepGuide from '../components/StepGuide'
import StructureSimulator from '../components/StructureSimulator'
import StructureQuiz from '../components/StructureQuiz'
import CopyButton from '../components/CopyButton'
import CodeSandbox from '../components/CodeSandbox'
import HtmlCode from '../components/HtmlCode'

export default function LessonOne() {
const [activeTag, setActiveTag] = useState('doctype')
return <>


<section id={"hero"} className={"relative pt-12 pb-16 overflow-hidden"}>
<div className={"absolute inset-0 bg-gradient-to-b from-purple-950/30 via-transparent to-transparent pointer-events-none"}></div>
<div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"}>
<div className={"text-center max-w-3xl mx-auto"}>
<div className={"inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4"}>
<IconTerminal aria-hidden="true" className={"w-3.5 h-3.5 text-purple-400"} />{" HTML5 Foundational System Architecture\n          "}</div>
<h1 className={"text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight sm:leading-tight"}>{"\n            กลุ่มแท็กควบคุมและจัดการ"}<br />
<span className={"bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400"}>{"\n              ระบบพื้นฐานของ HTML\n            "}</span>
</h1>
<p className={"mt-4 text-base sm:text-lg text-slate-300 font-sarabun leading-relaxed"}>{"\n            หากเว็บไซต์ของคุณไม่มีแท็กเหล่านี้ จะเกิดอะไรขึ้น? ทำไมข้อความถึงกลายเป็น "}<span className={"text-amber-400 font-mono font-semibold"}>{"ภาษาต่างดาว"}</span>{", ทำไมโครงสร้างเอกสารถึง "}<span className={"text-rose-400 font-semibold"}>{"แสดงผลผิดเพี้ยน"}</span>{", หรือทำไม Google ถึงหาชื่อเว็บของคุณไม่เจอ? มาดูการทดลองจริงกันเลย!\n          "}</p>

<div className={"mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-7xl mx-auto"}>
<a onClick={() => setActiveTag("doctype")} href={"#deep-dive"} data-tag-target={"doctype"} className={"p-4 sm:p-5 rounded-2xl glass-card text-center group border border-purple-500/30 hover:border-purple-500 flex flex-col items-center justify-center transition " + (activeTag === "doctype" ? "ring-2 ring-purple-500/50 border-purple-500" : "")}>
<span className={"html-tag-label text-xs sm:text-sm font-mono font-bold block transition"}><HtmlCode>{"<!DOCTYPE html>"}</HtmlCode></span>
<span className={"text-[11px] sm:text-xs text-slate-400 font-sarabun mt-1.5 block"}>{"โหมดมาตรฐาน HTML5"}</span>
</a>
<a onClick={() => setActiveTag("html")} href={"#deep-dive"} data-tag-target={"html"} className={"p-4 sm:p-5 rounded-2xl glass-card text-center group border border-purple-500/30 hover:border-purple-500 flex flex-col items-center justify-center transition " + (activeTag === "html" ? "ring-2 ring-purple-500/50 border-purple-500" : "")}>
<span className={"html-tag-label text-xs sm:text-sm font-mono font-bold block transition"}><HtmlCode>{"<html>"}</HtmlCode></span>
<span className={"text-[11px] sm:text-xs text-slate-400 font-sarabun mt-1.5 block"}>{"Root Element & ภาษา"}</span>
</a>
<a onClick={() => setActiveTag("head")} href={"#deep-dive"} data-tag-target={"head"} className={"p-4 sm:p-5 rounded-2xl glass-card text-center group border border-purple-500/30 hover:border-purple-500 flex flex-col items-center justify-center transition " + (activeTag === "head" ? "ring-2 ring-purple-500/50 border-purple-500" : "")}>
<span className={"html-tag-label text-xs sm:text-sm font-mono font-bold block transition"}><HtmlCode>{"<head>"}</HtmlCode></span>
<span className={"text-[11px] sm:text-xs text-slate-400 font-sarabun mt-1.5 block"}>{"คอนเทนเนอร์ Metadata"}</span>
</a>
<a onClick={() => setActiveTag("title")} href={"#deep-dive"} data-tag-target={"title"} className={"p-4 sm:p-5 rounded-2xl glass-card text-center group border border-purple-500/30 hover:border-purple-500 flex flex-col items-center justify-center transition " + (activeTag === "title" ? "ring-2 ring-purple-500/50 border-purple-500" : "")}>
<span className={"html-tag-label text-xs sm:text-sm font-mono font-bold block transition"}><HtmlCode>{"<title>"}</HtmlCode></span>
<span className={"text-[11px] sm:text-xs text-slate-400 font-sarabun mt-1.5 block"}>{"ชื่อแท็บและผลค้นหา"}</span>
</a>
<a onClick={() => setActiveTag("charset")} href={"#deep-dive"} data-tag-target={"charset"} className={"p-4 sm:p-5 rounded-2xl glass-card text-center group border border-purple-500/30 hover:border-purple-500 flex flex-col items-center justify-center transition " + (activeTag === "charset" ? "ring-2 ring-purple-500/50 border-purple-500" : "")}>
<span className={"html-tag-label html-tag-label-long text-xs sm:text-sm font-mono font-bold block transition"}><HtmlCode>{"<meta charset=\"UTF-8\">"}</HtmlCode></span>
<span className={"text-[11px] sm:text-xs text-slate-400 font-sarabun mt-1.5 block"}>{"การเข้ารหัสภาษาไทย"}</span>
</a>
<a onClick={() => setActiveTag("body")} href={"#deep-dive"} data-tag-target={"body"} className={"p-4 sm:p-5 rounded-2xl glass-card text-center group border border-rose-500/30 hover:border-rose-500 flex flex-col items-center justify-center transition " + (activeTag === "body" ? "ring-2 ring-rose-500/50 border-rose-500" : "")}>
<span className={"html-tag-label text-xs sm:text-sm font-mono font-bold block transition"}><HtmlCode>{"<body>"}</HtmlCode></span>
<span className={"text-[11px] sm:text-xs text-slate-400 font-sarabun mt-1.5 block"}>{"พื้นที่แสดงเนื้อหา"}</span>
</a>
</div>
</div>
</div>
</section>

<section id={"learning-goals"} className={"py-14 border-t border-slate-800/80 bg-slate-950/60"}>
<div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}>
<div className={"text-center max-w-3xl mx-auto mb-10"}>
<div className={"inline-flex items-center gap-2 text-purple-400 text-xs font-mono uppercase tracking-wider mb-1"}>
<IconTarget aria-hidden="true" className={"w-4 h-4"} />{" Core Learning Objectives\n        "}</div>
<h2 className={"text-2xl sm:text-3xl font-bold text-white tracking-tight"}>{"\n          เป้าหมายการเรียนรู้: เข้าใจโครงสร้างและหน้าที่ของ Tag\n        "}</h2>
<p className={"text-sm text-slate-400 font-sarabun mt-1"}>{"\n          สรุปความรู้สำคัญ 2 ด้านหลัก (K1 & K2) สำหรับการวางโครงสร้างเว็บเพจด้วย HTML5\n        "}</p>
</div>

<div className={"grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12"}>

<div className={"p-6 rounded-3xl bg-slate-900/80 border border-purple-500/30 relative overflow-hidden group hover:border-purple-500/60 transition"}>
<div className={"absolute top-0 right-0 w-28 h-28 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition"}></div>
<div className={"flex items-center gap-3 mb-3"}>
<span className={"w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/50 text-purple-400 font-mono font-bold text-lg flex items-center justify-center"}>{"\n              K1\n            "}</span>
<div>
<span className={"text-xs font-mono uppercase tracking-wider text-purple-400"}>{"ควบคุม & จัดการระบบ"}</span>
<h3 className={"text-base font-bold text-white"}>{"กลุ่มแท็กควบคุมหรือกำหนดข้อมูลของเว็บเพจ"}</h3>
</div>
</div>
<p className={"text-sm text-slate-300 font-sarabun leading-relaxed"}>{"\n            สามารถ "}<strong>{"จำแนกและระบุหน้าที่"}</strong>{" ของกลุ่มแท็กที่ใช้ควบคุมการทำงานเบื้องหลัง เช่น "}<code className={"text-orange-400"}>{"<!DOCTYPE>"}</code>{", "}<code className={"text-orange-400"}>{"<html>"}</code>{", "}<code className={"text-orange-400"}>{"<head>"}</code>{", "}<code className={"text-orange-400"}>{"<title>"}</code>{", "}<code className={"text-orange-400"}>{"<meta>"}</code>{" ซึ่งส่วนใหญ่ "}<strong>{"ไม่แสดงเป็นเนื้อหาหลักบนหน้าจอ"}</strong>
</p>
</div>

<div className={"p-6 rounded-3xl bg-slate-900/80 border border-rose-500/30 relative overflow-hidden group hover:border-rose-500/60 transition"}>
<div className={"absolute top-0 right-0 w-28 h-28 bg-rose-500/10 rounded-full blur-2xl group-hover:bg-rose-500/20 transition"}></div>
<div className={"flex items-center gap-3 mb-3"}>
<span className={"w-10 h-10 rounded-xl bg-rose-600/30 border border-rose-500/50 text-rose-400 font-mono font-bold text-lg flex items-center justify-center"}>{"\n              K2\n            "}</span>
<div>
<span className={"text-xs font-mono uppercase tracking-wider text-rose-400"}>{"แสดงผลบนหน้าจอ"}</span>
<h3 className={"text-base font-bold text-white"}>{"กลุ่มแท็กแสดงเนื้อหาบนหน้าจอผู้ใช้"}</h3>
</div>
</div>
<p className={"text-sm text-slate-300 font-sarabun leading-relaxed"}>{"\n            สามารถ "}<strong>{"ระบุแท็กที่ทำหน้าที่แสดงเนื้อหา"}</strong>{" พร้อมระบุตำแหน่งการทำงานได้อย่างถูกต้อง ทุกสิ่งที่ผู้ใช้มองเห็นและโต้ตอบได้จะถูกบรรจุไว้ใน "}<code className={"text-rose-400"}>{"<body>"}</code>{" (เช่น "}<code className={"text-rose-300"}>{"<h1>"}</code>{", "}<code className={"text-rose-300"}>{"<p>"}</code>{", "}<code className={"text-rose-300"}>{"<img>"}</code>{", "}<code className={"text-rose-300"}>{"<button>"}</code>{")\n          "}</p>
</div>
</div>

<div id={"browser-observation"} className={"glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 max-w-5xl mx-auto scroll-mt-20"}>
<div className={"flex items-center gap-3 mb-6 pb-4 border-b border-slate-800"}>
<div className={"w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center"}>
<IconHelpCircle aria-hidden="true" className={"w-5 h-5"} />
</div>
<div>
<h3 className={"text-lg font-bold text-white"}>{"เบราว์เซอร์รู้ได้ยังไงว่าต้องโชว์อะไรตรงไหน? (ข้อสังเกตการแสดงผล)"}</h3>
<p className={"text-xs text-slate-400 font-sarabun"}>{"สังเกต 2 ตำแหน่งหลักบนโปรแกรมเว็บเบราว์เซอร์"}</p>
</div>
</div>
<div className={"grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"}>

<div className={"lg:col-span-5 space-y-4"}>

<div className={"p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-purple-500/50 transition"}>
<div className={"flex items-start gap-3"}>
<span className={"w-6 h-6 rounded-full bg-purple-600/30 text-purple-400 flex items-center justify-center font-bold text-xs font-mono shrink-0 mt-0.5"}>{"1"}</span>
<div>
<h4 className={"text-sm font-semibold text-white"}>{"ข้อความบนแท็บบนสุด (Tab Bar)"}</h4>
<p className={"text-xs text-slate-400 font-sarabun mt-1"}>{"ชื่อเรื่องที่อยู่บนแท็บเบราว์เซอร์มาจากไหน?"}</p>
<div className={"mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-mono"} style={{"background": "#581c87", "borderColor": "#8b5cf6", "color": "#e9d5ff"}}>
<IconCornerDownRight aria-hidden="true" className={"w-3.5 h-3.5"} />{" คำตอบ: มาจากแท็ก "}<strong>{"<title>"}</strong>{" ใน <head>\n                  "}</div>
</div>
</div>
</div>

<div className={"p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-rose-500/50 transition"}>
<div className={"flex items-start gap-3"}>
<span className={"w-6 h-6 rounded-full bg-rose-600/30 text-rose-400 flex items-center justify-center font-bold text-xs font-mono shrink-0 mt-0.5"}>{"2"}</span>
<div>
<h4 className={"text-sm font-semibold text-white"}>{"ข้อความบนพื้นที่แสดงผล (Viewport / Canvas)"}</h4>
<p className={"text-xs text-slate-400 font-sarabun mt-1"}>{"เนื้อหาทั้งหมดในพื้นที่สีขาว คอมพิวเตอร์รู้ได้ยังไงว่าเป็นสิ่งที่ต้องมองเห็น?"}</p>
<div className={"mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-mono"} style={{"background": "#4c0519", "borderColor": "#f43f5e", "color": "#fecdd3"}}>
<IconCornerDownRight aria-hidden="true" className={"w-3.5 h-3.5"} />{" คำตอบ: มาจากแท็ก "}<strong>{"<body>"}</strong>
</div>
</div>
</div>
</div>
</div>

<div className={"lg:col-span-7"}>
<div className={"rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-xl relative"}>

<div className={"bg-slate-950 px-4 pt-3 pb-2 border-b border-slate-800 relative"}>
<div className={"flex items-center gap-4"}>
<div className={"flex items-center gap-1.5"}>
<div className={"w-2.5 h-2.5 rounded-full bg-red-500/80"}></div>
<div className={"w-2.5 h-2.5 rounded-full bg-yellow-500/80"}></div>
<div className={"w-2.5 h-2.5 rounded-full bg-green-500/80"}></div>
</div>

<div className={"flex-1 max-w-xs relative"}>
<div className={"px-3 py-1.5 rounded-t-lg bg-slate-800 border-t-2 border-purple-500 flex items-center justify-between text-xs text-purple-200 font-medium"}>
<span className={"truncate font-mono"}>{"Document"}</span>
<span className={"text-[10px] px-1.5 py-0.2 rounded bg-purple-500/30 text-purple-300 font-mono"}>{"จุดที่ 1"}</span>
</div>
</div>
</div>
<div className={"mt-2 bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg text-[11px] font-mono text-slate-400"}>{"\n                  http://127.0.0.1:5500/index.html\n                "}</div>
</div>

<div className={"bg-white p-8 text-slate-900 min-h-[180px] relative flex flex-col justify-center"}>
<div className={"absolute top-2 right-2"}>
<span className={"text-[10px] px-2 py-0.5 rounded bg-rose-500 text-white font-mono font-bold shadow"}>{"\n                    จุดที่ 2 (พื้นที่สีขาว)\n                  "}</span>
</div>
<h1 className={"text-2xl font-bold text-slate-900 font-prompt"}>{"ยินดีต้อนรับสู่เว็บไซต์ของเรา"}</h1>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<StepGuide />

<StructureSimulator />

<section id={"deep-dive"} className={"py-16 border-t border-slate-800/80"}>
<div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}>
<div className={"text-center max-w-3xl mx-auto mb-10"}>
<div className={"inline-flex items-center gap-2 text-purple-400 text-xs font-mono uppercase tracking-wider mb-1"}>
<IconBookOpen aria-hidden="true" className={"w-4 h-4"} />{" Deep-Dive Guide\n        "}</div>
<h2 className={"text-2xl sm:text-4xl font-bold text-white tracking-tight"}>{"\n          เจาะลึก 6 แท็กพื้นฐานของ HTML\n        "}</h2>
<p className={"mt-2 text-sm text-slate-400 font-sarabun"}>{"\n          ทำความเข้าใจหน้าที่ ไวยากรณ์ และตารางเปรียบเทียบผลกระทบ \"เมื่อมี\" vs \"เมื่อไม่มี\" แบบละเอียด\n        "}</p>

<div className={"mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 p-3 rounded-2xl glass-panel max-w-7xl mx-auto items-center"}>
<button onClick={() => setActiveTag("doctype")} className={"tag-tab-btn px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-semibold flex items-center justify-center gap-1.5 transition " + (activeTag === "doctype" ? "tag-tab-active bg-purple-600 text-white shadow-lg" : "tag-tab-inactive bg-slate-800/80 text-slate-400")} aria-pressed={activeTag === "doctype"} data-tag-target={"doctype"}>
<IconFileCode2 aria-hidden="true" className={"w-4 h-4 shrink-0"} />
<span className={"whitespace-nowrap"}>{"<!DOCTYPE html>"}</span>
</button>
<button onClick={() => setActiveTag("html")} className={"tag-tab-btn px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-semibold flex items-center justify-center gap-1.5 transition " + (activeTag === "html" ? "tag-tab-active bg-purple-600 text-white shadow-lg" : "tag-tab-inactive bg-slate-800/80 text-slate-400")} aria-pressed={activeTag === "html"} data-tag-target={"html"}>
<IconBox aria-hidden="true" className={"w-4 h-4 shrink-0"} />
<span className={"whitespace-nowrap"}>{"<html>"}</span>
</button>
<button onClick={() => setActiveTag("head")} className={"tag-tab-btn px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-semibold flex items-center justify-center gap-1.5 transition " + (activeTag === "head" ? "tag-tab-active bg-purple-600 text-white shadow-lg" : "tag-tab-inactive bg-slate-800/80 text-slate-400")} aria-pressed={activeTag === "head"} data-tag-target={"head"}>
<IconSettings2 aria-hidden="true" className={"w-4 h-4 shrink-0"} />
<span className={"whitespace-nowrap"}>{"<head>"}</span>
</button>
<button onClick={() => setActiveTag("title")} className={"tag-tab-btn px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-semibold flex items-center justify-center gap-1.5 transition " + (activeTag === "title" ? "tag-tab-active bg-purple-600 text-white shadow-lg" : "tag-tab-inactive bg-slate-800/80 text-slate-400")} aria-pressed={activeTag === "title"} data-tag-target={"title"}>
<IconAppWindow aria-hidden="true" className={"w-4 h-4 shrink-0"} />
<span className={"whitespace-nowrap"}>{"<title>"}</span>
</button>
<button onClick={() => setActiveTag("charset")} className={"tag-tab-btn px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-semibold flex items-center justify-center gap-1.5 transition " + (activeTag === "charset" ? "tag-tab-active bg-purple-600 text-white shadow-lg" : "tag-tab-inactive bg-slate-800/80 text-slate-400")} aria-pressed={activeTag === "charset"} data-tag-target={"charset"}>
<IconLanguages aria-hidden="true" className={"w-4 h-4 shrink-0"} />
<span className={"whitespace-nowrap"}>{"<meta charset=\"UTF-8\">"}</span>
</button>
<button onClick={() => setActiveTag("body")} className={"tag-tab-btn px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-semibold flex items-center justify-center gap-1.5 transition " + (activeTag === "body" ? "tag-tab-active bg-purple-600 text-white shadow-lg" : "tag-tab-inactive bg-slate-800/80 text-slate-400")} aria-pressed={activeTag === "body"} data-tag-target={"body"}>
<IconLayoutTemplate aria-hidden="true" className={"w-4 h-4 shrink-0"} />
<span className={"whitespace-nowrap"}>{"<body>"}</span>
</button>
</div>
</div>

<div className={"max-w-5xl mx-auto"}>

<div hidden={activeTag !== "doctype"} id={"tag-panel-doctype"} className={"tag-detail-panel space-y-6"}>
<div className={"glass-card p-6 sm:p-8 rounded-3xl border border-purple-500/30"}>
<div className={"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800"}>
<div>
<div className={"flex items-center gap-2"}>
<span className={"px-3 py-1 rounded-lg bg-orange-500/20 text-orange-400 font-mono text-sm font-bold border border-orange-500/30"}>{"\n                    <!DOCTYPE html>\n                  "}</span>
<span className={"text-xs text-slate-400 font-sarabun"}>{"Document Type Declaration"}</span>
</div>
<h3 className={"text-xl font-bold text-white mt-2"}>{"ประกาศชนิดเอกสาร HTML5"}</h3>
</div>
<div className={"text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 shrink-0"}>{"\n                ตำแหน่ง: "}<span className={"text-purple-400"}>{"บรรทัดที่ 1 บนสุดเสมอ"}</span>
</div>
</div>

<div className={"py-4 text-sm text-slate-300 font-sarabun leading-relaxed space-y-2"}>
<p>
<strong>{"<!DOCTYPE html>"}</strong>{" ไม่ใช่แท็ก HTML แต่เป็น "}<strong>{"\"คำสั่งบอกเบราว์เซอร์ (Declaration)\""}</strong>{" ว่าเอกสารนี้เขียนขึ้นตามมาตรฐาน "}<strong>{"HTML5"}</strong>{" เพื่อสั่งให้เบราว์เซอร์เรนเดอร์ใน "}<strong>{"Standards Mode (โหมดมาตรฐาน)"}</strong>
</p>
</div>

<div className={"grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"}>

<div className={"p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-3"}>
<div className={"flex items-center gap-2 text-emerald-400 font-bold text-sm"}>
<IconCheckCircle aria-hidden="true" className={"w-4 h-4"} />{" ผลลัพธ์เมื่อมีแท็กนี้ (With)\n                "}</div>
<ul className={"text-xs text-slate-300 space-y-2 font-sarabun"}>
<li className={"flex items-start gap-2"}>
<IconCheck aria-hidden="true" className={"w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"} />
<span><strong>{"Standards Mode (HTML5):"}</strong>{" เบราว์เซอร์ประมวลผลโครงสร้างเอกสารตามมาตรฐาน W3C Standard สากล"}</span>
</li>
<li className={"flex items-start gap-2"}>
<IconCheck aria-hidden="true" className={"w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"} />
<span>{"การจัดวางโครงสร้างแท็ก HTML ทำงานสม่ำเสมอตรงกันในทุกเบราว์เซอร์ (Chrome, Safari, Firefox, Edge)"}</span>
</li>
<li className={"flex items-start gap-2"}>
<IconCheck aria-hidden="true" className={"w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"} />
<span>{"ฟอนต์และองค์ประกอบหน้าเว็บแสดงผลอย่างถูกต้องตามมาตรฐานยุคใหม่"}</span>
</li>
</ul>
</div>

<div className={"p-5 rounded-2xl bg-rose-950/30 border border-rose-500/30 space-y-3"}>
<div className={"flex items-center gap-2 text-rose-400 font-bold text-sm"}>
<IconAlertOctagon aria-hidden="true" className={"w-4 h-4"} />{" ผลกระทบเมื่อไม่มีแท็กนี้ (Without)\n                "}</div>
<ul className={"text-xs text-slate-300 space-y-2 font-sarabun"}>
<li className={"flex items-start gap-2"}>
<IconX aria-hidden="true" className={"w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5"} />
<span><strong>{"ตกสู่ Quirks Mode:"}</strong>{" เบราว์เซอร์จะจำลองการแสดงผลเหมือนเบราว์เซอร์ยุคเก่า (Legacy Browser)"}</span>
</li>
<li className={"flex items-start gap-2"}>
<IconX aria-hidden="true" className={"w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5"} />
<span><strong>{"โครงสร้างเพี้ยน:"}</strong>{" การตีความแท็กต่างๆ จะไม่เป็นไปตามมาตรฐาน HTML5 อาจทำให้หน้าเว็บแสดงผลไม่ตรงกันในแต่ละบราวเซอร์"}</span>
</li>
<li className={"flex items-start gap-2"}>
<IconX aria-hidden="true" className={"w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5"} />
<span>{"องค์ประกอบ HTML พื้นฐานและฟอนต์แสดงผลกระโดดหรือไม่เท่ากันในแต่ละโปรแกรม"}</span>
</li>
</ul>
</div>
</div>

<div className={"mt-6 p-4 rounded-2xl bg-slate-950 border border-slate-800"}>
<div className={"flex justify-between items-center mb-2"}>
<span className={"text-xs text-slate-400 font-mono"}>{"ตัวอย่างการใช้งานที่ถูกต้อง:"}</span>
<CopyButton text={"<!DOCTYPE html>\n<html lang=\"th\">\n  ...\n</html>"} />
</div>
<pre style={{"background": "#1e1e1e", "padding": "12px 16px", "borderRadius": "10px", "fontSize": "12px", "fontFamily": "'Fira Code',monospace", "color": "#e2e8f0", "lineHeight": "1.8", "overflowX": "auto"}}><code id={"code-sample-doctype"}><span className={"code-token-punct"}>{"<!"}</span><span className={"code-token-tag"}>{"DOCTYPE"}</span>{" "}<span className={"code-token-attr"}>{"html"}</span><span className={"code-token-punct"}>{">"}</span>{"\n"}<span className={"code-token-punct"}>{"<"}</span><span className={"code-token-tag"}>{"html"}</span>{" "}<span className={"code-token-attr"}>{"lang"}</span>{"="}<span className={"code-token-val"}>{"\"th\""}</span><span className={"code-token-punct"}>{">"}</span>{"\n  ...\n"}<span className={"code-token-punct"}>{"</"}</span><span className={"code-token-tag"}>{"html"}</span><span className={"code-token-punct"}>{">"}</span></code></pre>
</div>
</div>
</div>

<div hidden={activeTag !== "html"} id={"tag-panel-html"} className={"tag-detail-panel space-y-6"}>
<div className={"glass-card p-6 sm:p-8 rounded-3xl border border-purple-500/30"}>
<div className={"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800"}>
<div>
<div className={"flex items-center gap-2"}>
<span className={"px-3 py-1 rounded-lg bg-orange-500/20 text-orange-400 font-mono text-sm font-bold border border-orange-500/30"}>{"\n                    <html lang=\"th\">\n                  "}</span>
<span className={"text-xs text-slate-400 font-sarabun"}>{"Root Element"}</span>
</div>
<h3 className={"text-xl font-bold text-white mt-2"}>{"รากฐานหลักของโครงสร้างเอกสาร HTML"}</h3>
</div>
<div className={"text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 shrink-0"}>{"\n                ตำแหน่ง: "}<span className={"text-purple-400"}>{"ครอบ <head> และ <body> ทั้งหมด"}</span>
</div>
</div>

<div className={"py-4 text-sm text-slate-300 font-sarabun leading-relaxed space-y-2"}>
<p>
<strong>{"<html>"}</strong>{" คือ Element สูงสุด (Root Element) ของหน้าเว็บทุกหน้า และการใส่แอตทริบิวต์ "}<code className={"text-purple-300"}>{"lang=\"th\""}</code>{" เป็นสิ่งจำเป็นอย่างยิ่งในการระบุว่าเนื้อหาของหน้านี้เป็น "}<strong>{"ภาษาไทย"}</strong>
</p>
</div>

<div className={"grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"}>

<div className={"p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-3"}>
<div className={"flex items-center gap-2 text-emerald-400 font-bold text-sm"}>
<IconCheckCircle aria-hidden="true" className={"w-4 h-4"} />{" ผลลัพธ์เมื่อมีแท็กนี้ (With)\n                "}</div>
<ul className={"text-xs text-slate-300 space-y-2 font-sarabun"}>
<li className={"flex items-start gap-2"}>
<IconCheck aria-hidden="true" className={"w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"} />
<span><strong>{"Accessibility สมบูรณ์:"}</strong>{" เครื่องมืออ่านหน้าจอสำหรับผู้พิการทางสายตา (Screen Readers) สามารถเลือกเสียงอ่านภาษาไทยได้อย่างถูกต้องชัดเจน"}</span>
</li>
<li className={"flex items-start gap-2"}>
<IconCheck aria-hidden="true" className={"w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"} />
<span><strong>{"ระบบแปลภาษาแม่นยำ:"}</strong>{" Google Chrome / Safari สามารถตรวจจับภาษาเพื่อเสนอการแปลหน้าเว็บได้อย่างถูกต้อง"}</span>
</li>
<li className={"flex items-start gap-2"}>
<IconCheck aria-hidden="true" className={"w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"} />
<span>{"ช่วยให้เบราว์เซอร์และระบบปฏิบัติการจัดการชุดอักขระและหลักการตัดคำภาษาไทยได้อย่างถูกต้อง"}</span>
</li>
</ul>
</div>

<div className={"p-5 rounded-2xl bg-rose-950/30 border border-rose-500/30 space-y-3"}>
<div className={"flex items-center gap-2 text-rose-400 font-bold text-sm"}>
<IconAlertOctagon aria-hidden="true" className={"w-4 h-4"} />{" ผลกระทบเมื่อไม่มีแท็กนี้ (Without)\n                "}</div>
<ul className={"text-xs text-slate-300 space-y-2 font-sarabun"}>
<li className={"flex items-start gap-2"}>
<IconX aria-hidden="true" className={"w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5"} />
<span><strong>{"Screen Reader อ่านเพี้ยน:"}</strong>{" โปรแกรมช่วยอ่านอาจพยายามอ่านคำภาษาไทยด้วยการสะกดทีละตัวอักษรภาษาอังกฤษ"}</span>
</li>
<li className={"flex items-start gap-2"}>
<IconX aria-hidden="true" className={"w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5"} />
<span><strong>{"เบราว์เซอร์ Auto-repair:"}</strong>{" แม้เบราว์เซอร์จะพยายามสร้างโหนด "}<code className={"text-rose-300"}>{"<html>"}</code>{" ให้ แต่จะไม่รู้ภาษาต้นทางและทำลายความถูกต้องของโครงสร้าง HTML"}</span>
</li>
<li className={"flex items-start gap-2"}>
<IconX aria-hidden="true" className={"w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5"} />
<span>{"ระบบค้นหา (SEO) ทำความเข้าใจบริบททางภาษาของหน้าเว็บยากขึ้น"}</span>
</li>
</ul>
</div>
</div>

<div className={"mt-6 p-4 rounded-2xl bg-slate-950 border border-slate-800"}>
<div className={"flex justify-between items-center mb-2"}>
<span className={"text-xs text-slate-400 font-mono"}>{"ตัวอย่างการใช้งานที่ถูกต้อง:"}</span>
<CopyButton text={"<html>\n  <head>...</head>\n  <body>...</body>\n</html>"} />
</div>
<pre style={{"background": "#1e1e1e", "padding": "12px 16px", "borderRadius": "10px", "fontSize": "12px", "fontFamily": "'Fira Code',monospace", "color": "#e2e8f0", "lineHeight": "1.8", "overflowX": "auto"}}><code id={"code-sample-html"}><span className={"code-token-punct"}>{"<"}</span><span className={"code-token-tag"}>{"html"}</span><span className={"code-token-punct"}>{">"}</span>{"\n  "}<span className={"code-token-punct"}>{"<"}</span><span className={"code-token-tag"}>{"head"}</span><span className={"code-token-punct"}>{">"}</span>{"..."}<span className={"code-token-punct"}>{"</"}</span><span className={"code-token-tag"}>{"head"}</span><span className={"code-token-punct"}>{">"}</span>{"\n  "}<span className={"code-token-punct"}>{"<"}</span><span className={"code-token-tag"}>{"body"}</span><span className={"code-token-punct"}>{">"}</span>{"..."}<span className={"code-token-punct"}>{"</"}</span><span className={"code-token-tag"}>{"body"}</span><span className={"code-token-punct"}>{">"}</span>{"\n"}<span className={"code-token-punct"}>{"</"}</span><span className={"code-token-tag"}>{"html"}</span><span className={"code-token-punct"}>{">"}</span></code></pre>
</div>
</div>
</div>

<div hidden={activeTag !== "head"} id={"tag-panel-head"} className={"tag-detail-panel space-y-6"}>
<div className={"glass-card p-6 sm:p-8 rounded-3xl border border-purple-500/30"}>
<div className={"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800"}>
<div>
<div className={"flex items-center gap-2"}>
<span className={"px-3 py-1 rounded-lg bg-orange-500/20 text-orange-400 font-mono text-sm font-bold border border-orange-500/30"}>{"\n                    <head>\n                  "}</span>
<span className={"text-xs text-slate-400 font-sarabun"}>{"Metadata Container"}</span>
</div>
<h3 className={"text-xl font-bold text-white mt-2"}>{"ส่วนหัวเอกสารสำหรับเก็บข้อมูลระบบและ Metadata"}</h3>
</div>
<div className={"text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 shrink-0"}>{"\n                ตำแหน่ง: "}<span className={"text-purple-400"}>{"อยู่ก่อนหน้า <body> เสมอ"}</span>
</div>
</div>

<div className={"py-4 text-sm text-slate-300 font-sarabun leading-relaxed space-y-2"}>
<p>
<strong>{"<head>"}</strong>{" เป็นคอนเทนเนอร์สำหรับเก็บข้อมูลที่มองไม่เห็นบนตัวหน้าเว็บโดยตรง แต่มีความสำคัญระดับวิกฤตสำหรับระบบและเบราว์เซอร์ เช่น การเข้ารหัสภาษา (Charset), การกำหนดชื่อเรื่องของเว็บ (Title), การตั้งค่าการแสดงผลบนหน้าจอ (Viewport), และข้อมูลกำกับเอกสาร (Metadata)\n              "}</p>
</div>

<div className={"grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"}>

<div className={"p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-3"}>
<div className={"flex items-center gap-2 text-emerald-400 font-bold text-sm"}>
<IconCheckCircle aria-hidden="true" className={"w-4 h-4"} />{" ผลลัพธ์เมื่อมีแท็กนี้ (With)\n                "}</div>
<ul className={"text-xs text-slate-300 space-y-2 font-sarabun"}>
<li className={"flex items-start gap-2"}>
<IconCheck aria-hidden="true" className={"w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"} />
<span><strong>{"โครงสร้างถูกต้องตามมาตรฐาน:"}</strong>{" เบราว์เซอร์รับรู้การตั้งค่าพื้นฐานก่อนจะเริ่มวาดเนื้อหาใน body"}</span>
</li>
<li className={"flex items-start gap-2"}>
<IconCheck aria-hidden="true" className={"w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"} />
<span><strong>{"การจัดการข้อมูลเป็นสัดส่วน:"}</strong>{" แยกข้อมูลระบบ (Machine data) ออกจากเนื้อหาของผู้ใช้ (User content) ชัดเจน"}</span>
</li>
<li className={"flex items-start gap-2"}>
<IconCheck aria-hidden="true" className={"w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"} />
<span>{"รองรับการใส่แท็กสำคัญ เช่น "}<code className={"text-emerald-300"}>{"<title>"}</code>{" และ "}<code className={"text-emerald-300"}>{"<meta>"}</code></span>
</li>
</ul>
</div>

<div className={"p-5 rounded-2xl bg-rose-950/30 border border-rose-500/30 space-y-3"}>
<div className={"flex items-center gap-2 text-rose-400 font-bold text-sm"}>
<IconAlertOctagon aria-hidden="true" className={"w-4 h-4"} />{" ผลกระทบเมื่อไม่มีแท็กนี้ (Without)\n                "}</div>
<ul className={"text-xs text-slate-300 space-y-2 font-sarabun"}>
<li className={"flex items-start gap-2"}>
<IconX aria-hidden="true" className={"w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5"} />
<span><strong>{"โครงสร้างเอกสารผิดมาตรฐาน:"}</strong>{" ไม่มีพื้นที่ที่ถูกต้องสำหรับวางข้อมูลการตั้งค่าและชื่อเรื่อง"}</span>
</li>
<li className={"flex items-start gap-2"}>
<IconX aria-hidden="true" className={"w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5"} />
<span><strong>{"แท็ก Metadata ปะปนใน body:"}</strong>{" ทำให้เบราว์เซอร์สับสนในการแยกระหว่างข้อมูลระบบกับเนื้อหาผู้ใช้"}</span>
</li>
<li className={"flex items-start gap-2"}>
<IconX aria-hidden="true" className={"w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5"} />
<span>{"Web Crawlers และบอทเก็บข้อมูลอาจไม่ประมวลผล Meta tags สำคัญ"}</span>
</li>
</ul>
</div>
</div>

<div className={"mt-6 p-4 rounded-2xl bg-slate-950 border border-slate-800"}>
<div className={"flex justify-between items-center mb-2"}>
<span className={"text-xs text-slate-400 font-mono"}>{"ตัวอย่างการใช้งานที่ถูกต้อง:"}</span>
<CopyButton text={"<head>\n  <meta charset=\"UTF-8\">\n  <title>Document</title>\n</head>"} />
</div>
<pre style={{"background": "#1e1e1e", "padding": "12px 16px", "borderRadius": "10px", "fontSize": "12px", "fontFamily": "'Fira Code',monospace", "color": "#e2e8f0", "lineHeight": "1.8", "overflowX": "auto"}}><code id={"code-sample-head"}><span className={"code-token-punct"}>{"<"}</span><span className={"code-token-tag"}>{"head"}</span><span className={"code-token-punct"}>{">"}</span>{"\n  "}<span className={"code-token-punct"}>{"<"}</span><span className={"code-token-tag"}>{"meta"}</span>{" "}<span className={"code-token-attr"}>{"charset"}</span>{"="}<span className={"code-token-val"}>{"\"UTF-8\""}</span><span className={"code-token-punct"}>{">"}</span>{"\n  "}<span className={"code-token-punct"}>{"<"}</span><span className={"code-token-tag"}>{"title"}</span><span className={"code-token-punct"}>{">"}</span>{"Document"}<span className={"code-token-punct"}>{"</"}</span><span className={"code-token-tag"}>{"title"}</span><span className={"code-token-punct"}>{">"}</span>{"\n"}<span className={"code-token-punct"}>{"</"}</span><span className={"code-token-tag"}>{"head"}</span><span className={"code-token-punct"}>{">"}</span></code></pre>
</div>
</div>
</div>

<div hidden={activeTag !== "title"} id={"tag-panel-title"} className={"tag-detail-panel space-y-6"}>
<div className={"glass-card p-6 sm:p-8 rounded-3xl border border-purple-500/30"}>
<div className={"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800"}>
<div>
<div className={"flex items-center gap-2"}>
<span className={"px-3 py-1 rounded-lg bg-orange-500/20 text-orange-400 font-mono text-sm font-bold border border-orange-500/30"}>{"\n                    <title>\n                  "}</span>
<span className={"text-xs text-slate-400 font-sarabun"}>{"Document Title"}</span>
</div>
<h3 className={"text-xl font-bold text-white mt-2"}>{"ชื่อของเอกสารหน้าเว็บ (Tab, SEO & Bookmark)"}</h3>
</div>
<div className={"text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 shrink-0"}>{"\n                ตำแหน่ง: "}<span className={"text-purple-400"}>{"อยู่ภายใน <head> เท่านั้น"}</span>
</div>
</div>

<div className={"py-4 text-sm text-slate-300 font-sarabun leading-relaxed space-y-2"}>
<p>
<strong>{"<title>"}</strong>{" กำหนดหัวข้ออย่างเป็นทางการของหน้าเว็บ ข้อความในแท็กนี้จะ "}<strong>{"ไม่ปรากฏในพื้นที่เนื้อหาหน้าเว็บ"}</strong>{" แต่จะถูกส่งต่อไปแสดงบน "}<strong>{"Browser Tab"}</strong>{", หน้าบันทึก "}<strong>{"Bookmark"}</strong>{", และเป็นหัวข้อบรรทัดแรกที่ผู้ใช้เห็นในผลการค้นหาบน "}<strong>{"Google Search"}</strong>
</p>
</div>

<div className={"grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"}>

<div className={"p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-3"}>
<div className={"flex items-center gap-2 text-emerald-400 font-bold text-sm"}>
<IconCheckCircle aria-hidden="true" className={"w-4 h-4"} />{" ผลลัพธ์เมื่อมีแท็กนี้ (With)\n                "}</div>
<ul className={"text-xs text-slate-300 space-y-2 font-sarabun"}>
<li className={"flex items-start gap-2"}>
<IconCheck aria-hidden="true" className={"w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"} />
<span><strong>{"UX ยอดเยี่ยม:"}</strong>{" ผู้ใช้ที่เปิดหลายแท็บพร้อมกันสามารถมองเห็นได้ทันทีว่าแท็บนี้คือหน้าอะไร"}</span>
</li>
<li className={"flex items-start gap-2"}>
<IconCheck aria-hidden="true" className={"w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"} />
<span><strong>{"พลัง SEO:"}</strong>{" Google ให้น้ำหนักของคีย์เวิร์ดในแท็ก <title> สูงมากในการจัดอันดับผลการค้นหา"}</span>
</li>
<li className={"flex items-start gap-2"}>
<IconCheck aria-hidden="true" className={"w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"} />
<span>{"เมื่อบันทึกเป็นบุ๊กมาร์กหรือแชร์ลิงก์ จะได้ชื่อหน้าที่อ่านรู้เรื่องและเป็นมืออาชีพ"}</span>
</li>
</ul>
</div>

<div className={"p-5 rounded-2xl bg-rose-950/30 border border-rose-500/30 space-y-3"}>
<div className={"flex items-center gap-2 text-rose-400 font-bold text-sm"}>
<IconAlertOctagon aria-hidden="true" className={"w-4 h-4"} />{" ผลกระทบเมื่อไม่มีแท็กนี้ (Without)\n                "}</div>
<ul className={"text-xs text-slate-300 space-y-2 font-sarabun"}>
<li className={"flex items-start gap-2"}>
<IconX aria-hidden="true" className={"w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5"} />
<span><strong>{"แท็บแสดงชื่อไฟล์ดิบ:"}</strong>{" แถบแท็บบราวเซอร์จะแสดงเป็น "}<code className={"text-rose-300"}>{"index.html"}</code>{", IP address หรือ "}<code className={"text-rose-300"}>{"Untitled"}</code></span>
</li>
<li className={"flex items-start gap-2"}>
<IconX aria-hidden="true" className={"w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5"} />
<span><strong>{"เสียอันดับ SEO:"}</strong>{" Google จะพยายามสุ่มหยิบข้อความในหน้าเว็บมาตั้งเป็นชื่อหัวข้อแทน ซึ่งอาจเป็นข้อความเมนูหรือประโยคที่ไม่ตรงประเด็น"}</span>
</li>
<li className={"flex items-start gap-2"}>
<IconX aria-hidden="true" className={"w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5"} />
<span>{"ผู้ใช้สับสนและหาแท็บของเว็บไซต์ไม่เจอเวลาเปิดทำงานหลายๆ หน้า"}</span>
</li>
</ul>
</div>
</div>

<div className={"mt-6 p-4 rounded-2xl bg-slate-950 border border-slate-800"}>
<div className={"flex justify-between items-center mb-2"}>
<span className={"text-xs text-slate-400 font-mono"}>{"ตัวอย่างการใช้งานที่ถูกต้อง:"}</span>
<CopyButton text={"<head>\n  <title>Document</title>\n</head>"} />
</div>
<pre style={{"background": "#1e1e1e", "padding": "12px 16px", "borderRadius": "10px", "fontSize": "12px", "fontFamily": "'Fira Code',monospace", "color": "#e2e8f0", "lineHeight": "1.8", "overflowX": "auto"}}><code id={"code-sample-title"}><span className={"code-token-punct"}>{"<"}</span><span className={"code-token-tag"}>{"head"}</span><span className={"code-token-punct"}>{">"}</span>{"\n  "}<span className={"code-token-punct"}>{"<"}</span><span className={"code-token-tag"}>{"title"}</span><span className={"code-token-punct"}>{">"}</span>{"Document"}<span className={"code-token-punct"}>{"</"}</span><span className={"code-token-tag"}>{"title"}</span><span className={"code-token-punct"}>{">"}</span>{"\n"}<span className={"code-token-punct"}>{"</"}</span><span className={"code-token-tag"}>{"head"}</span><span className={"code-token-punct"}>{">"}</span></code></pre>
</div>
</div>
</div>

<div hidden={activeTag !== "charset"} id={"tag-panel-charset"} className={"tag-detail-panel space-y-6"}>
<div className={"glass-card p-6 sm:p-8 rounded-3xl border border-purple-500/30"}>
<div className={"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800"}>
<div>
<div className={"flex items-center gap-2"}>
<span className={"px-3 py-1 rounded-lg bg-orange-500/20 text-orange-400 font-mono text-sm font-bold border border-orange-500/30"}>{"\n                    <meta charset=\"UTF-8\">\n                  "}</span>
<span className={"text-xs text-slate-400 font-sarabun"}>{"Character Encoding Declaration"}</span>
</div>
<h3 className={"text-xl font-bold text-white mt-2"}>{"การประกาศระบบเข้ารหัสตัวอักษรสากล UTF-8"}</h3>
</div>
<div className={"text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 shrink-0"}>{"\n                ตำแหน่ง: "}<span className={"text-indigo-400"}>{"บรรทัดแรกๆ ภายใน <head>"}</span>
</div>
</div>

<div className={"py-4 text-sm text-slate-300 font-sarabun leading-relaxed space-y-2"}>
<p>
<strong>{"<meta charset=\"UTF-8\">"}</strong>{" ทำหน้าที่สั่งให้เบราว์เซอร์แปลงรหัสเลขฐานสอง (Bytes) ของไฟล์ให้กลายเป็นตัวอักษรภาษาไทย, สระ, วรรณยุกต์, และ Emoji โดยใช้มาตรฐาน "}<strong>{"UTF-8"}</strong>{" ซึ่งรองรับตัวอักษรของทุกภาษาทั่วโลกกว่า 150,000 ตัว\n              "}</p>
</div>

<div className={"grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"}>

<div className={"p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-3"}>
<div className={"flex items-center gap-2 text-emerald-400 font-bold text-sm"}>
<IconCheckCircle aria-hidden="true" className={"w-4 h-4"} />{" ผลลัพธ์เมื่อมีแท็กนี้ (With)\n                "}</div>
<ul className={"text-xs text-slate-300 space-y-2 font-sarabun"}>
<li className={"flex items-start gap-2"}>
<IconCheck aria-hidden="true" className={"w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"} />
<span><strong>{"ภาษาไทยคมชัด 100%:"}</strong>{" พยัญชนะ สระบน-ล่าง วรรณยุกต์ (เช่น น้ำ, ปู่, กรุงเทพฯ) แสดงผลถูกต้องไม่ตกหล่น"}</span>
</li>
<li className={"flex items-start gap-2"}>
<IconCheck aria-hidden="true" className={"w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"} />
<span><strong>{"รองรับ Emoji และทุกภาษา:"}</strong>{" แสดงผล 🚀 ✨ 💡 ภาษาจีน ญี่ปุ่น เกาหลี อาหรับ ได้อย่างสมบูรณ์แบบในไฟล์เดียว"}</span>
</li>
<li className={"flex items-start gap-2"}>
<IconCheck aria-hidden="true" className={"w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"} />
<span>{"ป้องกันปัญหาความปลอดภัยประเภท Cross-Site Scripting (XSS) จากการหลอกเปลี่ยน Encoding"}</span>
</li>
</ul>
</div>

<div className={"p-5 rounded-2xl bg-rose-950/30 border border-rose-500/30 space-y-3"}>
<div className={"flex items-center gap-2 text-rose-400 font-bold text-sm"}>
<IconAlertOctagon aria-hidden="true" className={"w-4 h-4"} />{" ผลกระทบเมื่อไม่มีแท็กนี้ (Without)\n                "}</div>
<ul className={"text-xs text-slate-300 space-y-2 font-sarabun"}>
<li className={"flex items-start gap-2"}>
<IconX aria-hidden="true" className={"w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5"} />
<span><strong>{"ภาษาต่างดาว (Mojibake):"}</strong>{" ภาษาไทยจะกลายเป็นสัญลักษณ์เละๆ เช่น "}<code className={"text-rose-300"}>{"เธชเธงเธฑเธชเธ”เธต"}</code>{" หรือ "}<code className={"text-rose-300"}></code></span>
</li>
<li className={"flex items-start gap-2"}>
<IconX aria-hidden="true" className={"w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5"} />
<span><strong>{"เบราว์เซอร์เดา Encoding เอง:"}</strong>{" บางเครื่องอาจเดาเป็น Windows-874 (TIS-620) หรือ ISO-8859-1 ทำให้ผลลัพธ์ไม่เหมือนกันในแต่ละผู้ใช้งาน"}</span>
</li>
<li className={"flex items-start gap-2"}>
<IconX aria-hidden="true" className={"w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5"} />
<span>{"แบบฟอร์ม (Forms) ที่ผู้ใช้พิมพ์ภาษาไทยเข้ามา อาจถูกบันทึกลง Database เป็นข้อมูลเสียหายกู้คืนไม่ได้"}</span>
</li>
</ul>
</div>
</div>

<div className={"mt-6 p-4 rounded-2xl bg-slate-950 border border-slate-800"}>
<div className={"flex justify-between items-center mb-2"}>
<span className={"text-xs text-slate-400 font-mono"}>{"ตัวอย่างการใช้งานที่ถูกต้อง:"}</span>
<CopyButton text={"<head>\n  <meta charset=\"UTF-8\">\n  <!-- วางไว้บนสุดของ head ก่อนแท็ก title หรือข้อมูลอื่นๆ เสมอ -->\n</head>"} />
</div>
<pre style={{"background": "#1e1e1e", "padding": "12px 16px", "borderRadius": "10px", "fontSize": "12px", "fontFamily": "'Fira Code',monospace", "color": "#e2e8f0", "lineHeight": "1.8", "overflowX": "auto"}}><code id={"code-sample-charset"}><span className={"code-token-punct"}>{"<"}</span><span className={"code-token-tag"}>{"head"}</span><span className={"code-token-punct"}>{">"}</span>{"\n  "}<span className={"code-token-punct"}>{"<"}</span><span className={"code-token-tag"}>{"meta"}</span>{" "}<span className={"code-token-attr"}>{"charset"}</span>{"="}<span className={"code-token-val"}>{"\"UTF-8\""}</span><span className={"code-token-punct"}>{">"}</span>{"\n  "}<span className={"code-token-comment"}>{"<!-- วางไว้บนสุดของ head ก่อนแท็ก title หรือข้อมูลอื่นๆ เสมอ -->"}</span>{"\n"}<span className={"code-token-punct"}>{"</"}</span><span className={"code-token-tag"}>{"head"}</span><span className={"code-token-punct"}>{">"}</span></code></pre>
</div>
</div>
</div>

<div hidden={activeTag !== "body"} id={"tag-panel-body"} className={"tag-detail-panel space-y-6"}>
<div className={"glass-card p-6 sm:p-8 rounded-3xl border border-rose-500/30"}>
<div className={"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800"}>
<div>
<div className={"flex items-center gap-2"}>
<span className={"px-3 py-1 rounded-lg bg-rose-500/20 text-rose-400 font-mono text-sm font-bold border border-rose-500/30"}>{"<body>"}</span>
<span className={"text-xs text-slate-400 font-sarabun"}>{"Document Body"}</span>
</div>
<h3 className={"text-xl font-bold text-white mt-2"}>{"พื้นที่สำหรับเนื้อหาที่แสดงบนหน้าเว็บ"}</h3>
</div>
<div className={"text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 shrink-0"}>{"\n                ตำแหน่ง: "}<span className={"text-rose-400"}>{"อยู่ถัดจาก <head> ภายใน <html>"}</span>
</div>
</div>
<div className={"py-4 text-sm text-slate-300 font-sarabun leading-relaxed space-y-2"}>
<p><strong>{"<body>"}</strong>{" ครอบเนื้อหาทั้งหมดที่ผู้ใช้มองเห็นและโต้ตอบได้ เช่น หัวข้อ ย่อหน้า รูปภาพ ลิงก์ ปุ่ม แบบฟอร์ม และส่วนประกอบต่าง ๆ ของหน้าเว็บ เอกสาร HTML หนึ่งหน้าควรมีแท็ก "}<strong>{"<body>"}</strong>{" เพียงหนึ่งชุด"}</p>
</div>
<div className={"grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"}>
<div className={"p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-3"}>
<div className={"flex items-center gap-2 text-emerald-400 font-bold text-sm"}><IconCheckCircle aria-hidden="true" className={"w-4 h-4"} />{" ผลลัพธ์เมื่อมีแท็กนี้ (With)"}</div>
<ul className={"text-xs text-slate-300 space-y-2 font-sarabun"}>
<li className={"flex items-start gap-2"}><IconCheck aria-hidden="true" className={"w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"} /><span>{"โครงสร้างเนื้อหาชัดเจนและถูกต้องตามมาตรฐาน HTML5"}</span></li>
<li className={"flex items-start gap-2"}><IconCheck aria-hidden="true" className={"w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"} /><span>{"เบราว์เซอร์และเครื่องมือช่วยการเข้าถึงระบุพื้นที่เนื้อหาหลักได้ถูกต้อง"}</span></li>
</ul>
</div>
<div className={"p-5 rounded-2xl bg-rose-950/30 border border-rose-500/30 space-y-3"}>
<div className={"flex items-center gap-2 text-rose-400 font-bold text-sm"}><IconAlertOctagon aria-hidden="true" className={"w-4 h-4"} />{" ผลกระทบเมื่อไม่มีแท็กนี้ (Without)"}</div>
<ul className={"text-xs text-slate-300 space-y-2 font-sarabun"}>
<li className={"flex items-start gap-2"}><IconX aria-hidden="true" className={"w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5"} /><span>{"เบราว์เซอร์อาจสร้าง <body> ชดเชยให้อัตโนมัติ แต่โครงสร้างต้นฉบับไม่สมบูรณ์"}</span></li>
<li className={"flex items-start gap-2"}><IconX aria-hidden="true" className={"w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5"} /><span>{"การตรวจสอบมาตรฐานและการดูแลโค้ดทำได้ยากขึ้น"}</span></li>
</ul>
</div>
</div>
<div className={"mt-6 p-4 rounded-2xl bg-slate-950 border border-slate-800"}>
<div className={"flex justify-between items-center mb-2"}>
<span className={"text-xs text-slate-400 font-mono"}>{"ตัวอย่างการใช้งานที่ถูกต้อง:"}</span>
<CopyButton text={"<body>\n  <h1>ยินดีต้อนรับสู่เว็บไซต์ของเรา</h1>\n  <p>นี่คือเนื้อหาที่แสดงบนหน้าเว็บ</p>\n</body>"} />
</div>
<pre style={{"background": "#1e1e1e", "padding": "12px 16px", "borderRadius": "10px", "fontSize": "12px", "fontFamily": "'Fira Code',monospace", "color": "#e2e8f0", "lineHeight": "1.8", "overflowX": "auto"}}><code id={"code-sample-body"}><span className={"code-token-punct"}>{"<"}</span><span className={"code-token-tag"}>{"body"}</span><span className={"code-token-punct"}>{">"}</span>{"\n  "}<span className={"code-token-punct"}>{"<"}</span><span className={"code-token-tag"}>{"h1"}</span><span className={"code-token-punct"}>{">"}</span>{"ยินดีต้อนรับสู่เว็บไซต์ของเรา"}<span className={"code-token-punct"}>{"</"}</span><span className={"code-token-tag"}>{"h1"}</span><span className={"code-token-punct"}>{">"}</span>{"\n  "}<span className={"code-token-punct"}>{"<"}</span><span className={"code-token-tag"}>{"p"}</span><span className={"code-token-punct"}>{">"}</span>{"นี่คือเนื้อหาที่แสดงบนหน้าเว็บ"}<span className={"code-token-punct"}>{"</"}</span><span className={"code-token-tag"}>{"p"}</span><span className={"code-token-punct"}>{">"}</span>{"\n"}<span className={"code-token-punct"}>{"</"}</span><span className={"code-token-tag"}>{"body"}</span><span className={"code-token-punct"}>{">"}</span></code></pre>
</div>
</div>
</div>
</div>
</div>
</section>

<CodeSandbox />

<section id={"quiz"} className={"py-16 border-t border-slate-800/80 bg-slate-950/40"}>
<div className={"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"}>
<div className={"text-center mb-8"}>
<div className={"inline-flex items-center gap-2 text-purple-400 text-xs font-mono uppercase tracking-wider mb-1"}>
<IconPuzzle aria-hidden="true" className={"w-4 h-4"} />{" 4.2 แบบฝึกหัดในชั้นเรียน\n        "}</div>
<h2 className={"text-2xl sm:text-3xl font-bold text-white tracking-tight"}>{"\n          กิจกรรมจำแนกกลุ่มและจับคู่หน้าที่ของ Tag HTML5\n        "}</h2>
<p className={"text-sm text-slate-400 font-sarabun mt-1"}>{"\n          พิจารณา Tag ทั้ง 6 ตัว แล้วจำแนกว่าเป็นแท็กควบคุมระบบหรือแท็กแสดงผล พร้อมจับคู่ตำแหน่งหน้าที่การทำงาน\n        "}</p>
</div>
<div className={"glass-card p-6 sm:p-8 rounded-3xl border border-purple-500/20 shadow-2xl"}>
<StructureQuiz />
</div>
</div>
</section>

<footer className={"py-12 border-t border-slate-800/80 bg-slate-950 text-slate-400 text-xs font-sarabun"}>
<div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4"}>
<div className={"flex items-center gap-2"}>
<div className={"w-6 h-6 rounded-lg bg-purple-600 flex items-center justify-center text-white"}>
<IconCode2 aria-hidden="true" className={"w-3.5 h-3.5"} />
</div>
<span className={"font-bold text-white font-prompt"}>{"HTML System Tags Guide"}</span>
<span className={"text-slate-600"}>{"|"}</span>
<span>{"สื่อการเรียนรู้โครงสร้างพื้นฐานเว็บมาตรฐาน HTML5"}</span>
</div>
<div className={"text-slate-500 text-center sm:text-right"}>{"\n          อ้างอิงมาตรฐาน W3C & WHATWG HTML Living Standard\n        "}</div>
</div>
</footer>

</>
}
