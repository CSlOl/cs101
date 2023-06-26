package com.cs101.api.repository.problem;

import com.cs101.dto.request.ProblemFilter;
import com.cs101.dto.response.daily.DailyProblemListItem;
import com.cs101.dto.response.problem.ProblemListItem;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProblemRepositoryCustom {
    Page<ProblemListItem> findByFilter(Long userId, ProblemFilter filter, Pageable pageable);
    List<DailyProblemListItem> findByIds(List<Long> idList);
}
