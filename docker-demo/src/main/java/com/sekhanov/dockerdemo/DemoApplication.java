package com.sekhanov.dockerdemo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@PropertySource("classpath:my.properties")
public class DemoApplication {

	@GetMapping("/")
	
	public String helloFromRest(@Value("${my.value}") String myValue) {
		return "hello " + myValue;
	}

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}
