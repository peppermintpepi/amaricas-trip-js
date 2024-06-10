// load-header-footer.js
function loadHTML(selector, file) {
    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error("Failed to load file");
        return response.text();
      })
      .then(data => {
        document.querySelector(selector).innerHTML = data;
      })
      .catch(error => console.error('Error loading HTML:', error));
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    loadHTML('header', 'header.html');
    loadHTML('footer', 'footer.html');
  });
  