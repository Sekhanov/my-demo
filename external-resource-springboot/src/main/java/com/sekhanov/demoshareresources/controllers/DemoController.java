package com.sekhanov.demoshareresources.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * DemoController
 */
@RestController
@RequestMapping("/demo")
public class DemoController {

    @GetMapping
    public String getString() {
        return "hello form server";
    }


}