import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDpkBhTotucUFF_zi1KzXvxIrSJBhW_g74",
  authDomain: "crwn-shop-904f9.firebaseapp.com",
  projectId: "crwn-shop-904f9",
  storageBucket: "crwn-shop-904f9.appspot.com",
  messagingSenderId: "86130630774",
  appId: "1:86130630774:web:b67a37784b6439a0eebf57",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  //  console.log(snapShot)
  if (!snapShot.exists) {
    let { displayName, email } = userAuth;

    const createdAt = new Date();

    const dataObject = {
      email,
      createdAt,
      ...additionalData,
    };

    try {
      // checks if displayName is null. if it is, it won't send it. Meaning that in additionalData, there is a displayName.
      if (displayName) {
        await userRef.set(dataObject, displayName);
      } else {
        await userRef.set(dataObject);
      }
    } catch (err) {
      console.log("Something went wrong!", err.message);
    }
  }
  return userRef;
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((acc, collection) => {
    return {...acc, [collection.title.toLowerCase()] : collection}
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithRedirect(provider);

export default firebase;
