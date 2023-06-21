package com.cs101.api.repository;

import com.cs101.dto.request.ReportFilter;
import com.cs101.dto.response.report.ReportListItem;

import java.util.List;

public interface ReportRepositoryCustom {
    List<ReportListItem> findByFilter(ReportFilter filter);
}
