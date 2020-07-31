package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

  @GetMapping("/")
    public String hello(@RequestParam(value = "name", defaultValue = "Service Java") String name) {
    return String.format("This is %s, running in %s mode!", name, System.getenv("SPRING_PROFILES_ACTIVE"));
  }

}
