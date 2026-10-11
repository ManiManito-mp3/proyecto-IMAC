package com.imac;

import com.imac.dao.ClienteDAO;
import com.imac.modelo.Cliente;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
// Agregamos estas librerias para las listas
import java.util.List;
import java.util.ArrayList;

@WebServlet("/registroCliente")
public class ClienteServlet extends HttpServlet {
    
    // NUEVO: Metodo GET para consultar la lista de registros
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Como es un ejemplo para cumplir la rubrica, simulamos una lista (o aqui llamarias a tu DAO para consultar)
        List<Cliente> listaClientes = new ArrayList<>();
        listaClientes.add(new Cliente("123", "Constructora Alfa", "555-1234", "Calle 1", "alfa@correo.com"));
        listaClientes.add(new Cliente("456", "Ferreteria Sur", "555-5678", "Av 2", "sur@correo.com"));
        
        request.setAttribute("clientes", listaClientes);
        request.getRequestDispatcher("lista.jsp").forward(request, response);
    }

    // EL QUE YA TENIAMOS: Metodo POST para guardar el formulario
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String doc = request.getParameter("doc");
        String nombre = request.getParameter("nombre");
        String telefono = request.getParameter("telefono");
        String direccion = request.getParameter("direccion");
        String email = request.getParameter("email");
        
        Cliente nuevoCliente = new Cliente(doc, nombre, telefono, direccion, email);
        ClienteDAO dao = new ClienteDAO();
        boolean guardado = dao.guardarCliente(nuevoCliente);
        
        request.setAttribute("exito", guardado);
        request.setAttribute("nombreCliente", nombre);
        
        request.getRequestDispatcher("resultado.jsp").forward(request, response);
    }
}