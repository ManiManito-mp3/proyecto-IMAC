package com.imac.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConexionDB {
    
    // Variables en camelCase
    private static final String urlBd = "jdbc:mysql://localhost:3306/bd_imac";
    private static final String usuarioBd = "root"; // Tu usuario de XAMPP (por defecto es root)
    private static final String passwordBd = ""; // Tu contraseña de XAMPP (por defecto esta vacia)

    // Metodo en camelCase con verbo
    public static Connection obtenerConexion() {
        Connection conexion = null;
        try {
            // Cargar el driver
            Class.forName("com.mysql.cj.jdbc.Driver");
            // Crear la conexion
            conexion = DriverManager.getConnection(urlBd, usuarioBd, passwordBd);
            System.out.println("¡Conexion exitosa a MySQL!");
        } catch (ClassNotFoundException e) {
            System.out.println("Error: Driver no encontrado.");
        } catch (SQLException e) {
            System.out.println("Error al conectar: " + e.getMessage());
        }
        return conexion;
    }
}