import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

const auth = getAuth(app);

// Context Create
export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email and password
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signOut
  const logOut = () => {
    return signOut(auth);
    // console.log("sign out function works");
  };

  // Google Authentication
  const googleProvider = new GoogleAuthProvider();

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo = {
    user,
    createUser,
    signIn,
    googleLogin,
    logOut,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("Logged In User :", user.email);
      } else {
        console.log("No user");
      }
    });

    // return unSubscribe;

    return () => {
      return unSubscribe;
    };
  }, []);

  // consumer
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
