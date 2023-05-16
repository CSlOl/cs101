package com.cs101.api.repository;

import com.cs101.entity.PendingProblem;
import com.cs101.entity.PendingStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PendingProblemRepository extends JpaRepository<PendingProblem, Long> {
    @Query("SELECT c.name, COUNT(p.id) FROM Category c LEFT JOIN PendingProblem p ON p.category = c GROUP BY c.id")
    List<Object[]> getCategoryInfo();

    @Modifying
    @Query("update PendingProblem p set p.pendingStatus=:pendingStatus where p.id=:problemId")
    void updatePendingStatus(@Param("problemId") Long problemId, @Param("pendingStatus") PendingStatus pendingStatus);
}
