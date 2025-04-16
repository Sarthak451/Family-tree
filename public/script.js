
import { db, storage } from './firebase-config.js';
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

// Add member to Firestore
const memberForm = document.getElementById("memberForm");
if (memberForm) {
  memberForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fullName = document.getElementById("fullName").value;
    const dob = document.getElementById("dob").value;
    const bio = document.getElementById("bio").value;
    await addDoc(collection(db, "members"), { fullName, dob, bio });
    alert("Member added!");
    location.reload();
  });
}

// Load members
const memberList = document.getElementById("memberList");
if (memberList) {
  const snapshot = await getDocs(collection(db, "members"));
  snapshot.forEach((doc) => {
    const data = doc.data();
    const card = `<div class="bg-white p-4 rounded shadow">
      <h2 class="text-xl font-bold">${data.fullName}</h2>
      <p class="text-sm mb-2">DOB: ${data.dob}</p>
      <p class="text-sm italic">${data.bio}</p>
    </div>`;
    memberList.innerHTML += card;
  });
}

// Media upload
const uploadBtn = document.getElementById("uploadBtn");
if (uploadBtn) {
  uploadBtn.addEventListener("click", async () => {
    const fileInput = document.getElementById("mediaUpload");
    const file = fileInput.files[0];
    if (!file) return alert("Please select a file");
    const storageRef = ref(storage, `media/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    const img = `<img src="${url}" class="rounded shadow" />`;
    document.getElementById("mediaGallery").innerHTML += img;
  });
}
