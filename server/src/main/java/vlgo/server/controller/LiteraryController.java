package vlgo.server.controller;

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
import vlgo.server.dao.LiteraryDao;
import vlgo.server.dto.Literary;
import vlgo.server.repository.AuthorRepository;
import vlgo.server.repository.LiteraryRepository;
import vlgo.server.response.ResponseForm;
import vlgo.server.response.ResponseListForm;

@RestController
@RequestMapping("api/literary")
public class LiteraryController {

    @Autowired
    LiteraryRepository literaryRepository;

    @Autowired
    AuthorRepository authorRepository;

    @PostMapping(value = "/create")
    public ResponseForm<LiteraryDao> addToLibrary(@RequestParam String name, 
                                                @RequestParam String bornYear,
                                                @RequestParam(required = false) String link,
                                                @RequestParam Long authorId,
                                                @RequestParam String description) {
        if (!StringUtils.hasText(name) || !StringUtils.hasText(bornYear) || !StringUtils.hasText(description) || authorId == null) {
            return new ResponseForm<>(0, "Missing value", null);
        }

        LiteraryDao newLiterary = new LiteraryDao(name, bornYear, link, authorId, description);
        literaryRepository.save(newLiterary);

        return new ResponseForm<>(1, "Success!!!", newLiterary);
    }

    @GetMapping(value = "/list")
    public ResponseListForm<Literary> listLibrary() {
        List<LiteraryDao> literaries = literaryRepository.findAll();
        List<Literary> response = new ArrayList<>();

        for (LiteraryDao literary: literaries) {
            AuthorDao author = authorRepository.findById(literary.getAuthorId()).orElse(null);
            Literary l = new Literary(literary, author);
            response.add(l);
        }
        
        return new ResponseListForm<>(1, "Success", response);
    }
}
