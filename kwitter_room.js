var firebaseConfig = {
      apiKey: "AIzaSyAhx72DPpE6NlG1lpSgVHvyQ5uhPqZpgYA",
      authDomain: "kwitter-98192.firebaseapp.com",
      databaseURL: "https://kwitter-98192-default-rtdb.firebaseio.com",
      projectId: "kwitter-98192",
      storageBucket: "kwitter-98192.appspot.com",
      messagingSenderId: "889144588557",
      appId: "1:889144588557:web:74b40c2d70d21cee015844"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirect(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}