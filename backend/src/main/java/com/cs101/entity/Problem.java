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
@ToString(of = {"id", "question", "option1", "option2", "option3", "option4", "answer", "description", "acceptedDate"})
public class Problem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "problem_id")
    private Long id;
    private String title;
    private String question;
    private String option1;
    private String option2;
    private String option3;
    private String option4;
    private String answer;
    private String description;
    private Boolean isWithdrawn;
    private LocalDateTime acceptedDate;

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
