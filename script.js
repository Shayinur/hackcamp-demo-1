// Get elements
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const causeList = document.getElementById('cause-list');
const charityList = document.getElementById('charity-list');
const charityTitle = document.getElementById('charity-title');
const charityItems = document.getElementById('charity-items');
const backButton = document.getElementById('back-button')
const tree = document.getElementById('tree-container');

// Toggle sidebar visibility
menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});


// Define charity organizations for each cause
const charities = {
    'international-affairs': ['American Red Cross', 'World Vision', 'Doctors Without Borders'],
    'children-women': ['Save the Children', 'UNICEF', 'B.C. Children’s & Women’s Hospital'],
    'healthcare': ['Vancouver General Hospital', 'Canadian Mental Health Association', 'Canadian Cancer Society'],
    'animal-welfare': ['BCSPCA', 'Therapeutic Paws of Canada', 'World Wildlife Fund']
  };

// Handle cause click to show specific charities
causeList.addEventListener('click', (event) => {
    // Check if the clicked element has a data-cause attribute
    if (event.target && event.target.dataset.cause) {
      const cause = event.target.dataset.cause;
  
      // Ensure cause exists in the charities object
      if (charities[cause]) {
        // Hide the cause list and show the charity list
        causeList.classList.add('hidden');      // Hide cause list
        charityList.classList.remove('hidden'); // Show charity list 
        //charityList.classList.add('block');
  
        // Set the title to the selected cause
        charityTitle.textContent = event.target.textContent;
  
        // Populate the charity list with relevant organizations
        charityItems.innerHTML = charities[cause]
          .map((charity) => `<li>${charity}</li>`)
          .join('');
        
        console.log(`Charity list for ${cause}:`, charities[cause]); // Debugging log
      }
    }
  });

// Handle back button click
backButton.addEventListener('click', () => {
    // Show cause list and hide charity list
   causeList.classList.remove('hidden');
    charityList.classList.add('hidden');
  });

console.log(`Clicked on cause: ${cause}`);
console.log(`Charity list for ${cause}:`, charities[cause]);
