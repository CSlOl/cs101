package com.cs101.api.controller;

import com.cs101.api.service.KnowledgeService;
import com.cs101.dto.request.CreateKnowledgeReq;
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
@RequestMapping("/knowledge")
public class KnowledgeController {
    private final KnowledgeService knowledgeService;
    @PostMapping
    public ResponseEntity<ApiResponse> createKnowledge(@RequestBody CreateKnowledgeReq createKnowledgeReq) throws IOException {
        knowledgeService.createKnowledge(createKnowledgeReq);
        return ResponseEntity
                .ok()
                .body(new ApiResponse(201, "지식 등록 성공", null));
    }
}
