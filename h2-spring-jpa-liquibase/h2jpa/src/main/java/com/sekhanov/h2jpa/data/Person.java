package com.sekhanov.h2jpa.data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

/**
 * Person
 */
@Entity
@Getter
@Setter
@Table(name = "persons")
public class Person {

    @Id
    private Long id;
    private String name;
    private Integer age;
}