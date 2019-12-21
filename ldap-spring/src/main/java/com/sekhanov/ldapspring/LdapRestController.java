package com.sekhanov.ldapspring;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ldap.core.LdapTemplate;
import org.springframework.ldap.query.LdapQuery;
import org.springframework.ldap.query.LdapQueryBuilder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * LdapRestController
 */
@RestController
@RequestMapping("/ldap")
public class LdapRestController {

    @Autowired
    public LdapTemplate ldapTemplate;

    @GetMapping
    public Person getLdap() {
        LdapQuery ldapQuery = LdapQueryBuilder.query().where("entryUUID").is("012224e4-b2c4-1039-8ec8-e3ad7a972585");
        List<Person> persons =  ldapTemplate.search(ldapQuery, new PersonAttributeMapper());
        return persons.get(0);
    }
}