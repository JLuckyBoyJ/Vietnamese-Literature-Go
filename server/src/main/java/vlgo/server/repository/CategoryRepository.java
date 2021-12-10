package vlgo.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import vlgo.server.dao.CategoryDao;

@Repository
public interface CategoryRepository extends JpaRepository<CategoryDao, Long>{
}
