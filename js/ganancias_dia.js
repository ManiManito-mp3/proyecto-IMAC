document.addEventListener('DOMContentLoaded', () => {

    // 1. Volver al Dashboard
    document.getElementById('btn-volver').addEventListener('click', () => {
        window.location.href = 'dashboard.html';
    });

    // 2. Colocar la fecha actual sin tildes usando metodos manuales para asegurar formato limpio
    const hoy = new Date();
    const dia = String(hoy.getDate()).padStart(2, '0');
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const anio = hoy.getFullYear();
    document.getElementById('fecha-pantalla').textContent = `${dia}/${mes}/${anio}`;

    // 3. Base de datos simulada de ventas con sus costos
    const gananciasHoy = [
        { hora: '08:15 AM', factura: 'FAC-5040', cliente: 'CONSUMIDOR FINAL', ingreso: 119000, costo: 85000 },
        { hora: '09:30 AM', factura: 'FAC-5041', cliente: 'D.S CONSTRUCCIONES', ingreso: 595000, costo: 410000 },
        { hora: '11:45 AM', factura: 'FAC-5042', cliente: 'MAURICIO VALDERRAMA', ingreso: 238000, costo: 190000 },
        { hora: '02:20 PM', factura: 'FAC-5043', cliente: 'ARSENIO SALAS', ingreso: 1428000, costo: 950000 },
        { hora: '04:10 PM', factura: 'FAC-5044', cliente: 'CONSUMIDOR FINAL', ingreso: 59500, costo: 45000 }
    ];

    let sumaIngresos = 0;
    let sumaCostos = 0;
    let sumaGanancias = 0;

    const cuerpoTabla = document.getElementById('cuerpo-tabla-ganancias');

    // Formato moneda
    const formatoMoneda = (num) => {
        return '$ ' + num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    };

    // 4. Calcular y Llenar tabla
    gananciasHoy.forEach(item => {
        
        const gananciaLiquida = item.ingreso - item.costo;
        const margenPorcentaje = ((gananciaLiquida / item.ingreso) * 100).toFixed(1);

        sumaIngresos += item.ingreso;
        sumaCostos += item.costo;
        sumaGanancias += gananciaLiquida;

        // Crear fila
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${item.hora}</td>
            <td><strong>${item.factura}</strong></td>
            <td>${item.cliente}</td>
            <td class="texto-derecha valor-venta">${formatoMoneda(item.ingreso)}</td>
            <td class="texto-derecha valor-costo">${formatoMoneda(item.costo)}</td>
            <td class="texto-derecha valor-ganancia">${formatoMoneda(gananciaLiquida)}</td>
            <td class="texto-centro"><span class="badge-margen">${margenPorcentaje}%</span></td>
        `;
        cuerpoTabla.appendChild(fila);
    });

    // 5. Imprimir los totales en las tarjetas
    const margenGlobal = sumaIngresos > 0 ? ((sumaGanancias / sumaIngresos) * 100).toFixed(1) : 0;

    document.getElementById('resumen-ventas').textContent = formatoMoneda(sumaIngresos);
    document.getElementById('resumen-costos').textContent = formatoMoneda(sumaCostos);
    document.getElementById('resumen-ganancia').textContent = formatoMoneda(sumaGanancias);
    document.getElementById('resumen-margen').textContent = margenGlobal + '%';

    // 6. Boton Exportar
    document.getElementById('btn-exportar-ganancias').addEventListener('click', () => {
        alert('Generando archivo Excel del reporte de rentabilidad diaria...');
    });

});