// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAOATnchD1t5YUnnIdvtsQv66zjsRYXlH8",
    authDomain: "ngocminh.firebaseapp.com",
    projectId: "ngocminh",
    storageBucket: "ngocminh.appspot.com",
    messagingSenderId: "392249447451",
    appId: "1:392249447451:web:6ead854ccf272e467594be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;