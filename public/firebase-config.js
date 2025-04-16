
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyB10xSCkBeN8iyEQ5n7lVKgj4wyxQitD_M",
  authDomain: "familytree-4c458.firebaseapp.com",
  projectId: "familytree-4c458",
  storageBucket: "familytree-4c458.appspot.com",
  messagingSenderId: "533642365131",
  appId: "1:533642365131:web:e9eeccbba7ccd7a5cb734e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
