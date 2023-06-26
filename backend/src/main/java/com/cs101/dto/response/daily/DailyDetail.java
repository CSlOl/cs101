package com.cs101.dto.response.daily;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDate;

@Getter
@Builder
public class DailyDetail {
    private LocalDate date;
    private String dailyKnowledge;
    private Long dailyProblemId1;
    private Long dailyProblemId2;
    private Long dailyProblemId3;
}