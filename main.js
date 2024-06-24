import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper", {
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  nav: false,
});

import Lenis from "lenis";

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  // console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

AOS.init();

// function isElementInViewport(el) {
//   const rect = el.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// // Usage
// const element = document.getElementById("heritage-line-container");
// let elementAdded = false;

// window.addEventListener("scroll", () => {
//   if (isElementInViewport(element)) {
//     if (!elementAdded) {
//       const container = document.getElementById("heritage-line-container");
//       if (isElementInViewport(container)) {
//         // Create the div element
//         const heritageLine = document.createElement("div");

//         // Add classes to the element
//         heritageLine.classList.add(
//           "h-px",
//           "w-full",
//           "absolute",
//           "left-0",
//           "bg-primary",
//           // "initial-width",
//           "increase-width"
//         );

//         // Set the ID attribute
//         heritageLine.id = "heritage-line";

//         // Append the element to the desired parent element
//         container.appendChild(heritageLine);

//         // Set the flag to true to prevent further additions
//         elementAdded = true;
//       } else {
//         console.log("Element is not in the viewport.");
//       }
//     }
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".accordion-button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const panel = document.querySelector(this.dataset.accordionTarget);

      // Toggle the panel
      if (panel.classList.contains("hidden")) {
        panel.classList.remove("hidden");
        this.classList.add("active");
      } else {
        panel.classList.add("hidden");
        this.classList.remove("active");
      }
    });
  });
});
