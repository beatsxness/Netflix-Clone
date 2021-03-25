import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyD1D_uXKKCtc_tZ7HAzjm3D1HGqNTUU8Ek",
    authDomain: "netflix-clone-bnx.firebaseapp.com",
    projectId: "netflix-clone-bnx",
    storageBucket: "netflix-clone-bnx.appspot.com",
    messagingSenderId: "188604573301",
    appId: "1:188604573301:web:00ba01b838517c9c277a3c"
};

const firebase = Firebase.initializeApp(config);

export { firebase };