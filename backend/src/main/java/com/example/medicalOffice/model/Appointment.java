package com.example.medicalOffice.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "Appointment")
public class Appointment {
    @Id
    private ObjectId id;
    private ObjectId doctorId;
    private Date date;
    private String reason;

    public Appointment() {
    }

    public Appointment(ObjectId id, ObjectId doctorId, Date date, String reason) {
        this.id = id;
        this.doctorId = doctorId;
        this.date = date;
        this.reason = reason;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public ObjectId getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(ObjectId doctorId) {
        this.doctorId = doctorId;
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
}
