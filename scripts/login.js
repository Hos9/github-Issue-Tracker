// Login Button
document.getElementById("login-btn").addEventListener("click", () => {
  const userName = document.getElementById("input-username").value;
  const password = document.getElementById("input-pw").value;

  // console.log(document.getElementById("login-btn"));

  if (userName == "admin" && password == "admin123") {
    // alert("Login Success");
    window.location.assign("./all.html");
  } else {
    alert("Login Failed!! Username or Password not matched!!");
    return;
  }
});

// All Issue
