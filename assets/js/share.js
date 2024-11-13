const shareButton = document.querySelector('.btn__share');

function fallbackShare() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    const text = encodeURIComponent('Confira essa página incrível!');
    
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${text}`;

    const fallbackDiv = document.createElement('div');
    fallbackDiv.innerHTML = `
        <p>Compartilhe via:</p>
        <a href="${fbUrl}" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="${twitterUrl}" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="${linkedinUrl}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    `;
    fallbackDiv.style.position = 'fixed';
    fallbackDiv.style.top = '50%';
    fallbackDiv.style.left = '50%';
    fallbackDiv.style.transform = 'translate(-50%, -50%)';
    fallbackDiv.style.background = 'white';
    fallbackDiv.style.padding = '20px';
    fallbackDiv.style.border = '1px solid black';

    document.body.appendChild(fallbackDiv);

    // Fechar o popup quando clicar fora dele
    document.addEventListener('click', function closePopup(e) {
        if (!fallbackDiv.contains(e.target) && e.target !== shareButton) {
            document.body.removeChild(fallbackDiv);
            document.removeEventListener('click', closePopup);
        }
    });
}

function showFeedback(message, isError = false) {
    const feedback = document.createElement('div');
    feedback.textContent = message;
    feedback.style.position = 'fixed';
    feedback.style.bottom = '20px';
    feedback.style.left = '50%';
    feedback.style.transform = 'translateX(-50%)';
    feedback.style.padding = '10px 20px';
    feedback.style.borderRadius = '5px';
    feedback.style.backgroundColor = isError ? '#ff4444' : '#44ff44';
    feedback.style.color = 'white';
    document.body.appendChild(feedback);

    setTimeout(() => {
        document.body.removeChild(feedback);
    }, 3000);
}

shareButton.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            text: `Confira esta página incrível: ${document.title}`,
            url: window.location.href
        }).then(() => {
            showFeedback('Compartilhado com sucesso!');
        }).catch((error) => {
            console.error('Erro ao compartilhar:', error);
            if (error.name === 'AbortError') {
                showFeedback('Compartilhamento cancelado', true);
            } else {
                showFeedback('Erro ao compartilhar. Tente novamente.', true);
            }
        });
    } else {
        fallbackShare();
    }
});