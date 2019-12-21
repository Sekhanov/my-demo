package com.sekhanov.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


/**
 * HelloController
 */
@RestController
@RequestMapping("/api")
public class HelloController {

    @GetMapping("/demo")
    public String demo() {
        return "hello from rest";
    }

    @GetMapping(value="/me")
    public ResponseEntity<OAuth2AuthenticationToken> getMethodName(OAuth2AuthenticationToken currentUser) {
        return ResponseEntity.ok(currentUser);
    }


    
}