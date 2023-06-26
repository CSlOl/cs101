package com.cs101.api.controller;

import com.cs101.api.service.DailyService;
import com.cs101.dto.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/daily")
public class DailyController {
    private final DailyService dailyService;
    @GetMapping
    public ResponseEntity<ApiResponse> getDaily() {
        return ResponseEntity
                .ok()
                .body(new ApiResponse(200, "데일리 정보 조회 성공", dailyService.getDaily()));
    }

}
