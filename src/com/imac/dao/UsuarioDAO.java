package com.imac.dao;

import com.imac.modelo.Usuario;
import com.imac.util.ConexionDB;
import java.sql.*;

public class UsuarioDAO {

    public boolean guardarUsuario(Usuario nuevoUsuario) {
        String query = "INSERT INTO usuarios (doc, nombre, email, password, rol) VALUES (?, ?, ?, ?, ?)";
        try (Connection conexion = ConexionDB.obtenerConexion();
             PreparedStatement statement = conexion.prepareStatement(query)) {
            
            statement.setString(1, nuevoUsuario.getDocUsuario());
            statement.setString(2, nuevoUsuario.getNombreUsuario());
            statement.setString(3, nuevoUsuario.getEmailUsuario());
            statement.setString(4, nuevoUsuario.getPasswordUsuario());
            statement.setString(5, nuevoUsuario.getRolUsuario());
            
            return statement.executeUpdate() > 0;
            
        } catch (SQLException e) {
            System.out.println("Error al guardar usuario: " + e.getMessage());
            return false;
        }
    }
    
    // Metodo para validar el login en el futuro
    public Usuario validarLogin(String email, String password) {
        String query = "SELECT * FROM usuarios WHERE email=? AND password=?";
        try (Connection conexion = ConexionDB.obtenerConexion();
             PreparedStatement statement = conexion.prepareStatement(query)) {
            
            statement.setString(1, email);
            statement.setString(2, password);
            ResultSet rs = statement.executeQuery();
            
            if (rs.next()) {
                return new Usuario(
                    rs.getString("doc"), rs.getString("nombre"), 
                    rs.getString("email"), rs.getString("password"), rs.getString("rol")
                );
            }
        } catch (SQLException e) {
            System.out.println("Error en login: " + e.getMessage());
        }
        return null; // Si las credenciales son incorrectas
    }   
}