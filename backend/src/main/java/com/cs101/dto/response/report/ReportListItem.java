package com.cs101.dto.response.report;

import com.cs101.entity.ReportStatus;
import com.querydsl.core.annotations.QueryProjection;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class ReportListItem {
    private Long reportId;
    private String title;
    private String registeredDate;
    private ReportStatus reportStatus;
    private String userName;
    private Long userId;

    @QueryProjection
    public ReportListItem(Long reportId, String title, String registeredDate, ReportStatus reportStatus, String userName, Long userId) {
        this.reportId = reportId;
        this.title = title;
        this.registeredDate = registeredDate;
        this.reportStatus = reportStatus;
        this.userName = userName;
        this.userId = userId;
    }
}
