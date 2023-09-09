// Page title
const pageTitle = document.querySelector("#page-title");
//upper level nav links
const upperNavLinks = document.querySelectorAll(".nav-link-upper");

upperNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    //update the page title when changing top-menu items
    if (pageTitle.innerText !== link.innerText) {
      pageTitle.innerText = link.innerText;
    }
  });
});
