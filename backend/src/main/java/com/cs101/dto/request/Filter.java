package com.cs101.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Filter {
    private List<String> categories;
    private List<String> types;
    private List<String> statuses;
    private boolean favorites;

    public void setCategories(String categories) {
        this.categories = new ArrayList<>(Arrays.asList(categories.split(" ")));
    }

    public void setTypes(String types) {
        this.types = new ArrayList<>(Arrays.asList(types.split(" ")));
    }

    public void setStatuses(String statuses) {
        this.statuses = new ArrayList<>(Arrays.asList(statuses.split(" ")));
    }

    public void setFavorites(Boolean favorites) {
        this.favorites = favorites;
    }
}
