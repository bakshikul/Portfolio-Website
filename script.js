const text = "Web Development!";
let index = 0;
const speed = 100; // typing speed in ms

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

window.addEventListener("load", () => {
    // reset typing on reload
    document.getElementById("typing").innerHTML = "";
    index = 0;
    typeWriter();
});

// image hover zoom
const image = document.getElementById('myImage');

if (image) {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
}

// scroll-to-top visibility
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});
