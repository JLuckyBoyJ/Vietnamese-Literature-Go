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
@Table(name = "facts")
@Data
public class FactDao implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "fact_id", unique = true, nullable = false)
    private Long id;

    @Column(name = "location_id")
    private Long locationId;

    @Column(name = "creator_id")
    private Long creatorId;

    @Column(name = "category_id")
    private Long categoryId;

    @Column(name = "target_id")
    private Long targetId;

    @Column(name = "content")
    private String content;

    public FactDao(){}

    public FactDao(Long locationId, Long creatorId, Long categoryId, Long targetId, String content){
        this.locationId = locationId;
        this.creatorId = creatorId;
        this.categoryId = categoryId;
        this.targetId = targetId;
        this.content = content;
    }
}
