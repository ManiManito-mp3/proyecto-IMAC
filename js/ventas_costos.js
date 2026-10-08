document.addEventListener('DOMContentLoaded', () => {

    // Volver al Dashboard
    const btnVolver = document.getElementById('btn-volver');
    if (btnVolver) {
        btnVolver.addEventListener('click', () => {
            window.location.href = 'dashboard.html';
        });
    }

    const formFechas = document.getElementById('form-fechas');
    
    // Elementos donde se muestran los valores
    const valVentas = document.getElementById('val-ventas');
    const valCostoVenta = document.getElementById('val-costo-venta');
    const valCostoEnvio = document.getElementById('val-costo-envio');
    const valOtrosCostos = document.getElementById('val-otros-costos');
    const valGanancia = document.getElementById('val-ganancia');

    if (formFechas) {
        formFechas.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la pagina recargue

            const fechaIni = document.getElementById('fecha-inicial').value;
            const fechaFin = document.getElementById('fecha-final').value;

            if (fechaIni > fechaFin) {
                alert('La Fecha Inicial no puede ser mayor a la Fecha Final.');
                return;
            }

            // Simulacion de carga de datos desde la base de datos (Usando tus valores de ejemplo)
            // En el futuro, aqui haremos la consulta a Java / MySQL
            
            const datosSimulados = {
                ventas: 2440310866.20,
                costoVenta: 1402583375.99,
                costoEnvio: 0.00,
                otrosCostos: 0.00
            };

            // Calculo matematico: Ventas - (Todos los costos)
            const totalCostos = datosSimulados.costoVenta + datosSimulados.costoEnvio + datosSimulados.otrosCostos;
            const ganancia = datosSimulados.ventas - totalCostos;

            // Formatear numeros a moneda (Agrega las comas y los decimales)
            const formatearMoneda = (numero) => {
                return '$ ' + numero.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            };

            // Mostrar en pantalla
            valVentas.textContent = formatearMoneda(datosSimulados.ventas);
            valCostoVenta.textContent = formatearMoneda(datosSimulados.costoVenta);
            valCostoEnvio.textContent = formatearMoneda(datosSimulados.costoEnvio);
            valOtrosCostos.textContent = formatearMoneda(datosSimulados.otrosCostos);
            
            valGanancia.textContent = formatearMoneda(ganancia);

            // Si hay perdida, cambiar color a rojo, si hay ganancia dejar en amarillo
            if (ganancia < 0) {
                valGanancia.style.color = '#ef4444'; // Rojo
            } else {
                valGanancia.style.color = '#fbbf24'; // Amarillo
            }
        });
    }

});