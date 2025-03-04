document.addEventListener("DOMContentLoaded", function () {
    // Get current page URL
    let currentPage = window.location.pathname.split("/").pop();

    // Get all nav links
    let navLinks = document.querySelectorAll(".top-header nav ul li a");

    navLinks.forEach(link => {
        // Extract href from link
        let linkPage = link.getAttribute("href").split("/").pop();

        // Check if link matches current page
        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
});

