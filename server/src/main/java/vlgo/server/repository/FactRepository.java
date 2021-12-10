package vlgo.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import vlgo.server.dao.FactDao;

@Repository
public interface FactRepository extends JpaRepository<FactDao, Long> {
    
}
