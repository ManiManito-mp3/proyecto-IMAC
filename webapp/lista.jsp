<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.List" %>
<%@ page import="com.imac.modelo.Cliente" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Lista de Clientes</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;}
        table { width: 100%; border-collapse: collapse; background-color: white;}
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #000080; color: white; }
    </style>
</head>
<body>
    <h2>Listado de Clientes (Método GET)</h2>
    <table>
        <tr>
            <th>Documento</th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Email</th>
        </tr>
        <% 
            List<Cliente> lista = (List<Cliente>) request.getAttribute("clientes");
            if(lista != null) {
                for(Cliente c : lista) {
        %>
        <tr>
            <td><%= c.getDocCliente() %></td>
            <td><%= c.getNombreCliente() %></td>
            <td><%= c.getTelefonoCliente() %></td>
            <td><%= c.getDireccionCliente() %></td>
            <td><%= c.getEmailCliente() %></td>
        </tr>
        <% 
                }
            }
        %>
    </table>
    <br>
    <a href="formulario.html">Volver al Formulario</a>
</body>
</html>