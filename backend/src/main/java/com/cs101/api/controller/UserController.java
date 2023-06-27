package com.cs101.api.controller;

import com.cs101.api.service.UserService;
import com.cs101.dto.request.UpdateUserReq;
import com.cs101.dto.response.ApiResponse;
import com.cs101.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {

    private final UserService userService;
    private final JwtUtil jwtUtil;

    @GetMapping("/{userId}")
    public ResponseEntity<ApiResponse> getUser(@PathVariable Long userId) throws IOException {
        return ResponseEntity
                .ok()
                .body(new ApiResponse(200, "회원 정보 조회 성공", userService.getUserDetail(userId)));
    }

    @PutMapping()
    public ResponseEntity<ApiResponse> updateUser(@RequestBody UpdateUserReq updateUserReq) throws IOException {
        Long userId = jwtUtil.getUserId();
        userService.updateUser(updateUserReq, userId);
        return ResponseEntity
                .ok()
                .body(new ApiResponse(201, "회원 정보 수정 성공", null));
    }

}
