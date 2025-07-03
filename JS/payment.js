const username = localStorage.getItem("username");
document.getElementById("welcomeText").innerText = "Welcome, " + username;

const bill = parseFloat(localStorage.getItem("billAmount") || 0);
const pg = 30;
const total = bill + pg;

document.getElementById("billAmount").innerText = bill;
document.getElementById("totalPay").innerText = total;

function logout() {
  localStorage.removeItem("username");
  window.location.href = "login.html";
}

function makePayment() {
  const cardNo = document.getElementById("cardNo").value.trim();
  const name = document.getElementById("cardName").value.trim();
  const expiry = document.getElementById("expiry").value.trim();
  const cvv = document.getElementById("cvv").value.trim();

  if (cardNo.length !== 16 || isNaN(cardNo)) {
    alert("Card number must be 16 digits.");
    return;
  }

  if (name.length < 10) {
    alert("Card holder name must be at least 10 characters.");
    return;
  }

  const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  if (!regex.test(expiry)) {
    alert("Invalid expiry format. Use MM/YY.");
    return;
  }

  if (cvv.length !== 3 || isNaN(cvv)) {
    alert("CVV must be 3 digits.");
    return;
  }

  localStorage.setItem("paidAmount", total);
  window.location.href = "payment-success.html";
}
