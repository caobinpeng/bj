package com.binpeng.upup2020;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.binpeng")
public class MyBootApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyBootApplication.class, args);
    }
}
