function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Usage
const element = document.getElementById("heritage-line-container");
const heritageLine = document.createElement("div");

// // Add classes to the element
// heritageLine.classList.add(

// );

// Set the ID attribute
heritageLine.id = "heritage-line";
heritageLine.classList.add("animate-line");

// Append the element to the desired parent element
const container = document.getElementById("heritage-line-container");

window.addEventListener("scroll", () => {
  if (isElementInViewport(element)) {
    // Create the div element

    container.appendChild(heritageLine);
  } else {
    // console.log("Element is not in the viewport.");
    container.removeChild(heritageLine);
  }
});
