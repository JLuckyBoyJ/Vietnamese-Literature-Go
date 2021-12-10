package vlgo.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import vlgo.server.dao.LocationDao;
import vlgo.server.repository.LocationRepository;
import vlgo.server.response.ResponseForm;
import vlgo.server.response.ResponseListForm;

@RequestMapping("/api/location")
@RestController
public class LocationController {
    
    @Autowired
    LocationRepository locationRepository;

    @PostMapping(value = "/create")
    public ResponseForm<LocationDao> createLocation(@RequestParam("lat") Float lat,
                                                    @RequestParam("long") Float lon,
                                                    @RequestParam("name") String name) {
        if (lat == null || lon == null || !StringUtils.hasText(name)) {
            return new ResponseForm<>(0, "Missing value!!!", null);
        }

        LocationDao newLocation = new LocationDao(lat, lon, name);
        //If cordinate doesn't exist, create
        if (Boolean.TRUE.equals(!locationRepository.existPlace(lat, lon))){
            locationRepository.save(newLocation);
            return new ResponseForm<>(1, "Success!!", newLocation);
        }

        return new ResponseForm<>(0, "This place is already exist!!!", null);
    }

    @GetMapping(value = "/list")
    public ResponseListForm<LocationDao> getAllLocation() {
        List<LocationDao> locations = locationRepository.findAll();
        return new ResponseListForm<>(1, "success", locations);
    }
}
