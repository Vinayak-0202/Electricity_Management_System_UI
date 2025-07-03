function validateRegister() {
  const mobile = document.getElementById("mobile").value;
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;
  const consumerId = document.getElementById("consumerId").value;
  const billNumber = document.getElementById("billNumber").value;
  if (consumerId.length !== 13 || isNaN(consumerId)) {
    alert("Consumer ID must be a 13-digit number.");
    return false;
  }
  if (billNumber.length !== 5 || isNaN(billNumber)) {
    alert("Bill Number must be a 5-digit number.");
    return false;
  }
  if (mobile.length !== 10 || isNaN(mobile)) {
    alert("Mobile number must be 10 digits.");
    return false;
  }
  if (password !== confirm) {
    alert("Passwords do not match.");
    return false;
  }
  const name = document.getElementById("customerName").value;
  const email = document.getElementById("email").value;
  const customerId = Math.floor(1000000000000 + Math.random() * 9000000000000);
  localStorage.setItem("registeredName", name);
  localStorage.setItem("registeredEmail", email);
  localStorage.setItem("generatedId", customerId);
  window.location.href = "register-success.html";
  return false;
}
