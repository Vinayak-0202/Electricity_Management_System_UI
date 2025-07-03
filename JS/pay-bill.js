const username = localStorage.getItem("username");
document.getElementById("welcomeText").innerText = "Welcome, " + username;

const checkboxes = document.querySelectorAll(".bill-check");
const totalSpan = document.getElementById("totalAmount");

checkboxes.forEach((cb) => {
  cb.addEventListener("change", () => {
    let total = 0;
    checkboxes.forEach((c) => {
      if (c.checked) {
        total += parseFloat(c.getAttribute("data-amount"));
      }
    });
    totalSpan.innerText = total;
    localStorage.setItem("billAmount", total); // Save for payment
  });
});

function logout() {
  localStorage.removeItem("username");
  window.location.href = "login.html";
}

function proceedToPay() {
  const total = parseFloat(totalSpan.innerText);
  if (total === 0) {
    alert("Please select at least one bill to pay.");
    return;
  }
  window.location.href = "payment.html";
}
