document.addEventListener('DOMContentLoaded', () => {

    // Volver al Dashboard
    const btnVolver = document.getElementById('btn-volver');
    if (btnVolver) {
        btnVolver.addEventListener('click', () => {
            window.location.href = 'dashboard.html';
        });
    }

    // Datos de ejemplo simulando la base de datos
    const historialFacturas = [
        { factura: 'FAC-5021', fecha: '2026-10-07', cliente: 'CONSUMIDOR FINAL', pago: 'Efectivo', estado: 'Pagada', total: 2416400 },
        { factura: 'FAC-5022', fecha: '2026-10-07', cliente: 'D.S CONSTRUCCIONES', pago: 'Transferencia', estado: 'Pagada', total: 4990000 },
        { factura: 'FAC-5023', fecha: '2026-10-06', cliente: 'ARSENIO SALAS', pago: 'Credito', estado: 'Credito', total: 2330000 },
        { factura: 'FAC-5024', fecha: '2026-10-06', cliente: 'MAURICIO VALDERRAMA', pago: 'Efectivo', estado: 'Pagada', total: 980000 },
        { factura: 'FAC-5025', fecha: '2026-10-05', cliente: 'HECTOR RAMIREZ', pago: 'Efectivo', estado: 'Anulada', total: 900000 }
    ];

    const cuerpoTabla = document.getElementById('cuerpo-tabla-ventas');
    const outGranTotal = document.getElementById('gran-total-ventas');

    // Formatear moneda
    const formatoMoneda = (num) => {
        return '$ ' + num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    };

    // Obtener la clase de color segun el estado
    const obtenerClaseEstado = (estado) => {
        if (estado === 'Pagada') return 'estado-pagada';
        if (estado === 'Credito') return 'estado-credito';
        if (estado === 'Anulada') return 'estado-anulada';
        return '';
    };

    // Cargar la tabla
    function cargarTabla(filtroEstado = 'Todos') {
        cuerpoTabla.innerHTML = '';
        let sumaTotalVentas = 0;

        historialFacturas.forEach(venta => {
            
            // Logica de filtro
            if (filtroEstado !== 'Todos' && venta.estado !== filtroEstado) {
                return; // Se salta este registro si no coincide el filtro
            }

            // Si esta anulada, no la sumamos al dinero real
            if (venta.estado !== 'Anulada') {
                sumaTotalVentas += venta.total;
            }

            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td><strong>${venta.factura}</strong></td>
                <td>${venta.fecha}</td>
                <td>${venta.cliente}</td>
                <td>${venta.pago}</td>
                <td class="texto-centro"><span class="badge ${obtenerClaseEstado(venta.estado)}">${venta.estado}</span></td>
                <td class="texto-derecha" style="font-family: monospace; font-size: 15px;">${formatoMoneda(venta.total)}</td>
                <td class="texto-centro">
                    <button class="btn-accion-tabla" title="Ver Detalle">👁️</button>
                    <button class="btn-accion-tabla" title="Imprimir Copia">🖨️</button>
                </td>
            `;
            cuerpoTabla.appendChild(fila);
        });

        // Actualizar el total inferior
        outGranTotal.textContent = formatoMoneda(sumaTotalVentas);
    }

    // Inicializar tabla
    cargarTabla();

    // Accion del boton Filtrar
    document.getElementById('btn-filtrar').addEventListener('click', () => {
        const estadoSeleccionado = document.getElementById('filtro-estado').value;
        cargarTabla(estadoSeleccionado);
    });

    // Accion Exportar
    document.getElementById('btn-exportar').addEventListener('click', () => {
        alert('Generando archivo Excel del reporte de ventas...');
    });

});