import './style.css'
import { db } from './firebaseConfig'
import { collection, addDoc, doc, onSnapshot } from "firebase/firestore";
const servers = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
    }
  ],
  iceCandidatePoolSize: 10,
}
let pc = new RTCPeerConnection(servers);
let localStream = null;
let remoteStream = null;

const webcamButton = document.getElementById('webcamButton');
const webcamVideo = document.getElementById('webcamVideo');
const callButton = document.getElementById('callButton');
const callInput = document.getElementById('callInput');
const answerButton = document.getElementById('answerButton');
const remoteVideo = document.getElementById('remoteVideo');
const hangupButton = document.getElementById('hangupButton');

webcamButton.onclick = async () => {
  localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  remoteStream = new MediaStream()
  console.log(localStream);
  webcamVideo.srcObject = localStream
  remoteVideo.srcObject = localStream
}
// var input = document.getElementById("myInput");
// input.addEventListener("keyup", function (event) {
//   if (event.key === "Enter") {
//     console.log(input.value)
//     sendText(input.value)
//   }
// });
// let messages = document.querySelector('.messages')
// const unsub = onSnapshot(collection(db, "test"), (snapshot) => {
//   snapshot.forEach(element => {
//     console.log(element.data())
//     messages.innerHTML += `<div>${element.data().text}</div>`
//   });
// });
// async function sendText(textInput) {
//   const docRef = await addDoc(collection(db, "test"), {
//     text: textInput
//   });
// }