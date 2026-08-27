
const LS={ann:'yk_announcements_v2',ev:'yk_events_v2',gal:'yk_gallery_v2',vid:'yk_videos_v2',adm:'yk_admissions_v2',don:'yk_donors_v2'};
function load(k){try{return JSON.parse(localStorage.getItem(k)||'[]')}catch{return []}}
function save(k,v){localStorage.setItem(k,JSON.stringify(v))}
let curAmt=100;

function renderAnn(){const l=load(LS.ann);const el=document.getElementById('annList');if(!el)return;el.innerHTML=l.map(a=>`<div class="a-item"><span>${a.text}</span></div>`).join('')||'<p style="color:#666;font-size:12px">ಇನ್ನೂ ಪ್ರಕಟಣೆ ಇಲ್ಲ</p>';}
function renderEv(){const l=load(LS.ev);const el=document.getElementById('evList');if(!el)return;el.innerHTML=l.map(e=>`<div class="a-item"><div><b>${e.title}</b><br><small>${e.date||''} ${e.place||''}</small></div></div>`).join('')||'<p style="color:#666;font-size:12px">ಇನ್ನೂ ಕಾರ್ಯಕ್ರಮ ಇಲ್ಲ</p>';}
function renderGal(){
  const g=load(LS.gal);
  const el=document.getElementById('galGrid');if(!el)return;
  el.innerHTML=g.map((u,i)=>`<div style="position:relative"><img src="${u}" loading="lazy"><button onclick="delGal(${i})" class="del" style="position:absolute;top:4px;right:4px">✕</button></div>`).join('')||'<p style="color:#666">ಗ್ಯಾಲರಿ ಖಾಲಿ</p>';
}
function renderVid(){
  const v=load(LS.vid);
  const el=document.getElementById('vidGrid');if(!el)return;
  el.innerHTML=v.map((it,i)=>{
    if(it.type==='youtube'){const id=(it.url.split('v=')[1]||'').split('&')[0]||it.url.split('/').pop();return `<div><iframe width="100%" height="140" src="https://www.youtube.com/embed/${id}" frameborder="0" allowfullscreen></iframe><small>${it.title||''}</small></div>`}
    else return `<div style="position:relative"><video src="${it.url}" controls style="width:100%;border-radius:10px"></video><button onclick="delVid(${i})" class="del" style="position:absolute;top:4px;right:4px">✕</button></div>`;
  }).join('')||'<p style="color:#666">ವಿಡಿಯೋ ಇಲ್ಲ</p>';
}
window.delGal=(i)=>{let g=load(LS.gal);g.splice(i,1);save(LS.gal,g);renderGal();if(typeof renderAImg==='function')renderAImg();};
window.delVid=(i)=>{let v=load(LS.vid);v.splice(i,1);save(LS.vid,v);renderVid();if(typeof renderAVid==='function')renderAVid();};

// Forms
const admForm=document.getElementById('admForm');
if(admForm) admForm.addEventListener('submit',e=>{
  e.preventDefault();
  const o={name:aName.value,place:aPlace.value,phone:aPhone.value,age:aAge.value,course:aCourse.value,date:new Date().toLocaleDateString()};
  let l=load(LS.adm);l.push(o);save(LS.adm,l);e.target.reset();alert('ಅರ್ಜಿ ಸಲ್ಲಿಸಲಾಗಿದೆ! ನಾವು ಸಂಪರ್ಕಿಸುತ್ತೇವೆ');
});

document.querySelectorAll('.amt').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('.amt').forEach(x=>x.classList.remove('active'));b.classList.add('active');curAmt=parseInt(b.dataset.a);const dAmt=document.getElementById('dAmt');const dShow=document.getElementById('dShow');if(dAmt)dAmt.value=curAmt;if(dShow)dShow.textContent=curAmt;
}));
const dAmt=document.getElementById('dAmt');
if(dAmt) dAmt.addEventListener('input',()=>{curAmt=dAmt.value||100;const dShow=document.getElementById('dShow');if(dShow)dShow.textContent=curAmt;});
const donForm=document.getElementById('donForm');
if(donForm) donForm.addEventListener('submit',e=>{
  e.preventDefault();
  const o={name:dName.value,phone:dPhone.value,amount:curAmt,date:new Date().toLocaleDateString()};
  let l=load(LS.don);l.push(o);save(LS.don,l);e.target.reset();alert('ಧನ್ಯವಾದಗಳು! ದಾನ ಸ್ವೀಕರಿಸಲಾಗಿದೆ');
});

// BOTTOM NAVIGATION - FIX FOR GITHUB
function initNavigation(){
  const sections={
    'home':0,
    'classes':'cls-section',
    'events':'evList',
    'donate':'donForm'
  };
  document.querySelectorAll('.bn').forEach((btn,idx)=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.bn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const tab=btn.dataset.tab;
      if(tab==='home'){window.scrollTo({top:0,behavior:'smooth'});}
      else if(tab==='classes'){const el=document.querySelector('.classes');if(el)el.scrollIntoView({behavior:'smooth'});}
      else if(tab==='events'){const el=document.getElementById('evList');if(el)el.closest('.card').scrollIntoView({behavior:'smooth'});}
      else if(tab==='donate'){const el=document.getElementById('donForm');if(el)el.closest('.card').scrollIntoView({behavior:'smooth'});}
    });
  });
}

// For GitHub Pages - ensure banner loads
function fixBanner(){
  const img=document.querySelector('.banner img');
  if(img){
    img.onerror=()=>{img.src='https://via.placeholder.com/600x250/FFD700/7a0000?text=Sri+Ganesha+Yakshagana+Kala+Kendra+Muleria';};
  }
}

document.addEventListener('DOMContentLoaded',()=>{
  renderAnn();renderEv();renderGal();renderVid();
  initNavigation();
  fixBanner();
});
// Also call immediately in case DOM already loaded
renderAnn();renderEv();renderGal();renderVid();
initNavigation();
fixBanner();
