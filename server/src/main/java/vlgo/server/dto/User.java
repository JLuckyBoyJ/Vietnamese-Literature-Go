package vlgo.server.dto;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import vlgo.server.dao.UserDao;

@Data
public class User {
    private Long id;
    private String username;
    private String email;
    private String displayName;
    private Boolean gender;
    private Date dateOfBirth;
    private Boolean isAdmin;
    private Boolean canUpdateData;
    private Boolean isActive;

    public User() {}

    public User(UserDao user) {
        this.id = user.getId();
        this.username = user.getUsername();
        this.email = user.getEmail();
        this.displayName = user.getDisplayName();
        this.gender = user.getGender();
        this.dateOfBirth = user.getDateOfBirth();
        this.isAdmin = user.getIsAdmin();
        this.canUpdateData = user.getCanUpdateData();
        this.isActive = user.getIsActive();
    }

    @JsonIgnore
    public String getUserGender() {
        return Boolean.TRUE.equals(this.gender) ? "Nam" : "Nữ";
    }
}
