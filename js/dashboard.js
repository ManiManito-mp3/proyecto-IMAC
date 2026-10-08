// Esperamos a que todo el HTML cargue antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navegación de los módulos (Tarjetas)
    const tarjetas = document.querySelectorAll('.tarjeta-modulo');

    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', () => {
            // Obtenemos el texto del <h3> para saber qué tarjeta se clickeó
            const tituloModulo = tarjeta.querySelector('h3').textContent.trim();

            // Usamos un switch para decidir a qué archivo HTML saltar
            switch (tituloModulo) {
                case 'Usuarios':
                    window.location.href = 'usuarios.html';
                    break;
                case 'Impuestos':
                    window.location.href = 'impuestos.html';
                    break;
                case 'Historico':
                    window.location.href = 'historico.html';
                    break;
                case '10 Mas vendidos': 
                    window.location.href = 'top10.html';
                    break;
                case 'Ajustes':
                    window.location.href = 'ajustes.html';
                    break;
                case 'Inv_Inicial':
                    window.location.href = 'inv_inicial.html';
                    break;
                case 'Inventario':
                    window.location.href= 'inventario.html';
                    break
                case 'Compras':
                    window.location.href = 'compras.html';
                    break;
                case 'Ventas y Costos':
                    window.location.href = 'ventas_costos.html';
                    break;
                case 'Ventas por clientes':
                    window.location.href = 'ventas_cliente.html';
                    break;
                case 'Productos':
                    window.location.href = 'productos.html';
                    break;
                case 'Reporte de ventas':
                    window.location.href = 'reporte_ventas.html';
                    break;
                case 'Ventas del dia':
                    window.location.href = 'ventas_dia.html';
                    break;
                case 'Clientes':
                    window.location.href = 'clientes.html';
                    break;
                case 'Proveedores':
                    window.location.href = 'proveedores.html';
                    break;
                case 'Ganancias del dia':
                    window.location.href = 'ganancias_dia.html';
                    break;
                case 'Base de compras':
                    window.location.href = 'base_compras.html';
                    break;
                case 'Base de ventas':
                    window.location.href = 'base_ventas.html';
                    break;
                default:
                    // Si el módulo aún no tiene un archivo creado, mostramos una alerta
                    alert(`El módulo de ${tituloModulo} aún está en construcción.`);
                    break;
            }
        });
    });

    // 2. Funcionalidad del botón de Salir (Cerrar sesión)
    const btnSalir = document.querySelector('.btn-peligro');
    
    if (btnSalir) {
        btnSalir.addEventListener('click', () => {
            const confirmar = confirm('¿Estás seguro de que deseas cerrar sesión en IMAC?');
            if (confirmar) {
                // Redirige al login. Como están en la misma carpeta, solo ponemos el nombre
                window.location.href = 'index.html'; 
            }
        });
    }
});