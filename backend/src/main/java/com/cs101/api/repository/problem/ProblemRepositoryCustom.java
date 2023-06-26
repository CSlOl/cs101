package com.cs101.api.repository.problem;

import com.cs101.dto.request.ProblemFilter;
import com.cs101.dto.response.daily.DailyProblemListItem;
import com.cs101.dto.response.problem.ProblemListItem;

import java.util.List;

public interface ProblemRepositoryCustom {
    List<ProblemListItem> findByFilter(Long userId, ProblemFilter filter);
    List<DailyProblemListItem> findByIds(List<Long> idList);
}
