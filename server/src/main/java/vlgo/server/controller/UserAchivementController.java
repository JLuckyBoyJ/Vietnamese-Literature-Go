package vlgo.server.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import vlgo.server.dao.AchivementDao;
import vlgo.server.dao.UserAchivementDao;
import vlgo.server.dao.UserDao;
import vlgo.server.dto.User;
import vlgo.server.dto.UserAchivement;
import vlgo.server.repository.AchivementRepository;
import vlgo.server.repository.UserAchivementRepository;
import vlgo.server.repository.UserRepository;
import vlgo.server.response.ResponseForm;
import vlgo.server.response.ResponseListForm;

@RestController
@RequestMapping("/api/achivement")
public class UserAchivementController {
    
    @Autowired
    UserAchivementRepository userAchivementRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    AchivementRepository achivementRepository;

    @GetMapping(value = "/list")
    public ResponseForm<UserAchivement> getUserAchivements(){
        UserDao user = getUserFromRequest();
        List<UserAchivementDao> userAchivements = userAchivementRepository.findByUserId(user.getId());
        List<AchivementDao> achivements = new ArrayList<>();
        for (UserAchivementDao userAchivement: userAchivements) {
            AchivementDao achivement = achivementRepository.findAchivementById(userAchivement.getAchivementId());
            achivements.add(achivement);
        }
        User userResponse = new User(user);
        UserAchivement response = new UserAchivement(userResponse, achivements);
        return new ResponseForm<>(1, "Success!!!", response);
    }

    private UserDao getUserFromRequest() {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username =  userDetails.getUsername();
        return userRepository.getUserByUsername(username);
    }
}
