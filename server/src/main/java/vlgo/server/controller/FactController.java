package vlgo.server.controller;

import java.lang.annotation.Target;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import vlgo.server.dao.AuthorDao;
import vlgo.server.dao.CategoryDao;
import vlgo.server.dao.FactDao;
import vlgo.server.dao.LiteraryDao;
import vlgo.server.dao.LocationDao;
import vlgo.server.dao.QuizDao;
import vlgo.server.dao.UserDao;
import vlgo.server.dto.Fact;
import vlgo.server.dto.User;
import vlgo.server.repository.AuthorRepository;
import vlgo.server.repository.CategoryRepository;
import vlgo.server.repository.FactRepository;
import vlgo.server.repository.LiteraryRepository;
import vlgo.server.repository.LocationRepository;
import vlgo.server.repository.QuizRepository;
import vlgo.server.repository.UserRepository;
import vlgo.server.response.ResponseForm;
import vlgo.server.response.ResponseListForm;

@RequestMapping("/api/fact")
@RestController
public class FactController {

    @Autowired
    FactRepository factRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    LocationRepository locationRepository;

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    AuthorRepository authorRepository;

    @Autowired
    LiteraryRepository literaryRepository;

    @Autowired 
    QuizRepository quizRepository;

    @PostMapping("/create")
    public ResponseForm<Fact> createFact(@RequestParam Long locationId,
            @RequestParam Long creatorId,
            @RequestParam Long categoryId,
            @RequestParam Long targetId,
            @RequestParam String content) {
        if (locationId == null || creatorId == null || categoryId == null || targetId == null
                || !StringUtils.hasText(content)) {
            return new ResponseForm<>(0, "Missing value!!!", null);
        }

        LocationDao location = locationRepository.findById(locationId).orElse(null);
        UserDao userDao = userRepository.findById(creatorId).orElse(null);
        User user = new User(userDao);
        
        CategoryDao category = categoryRepository.findById(categoryId).orElse(null);

        if (location == null || userDao == null || category == null) {
            return new ResponseForm<>(0, "Location, user or category doesn't exist!!!", null);
        }

        FactDao newFact = new FactDao(locationId, creatorId, categoryId, targetId, content);
        factRepository.save(newFact);
        
        List<QuizDao> quiz = quizRepository.findByFactId(newFact.getId());

        // Nếu category = 1, target là tác giả và ngược lại
        if (category.getId() == 1) {
            AuthorDao author = authorRepository.findById(targetId).orElse(null);

            if (author == null) {
                return new ResponseForm<>(0, "Author doesn't exist!!!", null);
            }

            Fact<AuthorDao> fact = new Fact<>(newFact.getId(), location, category, user, author, quiz);
            return new ResponseForm<>(1, "Success!!!", fact);
        } else {
            LiteraryDao literary = literaryRepository.findById(targetId).orElse(null);

            if (literary == null) {
                return new ResponseForm<>(0, "Literary doesn't exist!!!", null);
            }

            Fact<LiteraryDao> fact = new Fact<>(newFact.getId(), location, category, user, literary, quiz);
            return new ResponseForm<>(1, "Success!!!", fact);
        }

    }

    @GetMapping("/list")
    public ResponseListForm<Fact> listFact(@RequestParam(required = false) Long locationId) {
        List<FactDao> facts = factRepository.findAll();
        List<Fact> factResponse = new ArrayList<>();

        for (FactDao fact: facts) {
            LocationDao location = locationRepository.findById(locationId).orElse(null);
            UserDao creator = userRepository.findById(fact.getCreatorId()).orElse(null);
            User user = new User(creator);
            CategoryDao category = categoryRepository.findById(fact.getCategoryId()).orElse(null);
            List<QuizDao> quiz = quizRepository.findByFactId(fact.getId());
            
            if(category == null) {
                return new ResponseListForm<>(0, "Category doesn't exist", null);
            }

            if (category.getId() == 1) { //Tasc gia
                AuthorDao author = authorRepository.findById(fact.getTargetId()).orElse(null);
                Fact<AuthorDao> f = new Fact<>(fact.getId(), location, category, user, author, quiz);
                factResponse.add(f);
            } else {
                LiteraryDao literary = literaryRepository.findById(fact.getTargetId()).orElse(null);
                Fact<LiteraryDao> f = new Fact<>(fact.getId(), location, category, user, literary, quiz);
                factResponse.add(f);
            }

        }
        return new ResponseListForm<>(1, "Success!", factResponse);
    }

}
