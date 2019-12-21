package com.sekhanov.ldapspring;

import javax.naming.NamingException;
import javax.naming.directory.Attributes;

import org.springframework.ldap.core.AttributesMapper;

/**
 * PersonAttribeteMapper
 */
public class PersonAttributeMapper implements AttributesMapper<Person> {

    @Override
    public Person mapFromAttributes(Attributes attributes) throws NamingException {        
        return new Person(
            attributes.get("givenName").get().toString(),
            attributes.get("sn").get().toString()
        );
    }

    
}