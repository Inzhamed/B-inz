package com.example.medicalOffice.repository;

import com.example.medicalOffice.model.Doctor;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface DoctorRepository extends MongoRepository<Doctor, ObjectId> {
}
