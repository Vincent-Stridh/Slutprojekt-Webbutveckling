document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const links = document.getElementById("links");
  const allLinks = document.querySelectorAll("#links a");

  if (!burger || !links) {
    console.warn("Burger or links not found");
    return;
  }

  burger.addEventListener("click", () => {
    links.classList.toggle("active");
  });

  allLinks.forEach(link => {
    link.addEventListener("click", () => {
      links.classList.remove("active");
    });
  });

  console.log("Navbar script loaded");
});