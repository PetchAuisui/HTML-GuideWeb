export const items = [
    {
      id: "doctype",
      tag: "<!DOCTYPE html>",
      category: "system",
      correctMeaning: "doctype",
      meaningText: "กำหนดมาตรฐาน HTML5 / ไม่แสดงผลบนหน้าเว็บ",
      explanation: "คำสั่งประกาศชนิดเอกสาร HTML5 ต้องอยู่บรรทัดแรกสุดเสมอ เพื่อสั่งให้เบราว์เซอร์เปิด Standards Mode ไม่แสดงผลบนหน้าจอ",
      hint: "คำสั่งเริ่มต้นบรรทัดแรกสุด เพื่อประกาศมาตรฐานเว็บ HTML5"
    },
    {
      id: "html",
      tag: "<html>",
      category: "system",
      correctMeaning: "html",
      meaningText: "ครอบคลุมโครงสร้างของเว็บเพจทั้งหมด (Root Element)",
      explanation: "แท็กรากสูงสุด (Root Element) ที่ทำหน้าที่โอบอุ้มและครอบคลุมทุกองค์ประกอบในเอกสาร HTML ทั้งหมด",
      hint: "แท็กแม่บทสูงสุดที่ครอบทุกแท็กในหน้าเว็บ"
    },
    {
      id: "head",
      tag: "<head>",
      category: "system",
      correctMeaning: "head",
      meaningText: "กำหนดข้อมูลและการตั้งค่าของเอกสาร (Metadata)",
      explanation: "ส่วนหัวของเอกสารสำหรับเก็บการตั้งค่าระบบ, ข้อมูลกำกับเอกสาร (Metadata) และการเชื่อมโยงไฟล์ภายนอก",
      hint: "ส่วนหัวเอกสารที่เก็บการตั้งค่าเบื้องหลัง"
    },
    {
      id: "title",
      tag: "<title>",
      category: "system",
      correctMeaning: "title",
      meaningText: "แสดงชื่อบนแท็บของเว็บเบราว์เซอร์ (Tab Bar)",
      explanation: "กำหนดชื่อเรื่องของเว็บเพจที่จะไปปรากฏบนแท็บบนสุดของเว็บเบราว์เซอร์ และเป็นหัวข้อในผลการค้นหาของ Google",
      hint: "ข้อความบนแถบแท็บด้านบนสุดของเว็บเบราว์เซอร์"
    },
    {
      id: "charset",
      tag: '<meta charset="UTF-8">',
      category: "system",
      correctMeaning: "charset",
      meaningText: "กำหนดรหัสภาษา UTF-8 ป้องกันภาษาต่างดาว / ไม่แสดงผลบนหน้าเว็บ",
      explanation: "กำหนดการถอดรหัสตัวอักษรสากล UTF-8 เพื่อให้อ่านภาษาไทยและ Emoji ได้ถูกต้อง 100% ป้องกันปัญหาภาษาต่างดาว",
      hint: "กุญแจสำคัญในการปลดล็อคการอ่านภาษาไทยให้ถูกต้อง"
    },
    {
      id: "body",
      tag: "<body>",
      category: "display",
      correctMeaning: "body",
      meaningText: "เป็นส่วนที่แสดงเนื้อหาบนหน้าเว็บ (พื้นที่สีขาว)",
      explanation: "พื้นที่แสดงผลหลัก (Viewport) ที่บรรจุเนื้อหาทั้งหมดที่ผู้ใช้มองเห็นและมีปฏิสัมพันธ์ได้บนหน้าจอ",
      hint: "ผืนผ้าใบสีขาวสำหรับแสดงผลเนื้อหาทั้งหมด"
    }
  ];
