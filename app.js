// app.js

// Firebase configuration (replace with your own)
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  // Login Form Submission
  document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert(`Welcome, ${user.email}`);
        if (user.email === 'Cafeteria@vignan24.com') {
          window.location.href = 'cafeteria-dashboard.html';
        } else if (user.email === '4thFloor@vignan24.com') {
          window.location.href = '4th-floor-dashboard.html';
        }
      })
      .catch((error) => {
        document.getElementById('error-message').textContent = error.message;
      });
  });
  