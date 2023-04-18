package com.cs101.api.controller;

import com.cs101.api.service.ReportService;
import com.cs101.dto.request.CreateReportReq;
import com.cs101.dto.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
