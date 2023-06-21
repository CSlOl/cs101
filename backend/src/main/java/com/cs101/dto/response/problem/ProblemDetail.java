package com.cs101.dto.response.problem;

import com.cs101.entity.UserProblemStatus;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class ProblemDetail {
    private String title;
    private String category;
    private String type;
    private String question;
    private String[] options;
    private String answer;
    private String description;
    private LocalDateTime registeredDate;
    private UserProblemStatus status;
    private Boolean isFavorite;
    private Long authorId;
    private String authorName;
}
