package com.cs101.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CreatePendingProblemReq {
    private String title;
    private String category;
    private String type;
    private String question;
    private String[] options;
    private String answer;
    private String description;
}
