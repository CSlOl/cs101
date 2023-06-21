package com.cs101.dto.request;

import com.cs101.entity.ReportStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ReportFilter {
    private List<ReportStatus> statuses;

    public void setStatuses(String statuses) {
        List<ReportStatus> statusList = new ArrayList<>();

        for (String status : statuses.split(",")) {
            switch (status) {
                case "IN_PROGRESS":
                    statusList.add(ReportStatus.IN_PROGRESS);
                    break;
                case "RESOLVED":
                    statusList.add(ReportStatus.RESOLVED);
                    break;
                default:
                    break;
            }
        }

        this.statuses = statusList;
    }
}
