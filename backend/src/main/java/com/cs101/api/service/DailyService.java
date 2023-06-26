package com.cs101.api.service;

import com.cs101.api.repository.DailyRepository;
import com.cs101.dto.response.daily.DailyDetail;
import com.cs101.dto.response.daily.DailyDetailRes;
import com.cs101.entity.Daily;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

@Service
@Transactional
@RequiredArgsConstructor
public class DailyService {
    private final DailyRepository dailyRepository;

    public DailyDetailRes getDaily() {
//        Daily daily = dailyRepository.findById(1L).orElse(null);
        Daily daily = dailyRepository.findByDate(LocalDate.now()).get();
        DailyDetail dailyDetail = DailyDetail.builder()
                .date(daily.getDate())
                .dailyKnowledge(daily.getDailyKnowledge().getContent())
                .dailyProblemId1(daily.getDailyProblemId1())
                .dailyProblemId2(daily.getDailyProblemId2())
                .dailyProblemId3(daily.getDailyProblemId3())
                .build();

        DailyDetailRes dailyDetailRes = DailyDetailRes.builder()
                .dailydetail(dailyDetail)
                .build();

        return dailyDetailRes;
    }
}
