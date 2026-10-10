package com.imac.modelo;

public class Cliente {
    
    // Variables en camelCase
    private String docCliente;
    private String nombreCliente;
    private String telefonoCliente;
    private String direccionCliente;
    private String emailCliente;

    public Cliente(String docCliente, String nombreCliente, String telefonoCliente, String direccionCliente, String emailCliente) {
        this.docCliente = docCliente;
        this.nombreCliente = nombreCliente;
        this.telefonoCliente = telefonoCliente;
        this.direccionCliente = direccionCliente;
        this.emailCliente = emailCliente;
    }

    public String getDocCliente() { return docCliente; }
    public void setDocCliente(String docCliente) { this.docCliente = docCliente; }

    public String getNombreCliente() { return nombreCliente; }
    public void setNombreCliente(String nombreCliente) { this.nombreCliente = nombreCliente; }

    public String getTelefonoCliente() { return telefonoCliente; }
    public void setTelefonoCliente(String telefonoCliente) { this.telefonoCliente = telefonoCliente; }

    public String getDireccionCliente() { return direccionCliente; }
    public void setDireccionCliente(String direccionCliente) { this.direccionCliente = direccionCliente; }

    public String getEmailCliente() { return emailCliente; }
    public void setEmailCliente(String emailCliente) { this.emailCliente = emailCliente; }
}