package com.cs101.api.controller;

import com.cs101.api.service.ProblemService;
import com.cs101.dto.request.SubmitAnswerReq;
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

    @PostMapping
    public ResponseEntity<ApiResponse> submitAnswer(@RequestBody SubmitAnswerReq submitAnswerReq) throws IOException {
        Long userId = 1L;
        return ResponseEntity
                .ok()
                .body(new ApiResponse(200, "답안 제출 성공", problemService.checkAnswer(userId, submitAnswerReq.getProblemId(), submitAnswerReq.getAnswer())));
    }

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
        Long userId = 1L;
        return ResponseEntity
                .ok()
                .body(new ApiResponse(200, "문제 상세 조회 성공", problemService.getProblemDetail(userId, problemId)));
    }

    @PostMapping("/favorites/{problemId}")
    public ResponseEntity<ApiResponse> addFavorites(@PathVariable Long problemId){
        Long userId = 1L;
        problemService.addFavorites(userId, problemId);
        return ResponseEntity
                .ok()
                .body(new ApiResponse(200, "즐겨찾기 추가 성공", null));
    }

    @DeleteMapping("/favorites/{problemId}")
    public ResponseEntity<ApiResponse> deleteFavorites(@PathVariable Long problemId){
        Long userId = 1L;
        problemService.deleteFavorites(userId, problemId);
        return ResponseEntity
                .ok()
                .body(new ApiResponse(200, "즐겨찾기 삭제 성공", null));
    }

}
