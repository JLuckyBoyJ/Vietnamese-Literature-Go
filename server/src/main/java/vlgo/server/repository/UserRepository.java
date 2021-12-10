package vlgo.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import vlgo.server.dao.UserDao;

@Repository
public interface UserRepository extends JpaRepository<UserDao, Long> {
    List<UserDao> findByUsername(String username);
    List<UserDao> findByEmail(String email);

    default UserDao getUserByUsername(String username) {
        List<UserDao> users = findByUsername(username);
        return users.get(0);
    }
}
