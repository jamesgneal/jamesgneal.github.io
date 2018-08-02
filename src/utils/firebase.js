import firebase from "firebase";
// Obviously public keys are a no-no. However, there is no sensitive data on this firebase db, just the titles, descriptions and img links for my portfolio. So for the sake of hosting on a github user page and playing with firebase on react, I'm treating this the same as if I was storing the data and img links in state. Congrats if you dug this deep and kept reading.
const config = {
  apiKey: "AIzaSyD7tPGF_TLGgYbW-Rn5-NBn9IOqR94h_58",
  authDomain: "personal-portfolio-d3899.firebaseapp.com",
  databaseURL: "https://personal-portfolio-d3899.firebaseio.com",
  projectId: "personal-portfolio-d3899",
  storageBucket: "personal-portfolio-d3899.appspot.com",
  messagingSenderId: "20945492325"
};
firebase.initializeApp(config);
export default firebase;
