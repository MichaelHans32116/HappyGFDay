document.addEventListener('DOMContentLoaded', function() {
    // Greeting Text
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = 'Happy (Future) GF Day!';

    // Falling Flowers
    const flowersContainer = document.querySelector('.flowers');
    const numberOfFlowers = 20;
    for (let i = 0; i < numberOfFlowers; i++) {
        let flower = document.createElement('div');
        flower.className = 'flower';
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.animationDelay = Math.random() * 10 + 's';
        flower.style.animationDuration = 5 + Math.random() * 5 + 's';
        flowersContainer.appendChild(flower);
    }

    // --- NEW: Floating "Us" Picture ---
    const floatingUsContainer = document.querySelector('.floating-us-container');
    const numberOfFloatingPics = 3; // How many copies of the pic will float around
    const usPicSrc = 'pic6.jpg'; // The filename of your special picture

    for (let i = 0; i < numberOfFloatingPics; i++) {
        let pic = document.createElement('img');
        pic.src = usPicSrc;
        pic.className = 'floating-pic';
        
        // Randomize starting position and animation delays for a more natural effect
        pic.style.left = Math.random() * 85 + 'vw'; // Random horizontal start
        pic.style.animationDelay = Math.random() * 15 + 's'; // Random start time
        pic.style.animationDuration = 10 + Math.random() * 10 + 's'; // Random duration
        
        floatingUsContainer.appendChild(pic);
    }


    // Image Carousel
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        const slides = document.getElementsByClassName("carousel-slide");
        const dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 4000);
    }
});