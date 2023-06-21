package com.cs101.api.controller;

import com.cs101.api.service.ProblemService;
import com.cs101.entity.Problem;
import lombok.RequiredArgsConstructor;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class TestController {

    private final ProblemService problemService;
    String str = "test";
    @QueryMapping
    public List<Problem> getProblems() {
        return problemService.getProblems();
    }

    @QueryMapping
    public Problem getProblem(Long id) {
        return problemService.getProblem(id);
    }
}
