package com.cs101.api.repository;

import com.cs101.entity.Knowledge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface KnowledgeRepository extends JpaRepository<Knowledge, Long> {
    @Query(value = "SELECT * FROM Knowledge order by RAND() limit 1",nativeQuery = true)
    List<Knowledge> getRandomKnowledge();
}
