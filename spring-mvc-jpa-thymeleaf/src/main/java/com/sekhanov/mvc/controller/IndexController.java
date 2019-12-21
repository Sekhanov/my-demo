package com.sekhanov.mvc.controller;

import com.sekhanov.mvc.service.PersonService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * IndexController
 */
@Controller
@RequestMapping("/")
public class IndexController {

    @Autowired
    private PersonService personService;

    @GetMapping
    public String showBasicPage(Model model) {
        model.addAttribute("persons", personService.getPersonList());
        return "index";
    }
}