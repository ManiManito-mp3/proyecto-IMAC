package com.imac.modelo;

public class Usuario {
    
    private String docUsuario;
    private String nombreUsuario;
    private String emailUsuario;
    private String passwordUsuario;
    private String rolUsuario; // ej: Administrador, Vendedor

    public Usuario(String docUsuario, String nombreUsuario, String emailUsuario, String passwordUsuario, String rolUsuario) {
        this.docUsuario = docUsuario;
        this.nombreUsuario = nombreUsuario;
        this.emailUsuario = emailUsuario;
        this.passwordUsuario = passwordUsuario;
        this.rolUsuario = rolUsuario;
    }

    // Getters y Setters
    public String getDocUsuario() { return docUsuario; }
    public void setDocUsuario(String docUsuario) { this.docUsuario = docUsuario; }

    public String getNombreUsuario() { return nombreUsuario; }
    public void setNombreUsuario(String nombreUsuario) { this.nombreUsuario = nombreUsuario; }

    public String getEmailUsuario() { return emailUsuario; }
    public void setEmailUsuario(String emailUsuario) { this.emailUsuario = emailUsuario; }

    public String getPasswordUsuario() { return passwordUsuario; }
    public void setPasswordUsuario(String passwordUsuario) { this.passwordUsuario = passwordUsuario; }

    public String getRolUsuario() { return rolUsuario; }
    public void setRolUsuario(String rolUsuario) { this.rolUsuario = rolUsuario; }
}