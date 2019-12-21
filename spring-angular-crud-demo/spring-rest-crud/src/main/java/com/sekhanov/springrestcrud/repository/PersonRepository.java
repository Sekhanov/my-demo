package com.sekhanov.springrestcrud.repository;

import com.sekhanov.springrestcrud.entity.Person;

import org.springframework.data.repository.CrudRepository;

/**
 * PersonRepository
 */
public interface PersonRepository extends CrudRepository<Person, Integer> {

    Person findByName(String name);
}

