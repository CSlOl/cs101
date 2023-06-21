package com.cs101.api.repository.problem;

import com.cs101.dto.request.PendingProblemFilter;
import com.cs101.dto.response.problem.PendingProblemListItem;
import com.cs101.dto.response.problem.QPendingProblemListItem;
import com.cs101.entity.PendingStatus;
import com.querydsl.core.types.ConstantImpl;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;

import javax.persistence.EntityManager;
import java.util.List;

import static com.cs101.entity.QCategory.category;
import static com.cs101.entity.QPendingProblem.pendingProblem;
import static com.cs101.entity.QType.type;

public class PendingProblemRepositoryImpl implements PendingProblemRepositoryCustom {
    private final JPAQueryFactory queryFactory;
    public PendingProblemRepositoryImpl(EntityManager em){
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public List<PendingProblemListItem> findByFilter(PendingProblemFilter filter) {
        return queryFactory
                .select(new QPendingProblemListItem(
                        pendingProblem.id,
                        pendingProblem.title,
                        type.name,
                        category.name,
                        Expressions.dateTemplate(String.class,"DATE_FORMAT({0},{1})", pendingProblem.registeredDate, ConstantImpl.create("%Y-%m-%d %p %h:%i")),
                        pendingProblem.pendingStatus))
                .from(pendingProblem)
                .join(pendingProblem.type, type)
                .join(pendingProblem.category, category)
                .where(eqStatuses(filter.getStatuses()))
                .fetch();
    }

    private BooleanExpression eqStatuses(List<PendingStatus> statuses) {
        return statuses != null ? pendingProblem.pendingStatus.in(statuses) : null;
    }
}
