/*====== SHOW SIDEBAR ======*/
const navMenu = document.getElementById('sidebar'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*====== SIDEBAR SHOW ======*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-sidebar')
    })
}

/*====== SIDEBAR HIDDEN ======*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-sidebar')
    })
}

/*====== SKILLS TABS ======*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)

        tabContent.forEach(tabContents => {
            tabContents.classList.remove("skills__active")
        })

        target.classList.add('skills__active')

        tabs.forEach(t => {
            t.classList.remove("skills__active")
        })

        tab.classList.add('skills__active')
    })
})

/*====== MIXITUP FILTER PORTFOLIO ======*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    },
    load: {
        filter: 'all' // Inicialmente, exibe todos os itens
    }
});

// Adiciona funcionalidade de filtro ao clicar nos filtros
document.querySelectorAll('.portfolio__item').forEach((filterBtn) => {
    filterBtn.addEventListener('click', function () {
        let filterValue = this.getAttribute('data-filter');
        mixerPortfolio.filter(filterValue);
    });
});

/*====== Link Active Work ======*/
const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach(l => l.addEventListener('click', activeWork));

/*====== Work Popup ======*/
document.addEventListener("click", (e) => {
    if (e.target.classList.contains('work__button')) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
});

function togglePortfolioPopup() {
    document.querySelector('.portfolio__popup').classList.toggle('open');
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup)

/*====== Details ======*/

function portfolioItemDetails(portfolioItem) {
    // Seleciona a imagem
    const imgSrc = portfolioItem.querySelector("img").src;
    document.querySelector(".pp__thumbnail img").src = imgSrc;

    // Seleciona o título
    const title = portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = title;

    // Seleciona os detalhes
    const details = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = details;
}

// Serviços Modal
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        });
    });
});

// SWIPER TESTIMONIAL
let swiper = new Swiper(".testimonials__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
    },
});

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav li a[href*=" + sectionId + "]").classList.add("active-link")
        }
        else {
            document.querySelector(".nav li a[href*=" + sectionId + "]").classList.remove("active-link")
        }
    })
}

// SHOW SCROLL UP
document.addEventListener('DOMContentLoaded', function() {
    var scrollTopBtn = document.getElementById("scrollTopBtn");

    // Quando o usuário rolar a página por 20px do topo, mostre o botão
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    }

    // Quando o usuário clicar no botão, role instantaneamente para o topo da página
    scrollTopBtn.onclick = function() {
        window.scrollTo(0, 0);
    }
});


// CONTATO
document.querySelector('.contact_phone').addEventListener('click', function(e) {
    e.preventDefault();
    window.open('https://wa.me/5591981237058', '_blank');
});