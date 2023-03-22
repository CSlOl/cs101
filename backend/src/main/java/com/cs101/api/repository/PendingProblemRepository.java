package com.cs101.api.repository;

import com.cs101.entity.PendingProblem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PendingProblemRepository extends JpaRepository<PendingProblem, Long> {
    @Query("SELECT p.category.name, COUNT(p) FROM PendingProblem p GROUP BY p.category")
    List<Object[]> getTopicInfo();
}
