package com.example.medicalOffice.controller;

import com.example.medicalOffice.model.Doctor;
import com.example.medicalOffice.repository.DoctorRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/doctors")
public class DoctorController {
    private final DoctorRepository doctorRepository;

    @Autowired
    public DoctorController(DoctorRepository doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    @GetMapping
    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }

    @GetMapping("/{id}")
    public Doctor getDoctorById(@PathVariable ObjectId id) {
        return doctorRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Doctor addDoctor(@RequestBody Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    @PutMapping("/{id}")
    public Doctor updateDoctor(@PathVariable ObjectId id, @RequestBody Doctor updatedDoctor) {
        updatedDoctor.setId(id);
        return doctorRepository.save(updatedDoctor);

    }

    @DeleteMapping("/{id}")
    public void deleteDoctor(@PathVariable ObjectId id) {
        doctorRepository.deleteById(id);
    }
}
