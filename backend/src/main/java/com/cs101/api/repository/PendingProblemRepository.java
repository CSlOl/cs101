package com.cs101.api.repository;

import com.cs101.entity.PendingProblem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PendingProblemRepository extends JpaRepository<PendingProblem, Long> {
    @Query("SELECT c.name, COUNT(p.id) FROM Category c LEFT JOIN PendingProblem p ON p.category = c GROUP BY c.id")
    List<Object[]> getCategoryInfo();
}
