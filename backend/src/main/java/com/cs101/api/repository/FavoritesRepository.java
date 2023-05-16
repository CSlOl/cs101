package com.cs101.api.repository;

import com.cs101.entity.Favorites;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface FavoritesRepository extends JpaRepository<Favorites, Long> {
    @Query("select f from Favorites f where f.user.id=:userId and f.problem.id=:problemId")
    Optional<Boolean> findById(@Param("userId") Long userId, @Param("problemId") Long problemId);
}
