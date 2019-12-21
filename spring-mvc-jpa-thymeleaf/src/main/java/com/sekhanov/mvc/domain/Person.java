package com.sekhanov.mvc.domain;

import lombok.Getter;
import lombok.Setter;

/**
 * Person
 */
@Getter
@Setter
public class Person {    

    private String name;
    private String surname;

    public Person(String name, String surname) {
        this.name = name;
        this.surname = surname;
    }

}