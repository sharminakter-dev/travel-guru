// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./firebase.config";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  GoogleAuthProvider, 
  signInWithPopup, 
  FacebookAuthProvider, 
  sendEmailVerification, 
  updateProfile, 
  sendPasswordResetEmail, 
  setPersistence, 
  browserSessionPersistence, 
  browserLocalPersistence } from "firebase/auth";
  import dummyUser from '../../resources/images/user.png';

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
    const user = {
      uid: userCredential.user.uid,
      userName: fName+' '+lName,
      email:email,
      success:true
    };
    updateUserProfile( fName+' '+lName);
    verifyEmail();
    return user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
     const user = {
      uid: '',
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
export const loginUser = (email, password, remember)=>{
  const persistenceType = remember?browserLocalPersistence:browserSessionPersistence;
  return setPersistence(auth, persistenceType)
  .then(() => {
    return signInWithEmailAndPassword(auth, email, password)
  })
  .then((userCredential) => {
    // Signed in 
    const user = {
    uid: userCredential.user.uid,
    userName: userCredential.user.displayName,
    email:email,
    rememberUser:remember,
    success:true
    };
    return user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const user = {
      uid: '',
      userName: '',
      email:'',
      success:false,
      error: errorMessage
    };
    return user;
  });
}

// google login
export const googleLogIn = ()=>{
  const googleProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.

    const user = {
      uid: result.user.uid,
      userName: result.user.displayName,
      dp: result.user.photoURL,
      email:result.user.email,
      success:true
    };

    return user
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
     const user = {
      uid: '',
      userName: '',
      email:'',
      success:false,
      error: errorMessage
    };
    return user;
  });
}

// Fb logIn
export const fbLogIn = ()=>{
  const fbProvider = new FacebookAuthProvider();
  return signInWithPopup(auth, fbProvider)
  .then((result) => {
   const user = {
      uid: result.user.uid,
      userName: result.user.displayName,
      dp:result.user.photoURL,
      email:result.user.email,
      success:true
    };
    // console.log(result.user)
    return user
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    const user = {
      uid: '',
      userName: '',
      email:'',
      success:false,
      error: errorMessage
    };
    return user;
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

// update profile
const updateUserProfile = (name)=>{
  updateProfile(auth.currentUser, {
  displayName: name, photoURL: dummyUser
}).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
  console.log(error)
});
}

// verify email
const verifyEmail = ()=>{
  sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
  });
}

export const resetPassword = (email)=>{
  sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}