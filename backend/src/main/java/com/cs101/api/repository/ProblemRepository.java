package com.cs101.api.repository;

import com.cs101.entity.Problem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProblemRepository extends JpaRepository<Problem, Long> {

//    @Query("SELECT p.topic.name, COUNT(p) FROM Problem p GROUP BY p.topic")
//    List<Object[]> getTopicInfo();
//
//    @Query("SELECT p.category.name, COUNT(p) FROM Problem p GROUP BY p.category")
//    List<Object[]> getCategoryInfo();
}
