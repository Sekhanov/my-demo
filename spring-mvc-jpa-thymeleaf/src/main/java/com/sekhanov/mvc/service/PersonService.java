package com.sekhanov.mvc.service;

import java.util.ArrayList;
import java.util.List;

import com.sekhanov.mvc.domain.Person;
import com.sekhanov.mvc.jpa.repository.PersonRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * PersonService
 */
@Service
public class PersonService {

    @Autowired
    PersonRepository personRepository;

    public List<Person> getPersonList() {        
        List<Person> persons = new ArrayList<>();
        personRepository.findAll().forEach(e -> {
            persons.add(new Person(e.getName(), e.getSurname()));
        });
        return persons;     
    }
}