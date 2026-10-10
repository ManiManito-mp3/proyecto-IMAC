package com.imac;

import com.imac.modelo.Cliente;
import com.imac.dao.ClienteDAO;

public class Main {
    public static void main(String[] args) {
        
        System.out.println("Iniciando prueba de conexion y CRUD...");
        
        // 1. Instanciar el DAO
        ClienteDAO clienteDao = new ClienteDAO();
        
        // 2. Crear un objeto Cliente con datos de prueba
        Cliente nuevoCliente = new Cliente(
            "1122334455", 
            "CONSTRUCTORA JAVA", 
            "3009998877", 
            "AVENIDA SPRING 123", 
            "java@constructora.com"
        );
        
        // 3. Ejecutar el metodo de guardar (Create)
        boolean guardado = clienteDao.guardarCliente(nuevoCliente);
        
        if (guardado) {
            System.out.println("¡Exito! El cliente fue guardado en la base de datos MySQL.");
        } else {
            System.out.println("Fallo al guardar el cliente. Revisa tu conexion a XAMPP.");
        }
    }
}