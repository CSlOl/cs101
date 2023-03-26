package com.cs101.api.service;

import com.cs101.api.repository.UserRepository;
import com.cs101.dto.request.RegisterUserReq;
import com.cs101.dto.response.auth.UserLoginInfoRes;
import com.cs101.entity.User;
import com.cs101.entity.UserStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.time.LocalDateTime;

@Service
@Transactional
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public void registerUser(RegisterUserReq registerUserReq) throws IOException {
        User user = User.builder()
                .email(registerUserReq.getEmail())
                .password(passwordEncoder.encode(registerUserReq.getPassword()))
                .name(registerUserReq.getName())
                .registeredDate(LocalDateTime.now())
                .userStatus(UserStatus.ACTIVATED)
                .build();
        userRepository.save(user);
    }

    public User getUserByUserEmail(String email) {
        User user = userRepository.findByEmail(email).get();
        return user;
    }

    public boolean checkPassword(String password, String userPassword) {
        if (passwordEncoder.matches(password, userPassword)) {
            return true;
        }
        return false;
    }

    public UserLoginInfoRes getUserLoginInfo(Long userId, String accessToken, boolean admin) {
        UserLoginInfoRes userLoginInfoRes = UserLoginInfoRes.builder()
                .userId(userId)
                .accessToken(accessToken)
                .isAdmin(admin)
                .build();

        return userLoginInfoRes;
    }
}
