package com.sekhanov.mvc.jpa.repository;

import com.sekhanov.mvc.jpa.entity.PersonEnt;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<PersonEnt, Integer>{
        
}