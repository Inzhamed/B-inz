package com.example.medicalOffice.repository;

import com.example.medicalOffice.model.Consultation;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ConsultationRepository extends MongoRepository<Consultation, ObjectId> {
}
