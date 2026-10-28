// Filtrado interactivo del portafolio (sin backend)
function filtrarProductos(categoria) {
    const tarjetas = document.querySelectorAll('.card');
    const botones = document.querySelectorAll('.btn-filter');

    botones.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    tarjetas.forEach(card => {
        if (categoria === 'todos' || card.getAttribute('data-categoria') === categoria) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Simulación de envío del formulario de contacto
function handleSubmit(event) {
    event.preventDefault();
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    event.target.reset();
}
