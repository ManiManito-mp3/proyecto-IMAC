
document.addEventListener('DOMContentLoaded', () => {
    
    
    const formulario = document.querySelector('.formulario');

    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            
            e.preventDefault(); 

           
            const correo = document.getElementById('correo').value;
            const contrasena = document.getElementById('contrasena').value;

           
            if (correo === 'admin@imac.com' && contrasena === '123456') {
                
                window.location.href = 'dashboard.html';
            } else {
                
                alert('Acceso denegado. Correo o contraseña incorrectos.');
            }
        });
    }
});