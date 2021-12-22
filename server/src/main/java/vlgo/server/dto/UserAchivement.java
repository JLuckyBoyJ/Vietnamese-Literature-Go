package vlgo.server.dto;

import java.util.List;

import lombok.Data;
import lombok.NoArgsConstructor;
import vlgo.server.dao.AchivementDao;

@Data
@NoArgsConstructor
public class UserAchivement {
    private User user;
    private List<AchivementDao> achivements;

    public UserAchivement(User user, List<AchivementDao> achivements) {
        this.user = user;
        this.achivements = achivements;
    }
}
