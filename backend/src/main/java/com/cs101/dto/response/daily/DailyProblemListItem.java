package com.cs101.dto.response.daily;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class DailyProblemListItem {
    private Long problemId;
    private String title;
    private String type;
    private String category;

    @QueryProjection
    public DailyProblemListItem(Long problemId, String title, String type, String category) {
        this.problemId = problemId;
        this.title = title;
        this.type = type;
        this.category = category;
    }
}
