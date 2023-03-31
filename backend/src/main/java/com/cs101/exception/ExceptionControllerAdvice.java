package com.cs101.exception;

import com.cs101.dto.response.ErrorResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Slf4j
public class ExceptionControllerAdvice {

    @ExceptionHandler(NoCategoryByNameException.class)
    protected ResponseEntity<ErrorResponse> noCategoryByNameException(NoCategoryByNameException e) {
        String errMessage = e.getMessage();
        log.error("No category by name : " + errMessage);

        return ResponseEntity
                .internalServerError()
                .body(new ErrorResponse(500, "No category by name : " + errMessage));
    }
}
