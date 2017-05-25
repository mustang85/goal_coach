import * as firebase from 'firebase';


// Initialize Firebase
var config = {
  apiKey: "AIzaSyCxdYJ4xPs8agdLuCNPWf9zDFoZfBWsSxI",
  authDomain: "goalcoach-5e821.firebaseapp.com",
  databaseURL: "https://goalcoach-5e821.firebaseio.com",
  projectId: "goalcoach-5e821",
  storageBucket: "goalcoach-5e821.appspot.com",
  messagingSenderId: "309500917035"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');

