package com.imac.dao;

import com.imac.modelo.Cliente;
import com.imac.util.ConexionDB;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ClienteDAO {

    // 1. Create -> INSERT INTO (Metodo camelCase con verbo)
    public boolean guardarCliente(Cliente nuevoCliente) {
        String query = "INSERT INTO clientes (doc, nombre, telefono, direccion, email) VALUES (?, ?, ?, ?, ?)";
        try (Connection conexion = ConexionDB.obtenerConexion();
             PreparedStatement statement = conexion.prepareStatement(query)) {
            
            statement.setString(1, nuevoCliente.getDocCliente());
            statement.setString(2, nuevoCliente.getNombreCliente());
            statement.setString(3, nuevoCliente.getTelefonoCliente());
            statement.setString(4, nuevoCliente.getDireccionCliente());
            statement.setString(5, nuevoCliente.getEmailCliente());
            
            return statement.executeUpdate() > 0;
            
        } catch (SQLException e) {
            System.out.println("Error al guardar: " + e.getMessage());
            return false;
        }
    }

    // 2. Read -> SELECT (Metodo camelCase con verbo)
    public List<Cliente> obtenerClientes() {
        List<Cliente> listaClientes = new ArrayList<>();
        String query = "SELECT * FROM clientes";
        
        try (Connection conexion = ConexionDB.obtenerConexion();
             PreparedStatement statement = conexion.prepareStatement(query);
             ResultSet resultSet = statement.executeQuery()) {
            
            while (resultSet.next()) {
                Cliente cliente = new Cliente(
                    resultSet.getString("doc"),
                    resultSet.getString("nombre"),
                    resultSet.getString("telefono"),
                    resultSet.getString("direccion"),
                    resultSet.getString("email")
                );
                listaClientes.add(cliente);
            }
        } catch (SQLException e) {
            System.out.println("Error al obtener: " + e.getMessage());
        }
        return listaClientes;
    }

    // 3. Update -> UPDATE (Metodo camelCase con verbo)
    public boolean actualizarCliente(Cliente clienteActualizado) {
        String query = "UPDATE clientes SET nombre=?, telefono=?, direccion=?, email=? WHERE doc=?";
        try (Connection conexion = ConexionDB.obtenerConexion();
             PreparedStatement statement = conexion.prepareStatement(query)) {
            
            statement.setString(1, clienteActualizado.getNombreCliente());
            statement.setString(2, clienteActualizado.getTelefonoCliente());
            statement.setString(3, clienteActualizado.getDireccionCliente());
            statement.setString(4, clienteActualizado.getEmailCliente());
            statement.setString(5, clienteActualizado.getDocCliente());
            
            return statement.executeUpdate() > 0;
            
        } catch (SQLException e) {
            System.out.println("Error al actualizar: " + e.getMessage());
            return false;
        }
    }

    // 4. Delete -> DELETE (Metodo camelCase con verbo)
    public boolean eliminarCliente(String docCliente) {
        String query = "DELETE FROM clientes WHERE doc=?";
        try (Connection conexion = ConexionDB.obtenerConexion();
             PreparedStatement statement = conexion.prepareStatement(query)) {
            
            statement.setString(1, docCliente);
            return statement.executeUpdate() > 0;
            
        } catch (SQLException e) {
            System.out.println("Error al eliminar: " + e.getMessage());
            return false;
        }
    }
}