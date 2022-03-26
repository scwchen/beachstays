const app = {};

app.menuButton = document.querySelector('.menu-button');
app.menuOpen = false;

app.init = () => {

    app.addArrowEventListener();
    app.menuEventListener();
    app.menuItemEventListener();
};

// Add an event listener to the navigation arrows to allow for the updating of the shown images 
app.addArrowEventListener = () => {
    const arrows = document.querySelectorAll('.arrow');
    arrows.forEach((arrow) => {
        arrow.addEventListener('click', function () {

            // A disable timeout so the carousel buttons are not spammed
            this.disabled = true;
            setTimeout(() => {
                this.disabled = false;
            }, 250);

            // getting the direction based on whichever button is pressed
            const direction = this.classList[0].replace('-arrow', '');
            app.movePics(direction);
        });
    });
};

// ===========================================
// Function to find which of the current image containers is active and visible in the carousel
// ===========================================
// Looking back on this now, this is hilariously inefficient but a good reminder of how far I've come.

// app.getActive = () => {
//     const galleryImages = document.querySelectorAll('.gallery-image');

//     let activeImage = 0;

//     galleryImages.forEach((image, index) => {

//         if (image.classList.contains('active')) {
//             activeImage = index + 1;
//         }
//     });

//     return activeImage;
// };

app.movePics = (direction) => {
    // Carousel and Tracker elements
    const carousel = document.querySelector('.carousel-images');
    const carouselTracker = document.querySelector('.carousel-tracker')

    // Image and Circle nodelists
    const images = carousel.querySelectorAll('.gallery-image');
    const circles = carouselTracker.querySelectorAll('.fa-circle');

    // Getting the active image and circle
    const activeImage = carousel.querySelector('.active');
    const activeCircle = carouselTracker.querySelector('.fas');

    let nextImage, nextCircle;

    if (direction === 'left') {
        nextImage = activeImage.previousElementSibling;
        nextCircle = activeCircle.previousElementSibling;

        if (!nextImage) {
            nextImage = images[images.length - 1];
            nextCircle = circles[circles.length - 1];
        }

    } else if (direction === 'right') {
        nextImage = activeImage.nextElementSibling;
        nextCircle = activeCircle.nextElementSibling;

        if (!nextImage) {
            nextImage = images[0];
            nextCircle = circles[0];
        }
    }

    nextImage.classList.add('active');
    nextCircle.classList.add('fas');
    activeCircle.classList.add('far');

    activeImage.classList.remove('active');
    activeCircle.classList.remove('fas');
    nextCircle.classList.remove('far');

};

app.menuShow = () => {
    const headerNav = document.querySelector('.header-nav .nav-list')

    if (window.innerWidth <= 940) {
        if (!app.menuOpen) {
            app.menuButton.classList.add('open');
            app.menuButton.ariaLabel = "Menu Open";
            app.menuOpen = true;
            headerNav.style.maxHeight = `${headerNav.scrollHeight}px`;
        } else {
            app.menuButton.classList.remove('open');
            app.menuButton.ariaLabel = "Menu Closed";
            app.menuOpen = false;
            headerNav.style.maxHeight = null;
        }
    }

}

// Adding event listen to hide the menu when any of the nav list items are selected
app.menuItemEventListener = () => {
    const navList = document.querySelectorAll('.header-nav .nav-list a');
    navList.forEach((navItem) => {
        navItem.addEventListener('click', app.menuShow);
    });
}

// Adding event listener to the show menu on mobile
app.menuEventListener = () => {
    app.menuButton.addEventListener('click', app.menuShow);
}

// // Add blog submission listener
// app.submitCommentHandler = () => {
//     const submitComment = document.querySelector('.submit-comment');
//     submitComment.addEventListener('submit', {

//     });
// };

// // Add contact submission listener
// app.submitContactHandler = () => {
//     const submitContact = document.querySelector('.submit-contact');
//     submitContact.addEventListener('submit', {

//     });
// };

app.init();