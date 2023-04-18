package com.cs101.api.service;

import com.cs101.api.repository.KnowledgeRepository;
import com.cs101.dto.request.CreateKnowledgeReq;
import com.cs101.entity.Knowledge;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;

@Service
@Transactional
@RequiredArgsConstructor
public class KnowledgeService {
    private final KnowledgeRepository knowledgeRepository;

    public void createKnowledge(CreateKnowledgeReq createKnowledgeReq) throws IOException {
        Knowledge knowledge = Knowledge.builder()
                .content(createKnowledgeReq.getContent())
                .build();
        knowledgeRepository.save(knowledge);
    }
}
