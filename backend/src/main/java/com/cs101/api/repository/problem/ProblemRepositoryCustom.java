package com.cs101.api.repository.problem;

import com.cs101.dto.request.Filter;
import com.cs101.entity.Problem;

import java.util.List;

public interface ProblemRepositoryCustom {
    List<Problem> findByFilter(Filter filter);
}
