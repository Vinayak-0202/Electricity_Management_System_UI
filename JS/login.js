function validateLogin() {
  const user = document.getElementById("userId").value;
  const pass = document.getElementById("password").value;
  if (user.length < 5 || pass.length < 5) {
    alert("User ID and Password must be at least 5 characters.");
    return false;
  }
  localStorage.setItem("username", user);
  window.location.href = "home.html";
  return false;
}
