package vlgo.server.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import vlgo.server.dao.AchivementDao;

public interface AchivementRepository extends JpaRepository<AchivementDao, Long> {
    Optional<AchivementDao> findById(Long id);

    default AchivementDao findAchivementById(Long id) {
        return findById(id).orElse(null);
    }
}
