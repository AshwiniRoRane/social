function updateLike(message_id)
{
      console.log("clicked on like button -" + message_id);
      button_id = message_id;
      liks = document.getElementById(button_id).value;
      update_Likes = Number(likes)+ 1;
      console.log(update_Likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
     });
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

      }  
      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
            Room_names = childKey;
           //Start code
         console.log("Room Name-" + Room_names);
         row = "<div class='room_name' id+"+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
         document.getElementById("output").innerHTML += row;
         
 console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+name+"<img class='user_tick src='tick.png></h4> ";
like_button = "<button class ='btn btn-warning' id= "+firebase_message_id+" value="+like+" onclick ='updateLike(this.id);'>";
span_with_tag = "<span class='glyphicon glyphiconthumbs-up'>Like:"+like+"</span></button><hr>";
 
           //End code
           
           });});}
     getData();