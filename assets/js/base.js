// Navigation dropdown menu
document.addEventListener('DOMContentLoaded', function () {
  // Select the dropdown toggle button and dropdown content
  var dropdownToggle = document.querySelector('.dropdown-toggle');
  var dropdownContent = document.querySelector('.dropdown-content');

  // Function to toggle the visibility of the dropdown content
  function toggleDropdown() {
    // Check if the dropdown is currently expanded
    var isExpanded = dropdownToggle.getAttribute('aria-expanded') === 'true';
    // Toggle to display the dropdown content
    dropdownContent.style.display = isExpanded ? 'none' : 'grid';
    // Toggle the aria-expanded attribute of the toggle button
    dropdownToggle.setAttribute('aria-expanded', !isExpanded);
  }

  // Event listener for click on the dropdown toggle button
  dropdownToggle.addEventListener('click', toggleDropdown);

  // Event listener for window resize
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 991) {
      dropdownContent.style.display = 'block';
      // Set the aria-expanded attribute of the toggle button to true
      dropdownToggle.setAttribute('aria-expanded', true);
    } else {
      dropdownContent.style.display = 'none';
      // Set the aria-expanded attribute of the toggle button to false
      dropdownToggle.setAttribute('aria-expanded', false);
    }
  });

  // Call the resize event listener once to initially set the state based on the window width
  window.dispatchEvent(new Event('resize'));
});