const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log("โอ้ย");
});

btn.addEventListener("dblclick", () => {
  console.log("โอ้ยโอ้ย");
});

btn.addEventListener("mouseover", () => {
  console.log("พี่ขาอย่าทับหนู");
});

btn.addEventListener("mouseout", () => {
  console.log("ขอบคุณที่ไม่ทับหนู");
});
