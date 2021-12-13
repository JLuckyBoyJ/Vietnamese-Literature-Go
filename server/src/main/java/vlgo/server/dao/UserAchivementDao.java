package vlgo.server.dao;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "user_achives")
@Data
public class UserAchivementDao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_achivement_id", unique = true, nullable = false)
    private Long id;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "achivement_id")
    private Long achivementId;

    public UserAchivementDao(){} 

    public UserAchivementDao(Long userId, Long achivementId) {
        this.userId = userId;
        this.achivementId = achivementId;
    }
}
