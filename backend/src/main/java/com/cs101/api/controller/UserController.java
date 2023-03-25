package com.cs101.api.controller;

import com.cs101.api.service.UserService;
import com.cs101.dto.request.RegisterUserReq;
import com.cs101.dto.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<ApiResponse> registerUser(@RequestBody RegisterUserReq registerUserReq) throws IOException {
        userService.registerUser(registerUserReq);
        return ResponseEntity
                .ok()
                .body(new ApiResponse(201, "회원 가입 성공", null));
    }
}