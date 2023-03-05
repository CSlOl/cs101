package com.cs101.db.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class Daily {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "daily_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "knowledge_id")
    private Knowledge dailyKnowledge;

//    @ManyToOne
//    @JoinColumn(name = "problem_id")
//    private Problem dailyProblem1;
//
//    @ManyToOne
//    @JoinColumn(name = "problem_id")
//    private Problem dailyProblem2;
//
//    @ManyToOne
//    @JoinColumn(name = "problem_id")
//    private Problem dailyProblem3;
}