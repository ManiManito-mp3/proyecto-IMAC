document.addEventListener('DOMContentLoaded', () => {

    // Volver al Dashboard
    const btnVolver = document.getElementById('btn-volver');
    if (btnVolver) {
        btnVolver.addEventListener('click', () => {
            window.location.href = 'dashboard.html';
        });
    }

    // --- LOGICA PARA EL PANEL DE CARGA MASIVA (EXCEL/CSV) ---
    const inputExcel = document.getElementById('subir-excel');
    const textoUpload = document.getElementById('texto-upload');
    const btnProcesar = document.getElementById('btn-procesar-archivo');

    if (inputExcel) {
        inputExcel.addEventListener('change', (e) => {
            const archivos = e.target.files;
            if (archivos.length > 0) {
                textoUpload.textContent = `Archivo listo: ${archivos[0].name}`;
                textoUpload.style.color = '#166534'; // Verde
            } else {
                textoUpload.textContent = 'Haz clic aqui o arrastra tu archivo Excel/CSV';
                textoUpload.style.color = '#64748b';
            }
        });
    }

    if (btnProcesar) {
        btnProcesar.addEventListener('click', () => {
            if (inputExcel && inputExcel.files.length > 0) {
                alert('Procesando archivo... Los productos se agregaran a la base de datos.');
                // Despues de simular carga, limpiamos
                inputExcel.value = '';
                textoUpload.textContent = 'Haz clic aqui o arrastra tu archivo Excel/CSV';
                textoUpload.style.color = '#64748b';
            } else {
                alert('Por favor, selecciona un archivo primero.');
            }
        });
    }

    // --- LOGICA PARA EL FORMULARIO MANUAL ---
    const formulario = document.getElementById('formulario-manual');
    
    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const codigo = document.getElementById('codigo').value;
            const nombre = document.getElementById('nombre').value;
            const cantidad = document.getElementById('cantidad').value;
            
            alert(`Producto agregado con exito.\nCodigo: ${codigo}\nNombre: ${nombre}\nUnidades iniciales: ${cantidad}`);
            
            formulario.reset(); // Limpia el formulario tras guardar
        });
    }
});