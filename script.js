import { db } from "./firebase.js";


import {

collection,
addDoc,
serverTimestamp

} from 
"https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";



window.sendMessage = async function(){


const message = 
document.getElementById("message").value;



if(message.trim()==""){

alert("Write a message first");

return;

}



await addDoc(

collection(db,"messages"),

{

text:message,

time:serverTimestamp()

}

);



document.getElementById("status").innerHTML =
"Message sent ❤️";


document.getElementById("message").value="";


}
