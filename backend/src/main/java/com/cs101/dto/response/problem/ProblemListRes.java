package com.cs101.dto.response.problem;

import lombok.Builder;
import lombok.Getter;
import org.springframework.data.domain.Page;

@Getter
@Builder
public class ProblemListRes {
    private Page<ProblemListItem> problems;
}
