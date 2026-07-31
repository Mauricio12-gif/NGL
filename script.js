import { db } from "./firebase.js";

import {
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";

console.log("SecretTalk JavaScript loaded");


// SEND ANONYMOUS MESSAGE

window.sendMessage = async function(){

    const messageInput = document.getElementById("message");
    const status = document.getElementById("status");

    const message = messageInput.value.trim();


    if(message === ""){

        alert("Write a message first");
        return;

    }


    try{

        await addDoc(

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


        console.log("Message saved");

    }


    catch(error){


        console.log("Firebase error:", error);


        status.innerHTML =
        "Error sending message ❌";


        alert(error.message);

    }

};    }



    try{


        await addDoc(

            collection(db,"messages"),

            {

                text: message,

                sender: "Anonymous",

                time: serverTimestamp()

            }

        );



        status.innerHTML =
        "Message sent successfully ❤️";


        messageInput.value = "";



        console.log("Message saved to Firebase");


    }


    catch(error){


        console.log(
            "Firebase error:",
            error
        );


        status.innerHTML =
        "Error sending message ❌";


        alert(error.message);


    }


};



// Firebase connection test

async function testFirebase(){


    try{


        await addDoc(

            collection(db,"test"),

            {

                message:
                "Firebase connected successfully",

                time:
                serverTimestamp()

            }

        );


        console.log(
            "Firebase connection works"
        );


    }


    catch(error){


        console.log(
            "Firebase connection failed:",
            error
        );


    }


}



testFirebase();
