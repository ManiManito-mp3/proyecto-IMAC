document.addEventListener('DOMContentLoaded', () => {

    // 1. Volver al Dashboard
    document.getElementById('btn-volver').addEventListener('click', () => {
        window.location.href = 'dashboard.html';
    });

    // 2. Colocar la fecha actual en el header
    const fechaOpciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fechaActual = new Date().toLocaleDateString('es-ES', fechaOpciones);
    document.getElementById('fecha-pantalla').textContent = fechaActual.toUpperCase();

    // 3. Base de datos simulada de las ventas DE HOY
    const ventasHoy = [
        { hora: '08:15 AM', factura: 'FAC-5040', cliente: 'CONSUMIDOR FINAL', pago: 'Efectivo', subtotal: 100000, iva: 19000, total: 119000 },
        { hora: '09:30 AM', factura: 'FAC-5041', cliente: 'D.S CONSTRUCCIONES', pago: 'Transferencia', subtotal: 500000, iva: 95000, total: 595000 },
        { hora: '11:45 AM', factura: 'FAC-5042', cliente: 'MAURICIO VALDERRAMA', pago: 'Efectivo', subtotal: 200000, iva: 38000, total: 238000 },
        { hora: '02:20 PM', factura: 'FAC-5043', cliente: 'ARSENIO SALAS', pago: 'Credito', subtotal: 1200000, iva: 228000, total: 1428000 },
        { hora: '04:10 PM', factura: 'FAC-5044', cliente: 'CONSUMIDOR FINAL', pago: 'Efectivo', subtotal: 50000, iva: 9500, total: 59500 }
    ];

    // Variables para acumular dinero
    let sumaEfectivo = 0;
    let sumaTransferencia = 0;
    let sumaCredito = 0;
    let sumaTotal = 0;

    const cuerpoTabla = document.getElementById('cuerpo-tabla-dia');

    // Formato moneda
    const formatoMoneda = (num) => {
        return '$ ' + num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    };

    // 4. Llenar tabla y calcular totales
    ventasHoy.forEach(venta => {
        
        // Sumar al metodo de pago correspondiente
        if (venta.pago === 'Efectivo') sumaEfectivo += venta.total;
        if (venta.pago === 'Transferencia') sumaTransferencia += venta.total;
        if (venta.pago === 'Credito') sumaCredito += venta.total;
        
        sumaTotal += venta.total;

        // Crear fila
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${venta.hora}</td>
            <td><strong>${venta.factura}</strong></td>
            <td>${venta.cliente}</td>
            <td>${venta.pago}</td>
            <td class="texto-derecha">${formatoMoneda(venta.subtotal)}</td>
            <td class="texto-derecha">${formatoMoneda(venta.iva)}</td>
            <td class="texto-derecha columna-total">${formatoMoneda(venta.total)}</td>
        `;
        cuerpoTabla.appendChild(fila);
    });

    // 5. Imprimir los totales en las tarjetas superiores
    document.getElementById('caja-efectivo').textContent = formatoMoneda(sumaEfectivo);
    document.getElementById('caja-transferencia').textContent = formatoMoneda(sumaTransferencia);
    document.getElementById('caja-credito').textContent = formatoMoneda(sumaCredito);
    document.getElementById('caja-total').textContent = formatoMoneda(sumaTotal);

    // 6. Boton Imprimir Cierre
    document.getElementById('btn-imprimir-cierre').addEventListener('click', () => {
        alert('Generando ticket de cierre de caja...\nEfectivo en caja esperado: ' + formatoMoneda(sumaEfectivo));
    });

});