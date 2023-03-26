package com.cs101.api.service;

import com.cs101.api.repository.UserRepository;
import com.cs101.dto.response.user.UserDetail;
import com.cs101.dto.response.user.UserDetailRes;
import com.cs101.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

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
}
