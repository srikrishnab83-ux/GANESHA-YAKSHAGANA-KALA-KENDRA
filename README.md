<!DOCTYPE html>
<html lang="kn">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>ಗಣೇಶ ಯಕ್ಷಗಾನ ಕಲಾ ಕೇಂದ್ರ, ಮುಳ್ಳೇರಿಯಾ, ಕಾಸರಗೋಡು</title>

<style>
  :root{
    --red: #b30000;
    --gold: #e6b800;
    --bg: #fff9f0;
    --text: #222;
    --muted: #666;
    --card-shadow: 0 6px 18px rgba(0,0,0,0.08);
    --radius: 12px;
  }

  /* Base */
  html,body{height:100%;margin:0;font-family:"Noto Sans Kannada", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; background:var(--bg); color:var(--text); -webkit-font-smoothing:antialiased;}
  a{color:var(--red); text-decoration:underline;}

  /* Header */
  header{background:var(--red); color:var(--gold); padding:20px 14px; text-align:center; border-bottom:5px solid var(--gold);}
  header h1{margin:0;font-size:20px;line-height:1.1;font-weight:700;}
  header p{margin:6px 0 0;font-size:14px;color: #ffd77b;}

  /* Container */
  .wrap{max-width:920px;margin:14px auto;padding:0 14px;}

  /* Welcome */
  .welcome{
    position:relative; border-radius:var(--radius); overflow:hidden; margin-bottom:14px;
    background-image:url('https://upload.wikimedia.org/wikipedia/commons/6/6a/Yakshagana_performance_in_Udupi.jpg');
    background-size:cover;background-position:center;
  }
  .welcome::before{content:""; position:absolute; inset:0; background:rgba(0,0,0,0.56);}
  .welcome-inner{position:relative;padding:34px 18px; color:var(--gold); text-align:center;}
  .welcome h2{margin:0 0 12px;font-size:18px;}
  .welcome p{margin:0 auto;max-width:860px;line-height:1.7;color:#ffe8a3;text-shadow:0 1px 2px rgba(0,0,0,0.4);font-size:15px;}

  /* Cards / sections (single column) */
  .card{background:white;border-radius:12px;padding:16px;margin:12px 0; box-shadow:var(--card-shadow); border:2px solid rgba(230,184,0,0.18);}
  .section-title{display:inline-block;background:var(--red);color:var(--gold);padding:8px 12px;border-radius:10px;font-weight:700;margin-bottom:12px;font-size:15px;}
  .muted{color:var(--muted);font-size:14px;}
  .center{text-align:center;}

  /* Guru */
  .guru-photo{width:160px;height:160px;border-radius:50%;object-fit:cover;border:4px solid var(--gold);display:block;margin:10px auto;}
  .guru-name{font-size:18px;text-align:center;color:var(--red);margin:8px 0 4px;}
  .guru-desc{max-width:820px;margin:0 auto;color:#444;line-height:1.6;text-align:center;}

  /* Timing */
  .timing{font-weight:700;color:var(--red);font-size:16px;}

  /* Gallery grid */
  .gallery-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-top:10px;}
  .gal-item{background:#fff;border-radius:10px;overflow:hidden;border:2px solid rgba(230,184,0,0.12);padding:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;}
  .gal-item img{width:100%;height:120px;object-fit:cover;border-radius:8px;}
  .gal-caption{font-size:13px;color:var(--muted);margin-top:8px;text-align:center;}

  /* Video list */
  .video-item{margin-top:10px;border-radius:10px;overflow:hidden;border:2px solid rgba(230,184,0,0.12);padding:6px;}
  .video-item iframe{width:100%;height:200px;border:0;display:block;}

  /* Donation */
  .donation-row{display:flex;gap:12px;flex-wrap:wrap;justify-content:center;align-items:center;margin-bottom:12px;}
  .money-box{background:#fff;border:2px solid rgba(230,184,0,0.14);padding:12px;border-radius:10px;min-width:130px;text-align:center;}
  .money-box .amount{font-weight:800;font-size:18px;color:var(--red);}
  .qr-box{background:white;border:3px solid var(--gold);border-radius:12px;padding:12px;text-align:center;max-width:320px;margin:0 auto;}
  .qr-box img{width:180px;height:180px;object-fit:contain;border-radius:8px;border:2px solid rgba(179,0,0,0.06);}

  /* Students */
  .students{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px;margin-top:10px;}
  .student-card{background:white;border-radius:10px;padding:10px;text-align:center;border:2px solid rgba(230,184,0,0.12);}
  .student-card img{width:80px;height:80px;border-radius:50%;object-fit:cover;border:3px solid var(--gold);margin:0 auto;display:block;}
  .student-name{color:var(--red);font-weight:700;margin-top:8px;font-size:14px;}
  .student-desc{font-size:13px;color:var(--muted);margin-top:6px;}

  /* Announcement */
  .announcement-item{background:#fff9e6;border-left:4px solid var(--gold);padding:8px 10px;border-radius:8px;margin-bottom:8px;}
  .announcement-item .title{color:var(--red);font-weight:700;margin-bottom:4px;}

  /* Invitation */
  .invitation{text-align:center;color:#333;line-height:1.6;}
  .invitation h3{color:var(--red);margin-bottom:8px;}

  /* Admission & Booking */
  .form-field{display:flex;flex-direction:column;gap:6px;margin-bottom:8px;}
  input[type="text"], input[type="tel"], input[type="number"], input[type="date"], input[type="time"], textarea, select{
    padding:10px;border-radius:8px;border:1px solid #ddd;font-size:15px;width:100%;box-sizing:border-box;
  }
  .btn{background:var(--gold);color:#111;padding:10px 12px;border-radius:8px;border:0;font-weight:700;cursor:pointer;display:inline-block;}
  .btn-red{background:var(--red);color:var(--gold);}

  /* Admin floating button */
  .admin-fab{position:fixed;right:14px;bottom:18px;background:var(--red);color:var(--gold);border:none;padding:12px 14px;border-radius:999px;box-shadow:0 10px 24px rgba(0,0,0,0.18);font-weight:700;z-index:1500;cursor:pointer;}
  .admin-fab:active{transform:translateY(1px);}

  /* Admin modal (hidden by default; JS will open it) */
  .admin-modal{position:fixed;inset:0;background:rgba(0,0,0,0.6);display:none;align-items:flex-end;justify-content:center;padding:12px;z-index:2000;}
  .admin-sheet{background:white;border-top-left-radius:14px;border-top-right-radius:14px;width:100%;max-width:920px;max-height:92vh;overflow:auto;padding:12px 14px;box-shadow:0 -10px 30px rgba(0,0,0,0.25);border:3px solid var(--gold);}
  .admin-card{border:1px solid #eee;padding:10px;margin-bottom:10px;border-radius:10px;background:#fff;}
  .admin-title{font-weight:800;color:var(--red);margin-bottom:8px;}
  .admin-row{display:flex;gap:8px;flex-wrap:wrap;}
  .admin-input{flex:1;min-width:120px;padding:8px;border-radius:8px;border:1px solid #ddd;}
  .admin-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:8px;justify-content:flex-end;}

  /* Responsive tweaks */
  @media (min-width:720px){
    .video-item iframe{height:300px;}
    .welcome-inner{padding:48px 36px;}
  }
</style>
</head>

<body>
  <header>
    <h1>ಗಣೇಶ ಯಕ್ಷಗಾನ ಕಲಾ ಕೇಂದ್ರ, ಮುಳ್ಳೇರಿಯಾ, ಕಾಸರಗೋಡು</h1>
    <p>ಯಕ್ಷಗಾನದ ತೆಂಕು ತಿಟ್ಟು ಶೈಲಿಯ ತರಗತಿ ಮತ್ತು ಅಭ್ಯಾಸ ಕೇಂದ್ರ</p>
  </header>

  <div class="wrap">

    <!-- Welcome -->
    <section class="welcome" aria-label="ಸ್ವಾಗತ">
      <div class="welcome-inner">
        <h2>🌸 ನಮ್ಮ ಕೇಂದ್ರಕ್ಕೆ ಆದರದ ಸ್ವಾಗತ 🌸</h2>
        <p>
          ನಮ್ಮ ಶ್ರೀ ಗಣೇಶ ಯಕ್ಷಗಾನ ಕಲಾ ಕೇಂದ್ರ, ಮುಳ್ಳೇರಿಯಾಕ್ಕೆ ಆದರದ ಸ್ವಾಗತ. ಕಾಸರಗೋಡು ಜಿಲ್ಲೆಯ ಮುಳ್ಳೇರಿಯಾನಲ್ಲಿ ನೆಲೆಸಿರುವ ನಮ್ಮ ಕೇಂದ್ರವು, ಕರ್ನಾಟಕದ ಕರಾವಳಿ ಭಾಗದ ಶ್ರೇಷ್ಠ ಕಲಾಪ್ರಕಾರವಾದ ಯಕ್ಷಗಾನದ 'ತೆಂಕು ತಿಟ್ಟು' ಶೈಲಿಯನ್ನು ಮುಂದಿನ ಪೀಳಿಗೆಗೆ ತಲುಪಿಸುವ ಕಾರ್ಯದಲ್ಲಿ ತೊಡಗಿದ್ದೇವೆ.
        </p>
      </div>
    </section>

    <!-- Guru -->
    <section class="card" aria-label="ಗುರು">
      <div class="center">
        <img id="guruPhoto" class="guru-photo" src="https://via.placeholder.com/300x300?text=Guru" alt="ಗುರು ಫೋಟೋ (placeholder)">
        <div id="guruName" class="guru-name">ಸೂರ್ಯನಾರಾಯಣ ಪದಕಣ್ಣಾಯ, ಬಾಯಾರು</div>
        <p id="guruDesc" class="guru-desc">ತೆಂಕು ತಿಟ್ಟಿನ ಯಕ್ಷಗಾನ ತರಗತಿ — ಅನುಭವಶೀಲ ಗುರು ಹಾಗೂ ಶೈક્ષણಿಕ ಮಾರ್ಗದರ್ಶಿ.</p>
      </div>
    </section>

    <!-- Timing -->
    <section class="card" aria-label="ತರಗತಿ ಸಮಯ">
      <div class="section-title">ತರಗತಿ ಸಮಯ</div>
      <p class="muted center timing">ಪ್ರತಿ ಭಾನುವಾರ ಮಧ್ಯಾಹ್ನ 1:35 ರಿಂದ 3:45 ರವರೆಗೆ</p>
    </section>

    <!-- Gallery -->
    <section class="card" aria-label="ಗ್ಯಾಲರಿ">
      <div class="section-title">ಗ್ಯಾಲರಿ</div>
      <div id="galleryGrid" class="gallery-grid">
        <!-- placeholders replaced from Firestore -->
        <div class="gal-item"><img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Yakshagana_artists_performing.jpg" alt="sample"><div class="gal-caption">ವಿದ್ಯಾರ್ಥಿಗಳು - ತರಬೇತಿ</div></div>
        <div class="gal-item"><img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Yakshagana_performance.jpg" alt="sample"><div class="gal-caption">ಪ್ರದರ್ಶನ</div></div>
      </div>
    </section>

    <!-- Videos -->
    <section class="card" aria-label="ವೀಡಿಯೊಗಳು">
      <div class="section-title">ವೀಡಿಯೊಗಳು</div>
      <div id="videosList">
        <!-- placeholders replaced from Firestore -->
        <div class="video-item"><iframe src="https://www.youtube.com/embed/Jx8D4N1xWso" title="video sample" allowfullscreen></iframe></div>
      </div>
    </section>

    <!-- Donation counters and QR are moved below Admission (kept later) -->

    <!-- Successful Students -->
    <section class="card" aria-label="ಯಶಸ್ವಿ ವಿದ್ಯಾರ್ಥಿಗಳು">
      <div class="section-title">ಯಶಸ್ವಿ ವಿದ್ಯಾರ್ಥಿಗಳು</div>
      <div id="studentsGrid" class="students">
        <!-- sample students (replaced from Firestore) -->
        <div class="student-card"><img src="https://randomuser.me/api/portraits/men/32.jpg" alt=""><div class="student-name">ಅರ್ಜುನ್ ನಾಯಕ್</div><div class="student-desc">ಯಕ್ಷಗಾನ ತರಗತಿಯಲ್ಲಿ ಅತ್ಯುತ್ತಮ ಪ್ರದರ್ಶನ.</div></div>
        <div class="student-card"><img src="https://randomuser.me/api/portraits/women/44.jpg" alt=""><div class="student-name">ದೀಪ್ತಿ ಶೆಟ್ಟಿ</div><div class="student-desc">ನೃತ್ಯ ಮತ್ತು ಭಾವತಾತ್ತ್ವಿಕದಲ್ಲಿ ಕೌಶಲ್ಯ.</div></div>
      </div>
    </section>

    <!-- News / Announcements -->
    <section class="card" aria-label="ಸುದ್ದಿ">
      <div class="section-title">ಸುದ್ದಿ / ಘೋಷಣೆಗಳು</div>
      <div id="announcementsList">
        <p class="muted center">ಇದೀಗ ಯಾವುದೇ ಘೋಷಣೆಗಳಿಲ್ಲ</p>
      </div>
    </section>

    <!-- Invitation (fixed text) -->
    <section class="card invitation" aria-label="ಆಹ್ವಾನ">
      <h3>🎭 ಹೊಸ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಆಹ್ವಾನ!</h3>
      <p>ನಮ್ಮ ತೆಂಕು ತಿಟ್ಟು ನೃತ್ಯ ತರಗತಿಗೆ ಹೊಸ ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ಆಹ್ವಾನಿಸುತ್ತಿದ್ದೇವೆ. ವಯೋಮಿತಿ 12 ವರ್ಷಗಳಿಂದ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ.<br>ಯಕ್ಷಗಾನ ಕಲೆಯನ್ನು ಕಲಿಯಲು ಆಸಕ್ತರು ಈಗಲೇ ಸಂಪರ್ಕಿಸಿ!</p>
    </section>

    <!-- Admission -->
    <section class="card" aria-label="ಪ್ರವೇಶ">
      <div class="section-title">ಪ್ರವೇಶ ಫಾರ್ಮ್</div>
      <p class="muted center">ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಕಳುಹಿಸಲು ಕೆಳಗಿನ ಬಟನ್ ಒತ್ತಿ — ನಾವು ಜವಾಬ್ದಾರಿ ತೆಗೆದುಕೊಳ್ಳುತ್ತೇವೆ.</p>

      <div style="max-width:560px;margin:8px auto 0;">
        <div class="form-field"><label>ಹೆಸರು</label><input id="ad_name" type="text" placeholder="ಹೆಸರು"></div>
        <div class="form-field"><label>ವಯಸ್ಸು</label><input id="ad_age" type="number" placeholder="ವಯಸ್ಸು"></div>
        <div class="form-field"><label>ಮೊಬೈಲ್ ಸಂಖ್ಯೆ</label><input id="ad_phone" type="tel" placeholder="ಮೊಬೈಲ್"></div>
        <div class="form-field"><label>ಸಂದೇಶ</label><textarea id="ad_msg" rows="3" placeholder="ಸಂದೇಶ (ಐಚ್ಛಿಕ)"></textarea></div>

        <div class="center" style="margin-top:6px;">
          <button id="admitBtn" class="btn btn-red" onclick="openWhatsAppForAdmission()">WhatsApp ಮೂಲಕ ಕಳುಹಿಸಿ</button>
        </div>
      </div>
    </section>

    <!-- Programme Booking (NEW) -->
    <section class="card" aria-label="ಕಾರ್ಯಕ್ರಮ ಬುಕ್ಕಿಂಗ್">
      <div class="section-title">ಕಾರ್ಯಕ್ರಮ ಬುಕ್ಕಿಂಗ್</div>
      <p class="muted">ಕಾರ್ಯಕ್ರಮಕ್ಕೆ ಬುಕಿಂಗ್ ಮಾಡಲು ಕೆಳಗಿನ ಫಾರ್ಮ್ ಭರ್ತಿ ಮಾಡಿ — ಬುಕಿಂಗ್ ವಿವರಗಳು WhatsApp ಮೂಲಕ ಕಳುಹಿಸಲಾಗುತ್ತದೆ.</p>
      <div style="max-width:720px;margin:8px auto 0;">
        <div class="form-field"><label>ಹೆಸರು</label><input id="bk_name" type="text" placeholder="ಹೆಸರು"></div>
        <div class="form-field"><label>ಸ್ಥಳ</label><input id="bk_place" type="text" placeholder="ಸ್ಥಳ (ನಿಮ್ಮ ನಗರದ ಹೆಸರು)"></div>
        <div class="form-field"><label>ಕಾರ್ಯಕ್ರಮ ಸ್ಥಳ</label><input id="bk_prog_place" type="text" placeholder="ಕಾರ್ಯಕ್ರಮ ನಡೆಯುವ ಸ್ಥಳ"></div>
        <div class="form-field"><label>ಕಾರ್ಯಕ್ರಮ ದಿನಾಂಕ</label><input id="bk_date" type="date"></div>
        <div class="form-field"><label>ಸಮಯ</label><input id="bk_time" type="time"></div>

        <div class="form-field">
          <label>ಮೊತ್ತ ಆಯ್ಕೆ ಮಾಡಿ</label>
          <select id="bk_amount_select">
            <option value="10000">₹ 10,000</option>
            <option value="12000">₹ 12,000</option>
            <option value="15000">₹ 15,000</option>
            <option value="other">ಇತರ (ಕಡತೆಯಲ್ಲಿ ನಮೂದಿಸಿ)</option>
          </select>
        </div>
        <div class="form-field">
          <label>ಇಚ್ಛಿತ ಮೊತ್ತ (ಐಚ್ಛಿಕ — ಸಂಖ್ಯೆ ಮಾತ್ರ)</label>
          <input id="bk_amount_manual" type="number" placeholder="ಉದಾಹರಣೆ: 20000">
        </div>

        <div class="center" style="margin-top:6px;">
          <button id="bkSubmitBtn" class="btn" onclick="submitBooking()">WhatsApp ಮೂಲಕ ಬುಕಿಂಗ್ ಕಳುಹಿಸು</button>
        </div>
      </div>
    </section>

    <!-- Donation (moved below admission) -->
    <section class="card" aria-label="ದಾನ">
      <div class="section-title">ದಾನ</div>
      <div class="donation-row">
        <div class="money-box"><div class="muted">ಸ್ವೀಕರಿಸಿದ ಮೊತ್ತ</div><div class="amount">₹ <span id="collected">0</span></div></div>
        <div class="money-box"><div class="muted">ದಾನದ ಗುರಿ</div><div class="amount">₹ <span id="goal">0</span></div></div>
      </div>

      <div class="qr-box" role="img" aria-label="Donation QR">
        <div style="font-weight:700;color:var(--red);margin-bottom:6px">ದಾನ ಮಾಡಲು QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ</div>
        <!-- replace placeholder with base64 or external url via admin -->
        <img id="qrImg" src="data:image/png;base64,PUT_YOUR_BASE64_QR_HERE" alt="Donation QR">
        <div class="muted" style="margin-top:8px">ದಾನ ಮಾಡಿದ ನಂತರ ದಯವಿಟ್ಟು <a href="https://wa.me/qr/JGB3XSEHKWFDD1" target="_blank">WhatsApp ಮೂಲಕ ತಿಳಿಸಿ</a></div>
      </div>
    </section>

    <!-- Contact -->
    <section class="card" aria-label="ಸಂಪರ್ಕ">
      <div class="section-title">ಸಂಪರ್ಕ</div>
      <p class="muted center">ಇಮೇಲ್: <a href="mailto:srikrishnab83@gmail.com">srikrishnab83@gmail.com</a> | <a href="tel:+919148014768">+91 91480 14768</a></p>
    </section>

  </div> <!-- wrap end -->

  <!-- Admin floating button -->
  <button id="adminFab" class="admin-fab" aria-label="ನಿರ್ವಹಣಾ ವಿಭಾಗ">🔒 ನಿರ್ವಹಣಾ ವಿಭಾಗ</button>

  <!-- Admin modal (compact mobile-friendly sheet) -->
  <div id="adminModal" class="admin-modal" role="dialog" aria-modal="true" aria-hidden="true">
    <div class="admin-sheet" role="document">
      <!-- Sheet header -->
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <div style="display:flex;align-items:center;gap:8px;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="#b30000"/><path d="M7 11V9a5 5 0 1110 0v2" stroke="#FDF0C7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <div style="font-weight:800;color:var(--red);">ಅಡ್ಮಿನ್</div>
        </div>
        <button id="adminClose" style="background:#eee;border:0;padding:8px 10px;border-radius:8px;">ಮುಚ್ಚಿ</button>
      </div>

      <!-- Admin content: compact cards -->
      <div class="admin-card">
        <div class="admin-title">ಲಾಗಿನ್</div>
        <input id="adminPwd" class="admin-input" type="password" placeholder="ಅಡ್ಮಿನ್ ಪಾಸ್ವರ್ಡ್ ನಮೂದಿಸಿ">
        <div class="admin-actions"><button id="adminLoginBtn" class="btn">ಲಾಗಿನ್</button></div>
      </div>

      <div id="adminControls" style="display:none;">

        <div class="admin-card">
          <div class="admin-title">ಘೋಷಣೆ ಸೇರಿಸಿ</div>
          <input id="admin_ann_title" class="admin-input" placeholder="ಶೀರ್ಷಿಕೆ">
          <textarea id="admin_ann_msg" class="admin-input" rows="2" placeholder="ಸಂದೇಶ"></textarea>
          <div class="admin-actions"><button id="addAnnBtn" class="btn">ಸೇರಿಸಿ</button></div>
        </div>

        <div class="admin-card">
          <div class="admin-title">ಗುರು — ನವೀಕರಣ</div>
          <div class="admin-row">
            <input id="admin_guru_photo" class="admin-input" placeholder="ಗುರು ಫೋಟೋ URL">
            <input id="admin_guru_name_input" class="admin-input" placeholder="ಗುರು ಹೆಸರು" value="ಸೂರ್ಯನಾರಾಯಣ ಪದಕಣ್ಣಾಯ, ಬಾಯಾರು">
          </div>
          <div style="margin-top:8px;"><textarea id="admin_guru_desc" class="admin-input" rows="3" placeholder="ಗುರು ವಿವರಣೆ">ತೆಂಕು ತಿಟ್ಟಿನ ಯಕ್ಷಗಾನದಲ್ಲಿ ಪರಿಣತಿ ಹೊಂದಿದ ಗುರು.</textarea></div>
          <div class="admin-actions"><button id="saveGuruBtn" class="btn">ಸೇವ್</button></div>
        </div>

        <div class="admin-card">
          <div class="admin-title">ದಾನ QR + ಕೌಂಟರ್ಸ್</div>
          <div class="admin-row">
            <input id="admin_qr_url" class="admin-input" placeholder="QR ಚಿತ್ರ URL / base64">
          </div>
          <div style="margin-top:8px;" class="admin-row">
            <input id="admin_collected" class="admin-input" type="number" placeholder="Collected ₹">
            <input id="admin_goal" class="admin-input" type="number" placeholder="Goal ₹">
          </div>
          <div class="admin-actions"><button id="saveCountersBtn" class="btn">ಸೇವ್</button></div>
        </div>

        <div class="admin-card">
          <div class="admin-title">ಗ್ಯಾಲರಿ — ಹೊಸ ಚಿತ್ರ</div>
          <input id="admin_gallery_url" class="admin-input" placeholder="ಚಿತ್ರ URL">
          <input id="admin_gallery_caption" class="admin-input" placeholder="ಶೀರ್ಷಿಕೆ (ಐಚ್ಛಿಕ)">
          <div class="admin-actions"><button id="addGalleryBtn" class="btn">ಸೇರಿಸಿ</button></div>
        </div>

        <div class="admin-card">
          <div class="admin-title">ವೀಡಿಯೊ ಸೇರಿಸಿ</div>
          <input id="admin_video_url" class="admin-input" placeholder="YouTube link or embed URL">
          <input id="admin_video_caption" class="admin-input" placeholder="ಶೀರ್ಷಿಕೆ (ಐಚ್ಛಿಕ)">
          <div class="admin-actions"><button id="addVideoBtn" class="btn">ಸೇರಿಸಿ</button></div>
        </div>

        <div class="admin-card">
          <div class="admin-title">ಕಾರ್ಯಕ್ರಮ ಸೇರಿಸಿ</div>
          <input id="admin_event_title" class="admin-input" placeholder="ಶೀರ್ಷಿಕೆ">
          <input id="admin_event_date" class="admin-input" placeholder="YYYY-MM-DD">
          <textarea id="admin_event_desc" class="admin-input" rows="2" placeholder="ವಿವರಣೆ"></textarea>
          <div class="admin-actions"><button id="addEventBtn" class="btn">ಸೇರಿಸಿ</button></div>
        </div>

        <div class="admin-card">
          <div class="admin-title">ಯಶಸ್ವಿ ವಿದ್ಯಾರ್ಥಿ ಸೇರಿಸಿ</div>
          <input id="admin_student_photo" class="admin-input" placeholder="ಚಿತ್ರ URL">
          <input id="admin_student_name" class="admin-input" placeholder="ಹೆಸರು">
          <textarea id="admin_student_desc" class="admin-input" rows="2" placeholder="ಸಣ್ಣ ವಿವರಣೆ"></textarea>
          <div class="admin-actions"><button id="addStudentBtn" class="btn">ಸೇರಿಸಿ</button></div>
        </div>

        <div class="admin-card">
          <div class="admin-title">ಮಾಡಿರುವ ಐಟಂಗಳು (ಅಳಿಸಲು ಆಯ್ಕೆ)</div>
          <div id="adminLists" style="max-height:240px;overflow:auto;"></div>
          <div class="admin-actions" style="margin-top:8px;"><button id="refreshAdminBtn" class="btn">ರಿಫ್ರೆಶ್</button></div>
        </div>

      </div> <!-- adminControls end -->

    </div> <!-- admin-sheet end -->
  </div> <!-- admin-modal end -->

  <!-- Firebase + JS -->
  <script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
    import {
      getFirestore, collection, addDoc, getDocs, onSnapshot,
      doc, setDoc, deleteDoc, query, orderBy
    } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

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

    /* ---------- Admission → WhatsApp ---------- */
    window.openWhatsAppForAdmission = function(){
      const n=document.getElementById('ad_name').value.trim();
      const a=document.getElementById('ad_age').value.trim();
      const p=document.getElementById('ad_phone').value.trim();
      const m=document.getElementById('ad_msg').value.trim();
      const text=encodeURIComponent(`ಪ್ರವೇಶ ವಿನಂತಿ:\nಹೆಸರು: ${n}\nವಯಸ್ಸು: ${a}\nಮೊಬೈಲ್: ${p}\nಸಂದೇಶ: ${m}`);
      window.open(`https://wa.me/qr/JGB3XSEHKWFDD1?text=${text}`,'_blank');
    }

    /* ---------- Programme Booking → WhatsApp ---------- */
    window.submitBooking = function(){
      const name=document.getElementById('bk_name').value.trim();
      const place=document.getElementById('bk_place').value.trim();
      const progPlace=document.getElementById('bk_prog_place').value.trim();
      const date=document.getElementById('bk_date').value;
      const time=document.getElementById('bk_time').value;
      const selected=document.getElementById('bk_amount_select').value;
      const manual=document.getElementById('bk_amount_manual').value.trim();

      let amount = '';
      if(selected === 'other'){
        amount = manual || 'ನಿರ್ದಿಷ್ಟಪಡಿಸಿಲ್ಲ';
      } else {
        amount = '₹ ' + selected;
      }

      const text = encodeURIComponent(
        `ಕಾರ್ಯಕ್ರಮ ಬುಕಿಂಗ್:\nಹೆಸರು: ${name}\nಸ್ಥಳ: ${place}\nಕಾರ್ಯಕ್ರಮ ಸ್ಥಳ: ${progPlace}\nದಿನಾಂಕ: ${date}\nಸಮಯ: ${time}\nಮೊತ್ತ: ${amount}`
      );
      window.open(`https://wa.me/qr/JGB3XSEHKWFDD1?text=${text}`,'_blank');
    }

    /* ---------- Real-time Data Bindings ---------- */
    const guruPhoto=document.getElementById('guruPhoto');
    const guruDesc=document.getElementById('guruDesc');
    const guruNameEl=document.getElementById('guruName');
    const galleryGrid=document.getElementById('galleryGrid');
    const videosList=document.getElementById('videosList');
    const studentsGrid=document.getElementById('studentsGrid');
    const qrImg=document.getElementById('qrImg');
    const collectedEl=document.getElementById('collected');
    const goalEl=document.getElementById('goal');
    const announcementsList=document.getElementById('announcementsList');

    const renderGallery=(arr)=>{
      galleryGrid.innerHTML='';
      if(!arr.length){
        galleryGrid.innerHTML = '<div class="muted center">ಇದೀಗ ಯಾವುದೇ ಚಿತ್ರಗಳಿಲ್ಲ</div>';
        return;
      }
      arr.forEach(x=>{
        const div=document.createElement('div');
        div.className='gal-item';
        const img=document.createElement('img');
        img.src=x.url; img.onerror=()=>img.remove();
        div.appendChild(img);
        if(x.caption){const c=document.createElement('div');c.className='gal-caption';c.textContent=x.caption;div.appendChild(c);}
        galleryGrid.appendChild(div);
      });
    };

    const renderVideos=(arr)=>{
      videosList.innerHTML='';
      if(!arr.length){
        videosList.innerHTML = '<div class="muted center">ಇದೀಗ ಯಾವುದೇ ವೀಡಿಯೊಗಳಿಲ್ಲ</div>';
        return;
      }
      arr.forEach(x=>{
        const d=document.createElement('div');d.className='video-item';
        let url=x.url||'';
        if(url.includes('watch?v=')) url=url.replace('watch?v=','embed/');
        // ensure embed url begins with https://www.youtube.com/embed/ or already an embed url
        const iframe=document.createElement('iframe');
        iframe.src=url; iframe.allow='accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture'; iframe.allowFullscreen=true;
        d.appendChild(iframe); videosList.appendChild(d);
      });
    };

    const renderStudents=(arr)=>{
      studentsGrid.innerHTML='';
      if(!arr.length){
        studentsGrid.innerHTML = '<div class="muted center">ಇದೀಗ ಯಾವುದೇ ವಿದ್ಯಾರ್ಥಿಗಳ ಮಾಹಿತಿ ಇಲ್ಲ</div>';
        return;
      }
      arr.forEach(s=>{
        const card=document.createElement('div');card.className='student-card';
        card.innerHTML=`<img src="${s.photoUrl||''}" alt=""><div class="student-name">${s.name||''}</div><div class="student-desc">${s.desc||''}</div>`;
        studentsGrid.appendChild(card);
      });
    };

    const renderAnnouncements=(arr)=>{
      announcementsList.innerHTML='';
      if(!arr.length){
        announcementsList.innerHTML = '<p class="muted center">ಇದೀಗ ಯಾವುದೇ ಘೋಷಣೆಗಳಿಲ್ಲ</p>';
        return;
      }
      arr.forEach(a=>{
        const d=document.createElement('div');
        d.className='announcement-item';
        const t=document.createElement('div'); t.className='title'; t.textContent=a.title||'';
        const m=document.createElement('div'); m.className='msg'; m.textContent=a.msg||'';
        d.appendChild(t); d.appendChild(m);
        announcementsList.appendChild(d);
      });
    };

    // meta/guru
    onSnapshot(doc(db,'meta','guru'),snap=>{
      if(snap.exists()){
        const g=snap.data();
        if(g.photoUrl) guruPhoto.src=g.photoUrl;
        if(g.desc) guruDesc.textContent=g.desc;
        if(g.name) guruNameEl.textContent = g.name;
      }
    });

    // meta/qr
    onSnapshot(doc(db,'meta','qr'),snap=>{
      if(snap.exists()){const q=snap.data(); if(q.url) qrImg.src=q.url;}
    });

    // meta/counters
    onSnapshot(doc(db,'meta','counters'),snap=>{
      if(snap.exists()){const d=snap.data(); collectedEl.textContent=d.collected||0; goalEl.textContent=d.donationGoal||0;}
    });

    // gallery
    onSnapshot(query(collection(db,'gallery'),orderBy('createdAt','desc')),snap=>{
      const arr=[]; snap.forEach(d=>arr.push({...d.data(),id:d.id})); renderGallery(arr);
    });

    // videos
    onSnapshot(query(collection(db,'videos'),orderBy('createdAt','desc')),snap=>{
      const arr=[]; snap.forEach(d=>arr.push({...d.data(),id:d.id})); renderVideos(arr);
    });

    // students
    onSnapshot(query(collection(db,'students'),orderBy('createdAt','desc')),snap=>{
      const arr=[]; snap.forEach(d=>arr.push({...d.data(),id:d.id})); renderStudents(arr);
    });

    // announcements
    onSnapshot(query(collection(db,'announcements'),orderBy('createdAt','desc')),snap=>{
      const arr=[]; snap.forEach(d=>arr.push({...d.data(),id:d.id})); renderAnnouncements(arr);
    });

    /* ---------- Admin Popup Controls ---------- */
    const fab=document.getElementById('adminFab');
    const modal=document.getElementById('adminModal');
    const sheet=document.querySelector('.admin-sheet');
    const adminClose=document.getElementById('adminClose');
    const adminPwd=document.getElementById('adminPwd');
    const adminLoginBtn=document.getElementById('adminLoginBtn');
    const adminControls=document.getElementById('adminControls');
    const adminLists=document.getElementById('adminLists');

    fab.onclick=()=>{modal.style.display='flex';sheet.scrollTo(0,0);};
    adminClose.onclick=()=>{modal.style.display='none';};

    adminLoginBtn.onclick=()=> {
      if(adminPwd.value==='admin123'){
        adminControls.style.display='block';
        adminPwd.parentElement.style.display='none';
        loadAdminLists();
        // prefill some admin fields from meta
        getDocs(query(collection(db,'meta'))).catch(()=>{});
      } else alert('⚠️ ತಪ್ಪಾದ ಪಾಸ್‌ವರ್ಡ್');
    };

    async function loadAdminLists(){
      adminLists.innerHTML='<p class="muted">ಲೋಡ್ ಆಗುತ್ತಿದೆ...</p>';
      const sections=[['gallery','ಗ್ಯಾಲರಿ'],['videos','ವೀಡಿಯೊಗಳು'],['events','ಕಾರ್ಯಕ್ರಮಗಳು'],['students','ವಿದ್ಯಾರ್ಥಿಗಳು'],['announcements','ಘೋಷಣೆಗಳು']];
      let html='';
      for(const [col,label] of sections){
        const q=query(collection(db,col),orderBy('createdAt','desc'));
        const snap=await getDocs(q);
        html+=`<h4 style="margin:8px 0 4px;">${label}</h4>`;
        if(snap.empty){
          html+=`<div class="muted" style="padding:6px 0 10px;">ಜೋಡಣೆಗಳಿಲ್ಲ</div>`;
        } else {
          snap.forEach(d=>{
            const v=d.data();
            const display = (v.title||v.name||v.caption||v.url||'ಐಟಮ್') .toString().slice(0,80);
            html+=`<div class="admin-row" style="border-bottom:1px solid #eee;padding:6px 0;align-items:center;">
              <div style="flex:1;overflow:hidden;font-size:13px;">${display}</div>
              <button class="btn" onclick="delItem('${col}','${d.id}')">ಅಳಿಸು</button>
            </div>`;
          });
        }
      }
      adminLists.innerHTML=html;
    }

    window.delItem=async function(col,id){
      if(confirm('ನಿಖರವಾಗಿ ಅಳಿಸಬೇಕೆ?')){
        await deleteDoc(doc(db,col,id));
        // refresh lists
        setTimeout(()=>loadAdminLists(), 500);
      }
    }

    /* ---------- Save buttons (admin actions) ---------- */
    document.getElementById('saveGuruBtn').onclick=async()=>{
      await setDoc(doc(db,'meta','guru'),{
        photoUrl:document.getElementById('admin_guru_photo').value || '',
        name:document.getElementById('admin_guru_name_input').value || '',
        desc:document.getElementById('admin_guru_desc').value || ''
      }, {merge:true});
      alert('ಗುರು ಮಾಹಿತಿ ಉಳಿಸಲಾಗಿದೆ');
    };

    document.getElementById('saveCountersBtn').onclick=async()=>{
      await setDoc(doc(db,'meta','qr'),{url:document.getElementById('admin_qr_url').value || ''}, {merge:true});
      await setDoc(doc(db,'meta','counters'),{
        collected:Number(document.getElementById('admin_collected').value||0),
        donationGoal:Number(document.getElementById('admin_goal').value||0)
      }, {merge:true});
      alert('ದಾನ ಮಾಹಿತಿ ಉಳಿಸಲಾಗಿದೆ');
    };

    document.getElementById('addGalleryBtn').onclick=async()=>{
      const url=document.getElementById('admin_gallery_url').value.trim();
      const caption=document.getElementById('admin_gallery_caption').value.trim();
      if(!url){ alert('ದಯವಿಟ್ಟು ಚಿತ್ರ URL ನೀಡಿರಿ'); return; }
      await addDoc(collection(db,'gallery'),{url,caption,createdAt:Date.now()});
      alert('ಗ್ಯಾಲರಿ ಸೇರಿಸಲಾಗಿದೆ'); loadAdminLists();
      document.getElementById('admin_gallery_url').value=''; document.getElementById('admin_gallery_caption').value='';
    };

    document.getElementById('addVideoBtn').onclick=async()=>{
      const url=document.getElementById('admin_video_url').value.trim();
      const caption=document.getElementById('admin_video_caption').value.trim();
      if(!url){ alert('ದಯವಿಟ್ಟು ವೀಡಿಯೊ URL ಅಥವಾ YouTube link ನೀಡಿ'); return; }
      await addDoc(collection(db,'videos'),{url,caption,createdAt:Date.now()});
      alert('ವೀಡಿಯೊ ಸೇರಿಸಲಾಗಿದೆ'); loadAdminLists();
      document.getElementById('admin_video_url').value=''; document.getElementById('admin_video_caption').value='';
    };

    document.getElementById('addEventBtn').onclick=async()=>{
      const title=document.getElementById('admin_event_title').value.trim();
      const date=document.getElementById('admin_event_date').value.trim();
      const desc=document.getElementById('admin_event_desc').value.trim();
      if(!title){ alert('ಶೀರ್ಷಿಕೆ ನಮೂದಿಸಿ'); return; }
      await addDoc(collection(db,'events'),{title,date,desc,createdAt:Date.now()});
      alert('ಕಾರ್ಯಕ್ರಮ ಸೇರಿಸಲಾಗಿದೆ'); loadAdminLists();
      document.getElementById('admin_event_title').value=''; document.getElementById('admin_event_date').value=''; document.getElementById('admin_event_desc').value='';
    };

    document.getElementById('addStudentBtn').onclick=async()=>{
      const photo=document.getElementById('admin_student_photo').value.trim();
      const name=document.getElementById('admin_student_name').value.trim();
      const desc=document.getElementById('admin_student_desc').value.trim();
      if(!name){ alert('ವಿದ್ಯಾರ್ಥಿ ಹೆಸರು ಅಗತ್ಯ'); return; }
      await addDoc(collection(db,'students'),{photoUrl:photo,name,desc,createdAt:Date.now()});
      alert('ವಿದ್ಯಾರ್ಥಿ ಸೇರಿಸಲಾಗಿದೆ'); loadAdminLists();
      document.getElementById('admin_student_photo').value=''; document.getElementById('admin_student_name').value=''; document.getElementById('admin_student_desc').value='';
    };

    document.getElementById('refreshAdminBtn').onclick=()=>loadAdminLists();

    /* Add Announcement */
    document.getElementById('addAnnBtn').onclick=async()=>{
      const title=document.getElementById('admin_ann_title').value.trim();
      const msg=document.getElementById('admin_ann_msg').value.trim();
      if(!title && !msg){ alert('ಶೀರ್ಷಿಕೆ ಅಥವಾ ಸಂದೇಶ ನಮೂದಿಸಿ'); return; }
      await addDoc(collection(db,'announcements'),{title,msg,createdAt:Date.now()});
      alert('ಘೋಷಣೆ ಸೇರಿಸಲಾಗಿದೆ'); loadAdminLists();
      document.getElementById('admin_ann_title').value=''; document.getElementById('admin_ann_msg').value='';
    };

  </script>
</body>
</html>

