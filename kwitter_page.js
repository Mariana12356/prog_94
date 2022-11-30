// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4jKOh-opa_skmu1cASjQ4iocetk_Qv-o",
  authDomain: "aula-93.firebaseapp.com",
  projectId: "aula-93",
  storageBucket: "aula-93.appspot.com",
  messagingSenderId: "318036735286",
  appId: "1:318036735286:web:4f7960a303884cc81aef97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
 
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
     });
   
    document.getElementById("msg").value = "";
  }
  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
    }
      