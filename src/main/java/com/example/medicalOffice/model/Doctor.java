package com.example.medicalOffice.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Doctor")

    public class Doctor {
    @Id
    private ObjectId id;
    private String Nom;
    private String Prenom;
    private String Specialité;
    private String Adresse;
    private int Num_Tel;
    private String Email;
    private String Mdps;

    public Doctor(ObjectId id, String nom, String prenom, String specialité, String adresse, int num_Tel, String email, String mdps) {
        this.id = id;
        Nom = nom;
        Prenom = prenom;
        Specialité = specialité;
        Adresse = adresse;
        Num_Tel = num_Tel;
        Email = email;
        Mdps = mdps;
    }

    public Doctor() {
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getNom() {
        return Nom;
    }

    public void setNom(String nom) {
        Nom = nom;
    }

    public String getPrenom() {
        return Prenom;
    }

    public void setPrenom(String prenom) {
        Prenom = prenom;
    }

    public String getSpecialité() {
        return Specialité;
    }

    public void setSpecialité(String specialité) {
        Specialité = specialité;
    }

    public String getAdresse() {
        return Adresse;
    }

    public void setAdresse(String adresse) {
        Adresse = adresse;
    }

    public int getNum_Tel() {
        return Num_Tel;
    }

    public void setNum_Tel(int num_Tel) {
        Num_Tel = num_Tel;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getMdps() {
        return Mdps;
    }

    public void setMdps(String mdps) {
        Mdps = mdps;
    }
}

