<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Resultado del Registro</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
        .exito { color: #2e8b57; } /* Verde IMAC */
        .error { color: red; }
        .boton { padding: 10px 20px; background-color: #000080; color: white; text-decoration: none; border-radius: 5px; }
    </style>
</head>
<body>

    <!-- Usando Expression Language (EL) para leer las variables enviadas por el Servlet -->
    <% 
        Boolean exito = (Boolean) request.getAttribute("exito"); 
        String nombre = (String) request.getAttribute("nombreCliente");
    %>

    <% if (exito != null && exito) { %>
        <h1 class="exito">¡Registro Exitoso!</h1>
        <p>El cliente <b><%= nombre %></b> se guardó correctamente en la base de datos MySQL.</p>
    <% } else { %>
        <h1 class="error">Error al guardar</h1>
        <p>Hubo un problema al registrar al cliente. Es posible que el documento ya exista.</p>
    <% } %>

    <br><br>
    <a href="formulario.html" class="boton">Volver al Formulario</a>

</body>
</html>