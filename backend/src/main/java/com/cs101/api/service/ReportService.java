package com.cs101.api.service;

import com.cs101.api.repository.ReportRepository;
import com.cs101.api.repository.UserRepository;
import com.cs101.dto.request.CreateReportReq;
import com.cs101.dto.request.ReportFilter;
import com.cs101.dto.request.UpdateReportReq;
import com.cs101.dto.response.report.ReportListItem;
import com.cs101.dto.response.report.ReportListRes;
import com.cs101.dto.response.report.ReportDetail;
import com.cs101.dto.response.report.ReportDetailRes;
import com.cs101.entity.Report;
import com.cs101.entity.ReportStatus;
import com.cs101.entity.User;
import com.cs101.exception.NoReportByIdException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static org.springframework.util.StringUtils.hasText;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ReportService {
    private final ReportRepository reportRepository;
    private final UserRepository userRepository;

    public void createReport(CreateReportReq createReportReq, Long userId) throws IOException {
        User user = userRepository.findById(userId).orElse(null);
        Report report = Report.builder()
                .title(createReportReq.getTitle())
                .content(createReportReq.getContent())
                .registeredDate(LocalDateTime.now())
                .reportStatus(ReportStatus.IN_PROGRESS)
                .user(user)
                .build();
        reportRepository.save(report);

    }

    public ReportListRes getReportList(ReportFilter filter) {
        List<ReportListItem> reportList = reportRepository.findByFilter(filter);

        ReportListRes reportListRes = ReportListRes.builder()
                .reports(reportList)
                .build();

        return reportListRes;
    }

    public ReportDetailRes getReportDetail(Long reportId) {
        Report report = reportRepository.findById(reportId).orElseThrow(() -> new NoReportByIdException(String.valueOf(reportId)));
        ReportDetail reportDetail = ReportDetail.builder()
                .reportId(report.getId())
                .title(report.getTitle())
                .content(report.getContent())
                .registeredDate(report.getRegisteredDate())
                .reportStatus(report.getReportStatus())
                .userId(report.getUser().getId())
                .userName(report.getUser().getName())
                .build();

        ReportDetailRes reportDetailRes = ReportDetailRes.builder()
                .report(reportDetail)
                .build();

        return reportDetailRes;
    }

    public void updateReportDetail(UpdateReportReq updateReportReq, Long reportId) {
        Report report = reportRepository.findById(reportId).orElse(null);
        if (hasText(updateReportReq.getTitle()) && hasText(updateReportReq.getContent())) {
            report.setTitle(updateReportReq.getTitle());
            report.setContent(updateReportReq.getContent());
        }

        if (hasText(updateReportReq.getReportStatus())) {
            String reportStatus = updateReportReq.getReportStatus();
            if ("IN_PROGRESS".equals(reportStatus)) {
                report.setReportStatus(ReportStatus.IN_PROGRESS);
            } else if ("RESOLVED".equals(reportStatus)) {
                report.setReportStatus(ReportStatus.RESOLVED);
            }
        }
    }
}
