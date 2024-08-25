package com.backend.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.backend.kafka.KafkaProducer;
import com.backend.services.NoteService;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Slf4j
@AllArgsConstructor
@RestController
public class Controller {

    private final KafkaProducer kafkaProducer;

    @Autowired
    private NoteService noteService;

    @GetMapping("hi")
    public String hello() {
        log.info("hello was called");
        return "hello";
    }

    @GetMapping("/")
    public String index() {
        log.info("index was called");
        return "index";
    }

    @PostMapping("note")
    public String AddNote(@RequestBody String note) {
        noteService.AddNote(note);
        kafkaProducer.sendMessage(note);
        return note;
    }

    @GetMapping("notes")
    public String getNotes() {
        return noteService.GetNotes().toString();
    }

}
