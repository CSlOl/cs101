package com.cs101.api.controller;

import com.cs101.api.service.UserService;
import com.cs101.dto.request.LoginReq;
import com.cs101.dto.request.RegisterUserReq;
import com.cs101.dto.response.ApiResponse;
import com.cs101.entity.User;
import com.cs101.entity.UserStatus;
import com.cs101.util.CookieUtil;
import com.cs101.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {

    private final UserService userService;
    private final JwtUtil jwtUtil;
    private final CookieUtil cookieUtil;

    @PostMapping("/signup")
    public ResponseEntity<ApiResponse> registerUser(@RequestBody RegisterUserReq registerUserReq) throws IOException {
        userService.registerUser(registerUserReq);
        return ResponseEntity
                .ok()
                .body(new ApiResponse(201, "회원 가입 성공", null));
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse> login(@RequestBody LoginReq loginReq, HttpServletResponse response) throws IOException {
        try {
            String email = loginReq.getEmail();
            String password = loginReq.getPassword();
            User user = userService.getUserByUserEmail(email);

            if (user.getUserStatus() == UserStatus.WITHDRAWN) {
                return ResponseEntity
                        .ok()
                        .body(new ApiResponse(403, "탈퇴한 회원입니다.", null));
            }

            if (userService.checkPassword(password, user.getPassword())) {
                Map<String, String> userInfo = new HashMap<>();
                userInfo.put("id", user.getId() + "");

                String accessToken = jwtUtil.createAccessToken("user", userInfo, "user");
                Cookie accessCookie = cookieUtil.addAccessCookie(accessToken);
                response.addCookie(accessCookie);

                String refreshToken = jwtUtil.createRefreshToken("user", userInfo, "user");
                Cookie refreshCookie = cookieUtil.addRefreshCookie(refreshToken);
                response.addCookie(refreshCookie);

                return ResponseEntity
                        .ok()
                        .body(new ApiResponse(200, "로그인 성공", userService.getUserLoginInfo(user.getId(), accessToken, user.isAdmin())));
            }

            return ResponseEntity
                    .ok()
                    .body(new ApiResponse<>(401, "잘못된 비밀번호입니다.", null));
        } catch (NoSuchElementException e) {
            return ResponseEntity
                    .ok()
                    .body(new ApiResponse<>(404, "존재하지 않는 계정입니다.", null));
        }

    }
}