package com.example.hangman.controllers;

import com.example.hangman.entities.Word;
import com.example.hangman.services.WordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/words")
public class WordController {

    @Autowired
    private WordService wordService;

    @GetMapping
    public List<Word> getAllWords() {
        return wordService.getAllWords();
    }
    @GetMapping(value = "/word")
    public Word getRndWord() {
    	Random rng = new Random();
    	List<Word> list = new ArrayList<Word>();
    	list = wordService.getAllWords();
    	int i = rng.nextInt(list.size());
    	return list.get(i);
    }
    
    @PostMapping
    public void addNewWord(@RequestBody Word word) {
        wordService.addNewWord(word);
    }

    @GetMapping(value = "/random")
    public Optional<Word> getRandomWord(){
        List<Word> wordList = getAllWords();

        int id = (int) (Math.random() * wordList.size()) + 1;
         return wordService.getRandomWord(id);
    }


}
