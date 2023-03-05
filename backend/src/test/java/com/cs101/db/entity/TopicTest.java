package com.cs101.db.entity;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
@Rollback(false)
class TopicTest {
    @PersistenceContext
    EntityManager em;

    @Test
    public void testTopic() {
        Topic topic1 = new Topic("네트워크");
        Topic topic2 = new Topic("운영체제");
        em.persist(topic1);
        em.persist(topic2);
    }
}