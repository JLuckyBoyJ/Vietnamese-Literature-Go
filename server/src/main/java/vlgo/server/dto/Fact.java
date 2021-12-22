package vlgo.server.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import vlgo.server.dao.CategoryDao;
import vlgo.server.dao.LocationDao;
import vlgo.server.dao.QuizDao;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Fact <T> {
    private Long id;
    private LocationDao location;
    private CategoryDao category;
    private User user;
    private T target;
    private String content;
    private List<QuizDao> quiz;
}
