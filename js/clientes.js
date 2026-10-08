document.addEventListener('DOMContentLoaded', () => {

    // 1. Volver al Dashboard
    document.getElementById('btn-volver').addEventListener('click', () => {
        window.location.href = 'dashboard.html';
    });

    // 2. Base de datos de Clientes en Memoria (LocalStorage)
    let clientes = JSON.parse(localStorage.getItem('bd_clientes')) || [
        { doc: '900123456', nombre: 'D.S CONSTRUCCIONES', tel: '3109876543', dir: 'Calle Falsa 123', email: 'contacto@ds.com' },
        { doc: '10203040', nombre: 'MAURICIO VALDERRAMA', tel: '3001112233', dir: 'Carrera 45 # 10-20', email: 'mauricio@correo.com' },
        { doc: '22222222', nombre: 'CONSUMIDOR FINAL', tel: '0000000000', dir: 'N/A', email: 'N/A' }
    ];

    const cuerpoTabla = document.getElementById('cuerpo-tabla-clientes');
    const panelRegistro = document.getElementById('panel-registro-cliente');
    const formulario = document.getElementById('form-cliente');

    // 3. Renderizar Tabla
    function cargarTabla() {
        cuerpoTabla.innerHTML = '';
        clientes.forEach(cli => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td><span class="badge-doc">${cli.doc}</span></td>
                <td><strong>${cli.nombre}</strong></td>
                <td>${cli.tel}</td>
                <td>${cli.dir}</td>
                <td>${cli.email}</td>
                <td class="texto-centro">
                    <button class="btn-accion-tabla" title="Editar">✏️</button>
                    <button class="btn-accion-tabla" title="Eliminar">🗑️</button>
                </td>
            `;
            cuerpoTabla.appendChild(fila);
        });
    }

    cargarTabla();

    // 4. Mostrar / Ocultar Formulario
    document.getElementById('btn-nuevo-cliente').addEventListener('click', () => {
        panelRegistro.style.display = 'block';
        document.getElementById('doc-cliente').focus();
    });

    document.getElementById('btn-cancelar-registro').addEventListener('click', () => {
        panelRegistro.style.display = 'none';
        formulario.reset();
    });

    // 5. Guardar Nuevo Cliente
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const nuevoCliente = {
            doc: document.getElementById('doc-cliente').value.trim(),
            nombre: document.getElementById('nom-cliente').value.trim().toUpperCase(),
            tel: document.getElementById('tel-cliente').value.trim() || 'N/A',
            dir: document.getElementById('dir-cliente').value.trim().toUpperCase() || 'N/A',
            email: document.getElementById('email-cliente').value.trim().toLowerCase() || 'N/A'
        };

        // Verificar que el documento no exista ya
        const existe = clientes.find(c => c.doc === nuevoCliente.doc);
        if (existe) {
            alert('Error: Ya existe un cliente registrado con ese NIT o C.C.');
            return;
        }

        // Guardar en memoria
        clientes.push(nuevoCliente);
        localStorage.setItem('bd_clientes', JSON.stringify(clientes));
        
        alert('Cliente registrado con exito.');
        
        // Recargar vista
        cargarTabla();
        panelRegistro.style.display = 'none';
        formulario.reset();
    });

});