package com.cs101.util;

import com.cs101.api.repository.DailyRepository;
import com.cs101.api.repository.KnowledgeRepository;
import com.cs101.api.repository.UserRepository;
import com.cs101.api.repository.problem.ProblemRepository;
import com.cs101.entity.Daily;
import com.cs101.entity.Knowledge;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

@Component
@RequiredArgsConstructor
public class SchedulerUtil {
    private final ProblemRepository problemRepository;
    private final KnowledgeRepository knowledgeRepository;

    private final DailyRepository dailyRepository;

    @Scheduled(cron="0 0 0 * * ?")
    public void createDaily() throws IOException {
        List<Long> randomProblems = problemRepository.getRandomProblem();
        Knowledge randomKnowledge = knowledgeRepository.getRandomKnowledge().get(0);
        Daily daily = Daily.builder()
                .date(LocalDate.now())
                .dailyProblemId1(randomProblems.get(0))
                .dailyProblemId2(randomProblems.get(1))
                .dailyProblemId3(randomProblems.get(2))
                .dailyKnowledge(randomKnowledge)
                .build();
        dailyRepository.save(daily);
    }
}
