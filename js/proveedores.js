document.addEventListener('DOMContentLoaded', () => {

    // Volver al Dashboard
    document.getElementById('btn-volver').addEventListener('click', () => {
        window.location.href = 'dashboard.html';
    });

    // Base de datos de Proveedores en Memoria (LocalStorage)
    let proveedores = JSON.parse(localStorage.getItem('bd_proveedores')) || [
        { nit: '900888777-1', razon: 'CEMENTOS ARGOS S.A.', asesor: 'Camilo Suarez', tel: '3110001122', ciudad: 'Medellin' },
        { nit: '901222333-5', razon: 'FERRETERIA INDUSTRIAL', asesor: 'Ana Gomez', tel: '3209998877', ciudad: 'Bogota' }
    ];

    const cuerpoTabla = document.getElementById('cuerpo-tabla-proveedores');
    const panelRegistro = document.getElementById('panel-registro-proveedor');
    const formulario = document.getElementById('form-proveedor');

    // Renderizar Tabla
    function cargarTabla() {
        cuerpoTabla.innerHTML = '';
        proveedores.forEach(prov => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td><span class="badge-doc">${prov.nit}</span></td>
                <td><strong>${prov.razon}</strong></td>
                <td>${prov.asesor}</td>
                <td>${prov.tel}</td>
                <td>${prov.ciudad}</td>
                <td class="texto-centro">
                    <button class="btn-accion-tabla" title="Editar">✏️</button>
                    <button class="btn-accion-tabla" title="Eliminar">🗑️</button>
                </td>
            `;
            cuerpoTabla.appendChild(fila);
        });
    }

    cargarTabla();

    // Mostrar / Ocultar Formulario
    document.getElementById('btn-nuevo-proveedor').addEventListener('click', () => {
        panelRegistro.style.display = 'block';
        document.getElementById('nit-proveedor').focus();
    });

    document.getElementById('btn-cancelar-registro').addEventListener('click', () => {
        panelRegistro.style.display = 'none';
        formulario.reset();
    });

    // Guardar Nuevo Proveedor
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const nuevoProveedor = {
            nit: document.getElementById('nit-proveedor').value.trim(),
            razon: document.getElementById('nom-proveedor').value.trim().toUpperCase(),
            asesor: document.getElementById('contacto-proveedor').value.trim() || 'N/A',
            tel: document.getElementById('tel-proveedor').value.trim() || 'N/A',
            ciudad: document.getElementById('ciudad-proveedor').value.trim().toUpperCase() || 'N/A'
        };

        // Verificar que el NIT no exista ya
        const existe = proveedores.find(p => p.nit === nuevoProveedor.nit);
        if (existe) {
            alert('Error: Ya existe un proveedor registrado con ese NIT.');
            return;
        }

        // Guardar en memoria
        proveedores.push(nuevoProveedor);
        localStorage.setItem('bd_proveedores', JSON.stringify(proveedores));
        
        alert('Proveedor registrado con exito.');
        
        // Recargar vista
        cargarTabla();
        panelRegistro.style.display = 'none';
        formulario.reset();
    });

});