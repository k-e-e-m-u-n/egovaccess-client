const imageArray = [
    {
        name: "First Image",
        src: "../../IMAGES/black-man-sitting-cafe-drinking-coffee.jpg"
    },
    {
        name: "Second Image",
        src: "../../IMAGES/man with flag.jpeg"
    },
    {
        name: "Third Image",
        src: "../../IMAGES/girlUp.jpeg"
    }
],
bgImage = document.querySelector(".side-img");

let currentImage = -1;

setInterval(() => {
    currentImage++;

    if (currentImage > 2) {
        currentImage = 0;
    }

    bgImage.src = imageArray[currentImage].src;
    // bgImage.style.transition = "all 3s ease-in-out"
}, 3000)

