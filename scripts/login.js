// Login Button
document.getElementById("login-btn").addEventListener("click", () => {
  const userName = document.getElementById("input-username").value;
  console.log(userName);

  const password = document.getElementById("input-pw").value;
  console.log(password);

  if (userName == "admin" && password == "admin123") {
    localStorage.setItem("loggedInUser", userName);
    alert("Login Success");
    window.location.assign("./all.html");
  } else {
    alert(`
    Login Failed!!
    "Username" or "Password not matched!!
    `);
  }
});

// User Name
document.addEventListener("DOMContentLoaded", () => {
  const profileName = document.getElementById("profile-name");
  const userName = localStorage.getItem("loggedInUser");

  if (profileName && userName) {
    profileName.innerText = userName;
  } else if (profileName) {
    profileName.innerText = "Guest";
  }
});

// All Issue
