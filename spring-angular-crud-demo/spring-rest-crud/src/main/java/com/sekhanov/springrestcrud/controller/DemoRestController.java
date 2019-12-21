package com.sekhanov.springrestcrud.controller;

import com.sekhanov.springrestcrud.dto.DemoObj;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * DemoRestController
 */
@RestController
@RequestMapping("/demo-rest")
public class DemoRestController {
    
    @GetMapping
    public DemoObj getDemoObj() {
        return new DemoObj("string", 111);
    }
}