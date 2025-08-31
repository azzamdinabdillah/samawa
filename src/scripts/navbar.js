// Get elements
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const closeDrawer = document.getElementById("close-drawer");
const mobileDrawer = document.getElementById("mobile-drawer");

// Function to open drawer
function openDrawer() {
  mobileDrawer.classList.remove("-translate-x-full");
  mobileDrawer.classList.add("translate-x-0");
  document.body.style.overflow = "hidden"; // Prevent scrolling when drawer is open
}

// Function to close drawer
function closeDrawerFunc() {
  mobileDrawer.classList.remove("translate-x-0");
  mobileDrawer.classList.add("-translate-x-full");
  document.body.style.overflow = ""; // Re-enable scrolling
}

// Add event listeners
mobileMenuToggle.addEventListener("click", openDrawer);
closeDrawer.addEventListener("click", closeDrawerFunc);

// Close drawer when clicking outside (optional)
document.addEventListener("click", (event) => {
  if (
    mobileDrawer.classList.contains("translate-x-0") &&
    !mobileDrawer.contains(event.target) &&
    !mobileMenuToggle.contains(event.target)
  ) {
    closeDrawerFunc();
  }
});
