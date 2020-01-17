package com.example.hangman.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Word {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int wordId;
    private String name;
    private String definition;
    private int difficulty;

    public Word() {}

    public Word(int wordId, String name, String definition, int difficulty) {
        this.wordId = wordId;
        this.name = name;
        this.definition = definition;
        this.difficulty = difficulty;
    }

    public int getWordId() {
        return wordId;
    }

    public void setWordId(int wordId) {
        this.wordId = wordId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDefinition() {
        return definition;
    }

    public void setDefinition(String definition) {
        this.definition = definition;
    }

    public int getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(int difficulty) {
        this.difficulty = difficulty;
    }
}
