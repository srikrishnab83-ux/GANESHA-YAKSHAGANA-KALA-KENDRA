<!DOCTYPE html><html lang="kn">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>ಗಣೇಶ ಯಕ್ಷಗಾನ - ಸ್ಕ್ರಾಚ್ & ಗೆಲ್ಲಿ (Yakshagana Theme)</title>  <!-- Firebase v8 (namespaced) -->  <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>  <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js"></script>  <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js"></script>  <style>
    :root{--red:#b22222;--gold:#ffd480;--bg:#fff8f2}
    body{font-family:'Noto Sans Kannada',sans-serif;background:var(--bg);margin:0;color:#333}
    header{background:linear-gradient(90deg,var(--red),#d68a00);color:#fff;padding:18px;text-align:center}
    header h1{margin:0;font-size:20px}
    .container{max-width:980px;margin:18px auto;padding:12px}
    .card-panel{background:#fffaf0;border-radius:12px;padding:14px;box-shadow:0 6px 18px rgba(0,0,0,0.06)}
    .muted{color:#666;font-size:14px}
    input,button,select{font-size:15px;padding:10px;border-radius:8px;border:1px solid #dcdcdc}
    button{background:var(--red);color:#fff;border:none}
    .grid{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-top:12px}
    .scratch-card{background:linear-gradient(180deg,#fff2e6,#f6e0c9);border-radius:10px;padding:10px;text-align:center;cursor:pointer;box-shadow:0 4px 8px rgba(0,0,0,0.06)}
    .scratch-card.small{padding:6px}
    #scratchCanvas{display:block;margin:12px auto;border-radius:8px;background:#ddd}
    #winners{background:#fff5f5;padding:10px;border-radius:8px;margin-top:12px}
    table{width:100%;border-collapse:collapse;margin-top:10px}
    th,td{border:1px solid #eee;padding:8px;text-align:center}
    footer{background:var(--red);color:#fff;padding:12px;text-align:center;margin-top:18px}
    .notice{background:#fff3cd;border:1px solid #ffeeba;padding:10px;border-radius:8px;margin-bottom:12px}
  </style></head>
<body>
  <header>
    <h1>🎭 ಗಣೇಶ ಯಕ್ಷಗಾನ ಕಲಾ ಕೇಂದ್ರ — ಸ್ಕ್ರಾಚ್ & ಗೆಲ್ಲಿ</h1>
  </header>  <div class="container">
    <!-- LOGIN (A: login first) -->
    <section class="card-panel" id="loginPanel">
      <h3 style="color:var(--red)">ಲಾಗಿನ್ — OTP (ಮೊಬೈಲ್)</h3>
      <p class="muted">OTP ಕೆಲಸ ಮಾಡಲು ಈ ಪೇಜ್ ಅನ್ನು HTTPS ಅಥವಾ localhost ನಲ್ಲಿ ಓದಿರಿ. (Phone Auth requires a live domain)</p><div class="notice">ನೋಟ್: Firebase Console → Authentication → Sign-in method → Phone ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ. ಮತ್ತು Console → Authentication → Authorized domains ಗೆ ನಿಮ್ಮ ಡೊಮೈನ್ ಸೇರಿಸಿ.</div>

  <div>
    <input id="phoneInput" placeholder="ಮೊಬೈಲ್ ಸಂಖ್ಯೆ (10 ಅಂಕಿ)" maxlength="10" />
    <div id="recaptcha-container" style="margin-top:8px"></div>
    <div style="margin-top:8px">
      <button id="sendOtpBtn">OTP ಕಳುಹಿಸಿ</button>
    </div>
    <div id="otpBox" style="margin-top:8px;display:none">
      <input id="otpInput" placeholder="OTP ನಮೂದಿಸಿ" maxlength="6" />
      <button id="verifyOtpBtn">OTP ದೃಢಪಡಿಸಿ</button>
    </div>
    <p id="loginMsg" class="muted"></p>
  </div>
</section>

<!-- SCRATCH CARDS PAGE (hidden until login) -->
<section class="card-panel" id="gamePanel" style="display:none">
  <h3 style="color:var(--red)">ನಿಮ್ಮ ಸ್ಕ್ರಾಚ್ ಕಾರ್ಡ್</h3>
  <p class="muted">ಒಂದು ಮೊಬೈಲ್ ಸಂಖ್ಯೆ — ಒರೇ ಒಂದು ಸ್ಕ್ರ್ಯಾಚ್. 25 ಕಾರ್ಡುಗಳು: 10×₹0, 5×₹5, 5×₹10, 5×₹20.</p>

  <div id="cardsGrid" class="grid"></div>

  <div id="scratchArea" style="display:none;margin-top:12px">
    <h4>ನೀವು ನಿಯೋಜಿಸಲಾದ ಕಾರ್ಡ್: <span id="assignedCard">-</span></h4>
    <canvas id="scratchCanvas" width="360" height="160"></canvas>
    <div id="revealBox" style="display:none;margin-top:10px">
      <p id="prizeText" style="font-weight:bold;color:var(--red)"></p>
      <div id="claimBox" style="display:none">
        <p>ಪ್ರಶಸ್ತಿ ಪಡೆಯಲು ನಿಮ್ಮ UPI/GPay ಸಂಖ್ಯೆ ನಮೂದಿಸಿ:</p>
        <input id="gpayInput" placeholder="UPI/GPay ಸಂಖ್ಯೆ" />
        <button id="claimBtn">WhatsApp ಮೂಲಕ ಕಳುಹಿಸಿ</button>
      </div>
    </div>
    <p id="userNotice" class="muted"></p>
  </div>

  <div id="winners" aria-live="polite">
    <h4>ಪ್ರಕಟಿತ ಫಲಿತಾಂಶಗಳು</h4>
    <ul id="winnersList"></ul>
  </div>
</section>

<!-- ADMIN PANEL -->
<section class="card-panel" id="adminSection">
  <h3 style="color:var(--red)">ಆಡ್ಮಿನ್ ಫಲಕ</h3>
  <p class="muted">ಪಾಸ್‌ವರ್ಡ್: <strong>admin123</strong></p>
  <input id="adminPass" type="password" placeholder="Admin Password" />
  <button id="adminBtn">ಲಾಗಿನ್</button>

  <div id="adminPanel" style="display:none;margin-top:12px">
    <h4>ವಿಜೇತರು ಮತ್ತು ಬಳಕೆದಾರರು</h4>
    <table>
      <thead><tr><th>Card#</th><th>Prize</th><th>Claimed</th><th>Mobile</th><th>GPay</th><th>Time</th></tr></thead>
      <tbody id="adminTable"></tbody>
    </table>
    <div style="margin-top:8px"><button id="resetCardsBtn" style="background:#555">Reset all cards (shuffle)</button></div>
  </div>
</section>

  </div>  <footer>📍 ಮುಳ್ಳೇರಿಯ | ಸಂಪರ್ಕ: 9876543210</footer><script>
/*
  Firebase v8 namespaced implementation
  - Login first (OTP) -> show game
  - assign random unclaimed card with transaction guard
  - reveal scratch (canvas) -> mark finalClaimed
  - claim: submit GPay -> open WhatsApp to admin (user must press send)
*/
(function(){
  if (typeof firebase === 'undefined') {
    alert('Firebase libraries failed to load. Check scripts.');
    return;
  }

  // ---------- config (provided by user) ----------
  const firebaseConfig = {
    apiKey: "AIzaSyC8vMaKYBeZ93LKBcBNOjdqbsgxCJV9MyU",
    authDomain: "yaksha-admin.firebaseapp.com",
    databaseURL: "https://yaksha-admin-default-rtdb.firebaseio.com",
    projectId: "yaksha-admin",
    storageBucket: "yaksha-admin.appspot.com",
    messagingSenderId: "480699199925",
    appId: "1:480699199925:web:3a2556ea2db2eff68c29fc",
    measurementId: "G-VYXM03K87H"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.database();

  const WHATSAPP = '919148014768';
  const TOTAL_CARDS = 25;

  // UI elements
  const loginPanel = document.getElementById('loginPanel');
  const phoneInput = document.getElementById('phoneInput');
  const sendOtpBtn = document.getElementById('sendOtpBtn');
  const otpBox = document.getElementById('otpBox');
  const otpInput = document.getElementById('otpInput');
  const verifyOtpBtn = document.getElementById('verifyOtpBtn');
  const loginMsg = document.getElementById('loginMsg');

  const gamePanel = document.getElementById('gamePanel');
  const cardsGrid = document.getElementById('cardsGrid');
  const scratchArea = document.getElementById('scratchArea');
  const assignedCardEl = document.getElementById('assignedCard');
  const scratchCanvas = document.getElementById('scratchCanvas');
  const ctx = scratchCanvas.getContext('2d');
  const revealBox = document.getElementById('revealBox');
  const prizeText = document.getElementById('prizeText');
  const claimBox = document.getElementById('claimBox');
  const gpayInput = document.getElementById('gpayInput');
  const claimBtn = document.getElementById('claimBtn');
  const userNotice = document.getElementById('userNotice');
  const winnersList = document.getElementById('winnersList');

  const adminBtn = document.getElementById('adminBtn');
  const adminPass = document.getElementById('adminPass');
  const adminPanel = document.getElementById('adminPanel');
  const adminTable = document.getElementById('adminTable');
  const resetCardsBtn = document.getElementById('resetCardsBtn');

  let currentMobile = null;
  let assignedCard = null;

  // ---------- reCAPTCHA render on load ----------
  window.onload = function(){
    try{
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', { size: 'normal' });
      window.recaptchaVerifier.render();
    }catch(e){ console.warn('recaptcha init failed',e); }
  };

  // ---------- helpers ----------
  function shuffleArray(a){ for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } }

  // render visual grid of cards (summary only)
  async function renderGrid(){
    const snap = await db.ref('scratchCards').once('value');
    cardsGrid.innerHTML = '';
    for(let i=1;i<=TOTAL_CARDS;i++){
      const div = document.createElement('div'); div.className='scratch-card';
      const val = snap.val() && snap.val()[i] ? snap.val()[i] : null;
      const prizeLabel = val ? '₹'+(val.prize||0) : '—';
      const claimed = val && (val.finalClaimed||val.claimed);
      div.innerHTML = `<div>Card ${i}</div><div class="small">${prizeLabel}</div><div class="small">${claimed? 'Claimed':'Available'}</div>`;
      cardsGrid.appendChild(div);
    }
  }

  // public winners list
  function watchWinners(){
    db.ref('scratchCards').on('value', snap=>{
      winnersList.innerHTML = '';
      snap.forEach(child=>{
        const v = child.val(); if (v && v.finalClaimed) {
          const li = document.createElement('li'); li.textContent = `Scratch Card #${child.key} — ₹${v.prize}`; winnersList.appendChild(li);
        }
      });
      renderGrid();
    });
  }

  // initialize DB pool if missing
  async function initPoolIfMissing(){
    const snap = await db.ref('scratchCards').once('value');
    if (snap.exists()) return;
    const pool = [];
    for(let i=0;i<10;i++) pool.push(0);
    for(let i=0;i<5;i++) pool.push(5);
    for(let i=0;i<5;i++) pool.push(10);
    for(let i=0;i<5;i++) pool.push(20);
    shuffleArray(pool);
    const updates = {};
    for(let i=1;i<=TOTAL_CARDS;i++) updates[i] = { prize: pool[i-1], claimed:false, finalClaimed:false };
    await db.ref('scratchCards').set(updates);
  }

  // atomically claim a card using transaction to avoid race
  async function claimCardTransaction(cardId, mobile){
    const cardRef = db.ref('scratchCards/' + cardId + '/claimed');
    return new Promise((resolve,reject)=>{
      cardRef.transaction(current => {
        if (current === true) return; // already claimed
        return true; // claim it
      }, async (err, committed, snapshot) => {
        if (err) return reject(err);
        if (!committed) return resolve(false);
        // mark owner and time
        await db.ref('scratchCards/' + cardId).update({ mobile: mobile, time: new Date().toISOString() });
        await db.ref('users/' + mobile).set({ card: cardId, time: new Date().toISOString() });
        resolve(true);
      });
    });
  }

  // find random unclaimed card and claim via transaction (retry few times)
  async function assignRandomCard(mobile){
    const snap = await db.ref('scratchCards').once('value');
    const list = [];
    snap.forEach(child=>{ const v = child.val(); if (!v.claimed) list.push(child.key); });
    if (list.length === 0) throw new Error('ಕಾರ್ಡ್ ಗಳು ಮುಗಿದಿವೆ');
    shuffleArray(list);
    for (let i=0;i<list.length;i++){
      const id = list[i];
      try{
        const ok = await claimCardTransaction(id, mobile);
        if (ok) return id;
      }catch(e){ console.warn('transaction failed for',id,e); }
    }
    throw new Error('ಅಸಮರ್ಥನೆ: ಕಾರ್ಡ್ ಪಡೆದು ಮಾಡಲು ವಿಫಲ');
  }

  // ---------- OTP logic (v8) ----------
  sendOtpBtn.addEventListener('click', async ()=>{
    const num = phoneInput.value.trim();
    if (!/^\d{10}$/.test(num)){ alert('ದಯವಿಟ್ಟು 10 ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ'); return; }
    const phone = '+91' + num;
    try{
      loginMsg.textContent = 'OTP ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ...';
      // re-create recaptcha each attempt to avoid stale widget
      try{ if (window.recaptchaVerifier) window.recaptchaVerifier.clear(); }catch(e){}
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', { size: 'normal' });
      const confirmation = await firebase.auth().signInWithPhoneNumber(phone, window.recaptchaVerifier);
      window._confirmation = confirmation;
      otpBox.style.display = 'block'; loginMsg.textContent = 'OTP ಕಳುಹಿಸಲಾಗಿದೆ';
    }catch(err){ console.error('otp err',err); alert('OTP ಕಳುಹಿಸುವಲ್ಲಿ ದೋಷ: ' + (err && err.message ? err.message : err)); loginMsg.textContent=''; }
  });

  verifyOtpBtn.addEventListener('click', async ()=>{
    const code = otpInput.value.trim(); if (!code){ alert('OTP ನಮೂದಿಸಿ'); return; }
    try{
      const result = await window._confirmation.confirm(code);
      const phone = result.user.phoneNumber; const mobile = phone.replace('+91','');
      currentMobile = mobile;
      // hide login, show game
      loginPanel.style.display = 'none'; gamePanel.style.display = 'block';
      // ensure pool
      await initPoolIfMissing();
      watchWinners();
      // assign card if not already
      const userSnap = await db.ref('users/' + mobile).once('value');
      if (userSnap.exists() && userSnap.val().card) assignedCard = userSnap.val().card;
      else assignedCard = await assignRandomCard(mobile);
      assignedCardEl.textContent = assignedCard;
      // show scratch UI
      scratchArea.style.display = 'block'; renderScratchOverlay(); prepareScratch(assignedCard, mobile);
      userNotice.textContent = '';
    }catch(err){ console.error('verify err',err); alert('OTP ದೃಢೀಕರಣ ವಿಫಲ: ' + (err && err.message ? err.message : err)); }
  });

  // prepare scratch interactions on canvas
  function renderScratchOverlay(){ ctx.clearRect(0,0,scratchCanvas.width,scratchCanvas.height); ctx.fillStyle = '#999'; ctx.fillRect(0,0,scratchCanvas.width,scratchCanvas.height); ctx.fillStyle='#fff'; ctx.font='16px sans-serif'; ctx.fillText('ಸ್ಕ್ರ್ಯಾಚ್ ಮಾಡಿ ಬಹುಮಾನ ನೋಡಿ',40,80); }

  function prepareScratch(cardId,mobile){
    let drawing = false;
    function down(){ drawing = true; }
    function up(){ drawing = false; }
    function move(e){ if(!drawing) return; const r = scratchCanvas.getBoundingClientRect(); const x = (e.clientX || (e.touches && e.touches[0].clientX)) - r.left; const y = (e.clientY || (e.touches && e.touches[0].clientY)) - r.top; ctx.clearRect(x-12,y-12,24,24); }

    scratchCanvas.addEventListener('mousedown', down); scratchCanvas.addEventListener('mouseup', up); scratchCanvas.addEventListener('mousemove', move);
    scratchCanvas.addEventListener('touchstart', down); scratchCanvas.addEventListener('touchend', up); scratchCanvas.addEventListener('touchmove', move);

    async function reveal(){
      try{
        const pixels = ctx.getImageData(0,0,scratchCanvas.width,scratchCanvas.height).data; let clear=0; for(let i=3;i<pixels.length;i+=4) if(pixels[i]===0) clear++;
        if (clear / (scratchCanvas.width * scratchCanvas.height) > 0.45){
          // fetch latest prize and mark final
          const cardRef = db.ref('scratchCards/' + cardId);
          const cardSnap = await cardRef.once('value'); const prize = (cardSnap.val() && cardSnap.val().prize) ? cardSnap.val().prize : 0;
          ctx.clearRect(0,0,scratchCanvas.width,scratchCanvas.height); ctx.fillStyle='#ffe680'; ctx.fillRect(0,0,scratchCanvas.width,scratchCanvas.height); ctx.fillStyle='var(--red)'; ctx.font='18px sans-serif'; ctx.fillText('₹' + prize,40,90);
          revealBox.style.display = 'block'; prizeText.textContent = 'ನಿಮ್ಮ ಬಹುಮಾನ: ₹' + prize;
          await cardRef.update({ finalClaimed: true, timeFinal: new Date().toISOString() });
          if (prize > 0) claimBox.style.display = 'block';
          // cleanup listeners
          scratchCanvas.removeEventListener('mousedown', down); scratchCanvas.removeEventListener('mouseup', up); scratchCanvas.removeEventListener('mousemove', move);
          scratchCanvas.removeEventListener('touchstart', down); scratchCanvas.removeEventListener('touchend', up); scratchCanvas.removeEventListener('touchmove', move);
          scratchCanvas.removeEventListener('mouseup', reveal);
        }
      }catch(e){ console.error('reveal err', e); }
    }

    scratchCanvas.addEventListener('mouseup', reveal);
    scratchCanvas.addEventListener('touchend', reveal);
  }

  // claim via WhatsApp + save gpay
  claimBtn.addEventListener('click', async ()=>{
    const gpay = gpayInput.value.trim(); if (!/^\d{6,15}$/.test(gpay)){ alert('ದಯವಿಟ್ಟು ಮಾನ್ಯ UPI/GPay ಸಂಖ್ಯೆ ನಮೂದಿಸಿ'); return; }
    const user = firebase.auth().currentUser; if (!user){ alert('User not detected'); return; }
    const mobile = user.phoneNumber.replace('+91','');
    const userSnap = await db.ref('users/' + mobile).once('value'); const card = userSnap.val().card;
    await db.ref('scratchCards/' + card).update({ gpay: gpay, gpayTime: new Date().toISOString() });
    const cardSnap = await db.ref('scratchCards/' + card).once('value'); const prize = cardSnap.val().prize || 0;
    const msg = `🎉 Ganesh Yakshagana Giveaway 🎉\nCard: ${card}\nPrize: ₹${prize}\nMobile: ${mobile}\nGPay: ${gpay}`;
    window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(msg), '_blank');
    alert('WhatsApp ತೆರೆದಿದೆ — ದಯವಿಟ್ಟು ಸಂದೇಶ ಕಳುಹಿಸಿ'); claimBox.style.display = 'none';
  });

  // ADMIN: view and reset
  adminBtn.addEventListener('click', async ()=>{
    if (adminPass.value !== 'admin123'){ alert('ತಪ್ಪಾದ ಪಾಸ್‌ವರ್ಡ್'); return; }
    adminPanel.style.display = 'block'; adminPass.style.display='none'; adminBtn.style.display='none';
    const snap = await db.ref('scratchCards').once('value'); adminTable.innerHTML = '';
    snap.forEach(child=>{ const v=child.val(); adminTable.innerHTML += `<tr><td>${child.key}</td><td>₹${v.prize||0}</td><td>${v.finalClaimed? 'Yes' : 'No'}</td><td>${v.mobile||''}</td><td>${v.gpay||''}</td><td>${v.gpayTime||v.timeFinal||''}</td></tr>`; });
  });

  resetCardsBtn.addEventListener('click', async ()=>{
    if (!confirm('Reset and reshuffle all cards?')) return;
    const pool = [];
    for(let i=0;i<10;i++) pool.push(0);
    for(let i=0;i<5;i++) pool.push(5);
    for(let i=0;i<5;i++) pool.push(10);
    for(let i=0;i<5;i++) pool.push(20);
    shuffleArray(pool);
    const updates = {};
    for(let i=1;i<=TOTAL_CARDS;i++) updates[i] = { prize: pool[i-1], claimed:false, finalClaimed:false, mobile:null, gpay:null, time:null, timeFinal:null };
    await db.ref('scratchCards').set(updates);
    alert('Cards reset.'); renderGrid(); watchWinners();
  });

  // start watchers and init pool
  (async function start(){ try{ await initPoolIfMissing(); watchWinners(); }catch(e){ console.error('init pool err',e); } })();

})();
</script></body>
</html>
