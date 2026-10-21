package com.dbm.backend.controller;

import com.dbm.backend.entity.Contact;
import com.dbm.backend.repository.ContactRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ContactController {

    private final ContactRepository contactRepository;

    public ContactController(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @GetMapping("/health")
    public ResponseEntity<Map<String, String>> healthCheck() {
        return ResponseEntity.ok(Map.of("status", "UP", "service", "dbm-backend"));
    }

    @GetMapping("/contacts")
    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    @PostMapping("/contacts")
    public ResponseEntity<Contact> createContact(@RequestBody Contact contact) {
        Contact saved = contactRepository.save(contact);
        return ResponseEntity.ok(saved);
    }
}
