    
    import { initializeApp } from "firebase/app"
    import { getAuth } from "firebase/auth"
    import { getFirestore, collection, getDocs } from 'firebase/firestore'
    
    
    
    
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWjkVS-gXIuVYEHnB5b7qLMFpjdxzpzJE",
    authDomain: "discord-51fb7.firebaseapp.com",
    projectId: "discord-51fb7",
    storageBucket: "discord-51fb7.appspot.com",
    messagingSenderId: "1043607051024",
    appId: "1:1043607051024:web:27494f7683628d3122e395"
  };
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)

  export const db = getFirestore()
  export const colRef = collection(db, 'messages')

