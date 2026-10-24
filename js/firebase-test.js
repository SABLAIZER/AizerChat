alert("🔥 FIREBASE-TEST.JS IS RUNNING");

import {
    db
} from "./firebase.js";

import {
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

async function testFirebase() {

    try {

        const testMessage = await addDoc(
            collection(db, "testMessages"),
            {
                message: "AizerChat Firebase is connected 🔥",
                createdAt: serverTimestamp()
            }
        );

        alert(
            "🔥 FIREBASE WORKS!\n\nDocument ID: " +
            testMessage.id
        );

    } catch (error) {

        alert(
            "❌ FIREBASE ERROR:\n\n" +
            error.message
        );

        console.error(error);
    }
}

testFirebase();
