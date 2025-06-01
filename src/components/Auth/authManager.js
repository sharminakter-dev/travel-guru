// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./firebase.config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

// create new user
export const createNewUser = (fName, lName, email, password)=>{
  return createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const userCredentialData = userCredential.user;
    console.log(userCredentialData);
    userCredentialData.displayName = fName+' '+lName; 
    userCredentialData.fName = fName; 
    userCredentialData.lName = lName; 
    const user = {
      uid: userCredential.user.uid,
      fName: fName,
      lName: lName,
      userName: fName+' '+lName,
      email:email,
      success:true
    };
    return user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
     const user = {
      uid: '',
      fName: '',
      lName: '',
      userName: '',
      email:'',
      success:false,
      error: errorMessage
    };
    return user;
    // ..
  })
}

// login existing user
export const loginUser = (email, password)=>{
  return signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = {
    uid: userCredential.user.uid,
    fName: userCredential.user.fName,
    lName: userCredential.user.lName,
    userName: userCredential.user.displayName,
    email:email,
    success:true
    };
    return user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const user = {
      uid: '',
      fName: '',
      lName: '',
      userName: '',
      email:'',
      success:false,
      error: errorMessage
    };
    console.log(errorMessage);
  });
}


// signout user
export const logoutUser = () => {
  return signOut(auth).then(() => {
  // Sign-out successful.
  const signOutUser = {
      uid: '',
      fName: '',
      lName: '',
      userName: '',
      email:'',
      success:false,
    };
    return signOutUser;
}).catch((error) => {
  // An error happened.
});
}