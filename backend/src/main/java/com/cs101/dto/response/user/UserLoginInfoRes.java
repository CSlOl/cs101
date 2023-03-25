package com.cs101.dto.response.user;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class UserLoginInfoRes {
    private Long userId;
    private String accessToken;
    private Boolean isAdmin;
}
