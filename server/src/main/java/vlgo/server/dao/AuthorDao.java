package vlgo.server.dao;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "author")
@Data
public class AuthorDao implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "author_id", unique = true, nullable = false)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "pen_name")
    private String penName;

    @Column(name = "year_of_birth")
    private Date yearOfBirth;

    @Column(name = "place_of_birth")
    private String placeOfBirth;

    @Column(name = "year_passed")
    private Date yearPassed;

    @Column(name = "description")
    private String description;

    @Column(name = "image_link")
    private String imageLink;

    public AuthorDao(){}

    public AuthorDao(String name, String penName, Date birth, String placeOfBirth, Date yearPassed, String description, String imageLink) {
        this.name = name;
        this.penName = penName;
        this.yearOfBirth = birth;
        this.placeOfBirth = placeOfBirth;
        this.yearPassed = yearPassed;
        this.description = description;
        this.imageLink = imageLink;
    }

    public Boolean isEquals(AuthorDao other)  {
        return this.getId() == other.getId();
    }
}
