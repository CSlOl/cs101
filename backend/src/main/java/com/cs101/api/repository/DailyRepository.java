package com.cs101.api.repository;

import com.cs101.entity.Daily;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface DailyRepository extends JpaRepository<Daily, Long> {
    Optional<Daily> findByDate(LocalDate date);
}
