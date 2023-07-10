import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCYp6Dc1NnKFUMLjnduo6INFEJWQSv4k-0",
    authDomain: "sky-code-999e7.firebaseapp.com",
    projectId: "sky-code-999e7",
    storageBucket: "sky-code-999e7.appspot.com",
    messagingSenderId: "810365930758",
    appId: "1:810365930758:web:3a1da8184e290d8285e287",
    measurementId: "G-0YXE3SLS3F"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


async function getUsers(database){
    const userCollection = collection(database, 'users');
    const result = await getDocs(userCollection);
    const userList = result.docs.map(doc => doc.data());
    return userList;
}

try {
    getUsers(db).then(response => console.log(response));
}catch (err){
    console.log(err)
}