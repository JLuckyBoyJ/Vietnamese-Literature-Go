package vlgo.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import vlgo.server.dao.LiteraryDao;

@Repository
public interface LiteraryRepository extends JpaRepository<LiteraryDao, Long> {
    
}
