import { db } from "./firebase.js";

import {
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";


console.log("SecretTalk loaded");


// SEND ANONYMOUS MESSAGE

window.sendMessage = async function () {

    const messageInput = document.getElementById("message");
    const status = document.getElementById("status");


    const message = messageInput.value.trim();


    if (message === "") {

        alert("Write a message first");

        return;

    }


    try {


        await addDoc(
            console.log("Trying to send message");

            collection(db, "messages"),

            {
                text: message,
                sender: "Anonymous",
                time: serverTimestamp()
            }

        );


        status.innerHTML = 
        "Message sent successfully ❤️";


        messageInput.value = "";


    } 
    
    catch (error) {


        console.error(
            "Firebase error:",
            error
        );


        status.innerHTML =
        "Message failed to send ❌";


    }

};
