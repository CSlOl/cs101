package com.cs101.api.repository.problem;

import com.cs101.dto.request.ProblemFilter;
import com.cs101.dto.response.problem.ProblemListItem;
import com.cs101.dto.response.problem.QProblemListItem;
import com.cs101.entity.UserProblemStatus;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.ConstantImpl;
import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.dsl.*;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;

import javax.persistence.EntityManager;
import java.util.List;

import static com.cs101.entity.QProblem.problem;
import static com.cs101.entity.QType.type;
import static com.cs101.entity.QCategory.category;
import static com.cs101.entity.QUserProblem.userProblem;
import static com.cs101.entity.QFavorites.favorites;

public class ProblemRepositoryImpl implements ProblemRepositoryCustom {

    private final JPAQueryFactory queryFactory;
    public ProblemRepositoryImpl(EntityManager em){
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public List<ProblemListItem> findByFilter(Long userId, ProblemFilter filter) {
        JPQLQuery<UserProblemStatus> statusPath = JPAExpressions.select(userProblem.userProblemStatus).from(userProblem).where(userProblem.problem.id.eq(problem.id), userProblem.user.id.eq(userId));
        BooleanExpression isFavoritesPath = new CaseBuilder()
                .when(JPAExpressions.selectFrom(favorites).where(favorites.problem.id.eq(problem.id), favorites.user.id.eq(userId)).exists())
                .then(true)
                .otherwise(false);

        return queryFactory.select(new QProblemListItem(
                problem.id,
                problem.title,
                type.name,
                category.name,
                Expressions.dateTemplate(String.class,"DATE_FORMAT({0},{1})",problem.acceptedDate, ConstantImpl.create("%Y-%m-%d %p %h:%i")),
                ExpressionUtils.as(statusPath, "status"),
                isFavoritesPath.as("isFavorites")))
                .from(problem)
                .join(problem.category, category)
                .join(problem.type, type)
                .where(
                        eqCategories(filter.getCategories()),
                        eqTypes(filter.getTypes()),
                        eqStatuses(filter.getStatuses(), statusPath),
                        filter.isFavorites() ? isFavoritesPath.eq(true) : null)
                .fetch();
    }

    private BooleanExpression eqCategories(List<String> categories) {
        return categories != null ? category.name.in(categories) : null;
    }

    private BooleanExpression eqTypes(List<String> types) {
        return types != null ? type.name.in(types) : null;
    }

    private BooleanBuilder eqStatuses(List<UserProblemStatus> statuses, JPQLQuery<UserProblemStatus> statusPath) {
        if (statuses == null) return null;

        BooleanBuilder builder = new BooleanBuilder();

        if (statuses.contains(UserProblemStatus.UNSOLVED)) {
            builder.or(statusPath.isNull());
        }
        return builder.or(statusPath.in(statuses));
    }
}
