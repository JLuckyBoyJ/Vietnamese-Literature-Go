package vlgo.server.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import vlgo.server.dao.AuthorDao;
import vlgo.server.repository.AuthorRepository;
import vlgo.server.response.ResponseForm;
import vlgo.server.response.ResponseListForm;

@RestController
@RequestMapping("api/author")
public class AuthorController {

    @Autowired
    AuthorRepository authorRepository;

    @PostMapping(value = "/create")
    public ResponseForm<AuthorDao> createAuthor(@RequestParam String name, @RequestParam String penName, 
                                                @RequestParam String yearOfBirth, @RequestParam(required = false) String yearPassed,
                                                @RequestParam(required = false) String placeOfBirth,
                                                @RequestParam String description,
                                                @RequestParam(required = false) String imageLink) throws ParseException {
        
        Date birthYear = new SimpleDateFormat("yyyy").parse(yearOfBirth);
        Date passedYear = new SimpleDateFormat("yyyy").parse(yearPassed);

        if (Boolean.TRUE.equals(!hasText(name) || !hasText(penName) || !hasText(description)) || birthYear == null) {
            return new ResponseForm<>(0, "Missing value!!! Please check name, pen_name or description.", null);
        }

        if (Boolean.TRUE.equals(authorRepository.existName(penName))){
            return new ResponseForm<>(0, "This authors is already exist!!!", null);
        }

        AuthorDao newAuthor = new AuthorDao(name, penName, birthYear, placeOfBirth, passedYear, description, imageLink);
        authorRepository.save(newAuthor);

        return new ResponseForm<>(1, "Success", newAuthor);
    }

    public Boolean hasText(String text) {
        return StringUtils.hasText(text) || text == null;
    }
    
    @GetMapping(value = "/list")
    public ResponseListForm<AuthorDao> getAuthor(@RequestParam(required = false) String name){
        List<AuthorDao> authors;
        if (name != null) {
            List<AuthorDao> authorByName = authorRepository.findAuthorContainingName(name);
            authors = authorByName;
        } else {
            authors = authorRepository.findAll();
        }

        return new ResponseListForm<>(1, "Success!!!", authors);
    }

}
