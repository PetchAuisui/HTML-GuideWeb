export const steps = [
    {
      step: 1,
      title: "จุดเริ่มต้น: ข้อความดิบไร้โครงสร้าง (Plain Text)",
      badge: "ยังไม่มี Tag ใดๆ",
      badgeColor: "bg-slate-800 text-slate-400 border-slate-700",
      targetTag: "ไม่มีโครงสร้าง",
      explanation: "เมื่อเบราว์เซอร์ได้รับข้อความดิบโดยไม่มีแท็กโครงสร้าง จะไม่รู้ว่าเอกสารนี้ใช้มาตรฐานใด ขาดข้อมูลชื่อเว็บ (Tab Title) และหากบันทึกไฟล์ไม่ตรงระบบ อาจแสดงภาษาไทยผิดเพี้ยนเป็นภาษาต่างดาวทันที",
      focusPoint: "สังเกต: แถบแท็บจะแสดงเป็นชื่อไฟล์ index.html และไม่มีการกำหนดโหมดมาตรฐาน",
      calloutTarget: "tab",
      calloutText: "แท็บแสดงชื่อไฟล์ 'index.html' เพราะยังไม่มีแท็ก <title>",
      code: `ยินดีต้อนรับสู่เว็บไซต์ของเรา`,
      highlightLines: [1],
      browserState: {
        tabTitle: "index.html (Untitled)",
        tabIcon: "file",
        modeBadge: "Quirks / Unspecified Mode",
        modeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
        langBadge: "lang: ไม่ได้ระบุ",
        langColor: "bg-slate-800 text-slate-400 border-slate-700",
        charsetBadge: "Charset: Auto-Detect (เสี่ยงเพี้ยน)",
        charsetColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
        headingText: "ยินดีต้อนรับสู่เว็บไซต์ของเรา",
        headingStyle: "font-normal text-slate-300 text-base font-serif",
        arrowDirection: "tab"
      }
    },
    {
      step: 2,
      title: "ก้าวที่ 1: ประกาศชนิดเอกสารด้วย <!DOCTYPE html>",
      badge: "กลุ่มแท็กควบคุมระบบ",
      badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/40",
      targetTag: "<!DOCTYPE html>",
      explanation: "คำสั่ง <!DOCTYPE html> ต้องวางไว้ที่บรรทัดแรกสุดเสมอ เพื่อบอกเว็บเบราว์เซอร์ว่าเอกสารนี้เขียนด้วยมาตรฐาน HTML5 สั่งให้เปิด 'Standards Mode' ป้องกันไม่ให้ตกไปอยู่ใน 'Quirks Mode'",
      focusPoint: "สไลด์หน้า 7: ป้องกัน Quirks Mode และทำให้เบราว์เซอร์ทุกค่ายเรนเดอร์โครงสร้างหน้าเว็บตามมาตรฐาน HTML5 เดียวกัน",
      calloutTarget: "mode",
      calloutText: "โหมดเปลี่ยนเป็น HTML5 Standards Mode ทันที!",
      code: `<!DOCTYPE html>
ยินดีต้อนรับสู่เว็บไซต์ของเรา`,
      highlightLines: [1],
      browserState: {
        tabTitle: "index.html",
        tabIcon: "file",
        modeBadge: "Standards Mode (HTML5) ✓",
        modeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
        langBadge: "lang: ไม่ได้ระบุ",
        langColor: "bg-slate-800 text-slate-400 border-slate-700",
        charsetBadge: "Charset: Auto-Detect",
        charsetColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
        headingText: "ยินดีต้อนรับสู่เว็บไซต์ของเรา",
        headingStyle: "font-normal text-slate-300 text-base",
        arrowDirection: "mode"
      }
    },
    {
      step: 3,
      title: "ก้าวที่ 2: ครอบขอบเขตหลักด้วย <html>",
      badge: "กลุ่มแท็กควบคุมระบบ",
      badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/40",
      targetTag: "<html>",
      explanation: "แท็ก <html> คือ Container สูงสุด (Root Element) ที่ทำหน้าที่ครอบโครงสร้างของเว็บเพจทั้งหมด",
      focusPoint: "สไลด์หน้า 8: Root Element กำหนดขอบเขตเริ่มต้นและสิ้นสุดของเอกสาร HTML",
      calloutTarget: "lang",
      calloutText: "แท็ก <html> กำหนดโครงสร้าง Root ของเว็บเพจ",
      code: `<!DOCTYPE html>
<html>
  ยินดีต้อนรับสู่เว็บไซต์ของเรา
</html>`,
      highlightLines: [2, 4],
      browserState: {
        tabTitle: "index.html",
        tabIcon: "file",
        modeBadge: "Standards Mode (HTML5) ✓",
        modeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
        langBadge: "HTML Root Active ✓",
        langColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
        charsetBadge: "Charset: Auto-Detect",
        charsetColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
        headingText: "ยินดีต้อนรับสู่เว็บไซต์ของเรา",
        headingStyle: "text-slate-300 text-base",
        arrowDirection: "lang"
      }
    },
    {
      step: 4,
      title: "ก้าวที่ 3: สร้างส่วนหัว <head> และล็อครหัสภาษาด้วย <meta charset=\"UTF-8\">",
      badge: "กลุ่มแท็กควบคุมระบบ",
      badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/40",
      targetTag: "<meta charset=\"UTF-8\">",
      explanation: "แท็ก <head> ใช้รวบรวมข้อมูลเกี่ยวกับเว็บเพจ (Metadata) โดยแท็ก <meta charset=\"UTF-8\"> จะสั่งให้เบราว์เซอร์แปลงรหัสตัวอักษรแบบ UTF-8 ป้องกันปัญหาภาษาต่างดาว",
      focusPoint: "สไลด์หน้า 9 & 12: ป้องกันภาษาต่างดาว และเปิดอ่านได้ถูกต้องบนทุกอุปกรณ์",
      calloutTarget: "charset",
      calloutText: "UTF-8 กำหนดเรียบร้อย! ป้องกันภาษาต่างดาว 100%",
      code: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  ยินดีต้อนรับสู่เว็บไซต์ของเรา
</html>`,
      highlightLines: [3, 4, 5],
      browserState: {
        tabTitle: "index.html",
        tabIcon: "file",
        modeBadge: "Standards Mode (HTML5) ✓",
        modeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
        langBadge: "HTML Root Active ✓",
        langColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
        charsetBadge: "UTF-8 Unicode Active ✨",
        charsetColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
        headingText: "ยินดีต้อนรับสู่เว็บไซต์ของเรา",
        headingStyle: "text-slate-300 text-base",
        arrowDirection: "charset"
      }
    },
    {
      step: 5,
      title: "ก้าวที่ 4: ตั้งชื่อหน้าเว็บบนแท็บด้วย <title>",
      badge: "กลุ่มแท็กควบคุมระบบ",
      badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/40",
      targetTag: "<title>",
      explanation: "แท็ก <title> อยู่ภายใน <head> ใช้กำหนดชื่อเรื่องที่จะไปแสดงผลบน 'แท็บของเว็บเบราว์เซอร์' และแสดงเป็นหัวข้อลิงก์หลักในผลการค้นหาของ Google",
      focusPoint: "สไลด์หน้า 10-11: มีลูกศรชี้จาก <title> ไปยัง Tab Bar บนสุดของเบราว์เซอร์โดยตรง",
      calloutTarget: "tab",
      calloutText: "ดูที่นี่! ข้อความใน <title> ปรากฏบนแท็บเบราว์เซอร์ทันที 🎯",
      code: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  ยินดีต้อนรับสู่เว็บไซต์ของเรา
</html>`,
      highlightLines: [5],
      browserState: {
        tabTitle: "Document",
        tabIcon: "globe",
        modeBadge: "Standards Mode (HTML5) ✓",
        modeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
        langBadge: "HTML Root Active ✓",
        langColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
        charsetBadge: "UTF-8 Active ✨",
        charsetColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
        headingText: "ยินดีต้อนรับสู่เว็บไซต์ของเรา",
        headingStyle: "text-slate-300 text-base",
        arrowDirection: "tab"
      }
    },
    {
      step: 6,
      title: "ก้าวที่ 5: สร้างพื้นที่แสดงผลด้วย <body> และแท็ก <h1>",
      badge: "กลุ่มแท็กแสดงผล (Display Tags)",
      badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/40",
      targetTag: "<body> & <h1>",
      explanation: "ทุกสิ่งที่ผู้ใช้มองเห็นและโต้ตอบได้ จะต้องเขียนอยู่ภายในแท็ก <body> เท่านั้น โดยใช้แท็กแสดงผล เช่น <h1> สำหรับหัวข้อ",
      focusPoint: "สไลด์หน้า 13 & 16: เนื้อหาทั้งหมดที่ผู้ใช้มองเห็นจะถูกใส่ไว้ใน <body>",
      calloutTarget: "body",
      calloutText: "เนื้อหาทั้งหมดแสดงบนพื้นที่สีขาว (Viewport) สมบูรณ์แบบ!",
      code: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    <h1>ยินดีต้อนรับสู่เว็บไซต์ของเรา</h1>
  </body>
</html>`,
      highlightLines: [7, 8, 9],
      browserState: {
        tabTitle: "Document",
        tabIcon: "globe",
        modeBadge: "Standards Mode (HTML5) ✓",
        modeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
        langBadge: "HTML Root Active ✓",
        langColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
        charsetBadge: "UTF-8 Active ✨",
        charsetColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
        headingText: "",
        headingStyle: "hidden",
        arrowDirection: "body"
      }
    }
  ];
