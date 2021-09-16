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
    // forEach apparently does not work for a Nodelist
    for (image of document.getElementsByClassName('galleryImage')) {
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
    
    if (direction === 'left') {
        // Only if the carousel is not all the way to the left already
        if (active !== 1) {
            // getting the selector for the previous (left) image
            const prevImage = document.querySelector(`.image${active - 1}`);
            activeImage.classList.toggle('active');
            activeImage.classList.toggle('right');
            // with this logic the prevImage will always be 'left' of the active
            prevImage.classList.toggle('active');
            prevImage.classList.toggle('left');
            
        }
    } else if (direction = 'right') {
        // Only if the carousel is not all the way to the right already
        if (active !== 5) {
            // getting the selector for the next (right) image
            const nextImage = document.querySelector(`.image${active + 1}`);
            activeImage.classList.toggle('active');
            activeImage.classList.toggle('left');
            // with this logic the prevImage will always be 'left' of the active
            nextImage.classList.toggle('active');
            nextImage.classList.toggle('right');
        }
    }
    
    

};