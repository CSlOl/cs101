package com.cs101.dto.response.problem;

import com.cs101.entity.UserProblemStatus;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
@Getter
@Builder
public class ProblemListItem {
    private Long problemId;
    private String title;
    private String type;
    private String category;
    private LocalDateTime date;
    private UserProblemStatus status;
}
