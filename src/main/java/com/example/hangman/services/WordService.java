package com.example.hangman.services;

import com.example.hangman.dao.WordRepository;
import com.example.hangman.entities.Word;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WordService {

    @Autowired
    private WordRepository wordRepo;

    public List<Word> getAllWords() {
        return wordRepo.findAll();
    }

    public void addNewWord(Word word) {
        wordRepo.save(word);
    }
    public Optional<Word> getRandomWord(int id){
        return wordRepo.findById(id);
    }
}
