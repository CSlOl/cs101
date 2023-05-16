package com.cs101.dto.response.problem;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class ProblemListRes {
    private List<ProblemListItem> problems;
}
