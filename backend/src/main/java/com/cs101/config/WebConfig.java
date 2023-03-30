package com.cs101.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/**")
                .allowedOrigins("http://3.36.85.235/","http://3.36.85.235:8080/")
                .allowedMethods("GET","POST","DELETE","PUT")
                .maxAge(3000);
    }
}
