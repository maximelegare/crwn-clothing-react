import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDpkBhTotucUFF_zi1KzXvxIrSJBhW_g74",
    authDomain: "crwn-shop-904f9.firebaseapp.com",
    projectId: "crwn-shop-904f9",
    storageBucket: "crwn-shop-904f9.appspot.com",
    messagingSenderId: "86130630774",
    appId: "1:86130630774:web:b67a37784b6439a0eebf57"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithRedirect(provider)

export default firebase









