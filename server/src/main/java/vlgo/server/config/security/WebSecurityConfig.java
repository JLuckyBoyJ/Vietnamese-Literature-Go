package vlgo.server.config.security;

import java.util.Arrays;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.config.BeanIds;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import vlgo.server.config.JwtAuthEntryPoint;
import vlgo.server.config.JwtAuthenticationFilter;
import vlgo.server.config.JwtUserDetailService;

@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{
    
    @Autowired
    private JwtUserDetailService userService;

    @Autowired
    private JwtAuthEntryPoint jwtAuthEntryPoint;

    @Bean
    public JwtAuthenticationFilter jwtAuthenticationFilter() {
        return new JwtAuthenticationFilter();
    }

    @Bean(BeanIds.AUTHENTICATION_MANAGER)
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        // Password encoder, để Spring Security sử dụng mã hóa mật khẩu người dùng
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth)
            throws Exception {
        auth.userDetailsService(userService) // Cung cáp userservice cho spring security
            .passwordEncoder(passwordEncoder()); // cung cấp password encoder
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .cors()
            .and()
                .csrf().disable()
                .authorizeRequests().antMatchers("/api/login").permitAll()
                .antMatchers("/api/register").permitAll()
                .anyRequest().authenticated()
            .and() 
                .exceptionHandling()
                .authenticationEntryPoint(jwtAuthEntryPoint)
            .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        // Thêm một lớp Filter kiểm tra jwt
        http.addFilterBefore(jwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        final CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Collections.singletonList("http://localhost:3000/"));
        configuration.setAllowedMethods(Arrays.asList("HEAD", "GET", "POST", "PUT", "DELETE", "PATCH"));
        configuration.setAllowedHeaders(Arrays.asList("Origin", "Authorization", "Cache-Control", "Content-Type"));
        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source; 
    }

}
