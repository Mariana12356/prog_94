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
ser_name = localStorage.getItem("user_name");
 
document.getElementById("user_name").innerHTML = "Bem-vindo(a) " + user_name + "!";
 
function addRoom()
{
  room_name = document.getElementById("room_name").value;
 
  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionar sala"
  });
 
    localStorage.setItem("room_name", room_name);
   
    window.location = "kwitter_page.html";
}
 
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
 
}
 
getData();
 
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";

}