package com.cs101.dto.response.report;

import com.cs101.entity.ReportStatus;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class ReportDetail {
    private Long reportId;
    private String title;
    private String content;
    private LocalDateTime registeredDate;
    private ReportStatus reportStatus;
    private Long userId;
    private String userName;
}
