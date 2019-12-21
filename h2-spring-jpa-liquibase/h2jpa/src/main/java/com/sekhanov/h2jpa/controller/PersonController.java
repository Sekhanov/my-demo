package com.sekhanov.h2jpa.controller;

import com.sekhanov.h2jpa.data.Person;
import com.sekhanov.h2jpa.data.PersonRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * DemoController
 */
@RestController
@RequestMapping(path = "/")
public class PersonController {

    @Autowired
    private PersonRepository personRepository;

    @GetMapping("persons")
    public Iterable<Person> getPersons() {
        return personRepository.findAll();
    }

    
}