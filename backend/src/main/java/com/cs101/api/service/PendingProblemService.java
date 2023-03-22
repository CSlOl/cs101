package com.cs101.api.service;

import com.cs101.api.repository.PendingProblemRepository;
import com.cs101.api.repository.CategoryRepository;
import com.cs101.api.repository.UserRepository;
import com.cs101.dto.request.CreatePendingProblemReq;
import com.cs101.dto.response.problem.PendingProblemDetailRes;
import com.cs101.dto.response.problem.PendingProblemDetail;
import com.cs101.dto.response.problem.PendingProblemListItem;
import com.cs101.dto.response.problem.PendingProblemListRes;
import com.cs101.entity.*;
import com.cs101.exception.NoCategoryByNameException;
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
    private final CategoryRepository categoryRepository;
    private final UserRepository userRepository;

    public void createPendingProblem(CreatePendingProblemReq createPendingProblemReq, Long userId) throws IOException {
        User user = userRepository.findById(userId).orElse(null);
        Category category = categoryRepository.findByName(createPendingProblemReq.getCategory()).orElseThrow(() -> new NoCategoryByNameException(createPendingProblemReq.getCategory()));

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
                .pendingStatus(PendingStatus.IN_PROGRESS)
                .registeredDate(LocalDateTime.now())
                .user(user)
                .build();
        pendingProblemRepository.save(pendingProblem);

    }

    public PendingProblemListRes getPendingProblemList() {
        List<PendingProblem> pendingProblemList = pendingProblemRepository.findAll();

        Stream<PendingProblemListItem> pendingProblemListItemStream = pendingProblemList.stream().map((PendingProblem p) -> PendingProblemListItem.builder()
                .problemId(p.getId())
                .title(p.getTitle())
                .category(p.getCategory().getName())
                .date(p.getRegisteredDate())
                .status(p.getPendingStatus().name())
                .build());

        PendingProblemListRes pendingProblemListRes = PendingProblemListRes.builder()
                .problems(pendingProblemListItemStream.collect(Collectors.toList()))
                .build();

        return pendingProblemListRes;
    }

    public PendingProblemDetailRes getPendingProblemDetail(Long pendingProblemId){

        PendingProblem pendingProblem = pendingProblemRepository.findById(pendingProblemId).orElse(null);

        PendingProblemDetail pendingProblemDetail = PendingProblemDetail.builder()
                .question(pendingProblem.getQuestion())
                .options(new String[] {pendingProblem.getOption1(), pendingProblem.getOption2(), pendingProblem.getOption3(), pendingProblem.getOption4()})
                .answer(pendingProblem.getAnswer())
                .description(pendingProblem.getDescription())
                .registeredDate(pendingProblem.getRegisteredDate())
                .authorId(pendingProblem.getUser().getId())
                .authorName(pendingProblem.getUser().getName())
                .build();

        PendingProblemDetailRes pendingProblemDetailRes = PendingProblemDetailRes.builder()
                .problem(pendingProblemDetail)
                .build();

        return pendingProblemDetailRes;
    }
}
