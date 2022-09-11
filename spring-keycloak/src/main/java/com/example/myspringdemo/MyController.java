package com.example.myspringdemo;

import java.util.HashMap;
import java.util.Map;
import javax.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class MyController {

    private Map<Integer, Person> users;

    @PostConstruct
    public void init() {
        users = new HashMap<>();
        users.put(1, new Person(1, "Ivan"));
        users.put(2, new Person(2, "Sergey"));
    }


    @GetMapping("get_name")
    public Person getName(@RequestParam int id) {
        return users.get(id);
    }


    @AllArgsConstructor
    @Data
    private static class Person {
        private int id;
        private String name;
    }

}
