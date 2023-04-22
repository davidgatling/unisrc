// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-analytics.js";
import firebase from "https://www.gstatic.com/firebasejs/9.20.0/firebase.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJa5KGYGOJfU1eq30KFULMhVgNJdmH53c",
    authDomain: "unisrc-22.firebaseapp.com",
    projectId: "unisrc-22",
    storageBucket: "unisrc-22.appspot.com",
    messagingSenderId: "245167671215",
    appId: "1:245167671215:web:a2f6f56c3a8eb7905a915a",
    measurementId: "G-M8LD3ZCXYS"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
  var email = document.getElementById('uemail').value;
  var password = document.getElementById('upassword').value;
  firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
  }).catch(function (error){
      var errorcode = error.code;
      var errormsg = error.message;
  });
}

const auth = firebase.auth();

function SignIn(){
  var email = document.getElementById('uemail').value;
  var password = document.getElementById('upassword').value;
  const promise = auth.signInWithEmailAndPassword(email,password);
  promise.catch( e => alert(e.msg));
  window.open("https://www.google.com","_self");
}

document.getElementById('myForm').addEventListener('submit', (e) => {
  e.preventDefault();
  var userInfo = datab.push();
  userInfo.set({
    name: getId('uname'),
    email : getId('uemail'),
    password : getId('upassword')
  });
  // redirect to login.html
  window.location.href = 'login.html';
});

function getId(id){
  return document.getElementById(id).value;
}
