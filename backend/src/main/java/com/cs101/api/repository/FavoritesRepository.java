package com.cs101.api.repository;

import com.cs101.entity.Favorites;
import com.cs101.entity.Problem;
import com.cs101.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface FavoritesRepository extends JpaRepository<Favorites, Long> {
    @Query("select f from Favorites f where f.user=:user and f.problem=:problem")
    Optional<Favorites> findById(@Param("user") User user, @Param("problem") Problem problem);

    @Modifying
    @Transactional
    @Query("delete from Favorites f where f.user=:user and f.problem=:problem")
    void deleteFavorites(@Param("user") User user, @Param("problem") Problem problem);
}
