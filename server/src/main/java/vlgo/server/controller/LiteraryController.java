package vlgo.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import vlgo.server.dao.LiteraryDao;
import vlgo.server.repository.LiteraryRepository;
import vlgo.server.response.ResponseForm;
import vlgo.server.response.ResponseListForm;

@RestController
@RequestMapping("api/literary")
public class LiteraryController {

    @Autowired
    LiteraryRepository literaryRepository;

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
    public ResponseListForm<LiteraryDao> listLibrary() {
        List<LiteraryDao> literaries = literaryRepository.findAll();
        return new ResponseListForm<>(1, "Success", literaries);
    }
}
