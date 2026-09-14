
export default function Home() {
return <>
<main className={"home"}><span className={"eyebrow"}>{"BASIC WEBSITE DESIGN"}</span><h1>{"เลือกบทเรียน"}<br />{"แล้วเริ่มลงมือเขียน"}</h1><p className={"intro"}>{"เนื้อหาทั้งสองหน่วยแยกเป็นหน้าบทเรียนเต็ม พร้อมคำอธิบาย ตัวอย่าง ห้องทดลอง และแบบฝึกหัด เริ่มจากโครงสร้างก่อนต่อยอดสู่การจัดข้อความ"}</p>
<div className={"lesson-grid"}>
<a className={"lesson-card lesson-one"} href={"lesson1.html"}><small>{"หน่วยการเรียนรู้ที่ 01"}</small><h2>{"โครงสร้างพื้นฐาน HTML5"}</h2><p>{"ทำความเข้าใจส่วนประกอบที่ควบคุมและกำหนดข้อมูลของเว็บเพจ"}</p><ul><li>{"เป้าหมายและข้อสังเกตบนเบราว์เซอร์"}</li><li>{"Step-by-Step ครบ 6 ขั้น"}</li><li>{"Simulator สลับแท็กและดูผลกระทบ"}</li><li>{"เจาะลึก 6 แท็ก พร้อม Sandbox และ Quiz"}</li></ul><strong>{"เปิดบทเรียนที่ 1 →"}</strong></a>
<a className={"lesson-card lesson-two"} href={"lesson2.html"}><small>{"หน่วยการเรียนรู้ที่ 02"}</small><h2>{"การใส่เนื้อหาด้วยข้อความ"}</h2><p>{"เลือกแท็กให้ตรงกับหัวข้อ ย่อหน้า การขึ้นบรรทัดใหม่ และการแบ่งช่วงเนื้อหา"}</p><ul><li>{"รายละเอียด h1–h6, p, br และ hr"}</li><li>{"ตัวอย่างโค้ดพร้อมผลลัพธ์"}</li><li>{"เปรียบเทียบ p กับ br"}</li><li>{"Live Code และแบบฝึกหัดตามโจทย์ในชั้นเรียน"}</li></ul><strong>{"เปิดบทเรียนที่ 2 →"}</strong></a>
</div><div className={"sequence"}><span>{"ลำดับแนะนำ"}</span><i></i><span>{"หน่วยที่ 1"}</span><span>{"→"}</span><span>{"หน่วยที่ 2"}</span></div>
</main>
</>
}
