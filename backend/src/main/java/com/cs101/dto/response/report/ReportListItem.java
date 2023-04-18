package com.cs101.dto.response.report;

import com.cs101.entity.ReportStatus;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class ReportListItem {
    private Long reportId;
    private String title;
    private LocalDateTime registeredDate;
    private ReportStatus reportStatus;
    private String userName;
    private Long userId;
}
