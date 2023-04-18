package com.cs101.api.controller;

import com.cs101.api.service.ReportService;
import com.cs101.dto.request.CreateReportReq;
import com.cs101.dto.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/report")
public class ReportController {
    private final ReportService reportService;

    @PostMapping
    public ResponseEntity<ApiResponse> createReport(@RequestBody CreateReportReq createReportReq) throws IOException {
        Long userId = 1L;
        reportService.createReport(createReportReq, userId);
        return ResponseEntity
                .ok()
                .body(new ApiResponse(201, "신고 등록 성공", null));
    }

    @GetMapping("/{reportId}")
    public ResponseEntity<ApiResponse> getReportDetail(@PathVariable Long reportId) throws IOException {
        return ResponseEntity
                .ok()
                .body(new ApiResponse(200, "신고 상세 조회 성공", reportService.getReportDetail(reportId)));
    }
}
