class CookieConsent {
    constructor(options = {}) {
        this.options = {
            message: options.message || "Este site utiliza cookies para melhorar sua experiência. Escolha suas preferências:",
            acceptAllButtonText: options.acceptAllButtonText || "Aceitar todos",
            acceptNecessaryButtonText: options.acceptNecessaryButtonText || "Apenas necessários",
            rejectAllButtonText: options.rejectAllButtonText || "Não aceitar",
            learnMoreText: options.learnMoreText || "Política de Cookies",
            learnMoreLink: options.learnMoreLink || "/politica-de-cookies",
            cookieName: options.cookieName || "cookieConsent",
            cookieExpiration: options.cookieExpiration || 365
        };
        this.init();
    }

    init() {
        const consent = this.getCookie(this.options.cookieName);
        if (!consent) {
            // Se não houver consentimento, definir como 'all' por padrão
            this.setCookie(this.options.cookieName, 'all', this.options.cookieExpiration);
            this.showBanner();
        }
    }

    showBanner() {
        const banner = document.createElement('div');
        banner.id = 'cookie-banner';
        banner.innerHTML = `
            <p>${this.options.message} 
                <a href="${this.options.learnMoreLink}" target="_blank">${this.options.learnMoreText}</a>
            </p>
            <div class="cookie-buttons">
                <button id="accept-all-cookies">${this.options.acceptAllButtonText}</button>
                <button id="accept-necessary-cookies">${this.options.acceptNecessaryButtonText}</button>
                <button id="reject-all-cookies">${this.options.rejectAllButtonText}</button>
            </div>
        `;
        document.body.appendChild(banner);
        document.getElementById('accept-all-cookies').addEventListener('click', () => this.acceptAllCookies());
        document.getElementById('accept-necessary-cookies').addEventListener('click', () => this.acceptNecessaryCookies());
        document.getElementById('reject-all-cookies').addEventListener('click', () => this.rejectAllCookies());
    }

    acceptAllCookies() {
        this.setCookie(this.options.cookieName, 'all', this.options.cookieExpiration);
        this.removeBanner();
    }

    acceptNecessaryCookies() {
        this.setCookie(this.options.cookieName, 'necessary', this.options.cookieExpiration);
        this.removeBanner();
    }

    rejectAllCookies() {
        this.setCookie(this.options.cookieName, 'none', this.options.cookieExpiration);
        this.removeBanner();
        console.log('Cookies não essenciais rejeitados');
    }

    removeBanner() {
        const banner = document.getElementById('cookie-banner');
        if (banner) {
            banner.remove();
        }
    }

    setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
}