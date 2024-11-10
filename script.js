// Get elements
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

// Toggle sidebar visibility
menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

