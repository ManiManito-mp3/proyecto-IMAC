document.addEventListener('DOMContentLoaded', () => {

    // Volver al Dashboard
    const btnVolver = document.getElementById('btn-volver');
    if (btnVolver) {
        btnVolver.addEventListener('click', () => {
            window.location.href = 'dashboard.html';
        });
    }

    // Boton de Nuevo Producto (Lleva al Inventario Inicial que hicimos antes)
    const btnNuevo = document.getElementById('btn-nuevo-producto');
    if (btnNuevo) {
        btnNuevo.addEventListener('click', () => {
            window.location.href = 'inv_inicial.html';
        });
    }

    // Buscador
    const buscador = document.getElementById('buscar-producto');
    if (buscador) {
        buscador.addEventListener('keyup', (e) => {
            if(e.key === 'Enter') {
                alert(`Buscando el producto: ${buscador.value}... (Se conectara a la base de datos)`);
            }
        });
    }

    // Exportar
    const btnExportar = document.getElementById('btn-exportar');
    if (btnExportar) {
        btnExportar.addEventListener('click', () => {
            alert('Descargando reporte de inventario en Excel...');
        });
    }
});