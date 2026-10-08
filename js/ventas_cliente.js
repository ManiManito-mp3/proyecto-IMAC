document.addEventListener('DOMContentLoaded', () => {

    // 1. Volver al Dashboard
    const btnVolver = document.getElementById('btn-volver');
    if (btnVolver) {
        btnVolver.addEventListener('click', () => {
            window.location.href = 'dashboard.html';
        });
    }

    // 2. Datos de prueba (Tomados de tu imagen)
    const datosClientes = [
        { cliente: 'ARSENIO SALAS', costo: 1482000, ventas: 2330000 },
        { cliente: 'MAURICIO VALDERRAMA', costo: 780000, ventas: 980000 },
        { cliente: 'HECTOR RAMIREZ', costo: 468000, ventas: 900000 },
        { cliente: 'ELIAS ORJUELA', costo: 234000, ventas: 450000 },
        { cliente: 'ALEX RAMIREZ', costo: 1170000, ventas: 1470000 },
        { cliente: 'CONSUMIDOR FINAL', costo: 1388015548, ventas: 2416400866 },
        { cliente: 'D.S CONSTRUCCIONES', costo: 2793496, ventas: 4990000 }
    ];

    const cuerpoTabla = document.getElementById('cuerpo-tabla-clientes');
    const outGranCosto = document.getElementById('gran-total-costo');
    const outGranVentas = document.getElementById('gran-total-ventas');
    const outGranGanancia = document.getElementById('gran-total-ganancia');

    // Funcion para dar formato de moneda
    const formatoMoneda = (num) => {
        return '$ ' + num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    };

    // 3. Cargar tabla y calcular totales
    function cargarTabla() {
        cuerpoTabla.innerHTML = '';
        let sumaCosto = 0;
        let sumaVentas = 0;
        let sumaGanancia = 0;

        datosClientes.forEach(registro => {
            // Calculo de ganancia por cliente
            const ganancia = registro.ventas - registro.costo;
            
            // Acumular para el total general
            sumaCosto += registro.costo;
            sumaVentas += registro.ventas;
            sumaGanancia += ganancia;

            // Crear fila
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${registro.cliente}</td>
                <td class="texto-derecha val-costo">${formatoMoneda(registro.costo)}</td>
                <td class="texto-derecha val-venta">${formatoMoneda(registro.ventas)}</td>
                <td class="texto-derecha val-ganancia">${formatoMoneda(ganancia)}</td>
            `;
            cuerpoTabla.appendChild(fila);
        });

        // Escribir los totales generales en el pie de tabla
        outGranCosto.textContent = formatoMoneda(sumaCosto);
        outGranVentas.textContent = formatoMoneda(sumaVentas);
        outGranGanancia.textContent = formatoMoneda(sumaGanancia);
    }

    // Ejecutar al cargar la pagina
    cargarTabla();

    // 4. Botones de accion
    document.getElementById('btn-filtrar').addEventListener('click', () => {
        alert('Aplicando filtros de busqueda...');
    });

    document.getElementById('btn-exportar').addEventListener('click', () => {
        alert('Descargando reporte de clientes en formato Excel (.xlsx)...');
    });

});