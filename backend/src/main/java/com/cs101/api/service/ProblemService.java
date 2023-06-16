package com.cs101.api.service;

import com.cs101.api.repository.*;
import com.cs101.api.repository.problem.ProblemRepository;
import com.cs101.dto.request.Filter;
import com.cs101.dto.response.problem.*;
import com.cs101.entity.*;
import com.cs101.exception.NoProblemByIdException;
import com.cs101.exception.NoUserByIdException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@Transactional
@RequiredArgsConstructor
public class ProblemService {
    private final ProblemRepository problemRepository;
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

    public ProblemListRes getProblemList(Filter filter) {
        List<Problem> problemList = problemRepository.findByFilter(filter);

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

    public List<Problem> getProblems() {
        return problemRepository.findAll();
    }

    public ProblemDetailRes getProblemDetail(Long userId, Long problemId){
        User user = userRepository.findById(userId).orElseThrow(() -> new NoUserByIdException("" + userId));
        Problem problem = problemRepository.findById(problemId).orElseThrow(() -> new NoProblemByIdException("" + problemId));
        Boolean isFavorite = favoritesRepository.findById(user, problem).isPresent();
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

    public Problem getProblem(Long id) {
        return problemRepository.findById(id).orElse(null);
    }

    public SubmitAnswerRes checkAnswer(Long userId, Long problemId, String answer) {
        User user = userRepository.findById(userId).orElseThrow(() -> new NoUserByIdException("" + userId));
        Problem problem = problemRepository.findById(problemId).orElseThrow(() -> new NoProblemByIdException("" + problemId));
        boolean isCorrect = problem.getAnswer().equals(answer);

        UserProblem userProblem = UserProblem.builder()
                .user(user)
                .problem(problem)
                .userProblemStatus(isCorrect ? UserProblemStatus.CORRECT : UserProblemStatus.INCORRECT)
                .solvedDate(LocalDateTime.now())
                .build();
        userProblemRepository.save(userProblem);

        SubmitAnswerRes submitAnswerRes = SubmitAnswerRes.builder()
                .isCorrect(isCorrect)
                .build();

        return submitAnswerRes;
    }

    public void addFavorites(Long userId, Long problemId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new NoUserByIdException("" + userId));
        Problem problem = problemRepository.findById(problemId).orElseThrow(() -> new NoProblemByIdException("" + problemId));

        Favorites favorites = Favorites.builder()
                .user(user)
                .problem(problem)
                .build();

        favoritesRepository.save(favorites);
    }

    public void deleteFavorites(Long userId, Long problemId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new NoUserByIdException("" + userId));
        Problem problem = problemRepository.findById(problemId).orElseThrow(() -> new NoProblemByIdException("" + problemId));

        favoritesRepository.deleteFavorites(user, problem);
    }
}
