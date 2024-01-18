let imageArray = ["https://upload.wikimedia.org/wikipedia/commons/a/a0/Great_Pyramid_of_Giza.jpg", "https://upload.wikimedia.org/wikipedia/commons/9/9e/Kukulcan%2C_Chich%C3%A9n_Itz%C3%A1.jpg", "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg"];
let imagesContainer = document.querySelector(".imagesContainer");
let position = 0;

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
}