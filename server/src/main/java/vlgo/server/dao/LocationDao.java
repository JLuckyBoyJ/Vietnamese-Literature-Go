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
@Table(name = "location")
@Data
public class LocationDao implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "location_id", unique = true, nullable = false)
    private Long id;
    
    @Column(name = "place")
    private String place;

    @Column(name = "lat")
    private Float lat;

    @Column(name = "lon")
    private Float lon;

    @Column(name = "image")
    private String image;

    public LocationDao() {}

    public LocationDao(Float lat, Float lon, String name, String image) {
        this.place = name;
        this.lat = lat;
        this.lon = lon;
        this.image = image;
    }
}
