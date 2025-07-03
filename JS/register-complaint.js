const username = localStorage.getItem("username");
document.getElementById("welcomeText").innerText = "Welcome, " + username;

function logout() {
  localStorage.removeItem("username");
  window.location.href = "login.html";
}

function updateCategory() {
  const type = document.getElementById("type").value;
  const category = document.getElementById("category");
  category.innerHTML = "";

  let options = [];

  switch (type) {
    case "Billing related":
      options = ["Overcharged", "Incorrect Reading"];
      break;
    case "Voltage related":
      options = ["Low Voltage", "Fluctuation"];
      break;
    case "Frequent disruption":
      options = ["Daily Power Cut", "Unscheduled Cut"];
      break;
    case "Street light related":
      options = ["Lights not working", "Lights flickering"];
      break;
    case "Pole related":
      options = ["Broken Pole", "Leaning Pole"];
      break;
    default:
      options = [];
  }

  options.forEach((opt) => {
    const option = document.createElement("option");
    option.value = opt;
    option.text = opt;
    category.appendChild(option);
  });
}

function validateComplaint() {
  const mobile = document.getElementById("mobile").value;
  const consumerNo = document.getElementById("consumerNo").value;

  if (consumerNo.length !== 13 || isNaN(consumerNo)) {
    alert("Consumer No must be a 13-digit number.");
    return false;
  }

  if (mobile.length !== 10 || isNaN(mobile)) {
    alert("Mobile number must be 10 digits.");
    return false;
  }

  const complaintId = "CMP" + Math.floor(100000 + Math.random() * 900000);
  localStorage.setItem("complaintId", complaintId);
  localStorage.setItem(
    "contactPerson",
    document.getElementById("contactPerson").value
  );
  window.location.href = "complaint-success.html";
  return false;
}
