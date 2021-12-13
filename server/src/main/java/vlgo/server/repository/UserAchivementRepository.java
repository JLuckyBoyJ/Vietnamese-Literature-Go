package vlgo.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import vlgo.server.dao.UserAchivementDao;

@Repository
public interface UserAchivementRepository extends JpaRepository<UserAchivementDao, Long>{
    List<UserAchivementDao> findByUserId(Long userId);
}
