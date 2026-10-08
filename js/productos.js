document.addEventListener('DOMContentLoaded', () => {

    // 1. Boton Inicio
    document.getElementById('btn-inicio').addEventListener('click', () => {
        window.location.href = 'dashboard.html';
    });

    // 2. Base de datos temporal (LocalStorage)
    let productos = JSON.parse(localStorage.getItem('bd_productos')) || [
        { codig: 1, desc: 'ARENA DE PENA', categoria: 'MATERIAL DE PENA', medida: 'M3', ubicacion: 'ACOPIO', stockMin: 1, pMenor: 100000, pMayor: 90000, p3: 81667, p4: 83333, p5: '', p6: '' },
        { codig: 2, desc: 'ARENA DE PLANTA', categoria: 'MATERIAL DE RIO', medida: 'M3', ubicacion: 'ACOPIO', stockMin: 1, pMenor: 100000, pMayor: 75000, p3: 90000, p4: '', p5: '', p6: '' }
    ];

    let ultimoCodigo = productos.length > 0 ? Math.max(...productos.map(p => p.codig)) : 0;
    const cuerpoTabla = document.getElementById('cuerpo-tabla-productos');

    // Formato Moneda
    const formatoMoneda = (num) => {
        if (!num || num === '') return '-';
        return '$ ' + parseFloat(num).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    };

    // 3. Dibujar la tabla
    function cargarTabla() {
        cuerpoTabla.innerHTML = '';
        productos.forEach(prod => {
            agregarFilaHtml(prod, false);
        });
    }

    // 4. Crear las filas (Normales o Editables)
    function agregarFilaHtml(prod, esEditable) {
        const fila = document.createElement('tr');
        
        if (esEditable) {
            // DISEÑO MODERNO DE EDICION
            fila.className = 'fila-edicion';
            fila.innerHTML = `
                <td class="centro"><span class="texto-codigo">${prod.codig}</span></td>
                <td><input type="text" class="input-celda input-desc" id="n-desc" placeholder="Nombre del articulo..." autofocus></td>
                <td>
                    <select class="input-celda input-corto" id="n-cat">
                        <option value="MATERIAL DE RIO">MATERIAL DE RIO</option>
                        <option value="MATERIAL DE PENA">MATERIAL DE PENA</option>
                        <option value="HERRAMIENTAS">HERRAMIENTAS</option>
                        <option value="GENERAL">GENERAL</option>
                    </select>
                </td>
                <td><input type="text" class="input-celda" id="n-med" value="M3" style="width: 70px;"></td>
                <td><input type="text" class="input-celda" id="n-ubi" value="ACOPIO" style="width: 90px;"></td>
                <td class="centro"><input type="number" class="input-celda" id="n-min" value="1" style="width: 60px;"></td>
                <td><input type="number" class="input-celda input-precio" id="n-p1" placeholder="0"></td>
                <td><input type="number" class="input-celda input-precio" id="n-p2" placeholder="0"></td>
                <td><input type="number" class="input-celda input-precio" id="n-p3" placeholder="0"></td>
                <td><input type="number" class="input-celda input-precio" id="n-p4" placeholder="0"></td>
                <td><input type="number" class="input-celda input-precio" id="n-p5" placeholder="0"></td>
                <td><input type="number" class="input-celda input-precio" id="n-p6" placeholder="0"></td>
                <td class="centro"><button class="btn-guardar-fila">💾 Guardar</button></td>
            `;

            // Logica para guardar la fila interactiva
            fila.querySelector('.btn-guardar-fila').addEventListener('click', () => {
                const nombreItem = document.getElementById('n-desc').value.trim().toUpperCase();
                
                if (nombreItem === '') {
                    alert('Debes escribir un nombre para el producto.');
                    return;
                }

                const nuevoProd = {
                    codig: prod.codig,
                    desc: nombreItem,
                    categoria: document.getElementById('n-cat').value,
                    medida: document.getElementById('n-med').value.toUpperCase(),
                    ubicacion: document.getElementById('n-ubi').value.toUpperCase(),
                    stockMin: document.getElementById('n-min').value,
                    pMenor: document.getElementById('n-p1').value,
                    pMayor: document.getElementById('n-p2').value,
                    p3: document.getElementById('n-p3').value,
                    p4: document.getElementById('n-p4').value,
                    p5: document.getElementById('n-p5').value,
                    p6: document.getElementById('n-p6').value
                };

                productos.push(nuevoProd); 
                localStorage.setItem('bd_productos', JSON.stringify(productos)); // Guarda en memoria
                cargarTabla(); 
            });

        } else {
            // DISEÑO NORMAL (SOLO LECTURA)
            fila.innerHTML = `
                <td class="centro"><span class="texto-codigo">${prod.codig}</span></td>
                <td><strong>${prod.desc}</strong></td>
                <td>${prod.categoria}</td>
                <td>${prod.medida}</td>
                <td>${prod.ubicacion}</td>
                <td class="centro"><strong>${prod.stockMin}</strong></td>
                <td class="derecha">${formatoMoneda(prod.pMenor)}</td>
                <td class="derecha">${formatoMoneda(prod.pMayor)}</td>
                <td class="derecha">${formatoMoneda(prod.p3)}</td>
                <td class="derecha">${formatoMoneda(prod.p4)}</td>
                <td class="derecha">${formatoMoneda(prod.p5)}</td>
                <td class="derecha">${formatoMoneda(prod.p6)}</td>
                <td class="centro">-</td>
            `;
        }
        
        cuerpoTabla.appendChild(fila);
    }

    cargarTabla();

    // 5. Boton NUEVO REGISTRO
    document.getElementById('btn-nuevo').addEventListener('click', () => {
        ultimoCodigo++; 
        
        const objVacio = { codig: ultimoCodigo };
        agregarFilaHtml(objVacio, true);
        
        // Animacion suave de scroll hacia abajo
        const contenedor = document.querySelector('.tabla-contenedor');
        contenedor.scrollTo({
            top: contenedor.scrollHeight,
            behavior: 'smooth'
        });
    });

    // 6. Boton Actualizar
    document.getElementById('btn-actualizar').addEventListener('click', () => {
        cargarTabla();
    });

});