package com.example.medicalOffice.controller;

import com.example.medicalOffice.model.Appointment;
import com.example.medicalOffice.repository.AppointmentRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {
    private final AppointmentRepository appointmentRepository;

    @Autowired
    public AppointmentController(AppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    @GetMapping
    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    @GetMapping("/{id}")
    public Appointment getAppointmentById(@PathVariable ObjectId id) {
        return appointmentRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Appointment addAppointment(@RequestBody Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    @PutMapping("/{id}")
    public Appointment updateAppointment(@PathVariable ObjectId id, @RequestBody Appointment updatedAppointment) {
        updatedAppointment.setId(id);
        return appointmentRepository.save(updatedAppointment);
    }

    @DeleteMapping("/{id}")
    public void deleteAppointment(@PathVariable ObjectId id) {
        appointmentRepository.deleteById(id);
    }
}
