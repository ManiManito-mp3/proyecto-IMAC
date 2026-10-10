package com.imac.dao;

import com.imac.modelo.Proveedor;
import com.imac.util.ConexionDB;
import java.sql.*;

public class ProveedorDAO {

    public boolean guardarProveedor(Proveedor nuevoProveedor) {
        // OJO: Verifica que las columnas de tu tabla "proveedores" se llamen asi: nit, nombre, telefono, direccion, email
        String query = "INSERT INTO proveedores (nit, nombre, telefono, direccion, email) VALUES (?, ?, ?, ?, ?)";
        try (Connection conexion = ConexionDB.obtenerConexion();
             PreparedStatement statement = conexion.prepareStatement(query)) {
            
            statement.setString(1, nuevoProveedor.getNitProveedor());
            statement.setString(2, nuevoProveedor.getNombreProveedor());
            statement.setString(3, nuevoProveedor.getTelefonoProveedor());
            statement.setString(4, nuevoProveedor.getDireccionProveedor());
            statement.setString(5, nuevoProveedor.getEmailProveedor());
            
            return statement.executeUpdate() > 0;
            
        } catch (SQLException e) {
            System.out.println("Error al guardar proveedor: " + e.getMessage());
            return false;
        }
    }
}