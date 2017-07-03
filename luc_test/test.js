var firebase = require("firebase");
 
 // Initialize Firebase
 var config = {
   apiKey: "AIzaSyA8usMBqpDQ_ih2yNZGa4d20Rl6Dh0nVJs",
   authDomain: "sdc-mobi.firebaseapp.com",
   databaseURL: "https://sdc-mobi.firebaseio.com",
   projectId: "sdc-mobi",
   storageBucket: "sdc-mobi.appspot.com",
   messagingSenderId: "939253048864"
 };
var test = firebase.initializeApp(config);

var lol = firebase.auth().signInWithEmailAndPassword("test@test.test", "test123");
console.log(lol);

var ref = new Firebase("https://sdc-mobi.firebaseio.com");
var authData = ref.getAuth();

if (authData) {
  console.log("Authenticated user with uid:", authData.uid);
}

/*return firebase.database().ref('/users/' + lol).once('value').then(function(snapshot) {
  var username = snapshot.val().username;
  console.log(username);
});*/

firebase.auth().signInWithEmailAndPassword("test@test.test", "test123");
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var uid = user.uid;
    writeDoctorData(uid, json);
  } else {
    console.log("ECHEC")
  }
});

