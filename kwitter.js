firebaseConfig = {
    apiKey: "AIzaSyCNFSLY0kkBWNmzmQjhvdr-pwrNYmwGvuc",
    authDomain: "kwitterapp-837f8.firebaseapp.com",
    databaseURL: "https://kwitterapp-837f8-default-rtdb.firebaseio.com",
    projectId: "kwitterapp-837f8",
    storageBucket: "kwitterapp-837f8.appspot.com",
    messagingSenderId: "899828379659",
    appId: "1:899828379659:web:6cf8399c6808caf9db570e"
  };
function addUser(){
var User_name = document.getElementById("user_name").value;
    localStorage.setItem("username", User_name);
    window.location = "kwitter_room.html";
    console.log("hi")
}