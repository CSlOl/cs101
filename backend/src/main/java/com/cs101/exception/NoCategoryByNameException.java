package com.cs101.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
public class NoCategoryByNameException extends RuntimeException {
    public NoCategoryByNameException(String message) {
        super(message);
    }
}
