package com.cs101.api.service;

import com.cs101.api.repository.DailyRepository;
import com.cs101.api.repository.problem.ProblemRepository;
import com.cs101.dto.response.daily.DailyDetail;
import com.cs101.dto.response.daily.DailyDetailRes;
import com.cs101.dto.response.daily.DailyProblemListItem;
import com.cs101.entity.Daily;
import com.cs101.entity.Problem;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class DailyService {
    private final DailyRepository dailyRepository;
    private final ProblemRepository problemRepository;

    public DailyDetailRes getDaily() {
        Daily daily = dailyRepository.findByDate(LocalDate.now()).get();

        List<Long> dailyProblemIdList = Arrays.asList(new Long[] {daily.getDailyProblemId1(), daily.getDailyProblemId2(), daily.getDailyProblemId3()});

        List<DailyProblemListItem> dailyProblemList = problemRepository.findByIds(dailyProblemIdList);

        DailyDetail dailyDetail = DailyDetail.builder()
                .date(daily.getDate())
                .dailyKnowledge(daily.getDailyKnowledge().getContent())
                .dailyProblems(dailyProblemList)
                .build();

        DailyDetailRes dailyDetailRes = DailyDetailRes.builder()
                .dailydetail(dailyDetail)
                .build();

        return dailyDetailRes;
    }
}
