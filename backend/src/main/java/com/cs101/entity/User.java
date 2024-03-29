package com.cs101.entity;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;
    private String name;
    private String email;
    private String password;
    private LocalDateTime registeredDate;
    private String description;
    private String profileImageUrl;
    private boolean isAdmin;

    @Enumerated(EnumType.STRING)
    private UserStatus userStatus;

    @OneToMany(mappedBy = "user", cascade = {CascadeType.ALL})
    private List<UserProblem> userProblems = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = {CascadeType.ALL})
    private List<Favorites> favoritesList = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = {CascadeType.ALL})
    private List<Report> reports = new ArrayList<>();

    @OneToMany(mappedBy = "author", cascade = {CascadeType.ALL})
    private List<Problem> problems = new ArrayList<>();

    @OneToMany(mappedBy = "author", cascade = {CascadeType.ALL})
    private List<PendingProblem> pendingProblems = new ArrayList<>();

}
