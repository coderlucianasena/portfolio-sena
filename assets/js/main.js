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

function togglePortfolioPopup () {
    document.querySelector('.portfolio__popup').classList.toggle('open');
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup)

/*====== Details ======*/

function portfolioItemDetails(portfolioItem) {
    // Seleciona a imagem
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector("img").src;

    // Seleciona o título
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;

    // Seleciona os detalhes
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}

// SWIPER TESTIMONIAL
// let swiper = new Swiper(".testimonials__container", {
//     spaceBetween: 24,
//     loop: true,
//     grabCursor: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//         576: {
//             slidesPerView: 2,
//         },
//         768: {
//             slidesPerView: 2,
//             spaceBetween: 48,
//         },
//     },
// });

// SCROLL SECTIONS ACTIVE LINK
// const sections = document.querySelectorAll("section[id]");

// window.addEventListener("scroll", navHighlighter);

// function navHighlighter() {
//     let scrollY = window.pageYOffset;

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight;
//         const sectionTop = current.offsetTop - 50,
//             sectionId = current.getAttribute("id");
//         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             document.querySelector(".nav li a[href*=" + sectionId + "]").classList.add("active-link")
//         }
//         else {
//             document.querySelector(".nav li a[href*=" + sectionId + "]").classList.remove("active-link")
//         }
//     })
// }

// SHOW SCROLL UP

