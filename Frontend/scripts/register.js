//
let form = document.getElementById("formcontainer");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let payload = {
    full_name: document.getElementById("fullname").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    // account_name: document.getElementById("accountname").value,
  };

  fetch(`http://localhost:4000/user/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  })
  .then((res) => res.json())
  .then((res) => {
    if (res.msg != "Registration successful") {
      console.log(res.msg), alert(res.msg);
    } else {
      // localStorage.setItem("fname", res.fname);
      console.log(res.msg);
      // alert(res.msg);
      document.getElementById("gender").value = "";
      document.getElementById("first_name").value = "";
      document.getElementById("last_name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      window.location.href = "login.html";
    }
  })
  .catch((err) => console.log(err));
})