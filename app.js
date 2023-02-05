const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  title.style.color = "blue";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier");
}

function handleWindowOffline() {
  alert("SOS No WIFI");
  console.log("NO WIFI");
}

function handleWindowOnline() {
  alert("ALL GOOD");
  console.log("GOOD WIFI");
}

title.addEventListener("click", handleTitleClick);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
