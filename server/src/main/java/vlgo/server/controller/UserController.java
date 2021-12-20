package vlgo.server.controller;

import org.springframework.web.bind.annotation.RestController;

import vlgo.server.config.CustomUserDetails;
import vlgo.server.config.JwtProvider;
import vlgo.server.dao.UserDao;
import vlgo.server.dto.User;
import vlgo.server.repository.UserRepository;
import vlgo.server.response.LoginResponse;
import vlgo.server.response.ResponseForm;

import java.util.Date;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired 
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtProvider jwtProvider;
    
    @PostMapping(value="/register")
    public ResponseForm<User> registeUser(@RequestParam("username") String username,
                            @RequestParam("password") String password,
                            @RequestParam("rePassword") String rePassword,
                            @RequestParam("email") String email,
                            @RequestParam("displayName") String displayName,
                            @RequestParam("dateOfBirth") Date dateOfBirth, 
                            @RequestParam("gender") Boolean gender
                            ) {
        if (!Objects.equals(password, rePassword)) {
            return new ResponseForm<>(0, "rePassword is not equal Password!!!", null);
        }
        if (!userRepository.findByEmail(email).isEmpty()) {
            return new ResponseForm<>(0, "Email is already exist!!!", null);
        }
        if (!userRepository.findByUsername(username).isEmpty()) {
            return new ResponseForm<>(0, "Username is already exist!!!", null);
        }

        String encodedPassword = passwordEncoder.encode(password);
        UserDao newUser = new UserDao(username, encodedPassword, email, displayName, dateOfBirth, gender);
        userRepository.save(newUser);

        User user = new User(newUser);
        return new ResponseForm<>(1, "success", user);
    }

    @PostMapping(value="/login")
    public LoginResponse<User> login(@RequestParam("username") String username, 
                                    @RequestParam("password") String password) {
        Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(username, password)
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtProvider.generateToken((CustomUserDetails) authentication.getPrincipal());

        UserDao user = userRepository.getUserByUsername(username);
        User userResponse = new User(user);
        return new LoginResponse<>(1, "Success!", userResponse, jwt);
    }
    
}
