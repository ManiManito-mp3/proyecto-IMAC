package com.imac;

import com.imac.dao.ClienteDAO;
import com.imac.modelo.Cliente;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

// Esta anotacion es la ruta que pusimos en el action del HTML
@WebServlet("/registroCliente")
public class ClienteServlet extends HttpServlet {
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        
        // 1. Recibir los parametros exactos de los "name" del HTML
        String doc = request.getParameter("doc");
        String nombre = request.getParameter("nombre");
        String telefono = request.getParameter("telefono");
        String direccion = request.getParameter("direccion");
        String email = request.getParameter("email");
        
        // 2. Usar las clases que ya creaste para guardar en MySQL
        Cliente nuevoCliente = new Cliente(doc, nombre, telefono, direccion, email);
        ClienteDAO dao = new ClienteDAO();
        boolean guardado = dao.guardarCliente(nuevoCliente);
        
        // 3. Enviar variables al JSP para mostrar el mensaje
        request.setAttribute("exito", guardado);
        request.setAttribute("nombreCliente", nombre);
        
        // 4. Redirigir a la pagina de resultados
        request.getRequestDispatcher("resultado.jsp").forward(request, response);
    }
}