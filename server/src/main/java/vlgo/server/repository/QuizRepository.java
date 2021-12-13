package vlgo.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import vlgo.server.dao.QuizDao;

@Repository
public interface QuizRepository extends JpaRepository<QuizDao, Long>{
    default QuizDao findQuizById(Long id){
        return findById(id).orElse(null);
    }

    List<QuizDao> findByFactId(Long factId);
}
