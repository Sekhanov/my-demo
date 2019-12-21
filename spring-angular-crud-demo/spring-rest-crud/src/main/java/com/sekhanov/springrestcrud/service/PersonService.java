package com.sekhanov.springrestcrud.service;

import com.sekhanov.springrestcrud.entity.Person;
import com.sekhanov.springrestcrud.repository.PersonRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * PersonService
 */
@Service
public class PersonService {

    @Autowired
    private PersonRepository personRepository;

    public Person getPersonById(Integer id) {
        return personRepository.findById(id).get();
    }

    public Person getPersonByName(String name) {
        return personRepository.findByName(name);
    }

    public Iterable<Person> getAllPersons() {
        return personRepository.findAll();
    }

    public Person persistPerson(Person person) {
        return personRepository.save(person);
    }
}