package com.example.medicalOffice.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document(collection = "Patient")
public class Patient {
    @Id
    private ObjectId id;
    private String firstName;
    private String lastName;
    private Date birthDate;
    private String phoneNum;
    private String email;
    private ObjectId doctorId;
    private List<String> allergies;

    public Patient() {

    }

    public Patient(ObjectId id, String firstName, String lastName, Date birthDate, String phoneNum, String email, ObjectId doctorId, List<String> allergies) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.phoneNum = phoneNum;
        this.email = email;
        this.doctorId = doctorId;
        this.allergies = allergies;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public String getPhoneNum() {
        return phoneNum;
    }

    public void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public ObjectId getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(ObjectId doctorId) {
        this.doctorId = doctorId;
    }

    public List<String> getAllergies() {
        return allergies;
    }

    public void setAllergies(List<String> allergies) {
        this.allergies = allergies;
    }
}
