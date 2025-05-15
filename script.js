// change navbar styles on scroll

window.addEventListener('scroll', () => {
    //we want immediately when we scroll
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
});

// FAQ Toggle
const faqs = document.querySelectorAll('.faq');

// Loop through each FAQ
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        
        // Get the icon inside the clicked FAQ
        const faqIcon = faq.querySelector('.faq__icon i');

        // Change icon
        if (faqIcon.classList.contains('uil-plus')) {
            faqIcon.classList.replace('uil-plus', 'uil-minus');
        } else {
            faqIcon.classList.replace('uil-minus', 'uil-plus');
        }
    });
});

//Mobile Menu
const menu = document.querySelector(".nav__menu");
const openMenuBtn = document.querySelector("#open-menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

//check whether screen size > 768px
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    menu.style.display = "flex";
    openMenuBtn.style.display = "none";
    closeMenuBtn.style.display = "none";
  } else {
    menu.style.display = "none";
    openMenuBtn.style.display = "inline-block";
    closeMenuBtn.style.display = "none";
  }
});
openMenuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeMenuBtn.style.display = "inline-block";
    openMenuBtn.style.display = "none";
});


closeMenuBtn.addEventListener('click', () => {
    menu.style.display = "none";
    closeMenuBtn.style.display = "none";
    openMenuBtn.style.display = "inline-block";
});
