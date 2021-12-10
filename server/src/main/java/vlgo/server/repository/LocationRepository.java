package vlgo.server.repository;

import java.util.List;
import java.util.Objects;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import vlgo.server.dao.LocationDao;

@Repository
public interface LocationRepository extends JpaRepository<LocationDao, Long> {
    List<LocationDao> findByLat(Float lat);

    default Boolean existPlace(Float lat, Float lon){
        List<LocationDao> locationDaos = findByLat(lat);
        for (LocationDao locationDao : locationDaos){
            if (Objects.equals(locationDao.getLon(), lon)){
                return true;
            }
        }
        return false;
    } 
}
