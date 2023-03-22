package com.cs101.dto.response.problem;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class PendingProblemListItem {
    private Long problemId;
    private String title;
    private String type;
    private String category;
    private LocalDateTime date;
    private String status;
}
