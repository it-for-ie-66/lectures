// const choice = "C";

// if (choice === "A") {
//   console.log("You chose A.");
// } else if (choice === "B") {
//   console.log("You chose B.");
// } else {
//   console.log("You chose something else.");
// }

// console.log(5 % 3);

// for (let i = 1; i < 100; i = i + 2) {
//   console.log(i);
// }

// for (let i = 0; i < 100; i++) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

console.log(cats);

for (const cat of cats) {
  console.log(cat);
}

cats.forEach((cat) => {
  console.log(cat + "s");
});

cats.forEach((item) => {
  console.log(item);
});
