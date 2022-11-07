const form = document.querySelector(".login-form");

function onHandleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }
    
     const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {
    console.log(name ,`:`, value);
    });
    
  event.currentTarget.reset();
};

form.addEventListener("submit", onHandleSubmit);

