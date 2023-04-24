package com.cs101.dto.response.report;

import com.cs101.dto.response.report.ReportListItem;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class ReportListRes {
    private List<ReportListItem> reports;
}
