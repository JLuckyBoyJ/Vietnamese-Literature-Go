package vlgo.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import vlgo.server.dao.AuthorDao;

@Repository
public interface AuthorRepository extends JpaRepository<AuthorDao, Long>{
    List<AuthorDao> findByName(String name);
    List<AuthorDao> findByPenName(String penName);

    default Boolean existName(String penName) {
        return !findByPenName(penName).isEmpty();
    }
}
