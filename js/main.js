document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const tipoVenas = document.getElementById('tipoVenas').value;
    const correo = document.getElementById('correo').value;
    
    // Mapear valores del select a texto legible
    const tipoVenasTexto = {
        'aranitas': 'Arañitas (telangiectasias)',
        'reticulares': 'Venas reticulares',
        'varices-pequenas': 'Várices pequeñas',
        'varices-gruesas': 'Várices gruesas',
        'no-segura': 'No estoy segura'
    };
    
    // Construir mensaje para WhatsApp
    const mensaje = `Hola Dra. Liz, solicito mi plan personalizado:%0A%0A` +
                  `*Nombre:* ${nombre}%0A` +
                  `*Edad:* ${edad} años%0A` +
                  `*Tipo de venas:* ${tipoVenasTexto[tipoVenas]}%0A` +
                  `*Correo:* ${correo}%0A%0A` +
                  `Vengo desde la landing page y quiero conocer más sobre el Protocolo Piernas Perfectas.`;
    
    // Número de WhatsApp (formato internacional sin +)
    const numeroWhatsApp = '584128567505';
    
    // Construir URL de WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    
    // Abrir WhatsApp en nueva pestaña
    window.open(urlWhatsApp, '_blank');
    
    // Opcional: Resetear formulario después de enviar
    // this.reset();
});

// Smooth scroll for CTA button
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
