let slideIndex = 0;
let quantity = 1;

function openNav() {
    document.getElementById("mySidenav").style.width = "30%";
    document.getElementById("overlay").style.display = "block";
    showSlides(slideIndex);
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("overlay").style.display = "none";
}

function showSlides(index) {
    const slides = document.querySelectorAll('.slides img');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    const offset = -slideIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function moveSlide(n) {
    showSlides(slideIndex + n);
}

function changeQuantity(n) {
    quantity = Math.max(1, quantity + n);
    document.getElementById('quantity').textContent = quantity;
}
