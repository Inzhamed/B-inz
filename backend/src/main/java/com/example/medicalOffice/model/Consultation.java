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
    private String doctorEmail;
    private String patientNumber;
    private Date date;
    private String diagnosis;
    private List<String> medications;

    public Consultation() {
    }

    public Consultation(ObjectId id, String doctorEmail, String patientNumber, Date date, String diagnosis, List<String> medications) {
        this.id = id;
        this.doctorEmail = doctorEmail;
        this.patientNumber = patientNumber;
        this.date = date;
        this.diagnosis = diagnosis;
        this.medications = medications;
    }

    public String getDoctorEmail() {
        return doctorEmail;
    }

    public void setDoctorEmail(String doctorEmail) {
        this.doctorEmail = doctorEmail;
    }

    public String getPatientNumber() {
        return patientNumber;
    }

    public void setPatientEmail(String patientNumber) {
        this.patientNumber = patientNumber;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
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
