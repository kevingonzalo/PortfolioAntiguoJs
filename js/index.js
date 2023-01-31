// menu bar
document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".list").classList.toggle("active");
});

//  scroll efect
ScrollReveal().reveal(".section1", { delay: 250 });
ScrollReveal().reveal(".section2", { delay: 250 });
ScrollReveal().reveal(".section3", { delay: 375 });
ScrollReveal().reveal(".section4", { delay: 250 });
ScrollReveal().reveal(".section5,.redes", { delay: 250 });

