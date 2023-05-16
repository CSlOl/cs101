package com.cs101.api.service;

import com.cs101.api.repository.*;
import com.cs101.dto.response.problem.*;
import com.cs101.entity.*;
import com.cs101.exception.NoProblemByIdException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@Transactional
@RequiredArgsConstructor
public class ProblemService {
    private final ProblemRepository problemRepository;
    private final CategoryRepository categoryRepository;
    private final TypeRepository typeRepository;
    private final UserRepository userRepository;
    private final FavoritesRepository favoritesRepository;
    private final UserProblemRepository userProblemRepository;

    public ProblemListInfoRes getProblemListInfo() {
        List<String[]> typeInfo = problemRepository.getTypeInfo();
        List<String[]> categoryInfo = problemRepository.getCategoryInfo();

        ProblemListInfoRes problemListInfoRes = ProblemListInfoRes.builder()
                .categories(categoryInfo)
                .types(typeInfo)
                .build();

        return problemListInfoRes;
    }

    public ProblemListRes getProblemList() {
        List<Problem> problemList = problemRepository.findAll();

        Stream<ProblemListItem> problemListItemStream = problemList.stream().map((Problem p) -> ProblemListItem.builder()
                .problemId(p.getId())
                .title(p.getTitle())
                .category(p.getCategory().getName())
                .date(p.getAcceptedDate())
                .status(userProblemRepository.getProblemStatus(1L, p.getId()).orElse(UserProblemStatus.UNSOLVED))
                .build());

        ProblemListRes problemListRes = ProblemListRes.builder()
                .problems(problemListItemStream.collect(Collectors.toList()))
                .build();

        return problemListRes;
    }

    public ProblemDetailRes getProblemDetail(Long problemId){

        Problem problem = problemRepository.findById(problemId).orElseThrow(() -> new NoProblemByIdException("" + problemId));
        Boolean isFavorite = favoritesRepository.findById(1L, 1L).orElse(false);
        UserProblemStatus status = userProblemRepository.getProblemStatus(1L, 1L).orElse(UserProblemStatus.UNSOLVED);

        ProblemDetail problemDetail = ProblemDetail.builder()
                .question(problem.getQuestion())
                .title(problem.getTitle())
                .type(problem.getType().getName())
                .category(problem.getCategory().getName())
                .options(new String[] {problem.getOption1(), problem.getOption2(), problem.getOption3(), problem.getOption4()})
                .answer(problem.getAnswer())
                .description(problem.getDescription())
                .registeredDate(problem.getAcceptedDate())
                .status(status)
                .isFavorite(isFavorite)
                .authorId(problem.getAuthor().getId())
                .authorName(problem.getAuthor().getName())
                .build();

        ProblemDetailRes problemDetailRes = ProblemDetailRes.builder()
                .problem(problemDetail)
                .build();

        return problemDetailRes;
    }
}
