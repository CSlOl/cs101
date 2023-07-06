package com.cs101.api.repository.problem;

import com.cs101.dto.request.ProblemFilter;
import com.cs101.dto.response.daily.DailyProblemListItem;
import com.cs101.dto.response.daily.QDailyProblemListItem;
import com.cs101.dto.response.problem.ProblemListItem;
import com.cs101.dto.response.problem.QProblemListItem;
import com.cs101.entity.UserProblemStatus;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.ConstantImpl;
import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.dsl.*;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.support.PageableExecutionUtils;

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
    public Page<ProblemListItem> findByFilter(Long userId, ProblemFilter filter, Pageable pageable) {
        JPQLQuery<UserProblemStatus> statusPath = JPAExpressions.select(userProblem.userProblemStatus).from(userProblem).where(userProblem.id.eq(JPAExpressions.select(userProblem.id.max()).from(userProblem).where(problem.id.eq(problem.id), userProblem.user.id.eq(userId))));
        BooleanExpression isFavoritesPath = new CaseBuilder()
                .when(JPAExpressions.selectFrom(favorites).where(favorites.problem.id.eq(problem.id), favorites.user.id.eq(userId)).exists())
                .then(true)
                .otherwise(false);

        List<ProblemListItem> problemList =  getProblemList(filter, pageable, statusPath, isFavoritesPath);

        JPAQuery<Long> countQuery = getCount(filter, statusPath, isFavoritesPath);

        return PageableExecutionUtils.getPage(problemList, pageable, countQuery::fetchOne);
    }

    private List<ProblemListItem> getProblemList(ProblemFilter filter, Pageable pageable, JPQLQuery<UserProblemStatus> statusPath, BooleanExpression isFavoritesPath) {
        return queryFactory
                .select(new QProblemListItem(
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
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();
    }

    private JPAQuery<Long> getCount(ProblemFilter filter, JPQLQuery<UserProblemStatus> statusPath, BooleanExpression isFavoritesPath) {
        return queryFactory
                .select(problem.count())
                .from(problem)
                .join(problem.category, category)
                .join(problem.type, type)
                .where(
                        eqCategories(filter.getCategories()),
                        eqTypes(filter.getTypes()),
                        eqStatuses(filter.getStatuses(), statusPath),
                        filter.isFavorites() ? isFavoritesPath.eq(true) : null);
    }
    @Override
    public List<DailyProblemListItem> findByIds(List<Long> idList) {
        return queryFactory
                .select(new QDailyProblemListItem(
                        problem.id,
                        problem.title,
                        type.name,
                        category.name))
                .from(problem)
                .join(problem.type, type)
                .join(problem.category, category)
                .where(problem.id.in(idList))
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
