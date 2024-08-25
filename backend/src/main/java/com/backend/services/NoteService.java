package com.backend.services;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Data
@Service
public class NoteService {
    private ArrayList<String> notes = new ArrayList<>();

    public String AddNote(String note) {
        notes.add(note);
        log.info(note + " was added to the list");
        return note;

    }

    public ArrayList<String> GetNotes() {
        return notes;
    }

}
