// Select all dropdown buttons
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
  const button = dropdown.querySelector('.dropdown-btn');
  const conent = dropdown.querySelector('.dropdown-content');

  // Toggle the dropdown menu
  button.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click from bubbling up
    closeAllDropdowns(); // Close other dropdowns
    dropdown.classList.toggle('open');
  });
});

// Close dropdowns when clicking outside
document.addEventListener('click', () => {
  closeAllDropdowns();
});

// Function to close all open dropdowns
function closeAllDropdowns() {
  dropdowns.forEach((dropdown) => dropdown.classList.remove('open'));
}
