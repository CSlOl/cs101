package com.cs101.api.repository.problem;

import com.cs101.dto.request.PendingProblemFilter;
import com.cs101.dto.response.problem.PendingProblemListItem;

import java.util.List;

public interface PendingProblemRepositoryCustom {
    List<PendingProblemListItem> findByFilter(PendingProblemFilter filter);
}
