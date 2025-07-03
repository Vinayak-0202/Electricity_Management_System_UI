const username = localStorage.getItem("username");
document.getElementById("welcomeText").innerText = "Welcome, " + username;
function logout() {
  localStorage.removeItem("username");
  window.location.href = "login.html";
}
