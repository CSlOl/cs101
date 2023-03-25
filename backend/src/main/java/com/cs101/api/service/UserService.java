package com.cs101.api.service;

import com.cs101.api.repository.UserRepository;
import com.cs101.dto.request.RegisterUserReq;
import com.cs101.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public void registerUser(RegisterUserReq registerUserReq) throws IOException {
        User user = User.builder()
                .email(registerUserReq.getEmail())
                .password(passwordEncoder.encode(registerUserReq.getPassword()))
                .name(registerUserReq.getName())
                .registeredDate(LocalDateTime.now())
                .build();
        userRepository.save(user);
    }
}
