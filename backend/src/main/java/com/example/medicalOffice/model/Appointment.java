package com.example.medicalOffice.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "Appointment")
public class Appointment {
    @Id
    private ObjectId id;
    private String doctorEmail;
    private Date date;
    private String reason;
    private String patientName;

    public Appointment() {
    }

    public Appointment(ObjectId id, ObjectId doctorId, String doctorEmail, Date date, String reason, String patientName) {
        this.id = id;
        this.doctorEmail = doctorEmail;
        this.date = date;
        this.reason = reason;
        this.patientName = patientName;
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

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getDoctorEmail() {
        return doctorEmail;
    }

    public void setDoctorEmail(String doctorEmail) {
        this.doctorEmail = doctorEmail;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }
}
