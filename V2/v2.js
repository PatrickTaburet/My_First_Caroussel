let imageArray = ["https://upload.wikimedia.org/wikipedia/commons/a/a0/Great_Pyramid_of_Giza.jpg", "https://upload.wikimedia.org/wikipedia/commons/9/9e/Kukulcan%2C_Chich%C3%A9n_Itz%C3%A1.jpg", "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg"];
let imagesContainer = document.querySelector(".imagesContainer");
let position = 0;


let firstPoint = document.querySelector('#firstPosition');
let secondPoint = document.querySelector("#secondPosition");
let thirdPoint = document.querySelector("#thirdPosition");

firstPoint.src = "/IMG/icons-circle-empty.png";
secondPoint.src = "/IMG/icons-circle-full.png"
thirdPoint.src ="/IMG/icons-circle-empty.png"

document.querySelector(".imageOne").src = imageArray[0];
document.querySelector(".imageTwo").src = imageArray[1];
document.querySelector(".imageThree").src = imageArray[2];

// functions will modifie the css properties (transform, translate) of the class
//  "translate" when a button is clicked, depending on its position.



function slideToRight(){
    if (position == 0){
        imagesContainer.style.setProperty('transform', 'translate(500px)');
    } else if (position == -1){
        imagesContainer.style.setProperty('transform', 'none');
    }
    
    // increment position if slider is 0 or -1
    (position == 0) ? position ++ : (position == -1) ?  position ++ : undefined;
    console.log(position);
    navBarStyle()
}

function slideToLeft(){
    
    if (position == 0){
        imagesContainer.style.setProperty('transform', 'translate(-500px)');
    } else if (position == 1){
        imagesContainer.style.setProperty('transform', 'none');
    }
    
    // decrement position if slider is 0 or -1
    (position == 0) ? position -- : (position == 1) ?  position -- : undefined;

    console.log(position);
    navBarStyle()
}

Change blue dot image position, 

function navBarStyle(){
    let imageSources = ['/IMG/icons-circle-empty.png', '/IMG/icons-circle-full.png'];
    if (position == 0){
        secondPoint.src = imageSources[1];
        firstPoint.src = imageSources[0];
        thirdPoint.src = imageSources[0];
    } else if (position == 1) {
        firstPoint.src = imageSources[1];
        secondPoint.src = imageSources[0];
        thirdPoint.src = imageSources[0];
    } else if (position == -1){
        thirdPoint.src = imageSources[1];
        firstPoint.src = imageSources[0];
        secondPoint.src = imageSources[0];
    } 
}

    // change position of the slider when click on buttons navBar

secondPoint.addEventListener("click", function(e) {
    if (position == 1){
        slideToLeft();
    } else if (position == -1){
        slideToRight();
    }
});
firstPoint.addEventListener("click", function(e) {
    if (position == 0){
        slideToRight();
    }else if (position ==  -1){
        slideToRight(); 
        slideToRight();
    }
});
thirdPoint.addEventListener("click", function(e) {
    if (position == 0){
        slideToLeft();
    } else if (position ==  1){
        slideToLeft();
        slideToLeft();
    }
});
