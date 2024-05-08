package com.example.medicalOffice.controller;

import com.example.medicalOffice.model.Consultation;
import com.example.medicalOffice.repository.ConsultationRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/consultations")
public class ConsultationController {
    private final ConsultationRepository consultationRepository;

    @Autowired
    public ConsultationController(ConsultationRepository consultationRepository) {
        this.consultationRepository = consultationRepository;
    }

    @GetMapping
    public List<Consultation> getAllConsultations() {
        return consultationRepository.findAll();
    }

    @GetMapping("/{id}")
    public Consultation getConsultationById(@PathVariable ObjectId id) {
        return consultationRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Consultation addConsultation(@RequestBody Consultation consultation) {
        return consultationRepository.save(consultation);
    }

    @PutMapping("/{id}")
    public Consultation updateConsultation(@PathVariable ObjectId id, @RequestBody Consultation updatedConsultation) {
        updatedConsultation.setId(id);
        return consultationRepository.save(updatedConsultation);
    }

    @DeleteMapping("/{id}")
    public void deleteConsultation(@PathVariable ObjectId id) {
        consultationRepository.deleteById(id);
    }
}
