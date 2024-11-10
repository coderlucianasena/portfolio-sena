const shareButton = document.querySelector('.btn__share');

shareButton.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            text: 'Confira essa página incrível!',
            url: window.location.href
        }).then(() => {
            console.log('Compartilhado com sucesso');
        }).catch((error) => {
            console.error('Erro ao compartilhar:', error);
        });
    } else {
        alert('O compartilhamento não é suportado nesse navegador.');
    }
});
