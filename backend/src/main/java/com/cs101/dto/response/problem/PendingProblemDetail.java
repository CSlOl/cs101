package com.cs101.dto.response.problem;

import com.cs101.entity.PendingStatus;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class PendingProblemDetail {
    private String title;
    private String category;
    private String type;
    private String question;
    private String[] options;
    private String answer;
    private String description;
    private PendingStatus status;
    private LocalDateTime registeredDate;
    private Long authorId;
    private String authorName;
}
