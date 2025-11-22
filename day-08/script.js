const createBtn = document.getElementById("new-account");
const facebookBtn = document.getElementById("fb-button");

createBtn.addEventListener("click", (e) => {
  const name = document.getElementsByName("first-name")[0].value;
  const surname = document.getElementsByName("last-name")[0].value;
  const email = document.getElementsByName("email")[0].value;
  const password = document.getElementsByName("password")[0].value;
  if (name === "" || surname === "" || email === "" || password === "") {
    window.alert("Please sill in all the required fields");
  } else {
    window.alert("Account successfully created");
  }
});
facebookBtn.addEventListener("click", (e) => {
  window.alert("Successfully signed in with facebook");
});
