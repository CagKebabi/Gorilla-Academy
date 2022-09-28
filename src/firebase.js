import firebase from 'firebase/compat/app';
import {getStorage} from 'firebase/storage'
import { initializeApp } from 'firebase/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCodW43J5fpgbXNtuVzDykEoXUzo1wSCqE",
    authDomain: "internforum-5e2b0.firebaseapp.com",
    projectId: "internforum-5e2b0",
    storageBucket: "internforum-5e2b0.appspot.com",
    messagingSenderId: "378290239883",
    appId: "1:378290239883:web:a48270501414e421f9578e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const storage = getStorage(firebaseApp)
  const db = firebaseApp.firestore(); //firestore ulaşıp ekleme silme güncelleme yapabilmek için
  const auth = firebase.auth(); //authentication yapacağımız için buna ihtiyaç olacak
  const provider = new firebase.auth.GoogleAuthProvider(); //google ile giriş yapma sekmesini popup olarak açıcaz bu yüzden ihtiyacımız olacak

  export default db;
  export { auth, provider };