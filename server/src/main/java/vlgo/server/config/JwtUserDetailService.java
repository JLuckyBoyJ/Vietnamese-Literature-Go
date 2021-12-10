package vlgo.server.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import vlgo.server.dao.UserDao;
import vlgo.server.repository.UserRepository;

@Service
public class JwtUserDetailService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserDao user = userRepository.findByUsername(username).get(0);
        if (user == null) {
            throw new UsernameNotFoundException("User not found!!!");
        } 
        return new CustomUserDetails(user);
    }
    
}
