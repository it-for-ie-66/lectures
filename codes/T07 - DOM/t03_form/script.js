const fname = document.getElementById("id-fname");
// const lname = document.getElementById("id-lname");
const h1 = document.querySelector("h1");

fname.addEventListener("input", (e) => {
  //   console.log(e.target.value);
  const text = e.target.value;
  if (text) {
    h1.textContent = e.target.value;
  } else {
    h1.textContent = "Enter Your Name";
  }
});

// lname.addEventListener("input", (e) => {
//   //   console.log(e.target.value);
//   h1.textContent = fname.value + " " + e.target.value;
// });
