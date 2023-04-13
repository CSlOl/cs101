package com.cs101.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class Daily {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "daily_id")
    private Long id;
    private LocalDate date;
    private Long dailyProblemId1;
    private Long dailyProblemId2;
    private Long dailyProblemId3;

    @ManyToOne
    @JoinColumn(name = "knowledge_id")
    private Knowledge dailyKnowledge;
}