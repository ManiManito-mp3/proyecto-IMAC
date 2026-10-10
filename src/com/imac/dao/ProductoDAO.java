package com.imac.dao;

import com.imac.modelo.Producto;
import com.imac.util.ConexionDB;
import java.sql.*;

public class ProductoDAO {

    public boolean guardarProducto(Producto nuevoProducto) {
        // OJO: Verifica que las columnas de tu tabla "productos" se llamen asi: codigo, nombre, precio, stock, proveedor_nit
        String query = "INSERT INTO productos (codigo, nombre, precio, stock, proveedor_nit) VALUES (?, ?, ?, ?, ?)";
        try (Connection conexion = ConexionDB.obtenerConexion();
             PreparedStatement statement = conexion.prepareStatement(query)) {
            
            statement.setString(1, nuevoProducto.getCodigoProducto());
            statement.setString(2, nuevoProducto.getNombreProducto());
            statement.setDouble(3, nuevoProducto.getPrecioProducto());
            statement.setInt(4, nuevoProducto.getStockProducto());
            statement.setString(5, nuevoProducto.getNitProveedor());
            
            return statement.executeUpdate() > 0;
            
        } catch (SQLException e) {
            System.out.println("Error al guardar producto: " + e.getMessage());
            return false;
        }
    }
}