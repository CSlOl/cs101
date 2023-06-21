package com.cs101.dto.response.problem;

import com.cs101.entity.UserProblemStatus;
import com.querydsl.core.annotations.QueryProjection;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class ProblemListItem {
    private Long problemId;
    private String title;
    private String type;
    private String category;
    private String acceptedDate;
    private UserProblemStatus status;
    private boolean isFavorites;

    @QueryProjection
    public ProblemListItem(Long problemId, String title, String type, String category, String acceptedDate, UserProblemStatus status, boolean isFavorites) {
        this.problemId = problemId;
        this.title = title;
        this.type = type;
        this.category = category;
        this.acceptedDate = acceptedDate;
        this.status = status != null ? status : UserProblemStatus.UNSOLVED;
        this.isFavorites = isFavorites;
    }
}
