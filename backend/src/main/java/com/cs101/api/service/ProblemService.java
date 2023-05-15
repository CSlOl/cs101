package com.cs101.api.service;

import com.cs101.api.repository.PendingProblemRepository;
import com.cs101.api.repository.CategoryRepository;
import com.cs101.api.repository.ProblemRepository;
import com.cs101.dto.response.problem.ProblemListInfoRes;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ProblemService {
    private final ProblemRepository problemRepository;
    private final PendingProblemRepository pendingProblemRepository;
    private final CategoryRepository categoryRepository;

    public ProblemListInfoRes getProblemListInfo() {
        List<String[]> typeInfo = problemRepository.getTypeInfo();
        List<String[]> categoryInfo = problemRepository.getCategoryInfo();

        ProblemListInfoRes problemListInfoRes = ProblemListInfoRes.builder()
                .categories(categoryInfo)
                .types(typeInfo)
                .build();

        return problemListInfoRes;
    }
}
