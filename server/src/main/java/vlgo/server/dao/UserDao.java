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
@Table(name = "user", schema = "vlfactgo")
@Data
public class UserDao implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", unique = true, nullable = false)
    private Long id;

    private String username;
    private String password;
    private String email;
    private Boolean gender;

    @Column(name = "display_name")
    private String displayName;

    @Column(name="date_of_birth")
    private Date dateOfBirth;

    @Column(name="is_admin")
    private Boolean isAdmin;

    @Column(name="can_update_data")
    private Boolean canUpdateData;

    @Column(name="is_active")
    private Boolean isActive;

    public UserDao(){}

    public UserDao(String username, 
                   String password, 
                   String email,
                   String displayName,
                   Date datOfBirth,
                   Boolean gender) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.displayName = displayName;
        this.dateOfBirth = datOfBirth;
        this.gender = gender;
        this.isAdmin = false;
        this.canUpdateData = false;
        this.isActive = true;
    }
                

}   
