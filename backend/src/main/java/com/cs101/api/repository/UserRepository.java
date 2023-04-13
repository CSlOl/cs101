package com.cs101.api.repository;

import com.cs101.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

//    @Query("SELECT COUNT(*) FROM User u")
//    Long getUserSize();
}
