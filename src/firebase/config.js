import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCTLl6w09F4SAxsX51qdfLwaMfWT_Z-8Hs',
  authDomain: 'loading-time.firebaseapp.com',
  projectId: 'loading-time',
  storageBucket: 'loading-time.appspot.com',
  messagingSenderId: '103513917309',
  appId: '1:103513917309:web:586dedfceca8c8a685ae14',
}

// init firebase
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }
