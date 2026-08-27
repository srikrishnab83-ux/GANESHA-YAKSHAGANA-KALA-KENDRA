const LS={ann:'yk_announcements_v2',ev:'yk_events_v2',gal:'yk_gallery_v2',vid:'yk_videos_v2',adm:'yk_admissions_v2',don:'yk_donors_v2'};
const PASS='ganesh123';
function load(k){try{return JSON.parse(localStorage.getItem(k)||'[]')}catch{return []}}
function save(k,v){localStorage.setItem(k,JSON.stringify(v))}

const adminPanel=document.getElementById('adminPanel');
const loginM=document.getElementById('loginM');
document.getElementById('adminBtn').onclick=()=>loginM.classList.remove('hidden');
document.getElementById('cancelL').onclick=()=>loginM.classList.add('hidden');
document.getElementById('closeA').onclick=()=>adminPanel.classList.add('hidden');
document.getElementById('loginBtn').onclick=()=>{
  if(document.getElementById('passIn').value===PASS){loginM.classList.add('hidden');adminPanel.classList.remove('hidden');renderAAll();}
  else alert('ತಪ್ಪು ಪಾಸ್ವರ್ಡ್ - ganesh123 ಪ್ರಯತ್ನಿಸಿ');
};

document.querySelectorAll('[data-at]').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('[data-at]').forEach(x=>x.classList.remove('active'));b.classList.add('active');
  document.querySelectorAll('[id^="at-"]').forEach(x=>x.classList.add('hidden'));
  document.getElementById('at-'+b.dataset.at).classList.remove('hidden');
}));

document.getElementById('addAnn').onclick=()=>{
  const t=nAnn.value.trim();if(!t)return;
  let l=load(LS.ann);l.unshift({id:Date.now(),text:t});save(LS.ann,l);nAnn.value='';renderAAnn();
};
function renderAAnn(){
  const l=load(LS.ann);
  document.getElementById('aAnnList').innerHTML=l.map((a,i)=>`<div class="a-item"><span>${a.text}</span><button class="del" onclick="dAnn(${i})">ಅಳಿಸಿ</button></div>`).join('');
  document.getElementById('annList').innerHTML=l.map(a=>`<div class="a-item"><span>${a.text}</span></div>`).join('');
}
window.dAnn=(i)=>{let l=load(LS.ann);l.splice(i,1);save(LS.ann,l);renderAAnn();};

document.getElementById('addEv').onclick=()=>{
  const t=nEvT.value.trim();if(!t)return;
  let l=load(LS.ev);l.unshift({id:Date.now(),title:t,date:nEvD.value,place:nEvP.value});save(LS.ev,l);
  nEvT.value='';nEvD.value='';nEvP.value='';renderAEv();
};
function renderAEv(){
  const l=load(LS.ev);
  document.getElementById('aEvList').innerHTML=l.map((e,i)=>`<div class="a-item"><div><b>${e.title}</b><br><small>${e.date||''} ${e.place||''}</small></div><button class="del" onclick="dEv(${i})">ಅಳಿಸಿ</button></div>`).join('');
  document.getElementById('evList').innerHTML=l.map(e=>`<div class="a-item"><div><b>${e.title}</b><br><small>${e.date||''} ${e.place||''}</small></div></div>`).join('');
}
window.dEv=(i)=>{let l=load(LS.ev);l.splice(i,1);save(LS.ev,l);renderAEv();};

function renderAImg(){
  const g=load(LS.gal);
  document.getElementById('aImgGrid').innerHTML=g.map((u,i)=>`<div style="position:relative"><img src="${u}" style="width:100%;border-radius:8px"><button class="del" style="position:absolute;top:4px;right:4px" onclick="dG(${i})">✕ ಅಳಿಸಿ</button></div>`).join('')||'<p style="color:#666">ಇನ್ನೂ ಚಿತ್ರಗಳಿಲ್ಲ</p>';
  document.getElementById('galGrid').innerHTML=g.map((u,i)=>`<div style="position:relative"><img src="${u}"><button onclick="dG(${i})" class="del" style="position:absolute;top:4px;right:4px">✕</button></div>`).join('');
}
window.dG=(i)=>{let g=load(LS.gal);g.splice(i,1);save(LS.gal,g);renderAImg();};

function renderAAdm(){
  const l=load(LS.adm);
  document.getElementById('aAdmList').innerHTML=l.map((a,i)=>`<div class="a-item"><div><b>${a.name}</b> - ${a.phone}<br><small>${a.course} • ${a.place||''} • ${a.date}</small></div><button class="del" onclick="dAdm(${i})">ಅಳಿಸಿ</button></div>`).join('')||'<p>ಅರ್ಜಿಗಳಿಲ್ಲ</p>';
}
window.dAdm=(i)=>{let l=load(LS.adm);l.splice(i,1);save(LS.adm,l);renderAAdm();};

function renderADon(){
  const l=load(LS.don);
  document.getElementById('aDonList').innerHTML=l.map((d,i)=>`<div class="a-item"><div><b>${d.name}</b> - ₹${d.amount}<br><small>${d.phone||''} • ${d.date}</small></div><button class="del" onclick="dDon(${i})">ಅಳಿಸಿ</button></div>`).join('')||'<p>ದಾನಿಗಳಿಲ್ಲ</p>';
}
window.dDon=(i)=>{let l=load(LS.don);l.splice(i,1);save(LS.don,l);renderADon();};

function renderAVid(){
  const l=load(LS.vid);
  document.getElementById('aVidList').innerHTML=l.map((v,i)=>`<div class="a-item"><div><b>${v.title||'Video'}</b><br><small>${v.url.substring(0,50)}</small></div><button class="del" onclick="dV(${i})">ಅಳಿಸಿ</button></div>`).join('');
}
window.dV=(i)=>{let l=load(LS.vid);l.splice(i,1);save(LS.vid,l);renderAVid();document.getElementById('vidGrid').innerHTML=l.map(it=>{
  if(it.type==='youtube'){const id=(it.url.split('v=')[1]||'').split('&')[0]||it.url.split('/').pop();return `<div><iframe width="100%" height="140" src="https://www.youtube.com/embed/${id}"></iframe></div>`}
  else return `<div><video src="${it.url}" controls style="width:100%"></video></div>`;
}).join('');};

function renderAAll(){renderAAnn();renderAEv();renderAImg();renderAAdm();renderADon();renderAVid();}

document.getElementById('saveC').onclick=()=>{
  const cn=cName.value.trim();const cp=cPreset.value.trim();
  if(cn) localStorage.setItem('yk_cloud',cn);
  if(cp) localStorage.setItem('yk_preset',cp);
  cStat.textContent='Saved! Cloud: '+(cn||localStorage.getItem('yk_cloud')||'demo')+' Preset: '+(cp||localStorage.getItem('yk_preset')||'ml_default');
  alert('Cloudinary ಸೆಟ್ಟಿಂಗ್ಸ್ Save ಆಯಿತು');
};
(function(){const cn=localStorage.getItem('yk_cloud');const cp=localStorage.getItem('yk_preset');if(cn) cName.value=cn;if(cp) cPreset.value=cp;})();

document.getElementById('clearAll').onclick=()=>{if(confirm('ಎಲ್ಲಾ ಡೇಟಾ ಅಳಿಸಬೇಕೇ?')){Object.values(LS).forEach(k=>localStorage.removeItem(k));renderAAll();alert('ಅಳಿಸಲಾಗಿದೆ');}};
