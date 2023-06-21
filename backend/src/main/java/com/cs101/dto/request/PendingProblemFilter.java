package com.cs101.dto.request;

import com.cs101.entity.PendingStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PendingProblemFilter {
    private List<PendingStatus> statuses;

    public void setStatuses(String statuses) {
        List<PendingStatus> statusList = new ArrayList<>();

        for (String status : statuses.split(",")) {
            switch (status) {
                case "IN_PROGRESS":
                    statusList.add(PendingStatus.IN_PROGRESS);
                    break;
                case "ACCEPTED":
                    statusList.add(PendingStatus.ACCEPTED);
                    break;
                case "REJECTED":
                    statusList.add(PendingStatus.REJECTED);
                    break;
                default:
                    break;
            }
        }

        this.statuses = statusList;
    }
}
