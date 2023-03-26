package com.cs101.api.service;

import com.cs101.api.repository.UserRepository;
import com.cs101.dto.request.UpdateUserReq;
import com.cs101.dto.response.user.UserDetail;
import com.cs101.dto.response.user.UserDetailRes;
import com.cs101.entity.User;
import com.cs101.entity.UserStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static org.springframework.util.StringUtils.hasText;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserDetailRes getUserDetail(Long userId) {
        User user = userRepository.findById(userId).orElse(null);
        UserDetail userDetail = UserDetail.builder()
                .name(user.getName())
                .registerdDate(user.getRegisteredDate())
                .description(user.getDescription())
                .profileImageUrl(user.getProfileImageUrl())
//                .madeproblems(user.getProblems())
                .build();

        UserDetailRes userDetailRes = UserDetailRes.builder()
                .user(userDetail)
                .build();

        return userDetailRes;
    }

    public void updateUser(UpdateUserReq updateUserReq, Long userId) {
        User user = userRepository.findById(userId).orElse(null);
        if (hasText(updateUserReq.getName())) {
            user.setName(updateUserReq.getName());
        }

        if (hasText(updateUserReq.getPassword())) {
            user.setPassword(passwordEncoder.encode(updateUserReq.getPassword()));
        }

        if (hasText(updateUserReq.getDescription())) {
            user.setDescription(updateUserReq.getDescription());
        }

        if (hasText(updateUserReq.getProfileImageUrl())) {
            user.setProfileImageUrl(updateUserReq.getProfileImageUrl());
        }

        if (hasText(updateUserReq.getUserStatus())) {
            String userStatus = updateUserReq.getUserStatus();
            if ("WITHDRAWN".equals(userStatus)) {
                user.setUserStatus(UserStatus.WITHDRAWN);
            }
        }
    }
}
