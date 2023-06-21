package com.cs101.api.repository.problem;

import com.cs101.entity.PendingProblem;
import com.cs101.entity.PendingStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface PendingProblemRepository extends JpaRepository<PendingProblem, Long>, PendingProblemRepositoryCustom {
    @Modifying
    @Transactional
    @Query("update PendingProblem p set p.pendingStatus=:pendingStatus where p=:pendingProblem")
    void updatePendingStatus(@Param("pendingProblem") PendingProblem pendingProblem, @Param("pendingStatus") PendingStatus pendingStatus);
}
