const exampleTabs=[...document.querySelectorAll('[data-example-tab]')];
const examplePanes=[...document.querySelectorAll('[data-example-pane]')];
function selectExampleTab(key){
  exampleTabs.forEach(tab=>{
    const selected=tab.dataset.exampleTab===key;
    tab.classList.toggle('active',selected);
    tab.setAttribute('aria-selected',String(selected));
  });
  examplePanes.forEach(pane=>{pane.hidden=pane.dataset.examplePane!==key;});
}
exampleTabs.forEach(tab=>tab.addEventListener('click',()=>selectExampleTab(tab.dataset.exampleTab)));

const starter=`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>บทเรียน HTML</title>
</head>
<body>
  <h1>การเขียนเว็บเบื้องต้น</h1>
  <p>HTML คือภาษาที่ใช้สร้างโครงสร้างของเว็บไซต์</p>
  <hr>
  <h2>ข้อมูลติดต่อ</h2>
  <p>ศิวาภัทร อุยสุย<br>67030351</p>
</body>
</html>`;
const editor=document.querySelector('#code-editor');
const preview=document.querySelector('#code-preview');
function renderPreview(){preview.srcdoc=editor.value;}
editor.value=starter;
renderPreview();
editor.addEventListener('input',renderPreview);
document.querySelector('#reset-code').addEventListener('click',()=>{editor.value=starter;renderPreview();});

const selects=[...document.querySelectorAll('.tag-select')];
const exerciseProgress=document.querySelector('#exercise-progress');
const exerciseProgressBar=document.querySelector('#exercise-progress-bar');
const exerciseSolution=document.querySelector('#exercise-solution');
function updateExerciseProgress(){
  const answered=selects.filter(select=>select.value).length;
  exerciseProgress.textContent=answered?`ตอบแล้ว ${answered} จาก ${selects.length} ข้อ`:'ยังไม่ได้ตอบ';
  exerciseProgressBar.style.width=`${answered/selects.length*100}%`;
}
selects.forEach(select=>select.addEventListener('change',()=>{
  select.classList.remove('correct','wrong');
  updateExerciseProgress();
}));
document.querySelector('#check-exercise').addEventListener('click',()=>{
  let score=0;
  const feedback=[];
  selects.forEach((select,index)=>{
    const correct=select.value===select.dataset.answer;
    select.classList.toggle('correct',correct);
    select.classList.toggle('wrong',!correct);
    if(correct){
      score+=1;
      feedback.push(`<div class="feedback-row ok"><strong>ข้อ ${index+1} ถูกต้อง</strong><span>${select.dataset.reason}</span></div>`);
    }else{
      const chosen=select.value?`&lt;${select.value}&gt;`:'ยังไม่ได้เลือก';
      feedback.push(`<div class="feedback-row fix"><strong>ข้อ ${index+1} · ${select.dataset.label}</strong><span>คำตอบ ${chosen} ยังไม่เหมาะ — ${select.dataset.reason}</span></div>`);
    }
  });
  document.querySelector('#exercise-score').textContent=`${score} / ${selects.length} คะแนน`;
  document.querySelector('#exercise-feedback').innerHTML=feedback.join('');
  exerciseSolution.hidden=score!==selects.length;
  if(score===selects.length) exerciseSolution.scrollIntoView({behavior:'smooth',block:'nearest'});
});

document.querySelector('#reset-exercise').addEventListener('click',()=>{
  selects.forEach(select=>{select.value='';select.classList.remove('correct','wrong');});
  document.querySelector('#exercise-score').textContent='';
  document.querySelector('#exercise-feedback').innerHTML='';
  exerciseSolution.hidden=true;
  updateExerciseProgress();
});
const hintButton=document.querySelector('#show-exercise-hint');
hintButton.addEventListener('click',()=>{
  document.querySelector('#exercise-hint-text').innerHTML='<code>&lt;h1&gt;</code> คือชื่อเรื่อง · <code>&lt;p&gt;</code> คือใจความ · <code>&lt;hr&gt;</code> คือการเปลี่ยนช่วง · <code>&lt;br&gt;</code> คือเปลี่ยนบรรทัดในชุดเดิม';
  hintButton.hidden=true;
});
updateExerciseProgress();

const structureToggles=[...document.querySelectorAll('[data-structure]')];
function updateStructureLab(){
  const state=Object.fromEntries(structureToggles.map(toggle=>[toggle.dataset.structure,toggle.checked]));
  const lines=[];
  if(state.doctype) lines.push('<!DOCTYPE html>');
  lines.push('<html lang="th">','  <head>');
  if(state.charset) lines.push('    <meta charset="UTF-8">');
  if(state.title) lines.push('    <title>ห้องสมุดสีเขียว</title>');
  lines.push('  </head>');
  if(state.body) lines.push('  <body>','    <h1>ยินดีต้อนรับ</h1>','  </body>');
  else lines.push('  <!-- ยังไม่มีพื้นที่เนื้อหา body -->');
  lines.push('</html>');
  document.querySelector('#unit1-code').textContent=lines.join('\n');
  document.querySelector('#unit1-tab').textContent=state.title?'ห้องสมุดสีเขียว':'index.html';
  const missing=[];
  if(!state.doctype) missing.push('โหมดมาตรฐาน');
  if(!state.charset) missing.push('UTF-8');
  if(!state.title) missing.push('ชื่อแท็บ');
  if(!state.body) missing.push('พื้นที่เนื้อหา');
  const status=document.querySelector('#unit1-status');
  status.classList.toggle('warning',missing.length>0);
  status.textContent=missing.length?`ควรเพิ่ม: ${missing.join(' · ')}`:'โครงสร้างพื้นฐานครบ พร้อมใส่เนื้อหา';
}
if(structureToggles.length){
  structureToggles.forEach(toggle=>toggle.addEventListener('change',updateStructureLab));
  updateStructureLab();
}

const sidebar=document.querySelector('#sidebar-drawer');
const sidebarBackdrop=document.querySelector('#sidebar-backdrop');
const sidebarToggle=document.querySelector('#sidebar-toggle-btn');
const sidebarClose=document.querySelector('#sidebar-close-btn');
function isDesktop(){return window.matchMedia('(min-width:1024px)').matches;}
function openSidebar(){
  if(isDesktop()) document.body.classList.toggle('sidebar-collapsed');
  else document.body.classList.add('sidebar-mobile-open');
}
function closeSidebar(){document.body.classList.remove('sidebar-mobile-open');}
if(sidebar&&sidebarToggle){
  sidebarToggle.addEventListener('click',openSidebar);
  sidebarClose.addEventListener('click',closeSidebar);
  sidebarBackdrop.addEventListener('click',closeSidebar);
  document.querySelectorAll('.lesson-sidebar .sidebar-link').forEach(link=>link.addEventListener('click',closeSidebar));
}

const readingSections=[...document.querySelectorAll('main section[id]')];
const sidebarLinks=[...document.querySelectorAll('.lesson-sidebar .sidebar-link')];
function updateReadingState(){
  const scrollable=document.documentElement.scrollHeight-window.innerHeight;
  const percent=scrollable>0?Math.min(100,Math.max(0,Math.round(window.scrollY/scrollable*100))):0;
  ['#topbar-progress-text','#sidebar-progress-percent'].forEach(selector=>{const element=document.querySelector(selector);if(element)element.textContent=`${percent}%`;});
  ['#topbar-progress-fill','#sidebar-progress-bar'].forEach(selector=>{const element=document.querySelector(selector);if(element)element.style.width=`${percent}%`;});
  let current=readingSections[0]?.id;
  readingSections.forEach(section=>{if(section.getBoundingClientRect().top<=180)current=section.id;});
  sidebarLinks.forEach(link=>link.classList.toggle('active',link.dataset.section===current));
}
window.addEventListener('scroll',updateReadingState,{passive:true});
window.addEventListener('resize',()=>{if(isDesktop())closeSidebar();});
updateReadingState();

function applyTheme(isLight){
  document.body.classList.toggle('light',isLight);
  document.documentElement.classList.toggle('light',isLight);
  document.documentElement.classList.toggle('dark',!isLight);
  document.body.classList.toggle('dark',!isLight);
  localStorage.setItem('html_guide_theme',isLight?'light':'dark');
}
function toggleTheme(){
  const isLight=!document.body.classList.contains('light');
  applyTheme(isLight);
}
document.querySelector('#theme-toggle')?.addEventListener('click',toggleTheme);
document.querySelector('#sidebar-theme-toggle')?.addEventListener('click',toggleTheme);
const savedTheme=localStorage.getItem('html_guide_theme');
if(savedTheme) applyTheme(savedTheme==='light');
lucide.createIcons();
