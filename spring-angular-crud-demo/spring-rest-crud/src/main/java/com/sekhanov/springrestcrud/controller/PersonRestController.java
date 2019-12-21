package com.sekhanov.springrestcrud.controller;

import javax.validation.Valid;

import com.sekhanov.springrestcrud.entity.Person;
import com.sekhanov.springrestcrud.service.PersonService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * PersonRestController
 */
@RestController
@CrossOrigin
@RequestMapping("/person")
public class PersonRestController {

    @Autowired
    private PersonService personService;

    @GetMapping("{id}")
    public Person getPersonByName(@PathVariable("id") Integer id) {      
        return personService.getPersonById(id);
    }

    @GetMapping
    public Iterable<Person> getAllPersons() {
        return personService.getAllPersons();
    }

    @PostMapping
    public Person persistPerson(@Valid @RequestBody Person person) {
        return personService.persistPerson(person);
    }

}