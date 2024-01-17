// --- Super Caroussel ---

// images array

let imageArray = ["https://upload.wikimedia.org/wikipedia/commons/a/a0/Great_Pyramid_of_Giza.jpg", "https://upload.wikimedia.org/wikipedia/commons/9/9e/Kukulcan%2C_Chich%C3%A9n_Itz%C3%A1.jpg", "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg"]
let firstImage = document.querySelector(".imageOne");
let secondImage = document.querySelector(".imageTwo");
let thirdImage = document.querySelector(".imageThree");

firstImage.src = imageArray[0];
secondImage.src = imageArray[1];
thirdImage.src = imageArray[2];

// function to make the images turn left or right

function switchLeft() {
    rotateImgLeft(firstImage);
    rotateImgLeft(secondImage);
    rotateImgLeft(thirdImage);
}
function switchRight(){
    rotateImgRight(firstImage);
    rotateImgRight(secondImage);
    rotateImgRight(thirdImage);
}

// function to assign the good image (from the array) to the good container when click

function rotateImgLeft(imageNumber, ){
    let currentIndex = imageArray.indexOf(imageNumber.src);
    imageNumber.src = imageArray[(currentIndex + 1 + imageArray.length) % imageArray.length];
}
function rotateImgRight(imageNumber){
    let currentIndex = imageArray.indexOf(imageNumber.src);
    imageNumber.src = imageArray[(currentIndex - 1 + imageArray.length) % imageArray.length];
}

