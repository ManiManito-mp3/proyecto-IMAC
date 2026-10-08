document.addEventListener('DOMContentLoaded', () => {

    // --- VARIABLES DE CALCULOS INDIVIDUALES ---
    const inputCant = document.getElementById('cant');
    const inputCosto = document.getElementById('costo');
    const inputDesc = document.getElementById('desc');
    const inputImp = document.getElementById('imp');
    const outSubt = document.getElementById('subt');
    const outTot = document.getElementById('tot');

    // Volver al Dashboard
    document.getElementById('btn-volver').addEventListener('click', () => {
        window.location.href = 'dashboard.html';
    });

    // Funcion para calcular la fila antes de agregar
    function calcularFila() {
        const cant = parseFloat(inputCant.value) || 0;
        const costo = parseFloat(inputCosto.value) || 0;
        const desc = parseFloat(inputDesc.value) || 0;
        const imp = parseFloat(inputImp.value) || 0;

        const subtotal = (cant * costo) - desc;
        const total = subtotal + imp;

        outSubt.value = subtotal.toFixed(2);
        outTot.value = total.toFixed(2);
    }

    // Escuchar cambios en los inputs para calcular en tiempo real
    [inputCant, inputCosto, inputDesc, inputImp].forEach(input => {
        input.addEventListener('input', calcularFila);
    });

    // --- VARIABLES DE LISTA Y TOTALES GENERALES ---
    const btnAgregar = document.getElementById('btn-agregar-fila');
    const tablaCuerpo = document.querySelector('#tabla-detalle tbody');
    const outGranSub = document.getElementById('gran-subtotal');
    const outGranImp = document.getElementById('gran-impuesto');
    const outGranTot = document.getElementById('gran-total');

    let sumSubtotal = 0;
    let sumImpuesto = 0;
    let sumTotal = 0;

    // Agregar producto a la lista
    btnAgregar.addEventListener('click', () => {
        const prodElement = document.getElementById('producto-desc');
        const prod = prodElement.options[prodElement.selectedIndex].text;
        
        if(!document.getElementById('producto-desc').value) {
            alert('Por favor seleccione un producto del liquidador.');
            return;
        }

        const cant = parseFloat(inputCant.value) || 0;
        const costo = parseFloat(inputCosto.value) || 0;
        const desc = parseFloat(inputDesc.value) || 0;
        const imp = parseFloat(inputImp.value) || 0;
        const subt = parseFloat(outSubt.value) || 0;
        const tot = parseFloat(outTot.value) || 0;

        // Sumar a totales globales
        sumSubtotal += subt;
        sumImpuesto += imp;
        sumTotal += tot;

        // Crear fila
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td><strong>${prod}</strong></td>
            <td>${cant}</td>
            <td>$ ${costo.toFixed(2)}</td>
            <td>$ ${desc.toFixed(2)}</td>
            <td>$ ${subt.toFixed(2)}</td>
            <td>$ ${imp.toFixed(2)}</td>
            <td style="color: #166534; font-weight: bold;">$ ${tot.toFixed(2)}</td>
            <td><button class="btn-texto-rojo btn-quitar">Eliminar</button></td>
        `;

        // Logica para quitar la fila
        fila.querySelector('.btn-quitar').addEventListener('click', () => {
            fila.remove();
            sumSubtotal -= subt;
            sumImpuesto -= imp;
            sumTotal -= tot;
            actualizarTotalesGenerales();
        });

        tablaCuerpo.appendChild(fila);
        
        // Resetear campos del liquidador
        document.getElementById('producto-desc').value = '';
        inputCant.value = 1; inputCosto.value = 0; inputDesc.value = 0; inputImp.value = 0;
        calcularFila();
        actualizarTotalesGenerales();
    });

    function actualizarTotalesGenerales() {
        outGranSub.value = `$ ${sumSubtotal.toFixed(2)}`;
        outGranImp.value = `$ ${sumImpuesto.toFixed(2)}`;
        outGranTot.value = `$ ${sumTotal.toFixed(2)}`;
    }

    // --- BOTONES INFERIORES GLOBALES ---
    document.getElementById('btn-limpiar').addEventListener('click', () => {
        if(confirm('¿Estas seguro de limpiar toda la factura?')) {
            document.querySelectorAll('input:not([type="date"])').forEach(i => i.value = '');
            tablaCuerpo.innerHTML = '';
            document.getElementById('producto-desc').value = '';
            document.getElementById('proveedor').value = '';
            
            inputCant.value = 1; inputCosto.value = 0; inputDesc.value = 0; inputImp.value = 0;
            sumSubtotal = 0; sumImpuesto = 0; sumTotal = 0;
            
            calcularFila();
            actualizarTotalesGenerales();
        }
    });

    document.getElementById('btn-guardar').addEventListener('click', () => {
        if(sumTotal > 0) {
            alert('¡Factura guardada correctamente en la base de datos!');
        } else {
            alert('No puedes guardar una factura vacia. Agrega productos primero.');
        }
    });
});