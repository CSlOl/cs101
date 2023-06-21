package com.cs101.dto.response.problem;

import com.cs101.dto.request.PendingProblemFilter;
import com.cs101.entity.PendingStatus;
import com.querydsl.core.annotations.QueryProjection;
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
    private String registeredDate;
    private PendingStatus status;

    @QueryProjection
    public PendingProblemListItem(Long problemId, String title, String type, String category, String registeredDate, PendingStatus status) {
        this.problemId = problemId;
        this.title = title;
        this.type = type;
        this.category = category;
        this.registeredDate = registeredDate;
        this.status = status;
    }
}
