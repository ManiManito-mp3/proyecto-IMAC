document.addEventListener('DOMContentLoaded', () => {

    // Volver al Dashboard
    document.getElementById('btn-volver').addEventListener('click', () => {
        window.location.href = 'dashboard.html';
    });

    // Base de datos cruda de ejemplo
    const dataCompras = [
        { id: 'COMP-001', fecha: '2026-10-01', nit: '900888777-1', razon: 'CEMENTOS ARGOS S.A.', codProd: '7', producto: 'CEMENTO GRIS', cant: 100, costo: 25000, subtotal: 2500000, iva: 475000, total: 2975000 },
        { id: 'COMP-002', fecha: '2026-10-02', nit: '901222333-5', razon: 'FERRETERIA INDUSTRIAL', codProd: '2', producto: 'ARENA DE PLANTA', cant: 50, costo: 60000, subtotal: 3000000, iva: 570000, total: 3570000 },
        { id: 'COMP-003', fecha: '2026-10-05', nit: '900888777-1', razon: 'CEMENTOS ARGOS S.A.', codProd: '7', producto: 'CEMENTO BLANCO', cant: 20, costo: 30000, subtotal: 600000, iva: 114000, total: 714000 }
    ];

    const cuerpoTabla = document.getElementById('cuerpo-base-compras');

    // Formato moneda de Excel (sin espacios raros)
    const formatoExcel = (num) => {
        return '$' + num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    // Llenar tabla
    function cargarTablaBase() {
        cuerpoTabla.innerHTML = '';
        dataCompras.forEach(item => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${item.id}</td>
                <td>${item.fecha}</td>
                <td>${item.nit}</td>
                <td>${item.razon}</td>
                <td class="texto-centro">${item.codProd}</td>
                <td>${item.producto}</td>
                <td class="texto-centro">${item.cant}</td>
                <td class="texto-derecha col-dinero">${formatoExcel(item.costo)}</td>
                <td class="texto-derecha col-dinero">${formatoExcel(item.subtotal)}</td>
                <td class="texto-derecha col-dinero">${formatoExcel(item.iva)}</td>
                <td class="texto-derecha col-dinero col-total">${formatoExcel(item.total)}</td>
            `;
            cuerpoTabla.appendChild(fila);
        });
    }

    cargarTablaBase();

    // Boton de exportar a Excel
    document.getElementById('btn-descargar-excel').addEventListener('click', () => {
        alert('Generando archivo: BD_COMPRAS_IMAC.xlsx ...');
    });

});