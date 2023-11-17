const modal= document.getElementById("registration");

function checkInput(){
  var email= document.getElementById("input-email").value;
  var username= document.getElementById("input-username").value;

  if (email== "" || username== ""){
    window.alert("You must input an email and username");
    return false;
  }
  else{
    window.alert("You have successfully registered");
    closeModal();
    return false;
  }
}

function showModal(){
  modal.showModal();
}
function closeModal(){
  modal.close();
}