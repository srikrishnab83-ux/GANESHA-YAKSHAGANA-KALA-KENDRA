<!DOCTYPE html>
<html lang="kn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ಕಲಾಸಿದ್ಧಿ: ಶ್ರೀ ಗಣೇಶ ಯಕ್ಷಗಾನ ಕಲಾ ಕೇಂದ್ರ</title>
    <!-- Load Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Load Font: Inter is the default, but we specify it for consistency -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        /* Custom styles for Kannada text and aesthetics */
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f7f3e8; /* Light traditional background */
            color: #333;
        }
        .section-header {
            font-size: 2.5rem;
            font-weight: 700;
            color: #8b5cf6; /* A vibrant purple/gold tone */
            text-shadow: 2px 2px #d8b4fe;
            margin-bottom: 1.5rem;
            border-bottom: 3px solid #fcd34d;
            padding-bottom: 0.5rem;
            display: inline-block;
        }
        .yaksha-card {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease-in-out;
            border-radius: 12px;
            overflow: hidden;
        }
        .yaksha-card:hover {
            transform: translateY(-5px);
        }
        /* Style for the fixed WhatsApp button */
        .whatsapp-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 50;
        }
        /* Custom modal for full-screen gallery view */
        .modal {
            display: none;
            position: fixed;
            z-index: 100;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0,0,0,0.9);
            padding-top: 60px;
        }
        .modal-content-wrapper {
            max-height: 90vh;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
        }
        .modal-content {
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
            border-radius: 8px;
        }
        .close-btn {
            position: absolute;
            top: 15px;
            right: 35px;
            color: #f1f1f1;
            font-size: 40px;
            font-weight: bold;
            transition: 0.3s;
            cursor: pointer;
        }
        .loader {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #8b5cf6;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>

    <!-- Firebase SDK Imports (MANDATORY for Firestore) -->
    <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
        import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
        import { getFirestore, doc, getDoc, addDoc, setDoc, updateDoc, deleteDoc, onSnapshot, collection, query, orderBy, where, getDocs, serverTimestamp, deleteField } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
        import { setLogLevel } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

        // Global Firebase variables setup
        let db, auth;
        let userId = 'anonymous'; // Will be updated after auth
        
        // Default Guru Data (used as a fallback and to hold current state)
        let guruData = { 
            name: "ಶ್ರೀ ಸೂರ್ಯನಾರಾಯಣ ಪದಕಣ್ಣಾಯ, ಬಾಯಾರು", 
            photoUrl: 'https://placehold.co/150x150/8b5cf6/FFFFFF?text=ಗುರು+ಭಾವಚಿತ್ರ' 
        }; 

        // 1. Mandatory Global Variable initialization
        const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
        
        // --- FIX: Provide a dummy config structure for external environments (like GitHub) ---
        // This prevents the "projectId not provided" error when running outside the Canvas environment.
        const defaultFirebaseConfig = {
            apiKey: "DUMMY_API_KEY", 
            authDomain: "dummy-domain.firebaseapp.com",
            projectId: "dummy-project-id", 
            storageBucket: "dummy-bucket.appspot.com",
            messagingSenderId: "123456789012",
            appId: "1:123456789012:web:a1b2c3d4e5f6g7h8i9j0",
        };
        const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : defaultFirebaseConfig;
        const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;
        // --- END FIX ---

        /**
         * Adjusted the collection path to ensure it has an odd number of segments (5 segments).
         */
        const getCollectionPath = (collectionName) => `/artifacts/${appId}/public/data/${collectionName}`;

        // Initialize and Authenticate
        const initializeFirebase = async () => {
            const loadingMessage = document.getElementById('loading-message');
            
            // Check if we are using the dummy configuration
            if (firebaseConfig.projectId === "dummy-project-id") {
                loadingMessage.innerHTML = `<p class="text-red-500">ಗಮನಿಸಿ: ಡೇಟಾಬೇಸ್ ಸಂಪರ್ಕ ವಿಫಲವಾಗಿದೆ (ಬಾಹ್ಯ ಪರಿಸರದಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದೆ). ಕ್ರಿಯಾತ್ಮಕ ವಿಭಾಗಗಳು ಕಾರ್ಯನಿರ್ವಹಿಸುವುದಿಲ್ಲ.</p>`;
                renderGuru(guruData); // Render fallback guru data
                renderEvents([]); // Render empty lists
                renderStudents([]);
                renderGallery([]);
                renderDonationTotal(0);
                document.getElementById('qr-code-img').src = "https://placehold.co/200x200/4c4d51/FFFFFF?text=QR+Code+Unavailable";
                return;
            }

            try {
                // setLogLevel('Debug'); // Enable for debugging
                const app = initializeApp(firebaseConfig);
                db = getFirestore(app);
                auth = getAuth(app);

                // Authentication
                await new Promise((resolve, reject) => {
                    const unsubscribe = onAuthStateChanged(auth, async (user) => {
                        unsubscribe();
                        if (user) {
                            userId = user.uid;
                            resolve();
                        } else if (initialAuthToken) {
                            await signInWithCustomToken(auth, initialAuthToken);
                            userId = auth.currentUser.uid;
                            resolve();
                        } else {
                            await signInAnonymously(auth);
                            userId = auth.currentUser.uid;
                            resolve();
                        }
                    }, reject);
                });

                // Set global db, auth and start listeners
                window.db = db;
                window.auth = auth;
                window.userId = userId;
                window.getCollectionPath = getCollectionPath;

                console.log("Firebase Initialized and Authenticated. User ID:", userId);

                // Start loading dynamic content
                loadDynamicContent();

            } catch (error) {
                console.error("Firebase Initialization or Authentication Failed:", error);
                loadingMessage.innerHTML = `<p class="text-red-500">ಡೇಟಾಬೇಸ್ ಸಂಪರ್ಕ ವಿಫಲವಾಯಿತು: ${error.message}</p>`;
            }
        };

        // --- Data Loading and Rendering Functions ---

        // Main function to attach real-time listeners
        const loadDynamicContent = () => {
            // 1. Events Listener
            onSnapshot(collection(db, getCollectionPath('events')), (snapshot) => {
                const events = [];
                snapshot.forEach(doc => events.push({ id: doc.id, ...doc.data() }));
                renderEvents(events);
                console.log("Events updated.");
            });

            // 2. Students Listener
            onSnapshot(collection(db, getCollectionPath('students')), (snapshot) => {
                const students = [];
                snapshot.forEach(doc => students.push({ id: doc.id, ...doc.data() }));
                renderStudents(students);
                console.log("Students updated.");
            });

            // 3. Gallery Listener
            onSnapshot(collection(db, getCollectionPath('gallery')), (snapshot) => {
                const galleryItems = [];
                snapshot.forEach(doc => galleryItems.push({ id: doc.id, ...doc.data() }));
                renderGallery(galleryItems);
                console.log("Gallery updated.");
            });

            // 4. Donation Listener (Single Document)
            onSnapshot(doc(db, getCollectionPath('donations'), 'total'), (docSnapshot) => {
                const totalDonation = docSnapshot.exists() ? docSnapshot.data().amount : 0;
                renderDonationTotal(totalDonation);
                console.log("Donation total updated.");
            });
            
            // 5. QR Code Listener (Single Document)
            onSnapshot(doc(db, getCollectionPath('donations'), 'qr'), (docSnapshot) => {
                const qrUrl = docSnapshot.exists() && docSnapshot.data().url ? docSnapshot.data().url : "https://placehold.co/200x200/4c4d51/FFFFFF?text=QR+Code+(Admin)";
                document.getElementById('qr-code-img').src = qrUrl;
                console.log("QR Code updated.");
            });

            // 6. Guru Listener (Single Document)
            onSnapshot(doc(db, getCollectionPath('guru'), 'details'), (docSnapshot) => {
                if (docSnapshot.exists()) {
                    guruData = { 
                        name: docSnapshot.data().name || "ಗುರುಗಳ ಹೆಸರು ಲಭ್ಯವಿಲ್ಲ", 
                        photoUrl: docSnapshot.data().photoUrl || 'https://placehold.co/150x150/8b5cf6/FFFFFF?text=ಗುರು+ಭಾವಚಿತ್ರ' 
                    };
                }
                renderGuru(guruData);
                console.log("Guru data updated.");
            });

            document.getElementById('loading-message').style.display = 'none';
        };

        // Helper to render the Guru section
        const renderGuru = (guru) => {
            const container = document.getElementById('guru-container');
            const defaultGuruName = "ಶ್ರೀ ಸೂರ್ಯನಾರಾಯಣ ಪದಕಣ್ಣಾಯ, ಬಾಯಾರು"; // Static fallback name
            
            container.innerHTML = `
                <!-- Photo -->
                <img id="guru-photo" src="${guru.photoUrl || 'https://placehold.co/150x150/8b5cf6/FFFFFF?text=ಗುರು+ಭಾವಚಿತ್ರ'}" 
                     alt="${guru.name || defaultGuruName} Photo" 
                     class="w-32 h-32 rounded-full object-cover border-4 border-yellow-500 shadow-md">
                <div>
                    <h3 id="guru-name-display" class="text-2xl font-bold text-purple-900">${guru.name || defaultGuruName}</h3>
                    <p class="mt-2 text-gray-700 leading-relaxed">
                        ಯಕ್ಷಗಾನ ಕಲೆಗೆ ತಮ್ಮ ಜೀವನವನ್ನೇ ಮುಡಿಪಾಗಿಟ್ಟಿರುವ ಹಿರಿಯ ಮತ್ತು ಅನುಭವಿ ಕಲಾವಿದರು ಹಾಗೂ ಗುರುವಾದ **${guru.name || defaultGuruName}** ಅವರ ನೇತೃತ್ವದಲ್ಲಿ ತರಗತಿಗಳು ನಡೆಯುತ್ತವೆ. ತೆಂಕು ತಿಟ್ಟಿನ ಸೂಕ್ಷ್ಮತೆ, ರಂಗದ ಪರಿಪೂರ್ಣತೆ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಶೈಲಿಯ ಜ್ಞಾನವನ್ನು ಅಳವಡಿಸಿರುವ ಇವರು, ಕಲಿಯುವ ಆಸಕ್ತಿ ಇರುವ ಎಲ್ಲರಿಗೂ ತಮ್ಮ ಅಮೂಲ್ಯ ಜ್ಞಾನವನ್ನು ಧಾರೆ ಎರೆಯುತ್ತಿದ್ದಾರೆ.
                    </p>
                </div>
            `;
        };

        // Helper to render events
        const renderEvents = (events) => {
            const container = document.getElementById('events-container');
            container.innerHTML = '';
            if (events.length === 0) {
                container.innerHTML = '<p class="text-center text-gray-500 italic">ಯಾವುದೇ ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳು ಲಭ್ಯವಿಲ್ಲ.</p>';
                return;
            }
            // Sort by date (client-side sorting to avoid index creation errors)
            events.sort((a, b) => new Date(a.date) - new Date(b.date)); 
            events.forEach(event => {
                container.innerHTML += `
                    <div class="yaksha-card bg-white p-4 sm:p-6 mb-4 border-l-4 border-yellow-500">
                        <p class="text-xl font-semibold text-purple-700">${event.prasanga}</p>
                        <p class="text-gray-600 mt-1">ದಿನಾಂಕ: <span class="font-medium">${event.date}</span> | ಸಮಯ: <span class="font-medium">${event.time}</span></p>
                        <p class="text-gray-500 text-sm">ಸ್ಥಳ: ${event.location}</p>
                    </div>
                `;
            });
        };

        // Helper to render students
        const renderStudents = (students) => {
            const container = document.getElementById('students-container');
            container.innerHTML = '';
            if (students.length === 0) {
                container.innerHTML = '<p class="text-center text-gray-500 italic">ಯಾವುದೇ ಸಾಧಕ ವಿದ್ಯಾರ್ಥಿಗಳ ಮಾಹಿತಿ ಲಭ್ಯವಿಲ್ಲ.</p>';
                return;
            }
            students.forEach(student => {
                const studentImage = student.photoUrl || 'https://placehold.co/100x100/A0B2C9/FFFFFF?text=ವಿದ್ಯಾರ್ಥಿ';
                container.innerHTML += `
                    <div class="yaksha-card bg-white p-4 flex items-center space-x-4">
                        <img src="${studentImage}" alt="${student.name}" class="w-16 h-16 rounded-full object-cover border-2 border-yellow-500">
                        <div>
                            <p class="text-lg font-bold text-purple-700">${student.name}</p>
                            <p class="text-sm text-gray-600">${student.description}</p>
                        </div>
                    </div>
                `;
            });
        };

        // Helper to render gallery
        const renderGallery = (items) => {
            const container = document.getElementById('gallery-container');
            container.innerHTML = '';
            if (items.length === 0) {
                container.innerHTML = '<p class="text-center text-gray-500 italic">ಯಾವುದೇ ಚಿತ್ರಗಳು/ವೀಡಿಯೋಗಳು ಲಭ್ಯವಿಲ್ಲ.</p>';
                return;
            }
            items.forEach(item => {
                const isVideo = item.type && item.type.startsWith('video');
                const thumbnailContent = isVideo 
                    ? `<svg class="w-10 h-10 text-white absolute inset-0 m-auto" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/></svg>`
                    : `<img src="${item.url}" alt="Gallery Image" class="w-full h-full object-cover">`;

                container.innerHTML += `
                    <div class="relative group cursor-pointer" onclick="openModal('${item.url}', '${item.type}')">
                        <div class="h-48 w-full bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
                            ${isVideo ? `<video src="${item.url}" class="w-full h-full object-cover opacity-50"></video>` : `<img src="${item.url}" alt="Gallery Item" class="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-75">`}
                            ${thumbnailContent}
                        </div>
                    </div>
                `;
            });
        };

        // Helper to render donation total
        const renderDonationTotal = (total) => {
            const totalDisplay = document.getElementById('donation-total');
            totalDisplay.textContent = '₹ ' + (total || 0).toLocaleString('en-IN');
        };


        // --- Public Interaction Functions ---

        // Admission Form Submission
        window.handleAdmission = async () => {
            // Check if DB is initialized (will be null/undefined if running outside Canvas)
            if (!db) {
                const status = document.getElementById('admission-status');
                status.textContent = "ಡೇಟಾಬೇಸ್ ಸಂಪರ್ಕವಿಲ್ಲ. ಪ್ರವೇಶಾತಿ ಅರ್ಜಿಗಳನ್ನು ಉಳಿಸಲಾಗುವುದಿಲ್ಲ.";
                status.classList.remove('text-green-500');
                status.classList.add('text-red-500');
                return;
            }

            const form = document.getElementById('admission-form');
            const status = document.getElementById('admission-status');
            const data = {
                name: form.name.value,
                address: form.address.value,
                phone: form.phone.value,
                age: parseInt(form.age.value),
                interest: form.interest.value,
                timestamp: serverTimestamp(),
                applicantId: userId // Store the ID of the user who submitted the form
            };

            if (!data.name || !data.phone || isNaN(data.age)) {
                status.textContent = "ಎಲ್ಲಾ ಕ್ಷೇತ್ರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ (ಹೆಸರು, ದೂರವಾಣಿ, ವಯಸ್ಸು).";
                status.classList.remove('text-green-500');
                status.classList.add('text-red-500');
                return;
            }

            try {
                await addDoc(collection(db, getCollectionPath('admissions')), data);
                status.textContent = "ನಿಮ್ಮ ಅರ್ಜಿಯನ್ನು ಸ್ವೀಕರಿಸಲಾಗಿದೆ. ಶೀಘ್ರದಲ್ಲೇ ಸಂಪರ್ಕಿಸಲಾಗುವುದು!";
                status.classList.remove('text-red-500');
                status.classList.add('text-green-500');
                form.reset();
            } catch (error) {
                console.error("Error saving admission:", error);
                status.textContent = "ಅರ್ಜಿ ಸಲ್ಲಿಸುವಲ್ಲಿ ದೋಷ ಉಂಟಾಗಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.";
                status.classList.remove('text-green-500');
                status.classList.add('text-red-500');
            }
        };

        // Gallery Modal Handlers
        window.openModal = (url, type) => {
            const modal = document.getElementById('gallery-modal');
            const contentContainer = document.getElementById('modal-content-container');
            contentContainer.innerHTML = '';
            
            if (type && type.startsWith('video')) {
                // Video element
                contentContainer.innerHTML = `<video src="${url}" controls class="modal-content" style="max-width: 90%; max-height: 90%;"></video>`;
            } else {
                // Image element
                contentContainer.innerHTML = `<img src="${url}" alt="Full Screen Item" class="modal-content">`;
            }
            
            modal.style.display = 'block';
        };

        window.closeModal = () => {
            const modal = document.getElementById('gallery-modal');
            const video = document.querySelector('#modal-content-container video');
            if (video) {
                video.pause(); // Stop video playback when closing
            }
            modal.style.display = 'none';
        };

        // --- Admin Panel Functions ---

        const checkDbAccess = () => {
             if (!db) {
                console.error("DB Access Required: Cannot perform admin operations without Firebase connection.");
                // NOTE: Using console error instead of alert/modal for non-critical admin operations
                return false;
            }
            return true;
        }

        window.openAdminLogin = () => {
             if (!checkDbAccess()) {
                document.getElementById('admin-login-error').textContent = "ಡೇಟಾಬೇಸ್ ಸಂಪರ್ಕವಿಲ್ಲ. ಅಡ್ಮಿನ್ ಕಾರ್ಯಗಳು ನಿಷ್ಕ್ರಿಯಗೊಂಡಿವೆ.";
                document.getElementById('admin-login-error').classList.remove('hidden');
                setTimeout(() => document.getElementById('admin-login-error').classList.add('hidden'), 5000);
                return;
            }
            document.getElementById('admin-login-modal').style.display = 'flex';
            document.getElementById('admin-password').value = ''; // Clear password on open
        };

        window.closeAdminLogin = () => {
            document.getElementById('admin-login-modal').style.display = 'none';
        };

        window.handleAdminLogin = () => {
            const password = document.getElementById('admin-password').value;
            const errorElement = document.getElementById('admin-login-error');
            
            if (!checkDbAccess()) return;

            // Simplified admin login for demonstration purposes
            // The password is 'admin123'
            if (password === 'admin123') { 
                errorElement.textContent = '';
                document.getElementById('admin-login-modal').style.display = 'none';
                document.getElementById('admin-panel-modal').style.display = 'flex';
                // Load admin specific data on successful login
                loadAdminData();
            } else {
                errorElement.textContent = 'ತಪ್ಪಾದ ಪಾಸ್‌ವರ್ಡ್.';
                errorElement.classList.remove('hidden');
            }
        };
        
        // Closes the Admin Panel modal, returning the user to the main website
        window.closeAdminPanel = () => {
            document.getElementById('admin-panel-modal').style.display = 'none';
        };
        
        // LOGOUT: Handles admin logout logic to close the panel
        window.handleLogout = () => {
            // For this sandbox environment, we simply close the admin panel modal.
            window.closeAdminPanel();
            console.log("Admin successfully logged out, returning to main page.");
        };


        // Load all data for admin viewing/editing
        const loadAdminData = async () => {
            if (!checkDbAccess()) return;
            
            document.getElementById('admin-events').innerHTML = '<div class="loader mx-auto"></div>';
            document.getElementById('admin-gallery').innerHTML = '<div class="loader mx-auto"></div>';
            document.getElementById('admin-students').innerHTML = '<div class="loader mx-auto"></div>';
            document.getElementById('admin-admissions').innerHTML = '<div class="loader mx-auto"></div>';
            document.getElementById('admin-guru-photo-status').textContent = 'ಸ್ಥಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ...';


            try {
                // Fetch Events (for removal)
                const eventSnap = await getDocs(collection(db, getCollectionPath('events')));
                renderAdminList(eventSnap, 'admin-events', 'prasanga', 'removeEvent');

                // Fetch Gallery (for removal)
                const gallerySnap = await getDocs(collection(db, getCollectionPath('gallery')));
                renderAdminList(gallerySnap, 'admin-gallery', 'url', 'removeGalleryItem');

                // Fetch Students (for removal)
                const studentSnap = await getDocs(collection(db, getCollectionPath('students')));
                renderAdminList(studentSnap, 'admin-students', 'name', 'removeStudent');

                // Fetch Admissions
                const admissionSnap = await getDocs(collection(db, getCollectionPath('admissions')));
                renderAdminAdmissions(admissionSnap);

                // Fetch Current Donation Total
                const totalDoc = await getDoc(doc(db, getCollectionPath('donations'), 'total'));
                const currentTotal = totalDoc.exists() ? totalDoc.data().amount : 0;
                document.getElementById('admin-donation-total').value = currentTotal;
                
                // Fetch Guru Details (for editing)
                const guruDoc = await getDoc(doc(db, getCollectionPath('guru'), 'details'));
                if (guruDoc.exists()) {
                    document.getElementById('admin-guru-name').value = guruDoc.data().name || '';
                    guruData.photoUrl = guruDoc.data().photoUrl; // Update local guruData photoUrl
                } else {
                    // Set a sensible default if the doc doesn't exist
                    document.getElementById('admin-guru-name').value = guruData.name; 
                }
                const photoStatus = guruDoc.exists() && guruDoc.data().photoUrl ? 'ಚಿತ್ರ ಲಭ್ಯವಿದೆ.' : 'ಚಿತ್ರ ಲಭ್ಯವಿಲ್ಲ.';
                document.getElementById('admin-guru-photo-status').textContent = photoStatus;


            } catch (error) {
                console.error("Error loading admin data:", error);
                // NOTE: Using console error instead of alert
                console.error("ADMIN ERROR: Failed to load admin data. Check console for details.");
            }
        };

        // Generic renderer for Admin lists (Events, Gallery, Students)
        const renderAdminList = (snapshot, containerId, displayField, removeFunction) => {
            const container = document.getElementById(containerId);
            container.innerHTML = '';
            snapshot.forEach(doc => {
                const data = doc.data();
                // Shorten URL for display if it's the primary field
                let displayValue = data[displayField];
                if (displayField === 'url') {
                    displayValue = data.type && data.type.startsWith('video') ? `ವೀಡಿಯೊ: ${data.url.substring(0, 30)}...` : `ಚಿತ್ರ: ${data.url.substring(0, 30)}...`;
                }
                
                container.innerHTML += `
                    <div class="flex justify-between items-center p-2 border-b border-gray-200">
                        <span class="truncate pr-4 text-sm">${displayValue}</span>
                        <button onclick="${removeFunction}('${doc.id}')" class="text-red-500 hover:text-red-700 text-xs font-semibold px-2 py-1 bg-red-100 rounded">ತೆಗೆದುಹಾಕು</button>
                    </div>
                `;
            });
            if (snapshot.empty) {
                 container.innerHTML = '<p class="text-gray-500 text-sm italic p-2">ಯಾವುದೇ ಐಟಂ ಇಲ್ಲ.</p>';
            }
        };
        
        // Renderer for Admissions
        const renderAdminAdmissions = (snapshot) => {
            const container = document.getElementById('admin-admissions');
            container.innerHTML = '';
             snapshot.forEach(doc => {
                const data = doc.data();
                container.innerHTML += `
                    <div class="bg-gray-50 p-3 mb-2 border-l-4 border-blue-400 rounded">
                        <p class="font-bold">${data.name} (${data.age})</p>
                        <p class="text-sm">ದೂರವಾಣಿ: ${data.phone}</p>
                        <p class="text-xs text-gray-600">ಆಸಕ್ತಿ: ${data.interest}</p>
                    </div>
                `;
            });
            if (snapshot.empty) {
                 container.innerHTML = '<p class="text-gray-500 text-sm italic p-2">ಯಾವುದೇ ಹೊಸ ಪ್ರವೇಶಾತಿ ಅರ್ಜಿ ಇಲ್ಲ.</p>';
            }
        };

        // --- Admin CRUD Handlers for Deletion and Addition ---
        
        // 1. EVENT HANDLERS
        window.addEvent = async () => {
            if (!checkDbAccess()) return;
            const date = document.getElementById('new-event-date').value;
            const time = document.getElementById('new-event-time').value;
            const location = document.getElementById('new-event-location').value;
            const prasanga = document.getElementById('new-event-prasanga').value;
            if (!date || !time || !prasanga) {
                 console.error("Missing required event fields.");
                 return;
            }

            await addDoc(collection(db, getCollectionPath('events')), { date, time, location, prasanga });
            document.getElementById('admin-event-form').reset();
            loadAdminData();
        };
        
        window.removeEvent = async (id) => {
            if (!checkDbAccess()) return;
            console.warn("ADMIN ACTION: Deleting Event ID:", id);
            try {
                await deleteDoc(doc(db, getCollectionPath('events'), id));
                loadAdminData();
            } catch (error) {
                console.error("Error removing event:", error);
            }
        };

        // 2. STUDENT HANDLERS
        window.addStudent = async () => {
            if (!checkDbAccess()) return;
            const name = document.getElementById('new-student-name').value;
            const description = document.getElementById('new-student-description').value;
            const photoFile = document.getElementById('new-student-photo').files[0];
            if (!name || !description) {
                console.error("Missing required student fields.");
                return;
            }
            
            let photoUrl = '';
            if (photoFile) {
                photoUrl = await fileToBase64(photoFile);
            }

            await addDoc(collection(db, getCollectionPath('students')), { name, description, photoUrl });
            document.getElementById('admin-student-form').reset();
            loadAdminData();
        };

        window.removeStudent = async (id) => {
            if (!checkDbAccess()) return;
            console.warn("ADMIN ACTION: Deleting Student ID:", id);
            try {
                await deleteDoc(doc(db, getCollectionPath('students'), id));
                loadAdminData();
            } catch (error) {
                console.error("Error removing student:", error);
            }
        };

        // 3. GALLERY HANDLERS
        window.addGalleryItem = async () => {
            if (!checkDbAccess()) return;
            const fileInput = document.getElementById('new-gallery-file');
            const file = fileInput.files[0];
            if (!file) {
                 console.error("No gallery file selected.");
                 return;
            }

            const url = await fileToBase64(file);
            const type = file.type;

            await addDoc(collection(db, getCollectionPath('gallery')), { url, type });
            fileInput.value = ''; // Clear file input
            loadAdminData();
        };
        
        window.removeGalleryItem = async (id) => {
            if (!checkDbAccess()) return;
            console.warn("ADMIN ACTION: Deleting Gallery Item ID:", id);
            try {
                await deleteDoc(doc(db, getCollectionPath('gallery'), id));
                loadAdminData();
            } catch (error) {
                console.error("Error removing gallery item:", error);
            }
        };

        // 4. DONATION HANDLERS
        window.updateDonationTotal = async () => {
            if (!checkDbAccess()) return;
            const newTotal = parseInt(document.getElementById('admin-donation-total').value);
            if (isNaN(newTotal) || newTotal < 0) {
                console.error("Invalid donation amount entered.");
                return;
            }

            await setDoc(doc(db, getCollectionPath('donations'), 'total'), { amount: newTotal }, { merge: true });
            console.log("Donation total updated successfully.");
        };

        window.updateQrCode = async () => {
            if (!checkDbAccess()) return;
            const fileInput = document.getElementById('admin-qr-code-file');
            const file = fileInput.files[0];
            if (!file) {
                console.error("No QR code file selected.");
                return;
            }
            
            const qrUrl = await fileToBase64(file);
            await setDoc(doc(db, getCollectionPath('donations'), 'qr'), { url: qrUrl }, { merge: true });
            console.log("QR Code updated successfully.");
            fileInput.value = '';
        };

        // 5. GURU HANDLERS (NEW)
        window.updateGuruDetails = async () => {
            if (!checkDbAccess()) return;
            const name = document.getElementById('admin-guru-name').value.trim();
            const fileInput = document.getElementById('admin-guru-photo-file');
            const file = fileInput.files[0];
            
            if (!name && !file) {
                 console.error("Guru: Either name or a new photo must be provided for update.");
                 return;
            }

            let photoUrl = guruData.photoUrl; // Keep existing photo URL by default
            
            // 1. Handle new file upload
            if (file) {
                photoUrl = await fileToBase64(file);
            }
            
            // 2. Construct the update payload
            const updatePayload = {};
            if (name) {
                updatePayload.name = name;
            } else {
                 // Use the existing name if a name isn't provided but a photo is
                 updatePayload.name = guruData.name; 
            }
            
            // Only update photoUrl if it's changing (either a new file or keeping existing)
            updatePayload.photoUrl = photoUrl;

            // Use setDoc with merge: true to avoid overwriting other fields if they existed
            await setDoc(doc(db, getCollectionPath('guru'), 'details'), updatePayload, { merge: true });
            console.log("Guru details updated successfully.");
            fileInput.value = ''; // Clear file input after use
            loadAdminData(); // Refresh admin status
        };

        window.removeGuruPhoto = async () => {
            if (!checkDbAccess()) return;
            // Use updateDoc to explicitly remove the 'photoUrl' field
            try {
                // Ensure the document exists or create it if it doesn't before trying to update/delete field
                await setDoc(doc(db, getCollectionPath('guru'), 'details'), { 
                    photoUrl: deleteField()
                }, { merge: true });
                console.log("Guru photo removed successfully.");
                loadAdminData(); // Refresh admin status
            } catch (error) {
                console.error("Error removing guru photo. Ensure the document exists:", error);
            }
        };

        // Utility to convert file to Base64 (needed for direct Firestore storage)
        const fileToBase64 = (file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
                reader.readAsDataURL(file);
            });
        };

        // Start initialization on window load
        window.onload = initializeFirebase;
    </script>
    
    <!-- Main Content Container -->
    <div class="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <header class="text-center py-10 bg-gradient-to-r from-yellow-100 via-yellow-50 to-yellow-100 rounded-xl shadow-lg mb-12">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-purple-900 leading-tight">
                ಕಲಾಸಿದ್ಧಿ: ಶ್ರೀ ಗಣೇಶ ಯಕ್ಷಗಾನ ಕಲಾ ಕೇಂದ್ರ
            </h1>
            <p class="text-xl mt-2 text-purple-700 font-semibold italic">ಮುಳ್ಳೇರಿಯಾ - ಕಾಸರಗೋಡು | ಯಕ್ಷ ಸೌಂದರ್ಯದ ತೆಂಕು ತಿಟ್ಟು ಶೈಲಿ</p>
        </header>

        <div id="loading-message" class="text-center py-10 text-xl font-semibold text-purple-600">
            <div class="loader mx-auto mb-4"></div>
            ಡೇಟಾ ಲೋಡ್ ಆಗುತ್ತಿದೆ...
        </div>

        <!-- 1. ಪರಿಚಯ (Introduction) -->
        <section id="introduction" class="mb-16">
            <h2 class="section-header">೧. ಪರಿಚಯ</h2>
            <div class="bg-white p-6 sm:p-8 rounded-lg yaksha-card">
                <p class="text-lg leading-relaxed text-gray-700">
                    ನಮ್ಮ ಶ್ರೀ ಗಣೇಶ ಯಕ್ಷಗಾನ ಕಲಾ ಕೇಂದ್ರ, ಮುಳ್ಳೇರಿಯಾಕ್ಕೆ ಆದರದ ಸ್ವಾಗತ. ಕೇರಳದ ಕಾಸರಗೋಡು ಜಿಲ್ಲೆಯ **ಮುಳ್ಳೇರಿಯಾನಲ್ಲಿ** ನೆಲೆಸಿರುವ ನಮ್ಮ ಕೇಂದ್ರವು, ಕರ್ನಾಟಕದ ಕರಾವಳಿ ಭಾಗದ ಶ್ರೇಷ್ಠ ಕಲಾಪ್ರಕಾರವಾದ **ಯಕ್ಷಗಾನದ 'ತೆಂಕು ತಿಟ್ಟು'** ಶೈಲಿಯನ್ನು ಮುಂದಿನ ಪೀಳಿಗೆಗೆ ದಾಟಿಸುವ ಪವಿತ್ರ ಕಾರ್ಯದಲ್ಲಿ ತೊಡಗಿದೆ. ಸುಮಾರು ವರ್ಷಗಳಿಂದ ಕಲೆಯ ಸೇವೆ ಮಾಡುತ್ತಿರುವ ನಾವು, ಕಲಾಭಿಮಾನಿಗಳಿಗೆ ಈ ಅದ್ಭುತ ರಂಗಭೂಮಿಯ ಆಳ ಮತ್ತು ಸೌಂದರ್ಯವನ್ನು ಪರಿಚಯಿಸುವ ಗುರಿ ಹೊಂದಿದ್ದೇವೆ. ನೃತ್ಯ, ಮಾತು, ಹಾಡು, ವೇಷಭೂಷಣ ಮತ್ತು ಅಭಿನಯಗಳ ಅದ್ಭುತ ಸಂಗಮವಾದ ಈ ಕಲೆಯನ್ನು ಅಧ್ಯಯನ ಮಾಡಲು ಮತ್ತು ಅಭ್ಯಾಸ ಮಾಡಲು ಇದೊಂದು ಸೂಕ್ತ ವೇದಿಕೆಯಾಗಿದೆ.
                </p>
            </div>
        </section>

        <!-- 2. ನಮ್ಮ ಗುರುಗಳು (Our Guru) - DYNAMICALLY RENDERED -->
        <section id="guru" class="mb-16">
            <h2 class="section-header">೨. ನಮ್ಮ ಗುರುಗಳು</h2>
            <div id="guru-container" class="yaksha-card bg-white p-6 sm:p-8 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                <!-- Dynamic content will be injected here by renderGuru() -->
                <p class="text-center text-gray-500 italic p-4 col-span-full">ಗುರುಗಳ ಮಾಹಿತಿ ಲೋಡ್ ಆಗುತ್ತಿದೆ...</p>
            </div>
        </section>

        <!-- 3. ತರಗತಿಗಳ ವಿವರ (Class Details) -->
        <section id="classes" class="mb-16">
            <h2 class="section-header">೩. ಯಕ್ಷಗಾನ ತರಗತಿಗಳ ವಿವರ</h2>
            <div class="yaksha-card bg-white p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="border-l-4 border-purple-500 pl-4">
                    <p class="text-lg font-bold text-purple-700">ತರಗತಿಯ ವಿಧ</p>
                    <p class="text-xl">ಯಕ್ಷಗಾನ - <span class="font-extrabold text-yellow-600">'ತೆಂಕು ತಿಟ್ಟು'</span></p>
                </div>
                <div class="border-l-4 border-purple-500 pl-4">
                    <p class="text-lg font-bold text-purple-700">ಸ್ಥಳ</p>
                    <p class="text-xl">**ಮುಳ್ಳೇರಿಯಾ**, ಕಾಸರಗೋಡು</p>
                </div>
                <div class="border-l-4 border-purple-500 pl-4">
                    <p class="text-lg font-bold text-purple-700">ಸಮಯ</p>
                    <p class="text-xl">ಮಧ್ಯಾಹ್ನ <span class="font-extrabold text-red-500">1:30 ರಿಂದ 3:45 ರವರೆಗೆ</span></p>
                </div>
                <div class="border-l-4 border-purple-500 pl-4">
                    <p class="text-lg font-bold text-purple-700">ತರಬೇತಿ ವಿಷಯಗಳು</p>
                    <p class="text-sm text-gray-600">ಭಾಗವತಿಕೆ, ಮದ್ದಳೆ/ಚೆಂಡೆ, ವೇಷಗಾರಿಕೆ, ನೃತ್ಯ ಮತ್ತು ಅಭಿನಯ</p>
                </div>
            </div>
        </section>

        <!-- 4. ಸಾಧಕ ವಿದ್ಯಾರ್ಥಿಗಳು (Successful Students) -->
        <section id="students" class="mb-16">
            <h2 class="section-header">೪. ನಮ್ಮ ಸಾಧಕ ವಿದ್ಯಾರ್ಥಿಗಳು</h2>
            <div id="students-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Dynamic student cards will be rendered here by JS -->
                <p class="text-center text-gray-500 italic p-4 col-span-full">ಸಾಧಕ ವಿದ್ಯಾರ್ಥಿಗಳ ಮಾಹಿತಿ ಲೋಡ್ ಆಗುತ್ತಿದೆ...</p>
            </div>
        </section>

        <!-- 5. ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳು (Future Events) -->
        <section id="events" class="mb-16">
            <h2 class="section-header">೫. ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳು</h2>
            <div id="events-container" class="space-y-4">
                <!-- Dynamic event list will be rendered here by JS -->
                <p class="text-center text-gray-500 italic p-4">ಕಾರ್ಯಕ್ರಮಗಳ ಮಾಹಿತಿ ಲೋಡ್ ಆಗುತ್ತಿದೆ...</p>
            </div>
        </section>

        <!-- 6. ಕಲಾ ಚಿತ್ರಣ (Gallery) -->
        <section id="gallery-section" class="mb-16">
            <h2 class="section-header">೬. ಕಲಾ ಚಿತ್ರಣ (Gallery)</h2>
            <p class="text-gray-600 mb-4">ಚಿತ್ರ ಅಥವಾ ವೀಡಿಯೋ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ ಪೂರ್ಣ ಪರದೆಯಲ್ಲಿ ವೀಕ್ಷಿಸಿ.</p>
            <div id="gallery-container" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                 <!-- Dynamic gallery items will be rendered here by JS -->
                 <p class="text-center text-gray-500 italic p-4 col-span-full">ಗ್ಯಾಲರಿ ಐಟಂಗಳು ಲೋಡ್ ಆಗುತ್ತಿವೆ...</p>
            </div>
        </section>

        <!-- Full-Screen Modal for Gallery -->
        <div id="gallery-modal" class="modal" onclick="closeModal()">
            <span class="close-btn" onclick="closeModal()">&times;</span>
            <div id="modal-content-container" class="modal-content-wrapper">
                <!-- Image or Video content will be injected here -->
            </div>
        </div>

        <!-- 7. ಪ್ರವೇಶಾತಿ ಅರ್ಜಿ (Admission Form) -->
        <section id="admission" class="mb-16">
            <h2 class="section-header">೭. ಪ್ರವೇಶಾತಿ ಅರ್ಜಿ</h2>
            <div class="yaksha-card bg-white p-6 sm:p-8">
                <p class="text-lg font-semibold mb-4 text-purple-700">ಯಕ್ಷಗಾನ ಕಲಿಯಲು ಆಸಕ್ತಿ ಇರುವವರು ಈ ಅರ್ಜಿಯನ್ನು ಭರ್ತಿ ಮಾಡಿ:</p>
                <form id="admission-form" onsubmit="event.preventDefault(); handleAdmission();" class="space-y-4">
                    <input type="text" id="name" placeholder="ಪೂರ್ಣ ಹೆಸರು (Full Name)" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" required>
                    <input type="text" id="address" placeholder="ವಿಳಾಸ (Address)" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input type="tel" id="phone" placeholder="ದೂರವಾಣಿ ಸಂಖ್ಯೆ (Phone No)" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" required>
                        <input type="number" id="age" placeholder="ವಯಸ್ಸು (Age)" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" required min="5">
                    </div>
                    <textarea id="interest" placeholder="ಕಲಿಯಲು ಬಯಸುವ ಅಂಶ (ಉದಾ: ನೃತ್ಯ, ಭಾಗವತಿಕೆ, ವಾದನ)" rows="3" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"></textarea>
                    
                    <button type="submit" class="w-full py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition duration-200 shadow-md">
                        ಅರ್ಜಿಯನ್ನು ಸಲ್ಲಿಸಿ (Submit Application)
                    </button>
                    <p id="admission-status" class="text-center font-medium mt-2"></p>
                </form>
            </div>
        </section>

        <!-- 8. ದೇಣಿಗೆ (Donation Request) -->
        <section id="donation" class="mb-16">
            <h2 class="section-header">೮. ಕಲೆಗೆ ನಿಮ್ಮ ಕೊಡುಗೆ (ದೇಣಿಗೆ)</h2>
            <div class="yaksha-card bg-white p-6 sm:p-8 text-center">
                <p class="text-lg font-semibold mb-4 text-gray-700">ಯಕ್ಷಗಾನ ಕಲೆಯ ಉತ್ತೇಜನ ಮತ್ತು ಕಲಾ ಕೇಂದ್ರದ ನಿರ್ವಹಣೆಗಾಗಿ ನಿಮ್ಮ ಉದಾರ ದೇಣಿಗೆಯನ್ನು ಕೋರುತ್ತೇವೆ.</p>
                
                <div class="inline-block p-4 border-4 border-yellow-500 rounded-lg bg-gray-50">
                    <img id="qr-code-img" src="https://placehold.co/200x200/4c4d51/FFFFFF?text=QR+Code+(Admin)" alt="Donation QR Code Placeholder" class="w-48 h-48 mx-auto object-contain mb-4">
                    <p class="text-purple-800 font-bold">ದೇಣಿಗೆ ನೀಡಲು ಈ QR ಕೋಡ್ ಅನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ</p>
                </div>
                
                <div class="mt-8">
                    <p class="text-xl text-gray-800 font-medium">ಇಲ್ಲಿಯವರೆಗೆ ಸಂಗ್ರಹವಾದ ಒಟ್ಟು ದೇಣಿಗೆ</p>
                    <p id="donation-total" class="text-4xl font-extrabold text-green-600 mt-2">
                         ₹ 0
                    </p>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="text-center py-6 border-t border-gray-300 mt-12 text-gray-600">
            <p>&copy; 2024 ಶ್ರೀ ಗಣೇಶ ಯಕ್ಷಗಾನ ಕಲಾ ಕೇಂದ್ರ, **ಮುಳ್ಳೇರಿಯಾ**. ಕಲೆಯ ಸೇವೆಗೆ ಸಮರ್ಪಿತ.</p>
            <button onclick="openAdminLogin()" class="text-sm text-purple-600 hover:underline mt-2">🛡️ ಆಡಳಿತ ಮಂಡಳಿ ಲಾಗಿನ್</button>
        </footer>

    </div>

    <!-- Fixed WhatsApp Button -->
    <a href="https://wa.me/qr/JGB3XSEHKWFDD1" target="_blank" class="whatsapp-btn p-3 bg-green-500 text-white rounded-full shadow-xl hover:bg-green-600 transition duration-200">
        <!-- WhatsApp Icon (Inline SVG) -->
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.924c0 1.399.366 2.76 1.057 3.965L.053 15.94a.5.5 0 0 0 .633.633l3.94-1.004a7.86 7.86 0 0 0 3.868.929c4.366 0 7.925-3.558 7.923-7.923s-3.558-7.925-7.923-7.924zM8 14.281c-1.467 0-2.924-.4-4.128-1.163l-.348-.204-3.492.893 1.053-3.322-.204-.347a6.888 6.888 0 0 1-1.16-4.13C1.65 4.314 4.814 1 8 1s6.35 3.314 6.35 7.424c0 4.11-3.164 7.424-6.35 7.424zm.44-5.226H6.608V7.531h1.832v1.524zm1.531 0h-1.832V7.531h1.832v1.524zM8 10.531H6.608V9.007h1.832v1.524zm1.531 0h-1.832V9.007h1.832v1.524z"/>
        </svg>
    </a>
    
    <!-- Admin Login Modal -->
    <div id="admin-login-modal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 justify-center items-center">
        <div class="bg-white p-8 rounded-lg shadow-2xl w-full max-w-sm">
            <h3 class="text-2xl font-bold mb-4 text-purple-700">ಆಡಳಿತ ಲಾಗಿನ್</h3>
            <p class="text-sm text-gray-600 mb-4">ಮುಂದುವರಿಯಲು ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ.</p>
            
            <input type="password" id="admin-password" placeholder="ಪಾಸ್‌ವರ್ಡ್" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 mb-4">
            
            <p id="admin-login-error" class="text-red-500 text-sm mb-4 hidden"></p>
            <div class="flex justify-end space-x-3">
                <button onclick="closeAdminLogin()" class="py-2 px-4 bg-gray-300 rounded-lg hover:bg-gray-400">ರದ್ದು</button>
                <button onclick="handleAdminLogin()" class="py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700">ಪ್ರವೇಶ</button>
            </div>
        </div>
    </div>

    <!-- Admin Panel Modal - FIX APPLIED HERE: Removed 'items-center' and ensured 'flex' for proper top alignment and scrolling -->
    <div id="admin-panel-modal" class="hidden fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center overflow-y-auto py-10">
        <div class="bg-white p-8 rounded-lg shadow-2xl w-full max-w-3xl relative">
            
            <!-- FIXED HEADER: Title and Close Button (Logout moved to bottom) -->
            <div class="flex justify-between items-center mb-6 border-b pb-2">
                <h2 class="text-3xl font-bold text-purple-700">🛡️ ಆಡಳಿತ ಮಂಡಳಿ</h2>
                <button onclick="closeAdminPanel()" class="text-gray-500 hover:text-gray-700 text-2xl font-bold leading-none">&times;</button>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                <!-- 1. ಕಾರ್ಯಕ್ರಮಗಳ ನಿರ್ವಹಣೆ (Events Management) -->
                <div class="yaksha-card p-4 bg-gray-50 border-t-4 border-blue-500">
                    <h3 class="text-xl font-semibold mb-3 text-blue-700">ಕಾರ್ಯಕ್ರಮಗಳ ನಿರ್ವಹಣೆ</h3>
                    <form id="admin-event-form" class="space-y-3 mb-4">
                        <input type="date" id="new-event-date" class="w-full p-2 border rounded" required>
                        <input type="time" id="new-event-time" placeholder="ಸಮಯ" class="w-full p-2 border rounded" required>
                        <input type="text" id="new-event-location" placeholder="ಸ್ಥಳ" class="w-full p-2 border rounded" required>
                        <input type="text" id="new-event-prasanga" placeholder="ಪ್ರಸಂಗದ ಹೆಸರು" class="w-full p-2 border rounded" required>
                        <button type="button" onclick="addEvent()" class="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">ಕಾರ್ಯಕ್ರಮ ಸೇರಿಸಿ</button>
                    </form>
                    <div id="admin-events" class="border rounded h-40 overflow-y-auto bg-white"></div>
                </div>

                <!-- 2. ಸಾಧಕ ವಿದ್ಯಾರ್ಥಿಗಳ ನಿರ್ವಹಣೆ (Students Management) -->
                <div class="yaksha-card p-4 bg-gray-50 border-t-4 border-green-500">
                    <h3 class="text-xl font-semibold mb-3 text-green-700">ವಿದ್ಯಾರ್ಥಿಗಳ ನಿರ್ವಹಣೆ</h3>
                    <!-- IMPROVED FORM LAYOUT FOR BETTER DISPLAY -->
                    <form id="admin-student-form" class="space-y-3 mb-4">
                        <label class="block text-sm font-medium text-gray-700 pt-1">ವಿದ್ಯಾರ್ಥಿಯ ಹೆಸರು:</label>
                        <input type="text" id="new-student-name" placeholder="ವಿದ್ಯಾರ್ಥಿಯ ಹೆಸರು" class="w-full p-2 border rounded" required>
                        
                        <label class="block text-sm font-medium text-gray-700 pt-1">ಸಂಕ್ಷಿಪ್ತ ವಿವರಣೆ:</label>
                        <textarea id="new-student-description" placeholder="ಸಂಕ್ಷಿಪ್ತ ವಿವರಣೆ" rows="2" class="w-full p-2 border rounded" required></textarea>
                        
                        <label class="block text-sm font-medium text-gray-700 pt-1">ಭಾವಚಿತ್ರ (ಐಚ್ಛಿಕ):</label>
                        <input type="file" id="new-student-photo" accept="image/*" class="w-full text-sm p-1">
                        
                        <button type="button" onclick="addStudent()" class="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 mt-2">ವಿದ್ಯಾರ್ಥಿ ಸೇರಿಸಿ</button>
                    </form>
                    <!-- END OF IMPROVED FORM LAYOUT -->

                    <!-- Student List - The height is kept flexible with scrollbar for large lists -->
                    <h4 class="font-semibold text-gray-700 mt-4 mb-2">ತೆಗೆದುಹಾಕಲು ಇರುವ ವಿದ್ಯಾರ್ಥಿಗಳು:</h4>
                    <div id="admin-students" class="border rounded max-h-60 overflow-y-auto bg-white"></div>
                </div>

                <!-- 3. ಗುರುಗಳ ನಿರ್ವಹಣೆ (Guru Management) -->
                <div class="yaksha-card p-4 bg-gray-50 border-t-4 border-orange-500">
                    <h3 class="text-xl font-semibold mb-3 text-orange-700">ಗುರುಗಳ ವಿವರಗಳ ನಿರ್ವಹಣೆ</h3>
                    <div class="space-y-3 mb-4">
                        <label class="block text-sm font-medium text-gray-700">ಗುರುಗಳ ಹೆಸರು</label>
                        <input type="text" id="admin-guru-name" placeholder="ಗುರುಗಳ ಹೆಸರು" class="w-full p-2 border rounded" required>
                        
                        <label class="block text-sm font-medium text-gray-700">ಭಾವಚಿತ್ರ (ಹೊಸತು ಸೇರಿಸಲು)</label>
                        <input type="file" id="admin-guru-photo-file" accept="image/*" class="w-full text-sm">
                        <p id="admin-guru-photo-status" class="text-xs text-gray-600 italic mt-1">ಚಿತ್ರ ಲಭ್ಯವಿಲ್ಲ.</p>
                        
                        <button type="button" onclick="updateGuruDetails()" class="w-full py-2 bg-orange-600 text-white rounded hover:bg-orange-700">ವಿವರಗಳನ್ನು ನವೀಕರಿಸಿ</button>
                        <button type="button" onclick="removeGuruPhoto()" class="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm">ಭಾವಚಿತ್ರ ತೆಗೆದುಹಾಕು</button>
                    </div>
                </div>
                
                <!-- 4. ಗ್ಯಾಲರಿ ನಿರ್ವಹಣೆ (Gallery Management) -->
                <div class="yaksha-card p-4 bg-gray-50 border-t-4 border-yellow-500">
                    <h3 class="text-xl font-semibold mb-3 text-yellow-700">ಗ್ಯಾಲರಿ ನಿರ್ವಹಣೆ</h3>
                    <p class="text-sm text-gray-500 mb-2">ಚಿತ್ರ/ವೀಡಿಯೋ ಸೇರಿಸಲು</p>
                    <input type="file" id="new-gallery-file" accept="image/*,video/*" class="w-full p-2 border rounded text-sm mb-4">
                    <button type="button" onclick="addGalleryItem()" class="w-full py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700">ಗ್ಯಾಲರಿ ಐಟಂ ಸೇರಿಸಿ</button>
                    <div id="admin-gallery" class="border rounded mt-4 h-40 overflow-y-auto bg-white"></div>
                </div>
                
                <!-- 5. ದೇಣಿಗೆ ಮತ್ತು QR ಕೋಡ್ ನಿರ್ವಹಣೆ (Donation & QR Management) -->
                <div class="yaksha-card p-4 bg-gray-50 border-t-4 border-red-500 lg:col-span-1">
                    <h3 class="text-xl font-semibold mb-3 text-red-700">ದೇಣಿಗೆ ನಿರ್ವಹಣೆ</h3>
                    <div class="space-y-3 mb-4">
                        <label class="block text-sm font-medium text-gray-700">ಸಂಗ್ರಹವಾದ ಒಟ್ಟು ಮೊತ್ತ ನವೀಕರಿಸಿ</label>
                        <input type="number" id="admin-donation-total" placeholder="ಒಟ್ಟು ಮೊತ್ತ" class="w-full p-2 border rounded" min="0">
                        <button type="button" onclick="updateDonationTotal()" class="w-full py-2 bg-red-600 text-white rounded hover:bg-red-700">ಮೊತ್ತ ನವೀಕರಿಸಿ</button>
                    </div>
                    <div class="space-y-3 border-t pt-4">
                        <label class="block text-sm font-medium text-gray-700">QR ಕೋಡ್ ಚಿತ್ರ ನವೀಕರಿಸಿ</label>
                        <input type="file" id="admin-qr-code-file" accept="image/*" class="w-full text-sm">
                        <button type="button" onclick="updateQrCode()" class="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600">QR ಕೋಡ್ ಅಪ್‌ಡೇಟ್</button>
                    </div>
                </div>
                
                <!-- 6. ಪ್ರವೇಶಾತಿ ಅರ್ಜಿ ವೀಕ್ಷಣೆ (Admission Viewing) -->
                <div class="yaksha-card p-4 bg-gray-50 border-t-4 border-purple-500 lg:col-span-1">
                    <h3 class="text-xl font-semibold mb-3 text-purple-700">ಬಂದಿರುವ ಪ್ರವೇಶಾತಿ ಅರ್ಜಿಗಳು</h3>
                    <div id="admin-admissions" class="border rounded max-h-60 overflow-y-auto bg-white">
                        <!-- Admissions will be loaded here -->
                    </div>
                </div>
            </div>

            <!-- New Logout Button at the end of the panel -->
            <div class="mt-8 pt-4 border-t">
                <button onclick="handleLogout()" class="w-full py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition duration-200 shadow-md">
                    🚫 ಆಡಳಿತ ಮಂಡಳಿಯಿಂದ ಲಾಗ್‌ಔಟ್ ಮಾಡಿ
                </button>
            </div>

            <p class="text-center text-sm text-gray-500 mt-6">ಎಲ್ಲಾ ಬದಲಾವಣೆಗಳು ತಕ್ಷಣವೇ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಪ್ರತಿಫಲಿಸುತ್ತವೆ.</p>
        </div>
    </div>
</body>
</html>
