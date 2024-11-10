// Get elements
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

// Toggle sidebar visibility
menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Drag and Drop Functionality

// Allow drop on the target element
function allowDrop(event) {
  event.preventDefault();
}

// Handle drag start
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

// Handle drop on the tree
function drop(event) {
  event.preventDefault();
  const ornamentId = event.dataTransfer.getData("text");
  const ornament = document.getElementById(ornamentId);

  // Calculate position relative to the drop target
  const rect = event.target.getBoundingClientRect();
  const x = event.clientX - rect.left - ornament.offsetWidth / 2;
  const y = event.clientY - rect.top - ornament.offsetHeight / 2;

  ornament.style.left = `${x}px`;
  ornament.style.top = `${y}px`;
  ornament.classList.add('dropped');
  event.target.appendChild(ornament);
}

// Attach event listeners for tree and ornaments
document.querySelectorAll('.ornament').forEach(ornament => {
  ornament.setAttribute('draggable', 'true');
  ornament.addEventListener('dragstart', drag);
});

const tree = document.getElementById('tree');
tree.addEventListener('dragover', allowDrop);
tree.addEventListener('drop', drop);
