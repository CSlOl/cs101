package com.cs101.api.repository;

import com.cs101.entity.Report;
import com.cs101.entity.ReportStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReportRepository extends JpaRepository<Report, Long> {
    List<Report> findByReportStatus(ReportStatus reportStatus);
}
