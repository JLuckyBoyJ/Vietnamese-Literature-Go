package vlgo.server.dto;

import java.util.Date;

import lombok.Data;

@Data
public class RegistrationForm {
    String username;
    String password;
    String rePassword;
    String email;
    String displayName;
    Date dateOfBirth;
    Boolean gender;
}
