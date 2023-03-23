package com.cs101.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@ToString(of = {"id", "question", "option1", "option2", "option3", "option4", "answer", "description", "registeredDate"})
public class PendingProblem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pending_problem_id")
    private Long id;
    private String title;
    private String question;
    private String option1;
    private String option2;
    private String option3;
    private String option4;
    private String answer;
    private String description;
    private LocalDateTime registeredDate;

    @Enumerated(EnumType.STRING)
    private PendingStatus pendingStatus;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "topic_id")
    private Type type;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "problem", cascade = {CascadeType.ALL})
    private List<UserProblem> userProblems = new ArrayList<>();

    @OneToMany(mappedBy = "problem", cascade = {CascadeType.ALL})
    private List<Favorites> favoritesList = new ArrayList<>();
}
