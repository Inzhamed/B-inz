package com.example.medicalOffice.repository;

import com.example.medicalOffice.model.Patient;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface PatientRepository extends MongoRepository<Patient, ObjectId> {
}
