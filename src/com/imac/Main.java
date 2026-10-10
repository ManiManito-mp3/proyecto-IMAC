package com.imac;

import com.imac.modelo.Cliente;
import com.imac.dao.ClienteDAO;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        ClienteDAO dao = new ClienteDAO();

        System.out.println("Iniciando prueba completa de CRUD...\n");

        // 1. INSERTAR (Create)
        System.out.println("--- 1. PROBANDO INSERTAR ---");
        Cliente nuevo = new Cliente("777666555", "CLIENTE PARA FOTO", "3000000", "SENA", "test@sena.com");
        System.out.println("Insertado exitosamente: " + dao.guardarCliente(nuevo));

        // 2. CONSULTAR (Read)
        System.out.println("\n--- 2. PROBANDO CONSULTAR ---");
        List<Cliente> clientes = dao.obtenerClientes();
        for (Cliente c : clientes) {
            System.out.println("Cliente en BD: " + c.getDocCliente() + " - " + c.getNombreCliente());
        }

        // 3. ACTUALIZAR (Update)
        System.out.println("\n--- 3. PROBANDO ACTUALIZAR ---");
        Cliente modificado = new Cliente("777666555", "CLIENTE MODIFICADO", "3111111", "SENA 2", "mod@sena.com");
        System.out.println("Actualizado exitosamente: " + dao.actualizarCliente(modificado));

        // 4. ELIMINAR (Apagado para la foto)
        System.out.println("\n--- 4. PROBANDO ELIMINAR (Desactivado) ---");
        // boolean eliminado = dao.eliminarCliente("777666555");
        // System.out.println("Eliminado exitosamente: " + eliminado);
        System.out.println("El cliente se dejó en la base de datos para la captura.");
    }
}
    
