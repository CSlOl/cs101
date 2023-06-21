package com.cs101.dto.request;

import com.cs101.entity.UserProblemStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ProblemFilter {
    private List<String> categories;
    private List<String> types;
    private List<UserProblemStatus> statuses;
    private boolean favorites;

    public void setCategories(String categories) {
        this.categories = new ArrayList<>(Arrays.asList(categories.split(",")));
    }

    public void setTypes(String types) {
        this.types = new ArrayList<>(Arrays.asList(types.split(",")));
    }

    public void setStatuses(String statuses) {
        List<UserProblemStatus> statusList = new ArrayList<>();

        for (String status : statuses.split(",")) {
            switch (status) {
                case "UNSOLVED":
                    statusList.add(UserProblemStatus.UNSOLVED);
                    break;
                case "CORRECT":
                    statusList.add(UserProblemStatus.CORRECT);
                    break;
                case "INCORRECT":
                    statusList.add(UserProblemStatus.INCORRECT);
                    break;
                default:
                    break;
            }
        }

        this.statuses = statusList;
    }

    public void setFavorites(Boolean favorites) {
        this.favorites = favorites;
    }
}
