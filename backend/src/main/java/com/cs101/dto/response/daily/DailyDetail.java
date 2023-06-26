package com.cs101.dto.response.daily;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Builder
public class DailyDetail {
    private LocalDate date;
    private String dailyKnowledge;
    private List<DailyProblemListItem> dailyProblems;
}