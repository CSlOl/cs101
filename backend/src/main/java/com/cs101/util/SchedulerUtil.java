package com.cs101.util;

import com.cs101.api.repository.DailyRepository;
import com.cs101.api.repository.UserRepository;
import com.cs101.entity.Daily;
import com.cs101.entity.User;
import com.cs101.entity.UserStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Random;

@Component
@RequiredArgsConstructor
public class SchedulerUtil {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

//    @Scheduled(cron="0 16 19 * * ?")
//    public void test() throws IOException {
//        for(int i=1;i<=5;i++){
//            User user = User.builder()
//                    .email("aa@aa.com")
//                    .password(passwordEncoder.encode("1111"))
//                    .name("sangwoo")
//                    .registeredDate(LocalDateTime.now())
//                    .userStatus(UserStatus.ACTIVATED)
//                    .build();
//            userRepository.save(user);
//        }
//        Long userSize = userRepository.getUserSize();
//        Random random = new Random();
//        Long randomId = (long) (random.nextDouble()*userSize)+1;
//    }

    private final DailyRepository dailyRepository;

//    @Scheduled(cron="0 0 0 * * ?")
//    public void createDaily() throws IOException {
//        System.out.println("Daily information updated");
//        Daily daily = Daily.builder()
//                .date(LocalDate.now())
//                .dailyProblemId1(1L)
//                .dailyProblemId2(2L)
//                .dailyProblemId3(3L)
//                .dailyKnowledge(null)
//                .build();
//        dailyRepository.save(daily);
//    }
}
