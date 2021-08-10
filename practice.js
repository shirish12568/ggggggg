var firebaseConfig = {
    apiKey: "AIzaSyBilPLB_rfvR_cTDniCXDiUcm6upVNvmUI",
    authDomain: "dddddddddddeededeegghh.firebaseapp.com",
    databaseURL: "https://dddddddddddeededeegghh-default-rtdb.firebaseio.com",
    projectId: "dddddddddddeededeegghh",
    storageBucket: "dddddddddddeededeegghh.appspot.com",
    messagingSenderId: "920038205336",
    appId: "1:920038205336:web:bcf20b2bf4900dd6b3eded"
  };
  firebase.initializeApp(firebaseConfig);
  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }