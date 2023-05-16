package com.cs101.api.repository;

import com.cs101.entity.UserProblem;
import com.cs101.entity.UserProblemStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserProblemRepository extends JpaRepository<UserProblem, Long> {
    @Query("select userProblemStatus from UserProblem where user.id=:userId and problem.id=:problemId")
    Optional<UserProblemStatus> getProblemStatus(@Param("userId") Long userId, @Param("problemId") Long problemId);
}
