const pass = document.getElementById("id-pass");
const h1 = document.querySelector("h1");

pass.addEventListener("input", (e) => {
  //   console.log(e.target.value);
  const text = e.target.value;
  if (text === "1234") {
    h1.textContent = "You know my password, great job.";
  } else if (text === "") {
    h1.textContent = "My Super Secret";
  } else {
    h1.textContent = "Wrong Password";
  }
});
