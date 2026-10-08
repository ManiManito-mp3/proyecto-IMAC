document.addEventListener('DOMContentLoaded', () => {

    // Volver al Dashboard
    document.getElementById('btn-volver').addEventListener('click', () => {
        window.location.href = 'dashboard.html';
    });

    // Base de datos cruda de ejemplo para Ventas
    const dataVentas = [
        { id: 'FAC-5040', fecha: '2026-10-07', doc: '22222222', cliente: 'CONSUMIDOR FINAL', codProd: '1', producto: 'ARENA DE PENA', cant: 1, precio: 100000, subtotal: 100000, iva: 19000, total: 119000 },
        { id: 'FAC-5041', fecha: '2026-10-07', doc: '900123456', cliente: 'D.S CONSTRUCCIONES', codProd: '7', producto: 'CEMENTO GRIS', cant: 20, precio: 25000, subtotal: 500000, iva: 95000, total: 595000 },
        { id: 'FAC-5042', fecha: '2026-10-07', doc: '10203040', cliente: 'MAURICIO VALDERRAMA', codProd: '3', producto: 'GRAVA 3/4', cant: 2, precio: 100000, subtotal: 200000, iva: 38000, total: 238000 }
    ];

    const cuerpoTabla = document.getElementById('cuerpo-base-ventas');

    // Formato moneda de Excel
    const formatoExcel = (num) => {
        return '$' + num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    // Llenar tabla
    function cargarTablaBase() {
        cuerpoTabla.innerHTML = '';
        dataVentas.forEach(item => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${item.id}</td>
                <td>${item.fecha}</td>
                <td>${item.doc}</td>
                <td>${item.cliente}</td>
                <td class="texto-centro">${item.codProd}</td>
                <td>${item.producto}</td>
                <td class="texto-centro">${item.cant}</td>
                <td class="texto-derecha col-dinero">${formatoExcel(item.precio)}</td>
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
        alert('Generando archivo: BD_VENTAS_IMAC.xlsx ...');
    });

});