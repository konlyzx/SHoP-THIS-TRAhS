document.addEventListener('DOMContentLoaded', () => {
    // Manejar el evento de añadir al carrito
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = event.target.closest('.producto').dataset.productId;
            alert(`Producto ${productId} añadido al carrito.`);
            // Aquí podrías añadir lógica para actualizar el carrito
        });
    });

    // Manejar el envío del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        // Aquí podrías añadir lógica para enviar el formulario
        alert(`Gracias por tu mensaje, ${nombre}. Nos pondremos en contacto contigo pronto.`);
        
        // Limpiar el formulario
        contactForm.reset();
    });
});
