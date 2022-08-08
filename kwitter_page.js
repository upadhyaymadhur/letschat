//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAhx72DPpE6NlG1lpSgVHvyQ5uhPqZpgYA",
      authDomain: "kwitter-98192.firebaseapp.com",
      databaseURL: "https://kwitter-98192-default-rtdb.firebaseio.com",
      projectId: "kwitter-98192",
      storageBucket: "kwitter-98192.appspot.com",
      messagingSenderId: "889144588557",
      appId: "1:889144588557:web:74b40c2d70d21cee015844"
    };
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value;
      


}








    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1 = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name1 +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>"+ message + "</h4>";
like_button = "<button class ='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>Likes :"+ like +"</button>";

row = name_with_tag + message_with_tag + like_button
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function updateLike(message_id){
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}

