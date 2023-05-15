package com.cs101.api.repository;

import com.cs101.entity.Problem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProblemRepository extends JpaRepository<Problem, Long> {
    @Query("SELECT t.name, COUNT(p.id) FROM Type t LEFT JOIN Problem p ON p.type = t GROUP BY t.id")
    List<String[]> getTypeInfo();
    @Query("SELECT c.name, COUNT(p.id) FROM Category c LEFT JOIN Problem p ON p.category = c GROUP BY c.id")
    List<String[]> getCategoryInfo();
}
