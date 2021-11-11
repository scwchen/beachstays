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

// Function to find which of the current image containers is active and visible in the carousel
app.getActive = () => {
    const galleryImages = document.querySelectorAll('.gallery-image');

    let activeImage = 0;

    galleryImages.forEach((image, index) => {

        if (image.classList.contains('active')) {
            activeImage = index + 1;
        }
    });

    return activeImage;
};

app.movePics = (direction) => {
    // getting active index
    const active = parseInt(app.getActive());

    // getting the selector for the active image
    const activeImage = document.querySelector(`.image${active}`);
    const activeCircle = document.querySelector(`.circle${active}`);

    let nextImage = null;
    let nextCircle = null;

    if (direction === 'left') {
        nextImage = document.querySelector(`.image${active - 1}`);
        nextCircle = document.querySelector(`.circle${active - 1}`);

        if (active === 1) {
            nextImage = document.querySelector(`.image5`);
            nextCircle = document.querySelector(`.circle5`);
        }

    } else if (direction = 'right') {
        nextImage = document.querySelector(`.image${active + 1}`);
        nextCircle = document.querySelector(`.circle${active + 1}`);

        if (active === 5) {
            nextImage = document.querySelector(`.image1`);
            nextCircle = document.querySelector(`.circle1`);
        }
    }

    activeImage.classList.remove('active');
    nextImage.classList.add('active');
    activeCircle.classList.remove('fas');
    activeCircle.classList.add('far');
    nextCircle.classList.remove('far');
    nextCircle.classList.add('fas');
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