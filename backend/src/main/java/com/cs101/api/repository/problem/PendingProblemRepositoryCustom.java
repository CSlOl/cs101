package com.cs101.api.repository.problem;

import com.cs101.dto.request.PendingProblemFilter;
import com.cs101.dto.response.problem.PendingProblemListItem;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface PendingProblemRepositoryCustom {
    Page<PendingProblemListItem> findByFilter(PendingProblemFilter filter, Pageable pageable);
}
