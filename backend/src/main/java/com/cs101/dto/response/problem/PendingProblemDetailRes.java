package com.cs101.dto.response.problem;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class PendingProblemDetailRes {
    private PendingProblemDetail problem;
}
