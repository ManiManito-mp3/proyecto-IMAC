document.addEventListener('DOMContentLoaded', () => {

    // 1. Funcionalidad para volver al Dashboard
    const btnVolver = document.getElementById('btn-volver');
    if (btnVolver) {
        btnVolver.addEventListener('click', () => {
            window.location.href = 'dashboard.html';
        });
    }

    // 2. Funcionalidad para agregar usuarios a la tabla
    const formulario = document.getElementById('formulario-usuario');
    const tablaCuerpo = document.querySelector('#tabla-usuarios tbody');

    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página recargue

            // Capturar datos del formulario
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const rol = document.getElementById('rol').value;

            // Determinar los módulos permitidos (los checkboxes marcados)
            const checkboxes = document.querySelectorAll('.lista-permisos input[type="checkbox"]:checked');
            let modulos = [];
            checkboxes.forEach((chk) => {
                modulos.push(chk.value);
            });

            // Validar que al menos tenga un módulo asignado
            if (modulos.length === 0) {
                alert('El usuario debe tener acceso al menos a un módulo.');
                return;
            }

            // Crear una nueva fila en la tabla
            const nuevaFila = document.createElement('tr');
            
            // Asignar color de badge según el rol
            let claseBadge = 'admin'; // Por defecto
            if(rol === 'Cajero') claseBadge = 'activo';
            if(rol === 'Almacenista') claseBadge = 'badge'; // gris genérico si quisiéramos

            nuevaFila.innerHTML = `
                <td>${nombre}</td>
                <td>${email}</td>
                <td><span class="badge ${claseBadge}">${rol}</span></td>
                <td><span class="badge activo">Activo</span></td>
                <td>
                    <button class="btn-accion btn-editar" title="Módulos: ${modulos.join(', ')}">✏️</button>
                    <button class="btn-accion btn-eliminar">🗑️</button>
                </td>
            `;

            // Agregar evento de eliminar al nuevo botón
            const btnEliminar = nuevaFila.querySelector('.btn-eliminar');
            btnEliminar.addEventListener('click', () => {
                if (confirm(`¿Estás seguro de quitar el acceso a ${nombre}?`)) {
                    nuevaFila.remove();
                }
            });

            // Agregar la fila a la tabla visualmente
            tablaCuerpo.appendChild(nuevaFila);

            // Limpiar el formulario
            formulario.reset();
            alert(`Usuario ${nombre} agregado con éxito al sistema frontal.`);
        });
    }
});