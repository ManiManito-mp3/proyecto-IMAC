document.addEventListener('DOMContentLoaded', () => {

    // Funcionalidad para volver al Dashboard
    const btnVolver = document.getElementById('btn-volver');
    if (btnVolver) {
        btnVolver.addEventListener('click', () => {
            window.location.href = 'dashboard.html';
        });
    }

    // Funcionalidad para registrar o actualizar la tabla de impuestos
    const formulario = document.getElementById('formulario-impuesto');
    const tablaCuerpo = document.querySelector('#tabla-impuestos tbody');

    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();

            // Capturar datos del formulario
            const nombreImpuesto = document.getElementById('nombre-impuesto').value;
            const porcentaje = parseFloat(document.getElementById('porcentaje').value).toFixed(2);
            const estado = document.getElementById('estado').value;

            // Determinar la clase visual del estado
            const claseBadge = estado === 'Activo' ? 'activo' : 'inactivo';

            // Crear nueva fila
            const nuevaFila = document.createElement('tr');
            
            nuevaFila.innerHTML = `
                <td>${nombreImpuesto}</td>
                <td class="valor-tasa">${porcentaje}%</td>
                <td><span class="badge ${claseBadge}">${estado}</span></td>
                <td>
                    <button class="btn-accion btn-editar" title="Editar">✏️</button>
                    <button class="btn-accion btn-eliminar" title="Eliminar">🗑️</button>
                </td>
            `;

            // Funcionalidad del botón eliminar generado dinámicamente
            const btnEliminar = nuevaFila.querySelector('.btn-eliminar');
            if(btnEliminar) {
                btnEliminar.addEventListener('click', () => {
                    if(confirm(`¿Deseas remover el ${nombreImpuesto} de la configuración?`)){
                        nuevaFila.remove();
                    }
                });
            }

            // Agregar a la tabla y limpiar formulario
            tablaCuerpo.appendChild(nuevaFila);
            formulario.reset();
            
            alert(`Tasa de ${nombreImpuesto} configurada al ${porcentaje}% exitosamente.`);
        });
    }
});