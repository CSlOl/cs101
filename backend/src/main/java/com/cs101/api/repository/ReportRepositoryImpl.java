package com.cs101.api.repository;

import com.cs101.dto.request.ReportFilter;
import com.cs101.dto.response.report.QReportListItem;
import com.cs101.dto.response.report.ReportListItem;
import com.cs101.entity.QReport;
import com.cs101.entity.ReportStatus;
import com.cs101.entity.UserProblemStatus;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.ConstantImpl;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;

import static com.cs101.entity.QProblem.problem;
import static com.cs101.entity.QReport.report;
import static com.cs101.entity.QUser.user;

public class ReportRepositoryImpl implements ReportRepositoryCustom {
    private final JPAQueryFactory queryFactory;
    public ReportRepositoryImpl(EntityManager em){
        this.queryFactory = new JPAQueryFactory(em);
    }
    @Override
    public List<ReportListItem> findByFilter(ReportFilter filter) {
        return queryFactory
                .select(new QReportListItem(
                        report.id,
                        report.title,
                        Expressions.dateTemplate(String.class,"DATE_FORMAT({0},{1})", report.registeredDate, ConstantImpl.create("%Y-%m-%d %p %h:%i")),
                        report.reportStatus,
                        user.name,
                        user.id))
                .from(report)
                .join(report.user, user)
                .where(eqStatuses(filter.getStatuses()))
                .fetch();
    }

    private BooleanExpression eqStatuses(List<ReportStatus> statuses) {
        return statuses != null ? report.reportStatus.in(statuses) : null;
    }
}
