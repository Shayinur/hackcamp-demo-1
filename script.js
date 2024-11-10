// Get elements
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const causeList = document.getElementById('cause-list');
const charityList = document.getElementById('charity-list');
const charityTitle = document.getElementById('charity-title');
const charityItems = document.getElementById('charity-items');
const backButton = document.getElementById('back-button');
const charityDetails = document.getElementById('charity-details');
const selectedCharityName = document.getElementById('selected-charity-name');
const selectedCharityIcon = document.getElementById('selected-charity-icon');
const selectedCharityDescription = document.getElementById('selected-charity-description');
const addToTreeButton = document.getElementById('add-to-tree');
const clearAllButton = document.getElementById('clear-all');
const backToCharityListButton = document.getElementById('back-to-charity-list');
const overlayContainer = document.getElementById('overlay-container'); // Container for overlayed icons on the tree

// Toggle sidebar visibility
menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Define charity organizations with descriptions and icons
const charities = {
  'international-affairs': [
    { name: 'American Red Cross', description: 'Helps in disaster relief and emergency assistance.', icon: 'images/tartlet.png' },
    { name: 'World Vision', description: 'Supports children and families in poverty.', icon: 'images/leaf_angle.png' },
    { name: 'Doctors Without Borders', description: 'Provides medical aid in crisis regions.', icon: 'images/gift_#1.png' }
  ],
  'children-women': [
    { name: 'Save the Children', description: 'Works to improve children’s lives.', icon: 'images/leaf_angel.png' },
    { name: 'UNICEF', description: 'Supports the health and education of children.', icon: 'images/leaf_angel.png' },
    { name: 'Women for Women International', description: 'Empowers women in conflict zones.', icon: 'images/leaf_angel.png' }
  ]
  // Add more causes with charity details as needed
};

// Store the selected charity's icon URL
let currentCharityIconUrl = "";

// Handle cause click to show specific charities
causeList.addEventListener('click', (event) => {
  if (event.target && event.target.dataset.cause) {
    const cause = event.target.dataset.cause;
    if (charities[cause]) {
      causeList.classList.add('hidden');
      charityList.classList.remove('hidden');
      charityTitle.textContent = event.target.textContent;

      // Populate charity list with clickable items
      charityItems.innerHTML = charities[cause]
        .map((charity, index) => `<li data-index="${index}" data-cause="${cause}" class="charity-item">${charity.name}</li>`)
        .join('');
    }
  }
});

// Handle click on specific charity items to show detailed information
charityItems.addEventListener('click', (event) => {
  if (event.target && event.target.classList.contains('charity-item')) {
    const cause = event.target.dataset.cause;
    const index = event.target.dataset.index;

    if (cause && index !== undefined) {
      const charity = charities[cause][index];
      charityTitle.classList.add('hidden');
      charityItems.classList.add('hidden');
      charityDetails.classList.remove('hidden');

      // Display the selected charity's information
      selectedCharityName.textContent = charity.name;
      selectedCharityIcon.src = charity.icon;
      selectedCharityDescription.textContent = charity.description;

      // Store the icon URL for "Add to My Tree" functionality
      currentCharityIconUrl = charity.icon;
    }
  }
});

// Handle "Add to My Tree" button click
addToTreeButton.addEventListener('click', () => {
    if (currentCharityIconUrl) {
      const icon = document.createElement('img');
      icon.src = currentCharityIconUrl;
      icon.alt = "Charity icon";
      icon.style.position = 'absolute';
      icon.style.width = '50px'; // Adjust icon size if needed
      icon.style.height = '50px';
  
      // Get the overlay container dimensions
      const containerWidth = overlayContainer.offsetWidth;
      const containerHeight = overlayContainer.offsetHeight;
  
      // Calculate central placement area
      const centerX = containerWidth / 2;
      const centerY = containerHeight / 2;
  
      // Set randomX and randomY within a central range around the center of the container
      const rangeX = 0.3 * containerWidth; // Width range within 30% of container width
      const rangeY = 0.4 * containerHeight; // Height range within 40% of container height
  
      const randomX = centerX + Math.floor(Math.random() * rangeX - rangeX / 2);
      const randomY = centerY + Math.floor(Math.random() * rangeY - rangeY / 2);
  
      // Position the icon
      icon.style.left = `${randomX}px`;
      icon.style.top = `${randomY}px`;
  
      // Add icon to overlay container on top of the tree
      overlayContainer.appendChild(icon);
  
      alert(`${selectedCharityName.textContent} added to your tree!`);
    }
  });
  

// Handle "Clear All" button click to remove all icons from the tree
clearAllButton.addEventListener('click', () => {
  overlayContainer.innerHTML = ""; // Clear all icons from the overlay container
  alert("All ornaments cleared from your tree.");
});

// Handle back button click to return to charity list
backToCharityListButton.addEventListener('click', () => {
  charityDetails.classList.add('hidden');
  charityTitle.classList.remove('hidden');
  charityItems.classList.remove('hidden');
});

// Handle back button click to return to cause list
backButton.addEventListener('click', () => {
  causeList.classList.remove('hidden');
  charityList.classList.add('hidden');
});


