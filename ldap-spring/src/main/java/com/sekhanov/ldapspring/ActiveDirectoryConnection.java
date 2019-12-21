package com.sekhanov.ldapspring;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.ldap.core.LdapTemplate;
import org.springframework.ldap.core.support.LdapContextSource;
import org.springframework.stereotype.Component;

/**
 * ActiveDirectoryConnection
 */
@Component
public class ActiveDirectoryConnection {

    @Value("${spring.ldap.urls}")
    private String ldapUrl;

    @Value("${spring.ldap.base}")
    private String ldapBase;

    @Value("${spring.ldap.username}")
    private String ldapUser;

    @Value("${spring.ldap.password}")
    private String ldapPassword;

    @Bean(name = "ldapTemplate")
    public LdapTemplate ldapTemplate() {
        LdapTemplate ldapTemplate = new LdapTemplate(ldapContextSource());
        ldapTemplate.setIgnorePartialResultException(true);
        return ldapTemplate;
    }

    @Bean(name = "contextSource")
    private LdapContextSource ldapContextSource() {
        if (isConfigurationValid(ldapUrl, ldapBase)) {
            LdapContextSource ldapContextSource = new LdapContextSource();
            ldapContextSource.setUrl(ldapUrl);
            ldapContextSource.setBase(ldapBase);
            ldapContextSource.setUserDn(ldapUser);
            ldapContextSource.setPassword(ldapPassword);
            Map<String, Object> baseEnvironmentProperties = new HashMap<>();
            baseEnvironmentProperties.put("java.naming.ldap.attributes.binary", "objectGUID");
            ldapContextSource.setBaseEnvironmentProperties(baseEnvironmentProperties);
            ldapContextSource.afterPropertiesSet();
            return ldapContextSource;
        }
        return null;
    }

    private boolean isConfigurationValid(String url, String base) {
        return (url != null) && !url.isEmpty() && (base != null) && !base.isEmpty();
    }
}