import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCO0Tr2ZVMym6SeouQu9oRiO1zPDq5F3xk",
    authDomain: "data28-35410.firebaseapp.com",
    projectId: "data28-35410",
    storageBucket: "data28-35410.appspot.com",
    messagingSenderId: "411051427941",
    appId: "1:411051427941:web:bc75b6acb177b95a6b1e8c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log("got a user");
    } else {
        console.log("no user");
    }
})

