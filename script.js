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
    }
  }
});

// Handle "Add to My Tree" button click
addToTreeButton.addEventListener('click', () => {
  alert(`${selectedCharityName.textContent} added to your tree!`);
  // Code to add ornament to tree goes here
});

// Handle "Clear All" button click
clearAllButton.addEventListener('click', () => {
  // Code to clear all ornaments from tree goes here
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


