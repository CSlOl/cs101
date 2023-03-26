package com.cs101.dto.response.user;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class UserDetailRes {
    private UserDetail user;
}
