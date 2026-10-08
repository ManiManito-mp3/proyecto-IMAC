document.addEventListener('DOMContentLoaded', () => {

    // Volver al Dashboard
    const btnVolver = document.getElementById('btn-volver');
    if (btnVolver) {
        btnVolver.addEventListener('click', () => {
            window.location.href = 'dashboard.html';
        });
    }

    // Simular el filtro de búsqueda
    const formularioFiltros = document.getElementById('formulario-filtros');
    
    if (formularioFiltros) {
        formularioFiltros.addEventListener('submit', (e) => {
            e.preventDefault();

            const fechaInicio = document.getElementById('fecha-inicio').value;
            const fechaFin = document.getElementById('fecha-fin').value;
            const tipo = document.getElementById('tipo-movimiento').value;

            // Aquí en el futuro harás una petición a Java (Backend) para traer los datos reales
            alert(`Buscando registros desde ${fechaInicio} hasta ${fechaFin} de tipo: ${tipo}. \n\n(Esta funcionalidad se conectará a la base de datos más adelante).`);
        });
    }
}); 