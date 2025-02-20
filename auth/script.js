let isSignup = false;

function toggleForm() {
    isSignup = !isSignup;
    document.getElementById("form-title").innerText = isSignup ? "Sign Up" : "Login";
    document.getElementById("username-group").style.display = isSignup ? "block" : "none";
    document.querySelector(".toggle").innerText = isSignup ? "Already have an account? Login" : "Don't have an account? Sign up";
}

document.getElementById("auth-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;
    
    if (isSignup) {
        console.log("Signing up with", { username, email, password });
        alert("Signup successful!");
    } else {
        console.log("Logging in with", { email, password });
        alert("Login successful!");
    }
});

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCjH6rgFNawgaqDyPD-KDFbaDWK1yfnwH8",
    authDomain: "auth-1c407.firebaseapp.com",
    projectId: "auth-1c407",
    storageBucket: "auth-1c407.firebasestorage.app",
    messagingSenderId: "1082157734598",
    appId: "1:1082157734598:web:8b8bdf65de9ba24532d5c7",
    measurementId: "G-T31SY2SKDZ"
  };


  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);