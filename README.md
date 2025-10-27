<!doctype html>

<html lang="kn">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>ಗಣೇಶ ಯಕ್ಷಗಾನ ಕಲಾ ಕೇಂದ್ರ, ಮುಲ್ಲೇರಿಯಾ, ಕasasragod</title>
  <style>
    :root{--red:#8b0000;--gold:#d4a017;--bg:#fff;--muted:#666}
    body{font-family:Arial,Helvetica,sans-serif;margin:0;color:#111;background:var(--bg)}
    header{background:linear-gradient(90deg,var(--red),#b00000);color:var(--gold);padding:20px;text-align:center;border-bottom:6px solid var(--gold)}
    header h1{margin:0;font-size:22px}
    .container{max-width:1100px;margin:18px auto;padding:12px}
    .card{background:#fff;border:1px solid #efe7dc;padding:14px;margin:12px 0;border-radius:10px;box-shadow:0 4px 12px rgba(0,0,0,0.05)}
    .grid{display:grid;grid-template-columns:1fr 340px;gap:16px}
    img.responsive{max-width:100%;height:auto;border-radius:8px;border:4px solid #fff}
    .gallery-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:10px}
    .video-list iframe{width:100%;height:220px;border-radius:8px}
    .admin-btn{position:fixed;right:18px;bottom:18px;background:var(--red);color:var(--gold);padding:12px 16px;border-radius:999px;border:2px solid var(--gold);z-index:9999;cursor:pointer}
    .admin-modal{position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:flex-start;justify-content:center;padding:22px;z-index:10000}
    .admin-box{background:#fff;border-radius:10px;padding:16px;width:98%;max-width:1100px;max-height:92vh;overflow:auto;border:6px solid var(--gold)}
    .admin-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    label{display:block;margin-top:8px;font-weight:700;color:var(--red)}
    input,textarea,button,select{width:100%;padding:8px;margin-top:6px;border-radius:8px;border:1px solid #ddd}
    .btn-gold{background:var(--gold);border:none;padding:10px;border-radius:8px;color:#111;font-weight:700;cursor:pointer}
    .small{font-size:13px;color:var(--muted)}
    footer{padding:14px;text-align:center;color:var(--muted);border-top:1px solid #f2e9df;margin-top:18px}
    .list-item{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:8px 6px;border-bottom:1px solid #f5f0ec}
  </style>
</head>
<body>
  <header>
    <h1>ಗಣೇಶ ಯಕ್ಷಗಾನ ಕಲಾ ಕೇಂದ್ರ, ಮುಲ್ಲೇರಿಯಾ, ಕಾಸರಗೋಡು</h1>
    <div class="small">Thenk Thittu ಆಧಾರಿತ ಯಕ್ಷಗಾನ ತರಗತಿ</div>
  </header>  <div class="container">
    <div class="grid">
      <main>
        <section class="card center">
          <h2 id="siteTitle">ಗಣೇಶ ಯಕ್ಷಗಾನ ಕಲಾ ಕೇಂದ್ರ</h2>
          <div id="guruArea" class="center card" style="padding:10px">
            <img id="guruPhoto" class="responsive" src="" alt="ಗುರು ಫೋಟೋ" style="display:none">
            <div id="guruPlaceholder">ಗುರು ಫೋಟೋ ಇಲ್ಲಿದೆ (ಅಡ್ಮಿನ್ ಮೂಲಕ URL ಸೇರಿಸಿ)</div>
            <h3 id="guruName">ಶುಬ್ರಾಯ ಪದಕನ್ನಯ್ಯ, ಬಾಯಾರು</h3>
            <p id="guruDesc">ಗುರು ವಿವರ ಇಲ್ಲಿದೆ — ಅಡ್ಮಿನ್ ಮೂಲಕ ಸಂಖ್ಯೆಯನ್ನು ಸಿವಿ ಮಾಡಿ.</p>
          </div>
        </section><section class="card">
      <h2>ವರ್ಗದ ಸಮಯ</h2>
      <p class="small">ಪ್ರತಿ ಭಾನುವಾರ — <strong>1:35 PM</strong> ರಿಂದ <strong>3:45 PM</strong></p>
    </section>

    <section class="card">
      <h2>ಪ್ರವೇಶ ಫಾರ್ಮ್</h2>
      <p class="small">ಫಾರ್ಮ್ ಮಾಹಿತಿಯನ್ನು WhatsApp (QR) ಮೂಲಕ ಕಳುಹಿಸಿ</p>
      <form id="admissionForm">
        <label>ಹೆಸರು</label><input id="adm_name" required>
        <label>ವಯಸ್ಸು</label><input id="adm_age" type="number">
        <label>ಮೊಬೈಲ್</label><input id="adm_phone" inputmode="tel">
        <label>ಸಂದೇಶ</label><textarea id="adm_msg"></textarea>
        <button type="submit" class="btn-gold">WhatsApp ಮೂಲಕ ಸಲ್ಲಿಸಿ</button>
      </form>
    </section>

    <section class="card">
      <h2>ಗ್ಯಾಲರಿ</h2>
      <div id="gallery" class="gallery-grid"></div>
    </section>

    <section class="card">
      <h2>ವೀಡಿಯೊಗಳು</h2>
      <div id="videos" class="video-list"></div>
    </section>

    <section class="card">
      <h2>ಭವಿಷ್ಯದ ಕಾರ್ಯಕ್ರಮಗಳು</h2>
      <div id="eventsList"></div>
    </section>
  </main>

  <aside>
    <section class="card">
      <h2>ದಾನ</h2>
      <div id="qrPlaceholder" class="card">QR ಇಲ್ಲಿದೆ (ಅಡ್ಮಿನ್ ಮೂಲಕ URL ಸೇರಿಸಿ)</div>
      <form id="donationForm">
        <label>ಹೆಸರು</label><input id="don_name">
        <label>ಮೊತ್ತ (₹)</label><input id="don_amount" type="number">
        <button type="submit" class="btn-gold">WhatsApp ಮೂಲಕ ಸಲ್ಲಿಸಿ</button>
      </form>
      <div style="margin-top:12px">
        <p>ಸ್ವೀಕರಿಸಿದ ಮೊತ್ತ: <strong id="collected">₹0</strong></p>
        <p>ದಾನದ ಗುರಿ: <strong id="donationGoal">₹0</strong></p>
      </div>
    </section>

    <section class="card">
      <h2>ಸಂಪರ್ಕ</h2>
      <p>ಇಮೇಲ್: <a href="mailto:srikrishnab83@gmail.com">srikrishnab83@gmail.com</a></p>
      <p>ಮೊಬೈಲ್: <a href="tel:+919148014768">+91 91480 14768</a></p>
    </section>
  </aside>
</div>

  </div><button id="adminOpen" class="admin-btn">Admin</button>

  <footer>
    © ಗಣೇಶ ಯಕ್ಷಗಾನ ಕಲಾ ಕೇಂದ್ರ — Mulleriya, Kasaragod
  </footer>  <script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
    import { getFirestore, collection, addDoc, getDocs, onSnapshot, doc, setDoc, deleteDoc, query, orderBy } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

    const firebaseConfig = {
      apiKey: "AIzaSyC8vMaKYBeZ93LKBcBNOjdqbsgxCJV9MyU",
      authDomain: "yaksha-admin.firebaseapp.com",
      projectId: "yaksha-admin",
      storageBucket: "yaksha-admin.appspot.com",
      messagingSenderId: "480699199925",
      appId: "1:480699199925:web:3a2556ea2db2eff68c29fc",
      measurementId: "G-VYXM03K87H"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // elements
    const galleryEl = document.getElementById('gallery');
    const videosEl = document.getElementById('videos');
    const eventsEl = document.getElementById('eventsList');
    const collectedEl = document.getElementById('collected');
    const donationGoalEl = document.getElementById('donationGoal');
    const guruImg = document.getElementById('guruPhoto');
    const guruPlaceholder = document.getElementById('guruPlaceholder');
    const qrPlaceholder = document.getElementById('qrPlaceholder');

    // realtime listeners
    (function setupRealtime(){
      try{
        const gq = query(collection(db,'gallery'), orderBy('createdAt','desc'));
        onSnapshot(gq,(snap)=>{
          galleryEl.innerHTML='';
          snap.forEach(s=>{
            const d = s.data();
            const img = document.createElement('img'); img.className='responsive'; img.src=d.url; img.alt=d.caption||'gallery';
            const wrap = document.createElement('div'); wrap.appendChild(img); galleryEl.appendChild(wrap);
          });
        });

        const vq = query(collection(db,'videos'), orderBy('createdAt','desc'));
        onSnapshot(vq,(snap)=>{
          videosEl.innerHTML='';
          snap.forEach(s=>{
            const d = s.data();
            if(d.url && d.url.includes('youtube')){
              // convert to embed
              let id = '';
              try{ if(d.url.includes('watch')){ id = new URL(d.url).searchParams.get('v'); } if(!id && d.url.includes('youtu.be')){ id = d.url.split('/').pop(); } }catch(e){ id=''; }
              if(id){ const iframe = document.createElement('iframe'); iframe.src = `https://www.youtube.com/embed/${id}`; iframe.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'; videosEl.appendChild(iframe); return; }
            }
            if(d.embed){ const div=document.createElement('div'); div.innerHTML=d.embed; videosEl.appendChild(div); }
            else if(d.url){ const iframe = document.createElement('iframe'); iframe.src=d.url; iframe.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'; videosEl.appendChild(iframe); }
          });
        });

        const eq = query(collection(db,'events'), orderBy('date','asc'));
        onSnapshot(eq,(snap)=>{
          eventsEl.innerHTML='';
          snap.forEach(s=>{
            const d = s.data();
            const card = document.createElement('div'); card.className='card';
            card.innerHTML = `<strong>${d.title||'ಶೀರ್ಷಿಕೆ ಇಲ್ಲ'}</strong><div class=small>${d.date||''}</div><div>${d.desc||''}</div>`;
            eventsEl.appendChild(card);
          });
        });

        const countersDoc = doc(db,'meta','counters');
        onSnapshot(countersDoc,(snap)=>{
          if(snap.exists()){
            const dat = snap.data(); collectedEl.textContent = '₹'+(dat.collected||0); donationGoalEl.textContent = '₹'+(dat.donationGoal||0);
          }
        });

        const guruDoc = doc(db,'meta','guru');
        onSnapshot(guruDoc,(snap)=>{
          if(snap.exists()){
            const g = snap.data();
            if(g.photoUrl){ guruImg.src = g.photoUrl; guruImg.style.display='block'; guruPlaceholder.style.display='none'; }
            if(g.name) document.getElementById('guruName').textContent = g.name;
            if(g.desc) document.getElementById('guruDesc').textContent = g.desc;
          }
        });

        const qrDoc = doc(db,'meta','qr');
        onSnapshot(qrDoc,(snap)=>{
          if(snap.exists()){
            const q = snap.data(); if(q.url){ qrPlaceholder.innerHTML = `<img src="${q.url}" class="responsive">`; }
          }
        });

      }catch(err){ console.error('Realtime setup error',err); }
    })();

    // forms -> whatsapp
    document.getElementById('admissionForm').addEventListener('submit',(e)=>{ e.preventDefault(); window.open('https://wa.me/qr/JGB3XSEHKWFDD1','_blank'); });
    document.getElementById('donationForm').addEventListener('submit',(e)=>{ e.preventDefault(); window.open('https://wa.me/qr/JGB3XSEHKWFDD1','_blank'); });

    // admin
    document.getElementById('adminOpen').addEventListener('click',()=>{
      const p = prompt('ಅಡ್ಮಿನ್ ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ:'); if(p===null) return; if(p!=='admin123'){ alert('ತಪ್ಪಾದ ಪಾಸ್‌ವರ್ಡ್'); return; }
      openAdminModal();
    });

    function openAdminModal(){
      // remove any existing modal first to avoid duplicate listeners or IDs
      const existing = document.querySelector('.admin-modal'); if(existing) existing.remove();
      // create overlay
      const modal = document.createElement('div'); modal.className='admin-modal';
      const box = document.createElement('div'); box.className='admin-box';
      box.innerHTML = `
        <h2>ಅಡ್ಮಿನ್ ಪ್ಯಾನೆಲ್</h2>
        <div class="admin-grid">
          <div>
            <h3>ಗುರು ಫೋಟೋ (URL)</h3>
            <label>ಗುರು ಫೋಟೋ URL</label><input id="guruUrl" placeholder="ಅನೇಕ URL (http://...)" />
            <label>ಗುರು ಹೆಸರು</label><input id="guruNameInput" value="ಶುಬ್ರಾಯ ಪದಕನ್ನಯ್ಯ, ಬಾಯಾರು" />
            <label>ಗುರು ವಿವರಣೆ</label><textarea id="guruDescInput">ಗುರು ವಿವರಣೆ ಇಲ್ಲಿ ಹಾಕಿ.</textarea><button id="saveGuru" class="btn-gold">ಸೇಫ್ (ಗುರು)</button>

        <h3 style="margin-top:12px">ದಾನ QR (URL)</h3>
        <label>QR ಚಿತ್ರ URL</label><input id="qrUrl" placeholder="QR ಚಿತ್ರ URL" />
        <button id="saveQR" class="btn-gold">ಸೇಫ್ (QR)</button>

        <h3 style="margin-top:12px">ಗ್ಯಾಲರಿ - ಚಿತ್ರ URL ಸೇರ್ಸು</h3>
        <label>ಚಿತ್ರ URL</label><input id="galleryUrl" placeholder="ಚಿತ್ರ URL" />
        <label>ಶೀರ್ಷಿಕೆ (ಐಚ್ಛಿಕ)</label><input id="galleryCaption" placeholder="ಶೀರ್ಷಿಕೆ (ಐಚ್ಛಿಕ)" />
        <button id="addGalleryUrl" class="btn-gold">ಸೇರಿಸಿ (ಗ್ಯಾಲರಿ)</button>

        <h3 style="margin-top:12px">ವೀಡಿಯೊ - URL ಅಥವಾ embed</h3>
        <label>ವೀಡಿಯೊ URL ಅಥವಾ embed</label><input id="videoUrl" placeholder="YouTube link ಅಥವಾ embed HTML" />
        <label>ವೀಡಿಯೊ ಶೀರ್ಷಿಕೆ (ಐಚ್ಛಿಕ)</label><input id="videoCaption" placeholder="ಶೀರ್ಷಿಕೆ (ಐಚ್ಛಿಕ)" />
        <button id="addVideoUrl" class="btn-gold">ಸೇರಿಸಿ (ವೀಡಿಯೊ)</button>
      </div>

      <div>
        <h3>ಕೌಂಟರ್ಸ್ (Collected, Goal)</h3>
        <label>Collected (₹)</label><input id="counter_collected" type=number>
        <label>Donation Goal (₹)</label><input id="counter_goal" type=number>
        <button id="saveCounters" class="btn-gold">ಉಳಿಸಿ (ಕೌಂಟರ್ಸ್)</button>

        <h3 style="margin-top:12px">ಕಾರ್ಯಕ್ರಮ ಸೇರಿಸಿ</h3>
        <label>ಶೀರ್ಷಿಕೆ</label><input id="ev_title">
        <label>ದಿನಾಂಕ (YYYY-MM-DD)</label><input id="ev_date">
        <label>ವಿವರಣೆ</label><textarea id="ev_desc"></textarea>
        <button id="addEvent" class="btn-gold">ಸೇರಿಸಿ (ಕಾರ್ಯಕ್ರಮ)</button>

        <h3 style="margin-top:12px">ವಸ್ತುಗಳನ್ನು ನಿರ್ವಹಿಸು</h3>
        <div id="adminLists"></div>

        <div style="margin-top:12px;display:flex;gap:8px">
          <button id="closeAdmin" class="btn-gold">ಮುಚ್ಚಿ</button>
          <button id="refreshAdmin" class="btn-gold">ರಿಫ್ರೆಶ್</button>
        </div>
      </div>
    </div>
  `;
  modal.appendChild(box); document.body.appendChild(modal);
  // focus first field for convenience
  const firstInput = box.querySelector('input, textarea, button'); if(firstInput) firstInput.focus();
  wireAdmin(box,modal);
}

function wireAdmin(container, modal){
  const guruUrl = container.querySelector('#guruUrl');
  const guruNameInput = container.querySelector('#guruNameInput');
  const guruDescInput = container.querySelector('#guruDescInput');
  const saveGuru = container.querySelector('#saveGuru');

  const qrUrl = container.querySelector('#qrUrl');
  const saveQR = container.querySelector('#saveQR');

  const galleryUrl = container.querySelector('#galleryUrl');
  const galleryCaption = container.querySelector('#galleryCaption');
  const addGalleryUrl = container.querySelector('#addGalleryUrl');

  const videoUrl = container.querySelector('#videoUrl');
  const videoCaption = container.querySelector('#videoCaption');
  const addVideoUrl = container.querySelector('#addVideoUrl');

  const addEvent = container.querySelector('#addEvent');
  const ev_title = container.querySelector('#ev_title');
  const ev_date = container.querySelector('#ev_date');
  const ev_desc = container.querySelector('#ev_desc');

  const saveCounters = container.querySelector('#saveCounters');
  const counter_collected = container.querySelector('#counter_collected');
  const counter_goal = container.querySelector('#counter_goal');

  const adminLists = container.querySelector('#adminLists');
  const closeAdmin = container.querySelector('#closeAdmin');
  const refreshAdmin = container.querySelector('#refreshAdmin');

  // save guru (URL)
  saveGuru.addEventListener('click', async ()=>{
    const url = (guruUrl.value||'').trim(); const name = (guruNameInput.value||'').trim(); const desc = (guruDescInput.value||'').trim();
    if(!url){ if(!confirm('ಗುರು ಚಿತ್ರ URL ನೀಡಿಲ್ಲ. ಮುಂದುವರೆಯಲು OK ಕ್ಲಿಕ್ ಮಾಡಿ (ಇದರಿಂದ ಮಾತ್ರ ಹೆಸರು/ವಿವರಣೆ ಅಪ್ಡೇಟ್ ಆಗುತ್ತದೆ).')){
      return; }
    }
    try{ await setDoc(doc(db,'meta','guru'),{photoUrl: url||'', name: name||'ಶುಬ್ರಾಯ ಪದಕನ್ನಯ್ಯ, ಬಾಯಾರು', desc: desc||''}); alert('ಗುರು ವಿವರ ಉಳಿಸಲಾಗಿದೆ'); }catch(err){ console.error('saveGuru',err); alert('ಗುರು ಉಳಿಸಲು ವಿಫಲ'); }
  });

  // save QR URL
  saveQR.addEventListener('click', async ()=>{
    const url = (qrUrl.value||'').trim(); if(!url){ alert('QR URL ನಮೂದಿಸಿ'); return; }
    try{ await setDoc(doc(db,'meta','qr'),{url}); alert('QR ಉಳಿಸಿದೆ'); }catch(err){ console.error('saveQR',err); alert('QR ಉಳಿಸಲು ವಿಫಲ'); }
  });

  // add gallery by URL
  addGalleryUrl.addEventListener('click', async ()=>{
    const url = (galleryUrl.value||'').trim(); const cap = (galleryCaption.value||'').trim(); if(!url){ alert('ಚಿತ್ರ URL ನಮೂದಿಸಿ'); return; }
    try{ await addDoc(collection(db,'gallery'),{url,caption:cap,createdAt: Date.now()}); galleryUrl.value=''; galleryCaption.value=''; alert('ಗ್ಯಾಲರಿ URL ಉಳಿಸಲಾಗಿದೆ'); }catch(err){ console.error('addGalleryUrl',err); alert('ಗ್ಯಾಲರಿ ಸೇರ್ಪಡೆ ವಿಫಲ'); }
  });

  // add video by URL/embed
  addVideoUrl.addEventListener('click', async ()=>{
    const v = (videoUrl.value||'').trim(); const cap = (videoCaption.value||'').trim(); if(!v){ alert('ವೀಡಿಯೊ URL ಅಥವಾ embed ನಮೂದಿಸಿ'); return; }
    // store as url or embed
    const payload = {createdAt: Date.now()};
    if(v.startsWith('<iframe') || v.includes('<iframe')){ payload.embed = v; }
    else { payload.url = v; }
    if(cap) payload.caption = cap;
    try{ await addDoc(collection(db,'videos'),payload); videoUrl.value=''; videoCaption.value=''; alert('ವೀಡಿಯೊ ಉಳಿಸಲಾಗಿದೆ'); }catch(err){ console.error('addVideoUrl',err); alert('ವೀಡಿಯೊ ಉಳಿಸಲು ವಿಫಲ'); }
  });

  // add event
  addEvent.addEventListener('click', async ()=>{
    const title = (ev_title.value||'').trim(); const date = (ev_date.value||'').trim(); const desc = (ev_desc.value||'').trim(); if(!title){ alert('ಶೀರ್ಷಿಕೆ ನಮೂದಿಸಿ'); return; }
    try{ await addDoc(collection(db,'events'),{title,date,desc,createdAt: Date.now()}); ev_title.value=''; ev_date.value=''; ev_desc.value=''; alert('ಕಾರ್ಯಕ್ರಮ ಸೇರ್ಪಡೆ ಆಗಿದೆ'); }catch(err){ console.error('addEvent',err); alert('ಕಾರ್ಯಕ್ರಮ ಸೇರಿಸಲು ವಿಫಲ'); }
  });

  // save counters
  saveCounters.addEventListener('click', async ()=>{
    const collected = Number(counter_collected.value||0); const donationGoal = Number(counter_goal.value||0);
    try{ await setDoc(doc(db,'meta','counters'),{collected,donationGoal}); alert('ಕೌಂಟರ್ಸ್ ಉಳಿಸಲಾಗಿದೆ'); }catch(err){ console.error('saveCounters',err); alert('ಕೌಂಟರ್ಸ್ ಉಳಿಸಲು ವಿಫಲ'); }
  });

  // close & refresh
  closeAdmin.addEventListener('click',()=>{ modal.remove(); });
  refreshAdmin.addEventListener('click',()=>{ loadAdminLists(adminLists); });

  // load lists
  loadAdminLists(adminLists);
}

// admin lists: gallery, videos, events with delete
async function loadAdminLists(container){
  container.innerHTML = '<p class="small">ಲೋಡ್ ಆಗುತ್ತಿದೆ...</p>';
  try{
    container.innerHTML = '';
    // gallery
    const gsnap = await getDocs(query(collection(db,'gallery'), orderBy('createdAt','desc')));
    const gdiv = document.createElement('div'); gdiv.innerHTML = '<h4>ಗ್ಯಾಲರಿ</h4>';
    gsnap.forEach(d=>{ const v=d.data(); const id=d.id; const row=document.createElement('div'); row.className='list-item'; row.innerHTML = `<div style="flex:1;overflow:hidden">${v.url}</div><div><button data-id="${id}" data-type="gallery" class="btn-gold">ತೆಗೆದುಹಾಕಿ</button></div>`; gdiv.appendChild(row); });
    container.appendChild(gdiv);
    // videos
    const vsnap = await getDocs(query(collection(db,'videos'), orderBy('createdAt','desc')));
    const vdiv = document.createElement('div'); vdiv.innerHTML = '<h4>ವೀಡಿಯೊಗಳು</h4>';
    vsnap.forEach(d=>{ const v=d.data(); const id=d.id; const content = v.url||v.embed||''; const row=document.createElement('div'); row.className='list-item'; row.innerHTML = `<div style="flex:1;overflow:hidden">${content}</div><div><button data-id="${id}" data-type="videos" class="btn-gold">ತೆಗೆದುಹಾಕಿ</button></div>`; vdiv.appendChild(row); });
    container.appendChild(vdiv);
    // events
    const esnap = await getDocs(query(collection(db,'events'), orderBy('date','asc')));
    const ediv = document.createElement('div'); ediv.innerHTML = '<h4>ಕಾರ್ಯಕ್ರಮಗಳು</h4>';
    esnap.forEach(d=>{ const v=d.data(); const id=d.id; const row=document.createElement('div'); row.className='list-item'; row.innerHTML = `<div style="flex:1;overflow:hidden">${v.title} (${v.date})</div><div><button data-id="${id}" data-type="events" class="btn-gold">ತೆಗೆದುಹಾಕಿ</button></div>`; ediv.appendChild(row); });
    container.appendChild(ediv);

    // attach delete handlers
    container.querySelectorAll('button[data-id]').forEach(btn=>{
      btn.addEventListener('click', async ()=>{
        const id = btn.getAttribute('data-id'); const type = btn.getAttribute('data-type');
        if(!confirm('ನಿಖರವಾಗಿ ತೆಗೆಯಬೇಕೆ?')) return;
        try{ await deleteDoc(doc(db,type,id)); alert('ಐಟಂ ಅಳಿಸಲಾಗಿದೆ'); loadAdminLists(container); }catch(err){ console.error('deleteItem',err); alert('ಅಳಿಸಲು ವಿಫಲ'); }
      });
    });

  }catch(err){ console.error('loadAdminLists',err); container.innerHTML = '<p class="small">ಲೋಡ್ ವಿಫಲ</p>'; }
}

  </script>
</body>
</html>
