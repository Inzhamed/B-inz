package com.example.medicalOffice.repository;

import com.example.medicalOffice.model.Appointment;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AppointmentRepository extends MongoRepository<Appointment, ObjectId> {
}
