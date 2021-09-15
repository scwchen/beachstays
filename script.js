// Adding an image carousel in the gallery on the Beachstays home page

// Add navigation arrows
// perhaps with ::before and ::after pseudo elements
// grab other assets from the page assets to expand the number of photos in the carousel
// Since the shown images will have to change perhaps add the urls to an array in JS
// Or would it be easier to load them all at once and just display them off screen for load times?
// Add an event listener to the navigation arrows to allow for the updating of the shown images 

// Some test JS for the time being
let picsArray = [
    // added a couple of extra pics from the assets folder
    "./assets/beach-final-images/left-image.jpg",
    "./assets/beach-final-images/gallery-image1.jpg",
    "./assets/beach-final-images/gallery-image2.jpg",
    "./assets/beach-final-images/gallery-image3.jpg",
    "./assets/beach-final-images/right-image.jpg"];

const arrows = document.querySelectorAll('.arrow');

arrows[0].addEventListener('click', function () {
    getCenterImage().setAttribute('src', picsArray[3]);
});

arrows[1].addEventListener('click', function () {


    getCenterImage().setAttribute('src', picsArray[0]);
});

const getCenterImage = () => {
    return document.querySelector('.imageCenter img');
}

// function to shift the pics array and pass an index of the array to the src and alt for the appropriate image
    // it should also move the tracker left or right accordingly 

// const movePics = (direction) => {
//     if (direction === 'left') {
//         picsArray.unshift(picsArray.pop());
//     } else if (direction === 'right') {
//         picsArray.push(picsArray.shift());
//     }
//     console.log(picsArray);
// }