import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCP9H7KFW5nAxsvNrvDXqsUCQrCYk10dw",
  authDomain: "todo-react-app-89677.firebaseapp.com",
  projectId: "todo-react-app-89677",
  storageBucket: "todo-react-app-89677.firebasestorage.app",
  messagingSenderId: "14122621489",
  appId: "1:14122621489:web:78c94884591d0d33ba1310"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }