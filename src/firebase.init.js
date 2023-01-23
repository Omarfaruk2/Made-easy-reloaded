// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUDU7zsmJK8mDfZLjxtKt7pYAxgo9V6Z4",
    authDomain: "made-easy-reload.firebaseapp.com",
    projectId: "made-easy-reload",
    storageBucket: "made-easy-reload.appspot.com",
    messagingSenderId: "155616821804",
    appId: "1:155616821804:web:bf4bbf11fe2f592bb90789"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth