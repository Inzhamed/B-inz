package com.example.medicalOffice.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document(collection = "Consultation")
public class Consultation {
    @Id
    private ObjectId id;
    private ObjectId patientId;
    private Date date;
    private String diagnosis;
    private List<String> medications;

    public Consultation() {
    }

    public Consultation(ObjectId id, ObjectId patientId, Date date, String diagnosis, List<String> medications) {
        this.id = id;
        this.patientId = patientId;
        this.date = date;
        this.diagnosis = diagnosis;
        this.medications = medications;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public ObjectId getPatientId() {
        return patientId;
    }

    public void setPatientId(ObjectId patientId) {
        this.patientId = patientId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getDiagnosis() {
        return diagnosis;
    }

    public void setDiagnosis(String diagnosis) {
        this.diagnosis = diagnosis;
    }

    public List<String> getMedications() {
        return medications;
    }

    public void setMedications(List<String> medications) {
        this.medications = medications;
    }

}
