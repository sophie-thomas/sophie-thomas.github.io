document.addEventListener('DOMContentLoaded', function () {
// Navigation
//-- Navigation Dropdown Toggle
  // Selects the dropdown toggle button and navigation links
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownLinks = document.querySelector('.nav-links');

  // Toggles the visibility of the navigation links based on the aria-expanded attribute
  function toggleDropdown() {
    const toggleExpanded = dropdownToggle.getAttribute('aria-expanded') === 'true';
    dropdownLinks.style.display = toggleExpanded ? 'none' : 'grid';
    dropdownToggle.setAttribute('aria-expanded', !toggleExpanded);
  }

  // Adds an click event listener on the dropdown toggle button
  dropdownToggle.addEventListener('click', toggleDropdown);

  // Sets the visability of the dropdown toggle based on the window resize event listener
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 767) {
      dropdownLinks.style.display = 'block';
      dropdownToggle.setAttribute('aria-expanded', true);
    } else {
      dropdownLinks.style.display = 'none';
      dropdownToggle.setAttribute('aria-expanded', false);
    }
  });

  // Calls the resize event listener once to initially set the state based on the window width
  window.dispatchEvent(new Event('resize'));
  
//-- Dropdown Toggle Icon
// Selects the Dropdown Toggle Button
const toggleButton = document.querySelector('.dropdown-toggle');

if (toggleButton) {
  toggleButton.addEventListener('click', function () {
    // - Finds the icon element
    const dropdownToggleIcon = this.querySelector('.toggle-icon');

    // - Changes the icon based on the aria-expanded attribute
    const toggleExpanded = this.getAttribute('aria-expanded') === 'true';
    dropdownToggleIcon.textContent = toggleExpanded ? '\u2715' : '\u2630'; // ✕ (U+2715) AND ☰ (U+2630)
  });
}

//-- Navigation Active Link
  // Gets the current URL path and navigation items
  const path = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav-links a');

  // Loops through each nav item and checks if the link matches the current path
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href').split('/').pop();
    
    // -- Adds .active if path is not empty and matches the link path
    if (path && linkPath === path) {
      link.classList.add('active');
    }
  });
});