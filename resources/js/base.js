document.addEventListener('DOMContentLoaded', function () {
// Navigation
//-- Navigation Dropdown Toggle
  // Select the dropdown toggle button and dropdown content
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownContent = document.querySelector('.dropdown-content');

  // Function to toggle the visibility of the dropdown content by checking if it is currently expanded
  function toggleDropdown() {
    const isExpanded = dropdownToggle.getAttribute('aria-expanded') === 'true';
    dropdownContent.style.display = isExpanded ? 'none' : 'grid';
    dropdownToggle.setAttribute('aria-expanded', !isExpanded);
  }

  // Event listener for click on the dropdown toggle button
  dropdownToggle.addEventListener('click', toggleDropdown);

  // Event listener for window resize to set the visability of the dropdown toggle
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 991) {
      dropdownContent.style.display = 'block';
      dropdownToggle.setAttribute('aria-expanded', true);
    } else {
      dropdownContent.style.display = 'none';
      dropdownToggle.setAttribute('aria-expanded', false);
    }
  });

  // Call the resize event listener once to initially set the state based on the window width
  window.dispatchEvent(new Event('resize'));

//-- Navigation Active Link
  // Gets the current URL path and navigation items
  const path = window.location.pathname.split('/').pop();
  const navItems = document.querySelectorAll('.dropdown-content a');

  // Loop through each nav item and checks if the link matches the current path
  navItems.forEach(link => {
    if (link.getAttribute('href').split('/').pop() === path) {
      link.classList.add('active');
    }
  });
});