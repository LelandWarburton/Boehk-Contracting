document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll(".gallery-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    galleryItems.forEach(img => {
        img.addEventListener("click", function() {
            lightbox.style.display = "flex";
            lightboxImg.src = this.src;
        });
    });

    document.querySelector(".close").addEventListener("click", function() {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function(event) {
        if (event.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the hamburger button and the navigation menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    // Check if the elements exist
    if (mobileMenuBtn && navMenu) {
        // Toggle the active class when the hamburger button is clicked
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');  // Show or hide the navigation menu
            mobileMenuBtn.classList.toggle('active');  // Toggle the hamburger animation
        });
    } else {
        console.error('Menu button or navigation menu not found!');
    }
});
