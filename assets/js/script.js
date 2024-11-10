document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const form = event.target;
    const feedback = document.getElementById('feedback');

    fetch(form.action, {
        method: form.method,
        body: new URLSearchParams(new FormData(form)),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(response => {
        if (response.ok) {
            feedback.textContent = 'Mensagem enviada com sucesso!';
            feedback.classList.add('success');
            form.reset();
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    feedback.textContent = data["errors"].map(error => error["message"]).join(", ");
                } else {
                    feedback.textContent = 'Ocorreu um erro ao enviar a mensagem.';
                }
                feedback.classList.add('error');
            });
        }
    }).catch(error => {
        feedback.textContent = 'Ocorreu um erro ao enviar a mensagem.';
        feedback.classList.add('error');
    });
});