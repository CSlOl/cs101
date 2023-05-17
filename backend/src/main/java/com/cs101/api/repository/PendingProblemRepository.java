package com.cs101.api.repository;

import com.cs101.entity.PendingProblem;
import com.cs101.entity.PendingStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface PendingProblemRepository extends JpaRepository<PendingProblem, Long> {
    @Query("select c.name, COUNT(p.id) from Category c left join PendingProblem p on p.category = c group by c.id")
    List<Object[]> getCategoryInfo();

    @Modifying
    @Transactional
    @Query("update PendingProblem p set p.pendingStatus=:pendingStatus where p=:pendingProblem")
    void updatePendingStatus(@Param("pendingProblem") PendingProblem pendingProblem, @Param("pendingStatus") PendingStatus pendingStatus);
}
