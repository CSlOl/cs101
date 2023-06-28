package com.cs101.api.controller;

import com.cs101.api.service.AuthService;
import com.cs101.api.service.UserService;
import com.cs101.dto.request.LoginReq;
import com.cs101.dto.request.RegisterUserReq;
import com.cs101.dto.request.RejoinUserReq;
import com.cs101.dto.response.ApiResponse;
import com.cs101.entity.User;
import com.cs101.entity.UserStatus;
import com.cs101.util.CookieUtil;
import com.cs101.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;
    private final JwtUtil jwtUtil;
    private final CookieUtil cookieUtil;
    private final UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<ApiResponse> registerUser(@RequestBody RegisterUserReq registerUserReq) throws IOException {
        if (userService.existsByEmail(registerUserReq.getEmail())) {
            return ResponseEntity
                    .ok()
                    .body(new ApiResponse(403, "이미 존재하는 이메일입니다.", null));
        }
        authService.registerUser(registerUserReq);
        return ResponseEntity
                .ok()
                .body(new ApiResponse(201, "회원 가입 성공", null));
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse> login(@RequestBody LoginReq loginReq, HttpServletResponse response) throws IOException {
        try {
            String email = loginReq.getEmail();
            String password = loginReq.getPassword();
            User user = authService.getUserByUserEmail(email);

            if (user.getUserStatus() == UserStatus.WITHDRAWN) {
                return ResponseEntity
                        .ok()
                        .body(new ApiResponse(403, "탈퇴한 회원입니다.", null));
            }

            if (authService.checkPassword(password, user.getPassword())) {
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
                        .body(new ApiResponse(200, "로그인 성공", authService.getUserLoginInfo(user.getId(), accessToken, user.isAdmin())));
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

    @GetMapping("/logout")
    public ResponseEntity<ApiResponse> logout(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String accessToken = null;
        String refreshToken = null;
        String bearer = request.getHeader("Authorization");
        if (bearer != null && !"".equals(bearer)) {
            accessToken = bearer.split(" ")[1];
        }
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie c : cookies) {
                if ("accessToken".equals(c.getName())) {
                    accessToken = c.getValue();
                } else if ("refreshToken".equals(c.getName())) {
                    refreshToken = c.getValue();
                }
            }

            Cookie accessCookie = new Cookie("accessToken", null);
            accessCookie.setMaxAge(0);
            accessCookie.setPath("/");
            response.addCookie(accessCookie);

            Cookie refreshCookie = new Cookie("refreshToken", null);
            refreshCookie.setMaxAge(0);
            refreshCookie.setPath("/");
            response.addCookie(refreshCookie);
        }
        return ResponseEntity
                .ok()
                .body(new ApiResponse<>(200, "로그아웃 성공", null));
    }

    @PutMapping("/rejoin")
    public ResponseEntity<ApiResponse> rejoin(@RequestBody RejoinUserReq rejoinUserReq) throws IOException {
        authService.rejoinUser(rejoinUserReq);
        return ResponseEntity
                .ok()
                .body(new ApiResponse(201, "회원 재가입 성공", null));
    }
}