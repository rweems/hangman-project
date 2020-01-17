package com.example.hangman.dao;

import com.example.hangman.entities.Word;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WordRepository extends CrudRepository<Word, Integer> {

    public List<Word> findAll();

}
