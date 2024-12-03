document.addEventListener('DOMContentLoaded', function () {
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

    let modal = function (modalClick) {
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
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Função para lidar com links de e-mail
    function handleEmailLink(e, email, subject, body) {
        e.preventDefault();
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Tenta abrir o cliente de e-mail
        window.location.href = mailtoLink;

        // Se não abrir em 1 segundo, tenta abrir em uma nova aba e exibe uma mensagem
        setTimeout(() => {
            if (!document.hasFocus()) {
                window.open(mailtoLink, '_blank');
                alert("Parece que você não tem um cliente de e-mail configurado. O link foi aberto em uma nova aba.");
            }
        }, 1000);
    }

    // CONTATO
    const contactPhone = document.querySelector('.contact_phone');
    if (contactPhone) {
        contactPhone.addEventListener('click', function (e) {
            e.preventDefault();
            window.open('https://wa.me/5591981237058', '_blank');
        });
    }

    const contactEmail = document.querySelector('.contact_email');
    if (contactEmail) {
        contactEmail.addEventListener('click', function (e) {
            handleEmailLink(e, 'contato@lucianasena.tech', 'Contato via Site', 'Olá, estou entrando em contato para tirar dúvidas.');
        });
    }

    const emailLink = document.querySelector('.email-link');
    if (emailLink) {
        emailLink.addEventListener('click', function (e) {
            handleEmailLink(e, 'contato@lucianasena.tech', 'Contato via Site', 'Olá, estou entrando em contato para tirar dúvidas.');
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        console.log("DOM carregado");
    
        const whatsappLinks = document.querySelectorAll('.whatsapp-link');
        console.log("Número de links encontrados:", whatsappLinks.length);
    
        whatsappLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                console.log("Link clicado");
                e.preventDefault(); // Previne o comportamento padrão do link
    
                const modelUrl = this.getAttribute('data-model-url');
                console.log("URL do modelo:", modelUrl);
    
                const message = encodeURIComponent(`Olá! Gostaria de comprar esse modelo: ${modelUrl}`);
                const whatsappLink = `https://wa.me/5591981237058?text=${message}`;
    
                console.log("Link do WhatsApp gerado:", whatsappLink);
    
                // Tenta abrir o link do WhatsApp em uma nova aba
                const newWindow = window.open(whatsappLink, '_blank', 'noopener,noreferrer');
    
                // Se window.open falhar (por exemplo, bloqueado por pop-up), redireciona na mesma aba
                if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
                    console.log("Falha ao abrir nova aba, redirecionando na mesma aba");
                    window.location.href = whatsappLink;
                }
            });
        });
    });

// Adicione aqui outras funções JavaScript que você possa ter

    /* ========== Acessibilidade ========== */
    // document.addEventListener('DOMContentLoaded', function () {
    //     const accessibilityPanel = document.getElementById('accessibility-panel');
    //     const accessibilityToggle = document.getElementById('accessibility-toggle');
    //     const accessibilityOptions = document.getElementById('accessibility-options');
    //     const contrastToggle = document.getElementById('contrast-toggle');
    //     const fontIncrease = document.getElementById('font-increase');
    //     const fontDecrease = document.getElementById('font-decrease');
    //     const darkModeToggle = document.getElementById('dark-mode-toggle');

    //     let fontSize = 16;

    // Função para salvar preferências no localStorage
    // function savePreference(key, value) {
    //     localStorage.setItem(key, value);
    // }

    // Função para carregar preferências do localStorage
    // function loadPreference(key, defaultValue) {
    //     return localStorage.getItem(key) || defaultValue;
    // }

    // Carregar preferências salvas
    // document.body.classList.toggle('high-contrast', loadPreference('highContrast', 'false') === 'true');
    // document.body.classList.toggle('dark-mode', loadPreference('darkMode', 'false') === 'true');
    // fontSize = parseInt(loadPreference('fontSize', '16'));
    // document.body.style.fontSize = fontSize + 'px';

    // accessibilityToggle.addEventListener('click', function (event) {
    //     event.stopPropagation();
    //     accessibilityOptions.classList.toggle('hidden');
    // });

    // contrastToggle.addEventListener('click', function () {
    //     document.body.classList.toggle('high-contrast');
    //     savePreference('highContrast', document.body.classList.contains('high-contrast'));
    // });

    // fontIncrease.addEventListener('click', function () {
    //     fontSize = Math.min(fontSize + 2, 24);
    //     document.body.style.fontSize = fontSize + 'px';
    //     savePreference('fontSize', fontSize);
    // });

    // fontDecrease.addEventListener('click', function () {
    //     fontSize = Math.max(fontSize - 2, 12);
    //     document.body.style.fontSize = fontSize + 'px';
    //     savePreference('fontSize', fontSize);
    // });

    // darkModeToggle.addEventListener('click', function () {
    //     document.body.classList.toggle('dark-mode');
    //     savePreference('darkMode', document.body.classList.contains('dark-mode'));
    // });

    // Fechar o painel quando clicar fora dele
    // document.addEventListener('click', function (event) {
    //     if (!accessibilityPanel.contains(event.target) && !accessibilityOptions.classList.contains('hidden')) {
    //         accessibilityOptions.classList.add('hidden');
    //     }
    // });

    // Prevenir que cliques dentro do painel o fechem
    //     accessibilityOptions.addEventListener('click', function (event) {
    //         event.stopPropagation();
    //     });

    //     console.log('Acessibilidade inicializada');
    // });
    // JavaScript para gerenciar o consentimento de cookies
    //   function checkCookieConsent() {
    //     if (!localStorage.getItem('cookieConsent')) {
    //       document.getElementById('cookie-banner').style.display = 'block';
    //     }
    //   }

    //   function acceptCookies() {
    //     localStorage.setItem('cookieConsent', 'true');
    //     document.getElementById('cookie-banner').style.display = 'none';
    //   }

    //   window.onload = checkCookieConsent;

});


