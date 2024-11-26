// Smooth Scroll for Anchors (for easier navigation in sections)
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Dynamic photo gallery click event to enlarge images
const pictureBox = document.querySelector('.picture-box img');
document.querySelectorAll('.pictures-grid img').forEach(image => {
    image.addEventListener('click', function() {
        // Get the clicked image source
        const newSrc = this.getAttribute('src');
        pictureBox.setAttribute('src', newSrc);
    });
});

// Hover effect for footer buttons to change color
const footerButtons = document.querySelectorAll('.footer-box button');
footerButtons.forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.color = '#3c2f2f';
    });

    button.addEventListener('mouseout', function() {
        this.style.color = '#854442';
    });
});

// Change Footer Text Content Dynamically (Optional)
const footerText = document.querySelector('.footer-text');
footerText.addEventListener('click', function() {
    this.textContent = "Thank you for visiting my site!";
});
