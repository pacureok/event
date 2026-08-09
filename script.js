document.addEventListener('DOMContentLoaded', () => {
    const formLink = document.getElementById('form-link');
    
    formLink.addEventListener('click', (e) => {
        // Alerta amigable antes de ir al formulario
        const mensaje = "🚨 ¡UN ÚLTIMO RECORDATORIO! 🚨\n\nPor favor, verifica dos veces que tu usuario de Discord o X esté escrito EXACTAMENTE como es.\n\nSi ganas y no te encuentro, tendré que sortearlo de nuevo. 😭\n\n¿Tienes tus datos correctos listos para el formulario?";
        
        const continuar = confirm(mensaje);
        
        // Si el usuario da en "Cancelar", evitamos que se abra la pestaña
        if (!continuar) {
            e.preventDefault();
        }
    });
});