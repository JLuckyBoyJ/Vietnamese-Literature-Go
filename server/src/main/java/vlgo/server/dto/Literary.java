package vlgo.server.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import vlgo.server.dao.AuthorDao;
import vlgo.server.dao.LiteraryDao;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Literary {
    private Long id;
    private String name;
    private String bornYear;
    private String link;
    private AuthorDao author;
    private String description;

    public Literary(LiteraryDao literaryDao, AuthorDao author) {
        this.id = literaryDao.getId();
        this.name = literaryDao.getName();
        this.bornYear = literaryDao.getBornYear();
        this.link = literaryDao.getLink();
        this.description = literaryDao.getDescription();
        this.author = author;
    }
}
