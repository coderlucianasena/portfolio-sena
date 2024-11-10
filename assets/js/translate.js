const langEn = document.getElementById('lang-en');
const langPt = document.getElementById('lang-pt');
const elementsToTranslate = document.querySelectorAll('[data-lang]');

// elementsToTranslate.forEach(element => {
//     const key = element.getAttribute('data-lang');
//     element.innerHTML = translations[lang][key]; // Usar innerHTML para interpretar o <br>
// });


const translations = {
    en: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        work: 'Work',
        services: 'Services',
        contact: 'Contact',
        follow: 'Follow Me',
        hi: "Luciana Sena",
        front: 'Frontend developer',
        description: 'HTML | CSS | JS | REACT',
        user: 'More About Me',
        aboutme: 'About Me',
        intro: 'My Intro',
        journey: 'My Journey',
        abilities: 'My Skills',
        experience: 'My Experience',
        portfolio: 'My Portfolio',
        recentprojects: 'Recent Projects',
        offer: 'What I offer',
        testimonialDescription: 'This is a sample testimonial description in English.',
        clients: 'My clients say',
        getcontact: 'Get in touch',
        hii: "Hi, I'm Luciana Sena!",
        web: 'Web developer, with extensive knowledge and years of experience, working in web technologies and Ui / Ux design, delivering quality work.',
        years: '2 + Years',
        completed: 'Completed',
        projects: '20 + Projects',
        support: 'Support',
        online: 'Online 24/7',
        contactme: 'Contact Me',
        qualification: 'Qualification',
        myexperience: 'My Experience',
        frontend: 'Frontend Developer',
        design: 'Design',
        backend: 'Backend Developer',
        copyright: '© 2024 Luciana Sena. All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        followus: 'Follow Us',
        director: 'Director of a company',
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        Write: 'Write me'
    },
    pt: {
        home: 'Início',
        about: 'Sobre',
        skills: 'Habilidades',
        work: 'Trabalho',
        services: 'Serviços',
        contact: 'Contato',
        follow: 'Siga-me',
        hi: 'Luciana Sena',
        front: 'Desenvolvedora Frontend',
        description: 'HTML | CSS | JS | REACT',
        user: 'Mais Sobre Mim',
        aboutme: 'Sobre Mim',
        intro: 'Introdução',
        journey: 'Jornada',
        abilities: 'Habilidades',
        experience: 'Experiência',
        portfolio: 'Portfólio',
        recentprojects: 'Projetos Recentes',
        offer: 'O que eu ofereço',
        testimonialDescription: 'Esta é uma descrição de depoimento de exemplo em português.',
        clients: 'Depoimentos',
        getcontact: 'Entre em contato',
        hii: 'Olá, eu sou Luciana Sena!',
        web: 'Desenvolvedora web, com amplo conhecimento e anos de experiência, trabalhando em tecnologias web e design Ui / Ux, entregando trabalho de qualidade.',
        years: '2 + Anos',
        completed: 'Concluído',
        projects: '20 + Projetos',
        support: 'Suporte',
        online: 'Online 24/7',
        contactme: 'Contate-me',
        qualification: 'Qualificação',
        myexperience: 'Minha Experiência',
        frontend: 'Desenvolvedora Frontend',
        design: 'Design',
        backend: 'Desenvolvedora Backend',
        copyright: '© 2024 Luciana Sena. Todos os direitos reservados.',
        privacy: 'Política de Privacidade',
        terms: 'Termos de Serviço',
        followus: 'Siga-nos',
        director: 'Diretor de uma empresa',
        months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        Write: 'Entre em contato'
    }
};

function formatDate(dateString, lang) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = translations[lang].months[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
}

function setLanguage(lang) {
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = translations[lang][key];
    });

    // Atualizar datas formatadas
    document.querySelectorAll('.testimonial__date').forEach(element => {
        const originalDate = element.getAttribute('data-date');
        const formattedDate = formatDate(originalDate, lang);
        element.textContent = formattedDate;
    });

    document.body.classList.remove('lang-en', 'lang-pt');
    document.body.classList.add(`lang-${lang}`);

    // Atualizar a classe ativa no seletor de idioma
    if (lang === 'en') {
        langEn.classList.add('active');
        langPt.classList.remove('active');
    } else {
        langPt.classList.add('active');
        langEn.classList.remove('active');
    }
}

langPt.addEventListener('click', () => setLanguage('pt'));
langEn.addEventListener('click', () => setLanguage('en'));

// Set default language
setLanguage('pt');