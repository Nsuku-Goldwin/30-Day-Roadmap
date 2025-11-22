const button1 = document.getElementById("button-a");
const button2 = document.getElementById("button-b");
const button3 = document.getElementById("button-c");

button1.addEventListener("click", () => {
  window.alert("You selected the free tier");
});
button2.addEventListener("click", () => {
  window.alert("You selected the $6 tier");
});
button3.addEventListener("click", () => {
  window.alert("You selected the $12 tier");
});
