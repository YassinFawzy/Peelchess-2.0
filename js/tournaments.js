const modal= document.getElementById("registration");

function checkInput(){
  var email= document.getElementById("input-email").value;
  var username= document.getElementById("input-username").value;

  if (email== "" || username== ""){
    window.alert("You must input an email and username");
    return true;
  }
  else{
    window.alert("You have successfully registered");
    closeModal();
    return true;
  }
}

function submitForm() {
  if (checkInput()) {
      const form = document.getElementById('registrationForm');
      const formData = new FormData(form);
      const url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfhc8slnq66wOy-4knuOSlz9bhSw80eit523v83kHXJeP8BSw/formResponse';

      fetch(url, {
          method: 'POST',
          body: formData
      })
      .then(response => {
          // Handle the response here
          console.log(response);
          // You can customize this part based on your needs
          // For example, show a success message or update the UI
      })
      .catch(error => {
          // Handle errors here
          console.error(error);
      });
  }
}

function showModal(){
  modal.showModal();
}
function closeModal(){
  modal.close();
}