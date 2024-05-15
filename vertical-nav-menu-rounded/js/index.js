const nav = document.querySelectorAll("a");
const header = document.getElementById("header");
const navLinks = document.getElementById("navLinks");
nav.forEach((link) => {
  link.addEventListener("click", (event) => {
    let page = new URL(link.href).searchParams.get("page");
    activeLink(page, link);
    event.preventDefault();
  });
});
function activeLink(page, link) {
  let navPage = "Home";
  if (page != "home") {
    navPage += ` / ${page}`;
  }
  navLinks.innerHTML = navPage;
  header.innerHTML = page;
  document.getElementById("here").innerHTML = page;
  removeActiveLink();
  link.parentElement.classList.add("active");
}

function removeActiveLink() {
  nav.forEach((link) => {
    link.parentElement.classList.remove("active");
  });
}
