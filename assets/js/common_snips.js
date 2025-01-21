// Function to load external HTML content into a specified element
function loadHTML(file, elementId) {
  fetch(file)
    .then((response) => {
      if (response.ok) {
        return response.text();
      } else {
        return ""; // Fallback: return empty content if fetch fails
      }
    })
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    });
}

// Load header and footer from the 'snips' folder
document.addEventListener("DOMContentLoaded", () => {
  loadHTML("snips/header.html", "header");
  loadHTML("snips/footer.html", "footer");
});
