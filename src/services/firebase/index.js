import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDtsfkwwnK9FAfYXqnPx0NAfc5VwNd3pGg",
  authDomain: "amapolartes-7fd3d.firebaseapp.com",
  projectId: "amapolartes-7fd3d",
  storageBucket: "amapolartes-7fd3d.appspot.com",
  messagingSenderId: "755250034725",
  appId: "1:755250034725:web:69302097fc5b982be1a7cc"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 