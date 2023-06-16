package com.cs101.api.repository.problem;

import com.cs101.dto.request.Filter;
import com.cs101.entity.Problem;
import com.cs101.entity.QProblem;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import javax.persistence.EntityManager;
import java.util.List;

@RequiredArgsConstructor
public class ProblemRepositoryImpl implements ProblemRepositoryCustom {

//    private final EntityManager em;
//    JPAQueryFactory queryFactory = new JPAQueryFactory(em);

    @Override
    public List<Problem> findByFilter(Filter filter) {
//        return queryFactory.selectFrom()
//                .where(problem)
//                .fetch();
        return null;
    }

//    private BooleanBuilder eqCategories(List<String> categories) {
//        BooleanBuilder builder = new BooleanBuilder();
//
//        if (categories.contains("10평대")) {
//            builder.or(
//                    offerDetail
//                            .주택형
//                            .castToNum(Double.class)
//                            .multiply(1.3)
//                            .between(3.305785 * 10, 3.305785 * 20));
//        }
//        if (areaRangeCondition.contains("20평대")) {
//            builder.or(
//                    offerDetail
//                            .주택형
//                            .castToNum(Double.class)
//                            .multiply(1.3)
//                            .between(3.305785 * 20, 3.305785 * 30));
//        }
//        /* ... 이하 생략 ... */
//
//        return builder;
//    }
}
