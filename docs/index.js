const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("animate-slide-down");
});
///search
  document.getElementById("search-btn").addEventListener("click", function () {
    document.getElementById("search-container").classList.toggle("scale-100");
    document.getElementById("search-container").classList.toggle("scale-0");
  });

  document.addEventListener("click", function (event) {
    const container = document.getElementById("search-container");
    const button = document.getElementById("search-btn");
    const searchInput = document.getElementById("search");

    if (
      !container.contains(event.target) &&
      !button.contains(event.target) &&
      container.classList.contains("scale-100")
    ) {
      container.classList.remove("scale-100");
      container.classList.add("scale-0");
    }
  });
  ///login / signup 

  document.addEventListener("DOMContentLoaded", function() {
    const flipContainer = document.querySelector(".flip-container");
    const blurBackground = document.createElement("div");
    blurBackground.className = "fixed inset-0 bg-gray-900 bg-opacity-50 z-10 hidden";
    document.body.appendChild(blurBackground);

    function showPopup() {
      flipContainer.classList.remove("hidden");
      blurBackground.classList.remove("hidden");
    }

    function hidePopup() {
      flipContainer.classList.add("hidden");
      blurBackground.classList.add("hidden");
      blurBackground.classList.add("blur");
    }

    setInterval(showPopup, 10000); // Show popup every 10 seconds

    document.getElementById("switch-to-signup").addEventListener("click", function() {
      flipContainer.querySelector(".flip-card-inner").classList.add("flipped");
    });

    document.getElementById("switch-to-login").addEventListener("click", function() {
      flipContainer.querySelector(".flip-card-inner").classList.remove("flipped");
    });

    blurBackground.addEventListener("click", hidePopup);
  });

///forward to nextpage
 function searchColleges() {
   const searchInput = document
     .getElementById("search")
     .value.trim()
     .toLowerCase();
   if (searchInput) {
     window.location.href = `testing.html?key=${searchInput}`;
     document.getElementById("search").value = "";
   }
 }

 function handleKeyPress(event) {
   if (event.key === "Enter") {
     searchColleges();
   }
 }
