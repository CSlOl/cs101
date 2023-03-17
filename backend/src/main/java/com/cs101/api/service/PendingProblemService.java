package com.cs101.api.service;

import com.cs101.api.repository.PendingProblemRepository;
import com.cs101.api.repository.UserRepository;
import com.cs101.dto.request.CreatePendingProblemReq;
import com.cs101.dto.response.problem.PendingProblemDetailGetRes;
import com.cs101.dto.response.problem.PendingProblemDetailRes;
import com.cs101.entity.PendingProblem;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.time.LocalDateTime;

@Service
@Transactional
@RequiredArgsConstructor
public class PendingProblemService {

    private final PendingProblemRepository pendingProblemRepository;
    private final UserRepository userRepository;

    public void createPendingProblem(CreatePendingProblemReq createPendingProblemReq, Long userId) throws IOException {
        PendingProblem pendingProblem = PendingProblem.builder()
                .question(createPendingProblemReq.getQuestion())
                .option1(createPendingProblemReq.getOptions()[0])
                .option2(createPendingProblemReq.getOptions()[1])
                .option3(createPendingProblemReq.getOptions()[2])
                .option4(createPendingProblemReq.getOptions()[3])
                .answer(createPendingProblemReq.getAnswer())
                .description(createPendingProblemReq.getDescription())
                .registeredDate(LocalDateTime.now())
                .user(userRepository.findById(userId).orElse(null))
                .build();
        pendingProblemRepository.save(pendingProblem);

    }

    public PendingProblemDetailGetRes getPendingProblemDetail(Long pendingProblemId){

        PendingProblem pendingProblem = pendingProblemRepository.findById(pendingProblemId).orElse(null);

        PendingProblemDetailRes pendingProblemDetailRes = PendingProblemDetailRes.builder()
                .question(pendingProblem.getQuestion())
                .options(new String[] {pendingProblem.getOption1(), pendingProblem.getOption2(), pendingProblem.getOption3(), pendingProblem.getOption4()})
                .answer(pendingProblem.getAnswer())
                .description(pendingProblem.getDescription())
                .registeredDate(pendingProblem.getRegisteredDate())
                .authorId(pendingProblem.getUser().getId())
                .authorName(pendingProblem.getUser().getName())
                .build();

        PendingProblemDetailGetRes pendingProblemDetailGetRes = PendingProblemDetailGetRes.builder()
                .problem(pendingProblemDetailRes)
                .build();

        return pendingProblemDetailGetRes;
    }
}
