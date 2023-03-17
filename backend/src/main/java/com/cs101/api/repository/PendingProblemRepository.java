package com.cs101.api.repository;

import com.cs101.entity.PendingProblem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PendingProblemRepository extends JpaRepository<PendingProblem, Long> {
}
