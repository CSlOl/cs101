package com.cs101.api.controller;

import com.cs101.api.service.ProblemService;
import com.cs101.dto.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/problem")
public class ProblemController {
    private final ProblemService problemService;

    @GetMapping("/listInfo")
    public ResponseEntity<ApiResponse> getProblemListInfo() throws IOException {
        return ResponseEntity
                .ok()
                .body(new ApiResponse(200, "문제 목록 정보 조회 성공", problemService.getProblemListInfo()));
    }

    @GetMapping
    public ResponseEntity<ApiResponse> getProblemList() throws IOException {
        return ResponseEntity
                .ok()
                .body(new ApiResponse(200, "문제 목록 조회 성공", problemService.getProblemList()));
    }

    @GetMapping("/{problemId}")
    public ResponseEntity<ApiResponse> getProblemDetail(@PathVariable Long problemId){
        return ResponseEntity
                .ok()
                .body(new ApiResponse(200, "문제 상세 조회 성공", problemService.getProblemDetail(problemId)));
    }
}
