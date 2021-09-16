// ===========================================
// Adding an image carousel in the gallery on the Beachstays home page
// ===========================================

// Selecting the navigation arrows
const arrows = document.querySelectorAll('.arrow');

// Add an event listener to the navigation arrows to allow for the updating of the shown images 
// I wanted to add the same listener to each arrow but slightly tweaked so I used a forEach to apply the same logic to both
arrows.forEach((arrow) => {
    arrow.addEventListener('click', function () {
        
        // A disable timeout so the carousel buttons are not spammed
        this.disabled = true;
        setTimeout(() => {
            this.disabled = false;
        }, 500);

        // getting the direction based on whichever button is pretty
        const direction = this.classList[0].replace('Arrow', '');
        movePics(direction);
    });
});

// Function to find which of the current image containers is active and visible in the carousel
const getActive = () => {
    const galleryImages = document.getElementsByClassName('galleryImage');

    // forEach apparently does not work for a Nodelist
    for (image of galleryImages) {
        if (image.classList[2] === 'active') {
            return image.classList[1].replace('image', '');
        }
    }
};

const movePics = (direction) => {
    // getting active index
    const active = parseInt(getActive());

    // getting the selector for the active image
    const activeImage = document.querySelector(`.image${active}`);
    const activeCircle = document.querySelector(`.circle${active}`);

    if (direction === 'left') {
        // Only if the carousel is not all the way to the left already
        if (active !== 1) {
            // getting the selector for the previous (left) image and tracker circle
            const prevImage = document.querySelector(`.image${active - 1}`);
            const prevCircle = document.querySelector(`.circle${active - 1}`);

            activeImage.classList.toggle('active');
            activeImage.classList.toggle('right');
            activeCircle.classList.toggle('fas');
            activeCircle.classList.toggle('far');

            // with this logic the prevImage and prevCircle will always be 'left' of the active
            prevImage.classList.toggle('active');
            prevImage.classList.toggle('left');
            prevCircle.classList.toggle('fas');
            prevCircle.classList.toggle('far');

        }
    } else if (direction = 'right') {
        // Only if the carousel is not all the way to the right already
        if (active !== 5) {
            // getting the selector for the next (right) image and tracker circle
            const nextImage = document.querySelector(`.image${active + 1}`);
            const nextCircle = document.querySelector(`.circle${active + 1}`);

            activeImage.classList.toggle('active');
            activeImage.classList.toggle('left');
            activeCircle.classList.toggle('fas');
            activeCircle.classList.toggle('far');

            // with this logic the nextImage and nextCircle will always be 'right' of the active
            nextImage.classList.toggle('active');
            nextImage.classList.toggle('right');
            nextCircle.classList.toggle('fas');
            nextCircle.classList.toggle('far');
        }
    }
    
    

};