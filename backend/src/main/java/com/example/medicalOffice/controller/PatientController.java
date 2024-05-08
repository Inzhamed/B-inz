package com.example.medicalOffice.controller;

import com.example.medicalOffice.model.Patient;
import com.example.medicalOffice.repository.PatientRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/patients")
public class PatientController {
    private final PatientRepository patientRepository;

    @Autowired
    public PatientController(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    @GetMapping
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    @GetMapping("/{id}")
    public Patient getPatientById(@PathVariable ObjectId id) {
        return patientRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Patient addPatient(@RequestBody Patient patient) {
        return patientRepository.save(patient);
    }

    @PutMapping("/{id}")
    public Patient updatePatient(@PathVariable ObjectId id, @RequestBody Patient updatedPatient) {
        updatedPatient.setId(id);
        return patientRepository.save(updatedPatient);
    }

    @DeleteMapping("/{id}")
    public void deletePatient(@PathVariable ObjectId id) {
        patientRepository.deleteById(id);
    }
}
