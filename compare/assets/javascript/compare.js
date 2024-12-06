const range = document.getElementById("range");

range.addEventListener("input", () => {
  console.log(range.value);
  document.body.style.setProperty("--position", range.value + "%");
});
