const express = require('express');
const fs = require('fs');
const port = 3000;

const app = express();

app.use(express.static("."))

let totalViews = 0; 

// let loginForm = document.getElementById("loginForm");

// loginForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let username = document.getElementById("username");
//   let password = document.getElementById("password");

//   if (username.value == "" || password.value == "") {
//     alert("Ensure you input a value in both fields!");
//   } else {
//     // perform operation with form input
//     alert("This form has been successfully submitted!");
//     console.log(
//       `This form has a username of ${username.value} and password of ${password.value}`
//     );

//     username.value = "";
//     password.value = "";
//   }
// });

app.get('/', (req, res) => {
  totalViews++;
  let html = fs.readFileSync('/contact.html', 'utf8');
  html = html.replace('{{views}}', totalViews);
  res.send(html);
});

app.listen(port, () => {
    console.log("Server is Running");
  })
