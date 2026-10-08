document.addEventListener('DOMContentLoaded', () => {

    // Volver al Dashboard
    const btnVolver = document.getElementById('btn-volver');
    if (btnVolver) {
        btnVolver.addEventListener('click', () => {
            window.location.href = 'dashboard.html';
        });
    }

    // --- LOGICA PARA LA CARGA DE FOTOS ---
    const inputFoto = document.getElementById('subir-foto');
    const textoUpload = document.getElementById('texto-upload');

    if (inputFoto) {
        inputFoto.addEventListener('change', (e) => {
            const archivos = e.target.files;
            
            // Si el usuario selecciono archivos, cambiamos el texto
            if (archivos.length > 0) {
                if (archivos.length === 1) {
                    // Si es solo una foto, mostramos el nombre
                    textoUpload.textContent = `Archivo listo: ${archivos[0].name}`;
                    textoUpload.style.color = '#166534'; // Color verde
                } else {
                    // Si son varias, mostramos la cantidad
                    textoUpload.textContent = `${archivos.length} fotos seleccionadas listas para guardar`;
                    textoUpload.style.color = '#166534';
                }
            } else {
                textoUpload.textContent = 'Haz clic aqui para seleccionar fotos o arrastralas';
                textoUpload.style.color = '#64748b';
            }
        });
    }

    // Guardar configuracion del formulario
    const formulario = document.getElementById('formulario-ajustes');
    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const empresa = document.getElementById('nombre-empresa').value;
            // Contamos cuantas fotos se subieron
            const inputFotos = document.getElementById('subir-foto');
            const cantidadFotos = inputFotos.files ? inputFotos.files.length : 0; 
            
            alert(`Configuracion guardada.\nEmpresa: ${empresa}\nFotos cargadas: ${cantidadFotos}`);
        });
    }

    // Boton de respaldo
    const btnRespaldo = document.getElementById('btn-respaldo');
    if (btnRespaldo) {
        btnRespaldo.addEventListener('click', () => {
            alert('Generando archivo de respaldo... (Esta funcion se conectara a la base de datos).');
        });
    }

    // Boton de limpiar datos
    const btnLimpiar = document.getElementById('btn-limpiar');
    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', () => {
            const confirmar = confirm('ADVERTENCIA: ¿Estas seguro de querer borrar todo el historial?');
            if (confirmar) {
                alert('Historial borrado.');
            }
        });
    }
});