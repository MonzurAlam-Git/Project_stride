import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: import.meta.env.Vite_apiKey,
//   authDomain: import.meta.env.Vite_authDomain,
//   projectId: import.meta.env.Vite_projectId,
//   storageBucket: import.meta.env.Vite_storageBucket,
//   messagingSenderId: import.meta.env.Vite_messagingSenderId,
//   appId: import.meta.env.Vite_appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyAOgI_RC489hUCWHfruk6rMKUnOFEp8s88",
  authDomain: "stride-6e679.firebaseapp.com",
  projectId: "stride-6e679",
  storageBucket: "stride-6e679.appspot.com",
  messagingSenderId: "498976160743",
  appId: "1:498976160743:web:d0b2c480be72d42efe9b42",
};
export const app = initializeApp(firebaseConfig);
