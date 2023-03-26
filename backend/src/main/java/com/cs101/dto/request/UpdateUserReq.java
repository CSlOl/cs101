package com.cs101.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UpdateUserReq {
    private String name;
    private String password;
    private String description;
    private String profileImageUrl;
    private String userStatus;
}
