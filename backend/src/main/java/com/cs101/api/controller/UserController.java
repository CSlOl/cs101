package com.cs101.api.controller;

import com.cs101.api.service.UserService;
import com.cs101.dto.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {

    private final UserService userService;
    @GetMapping("/{userId}")
    public ResponseEntity<ApiResponse> getUser(@PathVariable Long userId) throws IOException {
        return ResponseEntity
                .ok()
                .body(new ApiResponse(200, "회원 정보 조회 성공", userService.getUserDetail(userId)));
    }

}
