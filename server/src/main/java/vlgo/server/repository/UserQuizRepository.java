package vlgo.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import vlgo.server.dao.QuizDao;
import vlgo.server.dao.UserQuizDao;

@Repository
public interface UserQuizRepository extends JpaRepository<UserQuizDao, Long> {
    
    @Query(value = "select count(achivement_id) from user_quiz u inner join quiz q on u.quiz_id = q.quiz_id where q.achivement_id = :achivement_id and u.user_id = :user_id", nativeQuery = true)
    Long findNumberOfQuizOfAchivement(@Param(value = "achivement_id") Long achivementId, @Param(value = "user_id") Long userId);
}
