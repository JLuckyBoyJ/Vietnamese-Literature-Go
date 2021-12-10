package vlgo.server.dao;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "literary")
@Data
public class LiteraryDao implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "literary_id", unique = true, nullable = false)
    private Long id;

    private String name;

    @Column(name = "born_year")
    private String bornYear;

    @Column(name = "link")
    private String link;

    @Column(name = "author_id")
    private Long authorId;

    @Column(name = "description")
    private String description;

    public LiteraryDao() {}

    public LiteraryDao(String name, String bornYear, String link, Long authorId, String description){
        this.name = name;
        this.bornYear = bornYear;
        this.link = link;
        this.authorId = authorId;
        this.description = description;
    }
}
