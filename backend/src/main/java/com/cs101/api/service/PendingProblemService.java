package com.cs101.api.service;

import com.cs101.api.repository.*;
import com.cs101.api.repository.problem.CategoryRepository;
import com.cs101.api.repository.problem.PendingProblemRepository;
import com.cs101.api.repository.problem.ProblemRepository;
import com.cs101.api.repository.problem.TypeRepository;
import com.cs101.dto.request.CreatePendingProblemReq;
import com.cs101.dto.request.AcceptProblemReq;
import com.cs101.dto.request.PendingProblemFilter;
import com.cs101.dto.response.problem.PendingProblemDetailRes;
import com.cs101.dto.response.problem.PendingProblemDetail;
import com.cs101.dto.response.problem.PendingProblemListItem;
import com.cs101.dto.response.problem.PendingProblemListRes;
import com.cs101.entity.*;
import com.cs101.exception.NoCategoryByNameException;
import com.cs101.exception.NoProblemByIdException;
import com.cs101.exception.NoTypeByNameException;
import com.cs101.exception.NoUserByIdException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@Transactional
@RequiredArgsConstructor
public class PendingProblemService {

    private final PendingProblemRepository pendingProblemRepository;
    private final ProblemRepository problemRepository;
    private final CategoryRepository categoryRepository;
    private final TypeRepository typeRepository;
    private final UserRepository userRepository;

    public void createPendingProblem(CreatePendingProblemReq createPendingProblemReq, Long userId) throws IOException {
        User user = userRepository.findById(userId).orElseThrow(() -> new NoUserByIdException("" + userId));
        Category category = categoryRepository.findByName(createPendingProblemReq.getCategory()).orElseThrow(() -> new NoCategoryByNameException(createPendingProblemReq.getCategory()));
        Type type = typeRepository.findByName(createPendingProblemReq.getType()).orElseThrow(() -> new NoTypeByNameException(createPendingProblemReq.getType()));

        PendingProblem pendingProblem = PendingProblem.builder()
                .title(createPendingProblemReq.getTitle())
                .question(createPendingProblemReq.getQuestion())
                .option1(createPendingProblemReq.getOptions()[0])
                .option2(createPendingProblemReq.getOptions()[1])
                .option3(createPendingProblemReq.getOptions()[2])
                .option4(createPendingProblemReq.getOptions()[3])
                .answer(createPendingProblemReq.getAnswer())
                .description(createPendingProblemReq.getDescription())
                .category(category)
                .type(type)
                .pendingStatus(PendingStatus.IN_PROGRESS)
                .registeredDate(LocalDateTime.now())
                .author(user)
                .build();
        pendingProblemRepository.save(pendingProblem);
    }

    public void acceptProblem(AcceptProblemReq acceptProblemReq) throws IOException {
        User user = userRepository.findById(acceptProblemReq.getAuthorId()).orElseThrow(() -> new NoUserByIdException("" + acceptProblemReq.getAuthorId()));
        PendingProblem pendingProblem = pendingProblemRepository.findById(acceptProblemReq.getProblemId()).orElseThrow(() -> new NoProblemByIdException("" + acceptProblemReq.getProblemId()));
        Category category = categoryRepository.findByName(acceptProblemReq.getCategory()).orElseThrow(() -> new NoCategoryByNameException(acceptProblemReq.getCategory()));
        Type type = typeRepository.findByName(acceptProblemReq.getType()).orElseThrow(() -> new NoTypeByNameException(acceptProblemReq.getType()));

        Problem problem = Problem.builder()
                .title(acceptProblemReq.getTitle())
                .question(acceptProblemReq.getQuestion())
                .option1(acceptProblemReq.getOptions()[0])
                .option2(acceptProblemReq.getOptions()[1])
                .option3(acceptProblemReq.getOptions()[2])
                .option4(acceptProblemReq.getOptions()[3])
                .answer(acceptProblemReq.getAnswer())
                .description(acceptProblemReq.getDescription())
                .category(category)
                .type(type)
                .isWithdrawn(false)
                .acceptedDate(LocalDateTime.now())
                .author(user)
                .build();
        problemRepository.save(problem);

        pendingProblemRepository.updatePendingStatus(pendingProblem, PendingStatus.ACCEPTED);
    }

    public void refuseProblem(Long problemId) {
        PendingProblem pendingProblem = pendingProblemRepository.findById(problemId).orElseThrow(() -> new NoProblemByIdException("" + problemId));

        pendingProblemRepository.updatePendingStatus(pendingProblem, PendingStatus.REJECTED);
    }

    public PendingProblemListRes getPendingProblemList(PendingProblemFilter filter) {
        List<PendingProblemListItem> pendingProblemList = pendingProblemRepository.findByFilter(filter);

        PendingProblemListRes pendingProblemListRes = PendingProblemListRes.builder()
                .problems(pendingProblemList)
                .build();

        return pendingProblemListRes;
    }

    public PendingProblemDetailRes getPendingProblemDetail(Long pendingProblemId){

        PendingProblem pendingProblem = pendingProblemRepository.findById(pendingProblemId).orElseThrow(() -> new NoProblemByIdException("" + pendingProblemId));

        PendingProblemDetail pendingProblemDetail = PendingProblemDetail.builder()
                .question(pendingProblem.getQuestion())
                .title(pendingProblem.getTitle())
                .type(pendingProblem.getType().getName())
                .category(pendingProblem.getCategory().getName())
                .options(new String[] {pendingProblem.getOption1(), pendingProblem.getOption2(), pendingProblem.getOption3(), pendingProblem.getOption4()})
                .answer(pendingProblem.getAnswer())
                .description(pendingProblem.getDescription())
                .status(pendingProblem.getPendingStatus())
                .registeredDate(pendingProblem.getRegisteredDate())
                .authorId(pendingProblem.getAuthor().getId())
                .authorName(pendingProblem.getAuthor().getName())
                .build();

        PendingProblemDetailRes pendingProblemDetailRes = PendingProblemDetailRes.builder()
                .problem(pendingProblemDetail)
                .build();

        return pendingProblemDetailRes;
    }
}
