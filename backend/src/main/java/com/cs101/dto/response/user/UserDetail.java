package com.cs101.dto.response.user;

import com.cs101.entity.Problem;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Builder
public class UserDetail {
    private String name;
    private LocalDateTime registerdDate;
    private String description;
    private String profileImageUrl;
//    private List<Problem> madeproblems;
}
