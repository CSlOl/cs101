package com.cs101.api.controller;

import com.cs101.api.service.PendingProblemService;
import com.cs101.dto.request.CreatePendingProblemReq;
import com.cs101.dto.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/problem/pending")
public class PendingProblemController {
    private final PendingProblemService pendingProblemService;

    @PostMapping
    public ResponseEntity<ApiResponse> createPendingProblem(@RequestBody CreatePendingProblemReq createPendingProblemReq) throws IOException {
        Long userId = 1L;
        pendingProblemService.createPendingProblem(createPendingProblemReq, userId);
        return ResponseEntity
                .ok()
                .body(new ApiResponse(200, "문제 등록 성공", null));
    }

    @GetMapping
    public ResponseEntity<ApiResponse> getPendingProblemList() throws IOException {
        return ResponseEntity
                .ok()
                .body(new ApiResponse(200, "등록 대기 문제 목록 조회 성공", pendingProblemService.getPendingProblemList()));
    }

    @GetMapping("/{problemId}")
    public ResponseEntity<ApiResponse> getPendingProblemDetail(@PathVariable Long problemId){
        return ResponseEntity
                .ok()
                .body(new ApiResponse(200, "등록 대기 문제 상세 조회 성공", pendingProblemService.getPendingProblemDetail(problemId)));
    }
}
