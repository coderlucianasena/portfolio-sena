/*====== SHOW SIDEBAR ======*/
document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.getElementById('sidebar'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');

    /*====== SIDEBAR SHOW ======*/
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            if (navMenu) navMenu.classList.add('show-sidebar');
        });
    }

    /*====== SIDEBAR HIDDEN ======*/
    if (navClose) {
        navClose.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('show-sidebar');
        });
    }

    /*====== SKILLS TABS ======*/
    const tabs = document.querySelectorAll('[data-target]'),
          tabContent = document.querySelectorAll('[data-content]');

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target);

            tabContent.forEach(tabContents => {
                tabContents.classList.remove("skills__active");
            });

            if (target) target.classList.add('skills__active');

            tabs.forEach(t => {
                t.classList.remove("skills__active");
            });

            tab.classList.add('skills__active');
        });
    });

    /*====== MIXITUP FILTER PORTFOLIO ======*/
    if (typeof mixitup !== 'undefined') {
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
    }

    /*====== Link Active Work ======*/
    const linkWork = document.querySelectorAll('.work__item');

    function activeWork() {
        linkWork.forEach(l => l.classList.remove('active-work'));
        this.classList.add('active-work');
    }

    linkWork.forEach(l => l.addEventListener('click', activeWork));

    /*====== Work Popup ======*/
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains('work__button') || e.target.closest('.work__button')) {
            togglePortfolioPopup();
            portfolioItemDetails(e.target.closest('.work__card'));
        }
    });

    function togglePortfolioPopup() {
        const popup = document.querySelector('.portfolio__popup');
        if (popup) popup.classList.toggle('open');
    }

    const popupClose = document.querySelector(".portfolio__popup-close");
    if (popupClose) {
        popupClose.addEventListener("click", togglePortfolioPopup);
    }

    /*====== Details ======*/
    function portfolioItemDetails(portfolioItem) {
        if (!portfolioItem) return;

        const popupImg = document.querySelector(".portfolio__popup-img");
        const detailsTitle = document.querySelector(".portfolio__popup-body .details__title");
        const detailsDescription = document.querySelector(".portfolio__popup-body .details__description");
        const detailsInfo = document.querySelector(".portfolio__popup-body .details__info");

        if (popupImg) popupImg.src = portfolioItem.querySelector("img").src;
        if (detailsTitle) detailsTitle.innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
        if (detailsDescription) detailsDescription.innerHTML = portfolioItem.querySelector(".details__description").innerHTML;
        if (detailsInfo) detailsInfo.innerHTML = portfolioItem.querySelector(".details__info").innerHTML;
    }

    // Serviços Modal
    const modalViews = document.querySelectorAll('.services__modal'),
          modalBtns = document.querySelectorAll('.services__button'),
          modalCloses = document.querySelectorAll('.services__modal-close');

    let modal = function(modalClick) {
        if (modalViews[modalClick]) modalViews[modalClick].classList.add('active-modal');
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
    if (typeof Swiper !== 'undefined') {
        new Swiper(".testimonials__container", {
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
    }

    // SCROLL SECTIONS ACTIVE LINK
    const sections = document.querySelectorAll("section[id]");

    function navHighlighter() {
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50,
                sectionId = current.getAttribute("id");
            
            const navLink = document.querySelector(".nav li a[href*=" + sectionId + "]");
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add("active-link");
                } else {
                    navLink.classList.remove("active-link");
                }
            }
        });
    }

    window.addEventListener("scroll", navHighlighter);

    // SHOW SCROLL UP
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    function scrollFunction() {
        if (scrollTopBtn) {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollTopBtn.style.display = "block";
            } else {
                scrollTopBtn.style.display = "none";
            }
        }
    }

    window.addEventListener('scroll', scrollFunction);

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
    }

    // CONTATO
    const contactPhone = document.querySelector('.contact_phone');
    if (contactPhone) {
        contactPhone.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://wa.me/5591981237058', '_blank');
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        const contactEmail = document.querySelector('.contact_email');
        if (contactEmail) {
            contactEmail.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'mailto:contato@lucianasena.tech';
            });
        }
    });

    document.querySelector('.contact_email').addEventListener('click', function(e) {
        e.preventDefault();
        window.open('mailto:contato@lucianasena.tech', '_blank');
    });

    document.addEventListener('DOMContentLoaded', function() {
        const emailLink = document.querySelector('.email-link');
        if (emailLink) {
            emailLink.addEventListener('click', function(e) {
                e.preventDefault();
                const email = 'contato@lucianasena.tech';
                const subject = 'Contato via Site';
                const body = 'Olá, gostaria de entrar em contato para tirar dúvidas.';
                
                const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                
                // Tenta abrir o cliente de e-mail
                window.location.href = mailtoLink;
                
                // Se não abrir em 1 segundo, tenta abrir em uma nova aba
                setTimeout(() => {
                    if (!document.hasFocus()) {
                        window.open(mailtoLink, '_blank');
                    }
                }, 1000);
            });
        }
    });
});