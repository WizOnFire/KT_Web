// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {ref,set,getDatabase } from "firebase/database";
import fs from 'fs'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7J8JJh2JnX3D-ItanwKMLaXCXw7JtYKw",
  authDomain: "kt-wizonfire.firebaseapp.com",
  projectId: "kt-wizonfire",
  storageBucket: "kt-wizonfire.appspot.com",
  messagingSenderId: "450858127836",
  appId: "1:450858127836:web:181a3a7947e9c0a9cabf19",
  measurementId: "G-6JHZNDTG87"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const database=getDatabase(firebaseApp)
//const analytics = getAnalytics(firebaseApp);

async function uploadJSONData() {
    const jsonFiles: string[] = ['./json/coachlist'] // 여기에 JSON 파일 경로를 나열합니다.
    for (const file of jsonFiles) {
        const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
        const newRef = ref(database, 'player/' + file); // 노드 이름을 적절히 설정하세요.
        await set(newRef, data);
        console.log(`Uploaded ${file} successfully.`);
    }
}

uploadJSONData().catch((error) => {
    console.error("Error uploading data:", error);
});