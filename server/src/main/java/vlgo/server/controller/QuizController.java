package vlgo.server.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import vlgo.server.dao.AchivementDao;
import vlgo.server.dao.QuizDao;
import vlgo.server.dao.UserAchivementDao;
import vlgo.server.dao.UserQuizDao;
import vlgo.server.dto.QuizResult;
import vlgo.server.repository.AchivementRepository;
import vlgo.server.repository.QuizRepository;
import vlgo.server.repository.UserAchivementRepository;
import vlgo.server.repository.UserQuizRepository;
import vlgo.server.repository.UserRepository;
import vlgo.server.response.ResponseForm;

import java.util.Objects;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
@RequestMapping("/api/quiz")
public class QuizController {

    @Autowired
    QuizRepository quizRepository;

    @Autowired 
    UserRepository userRepository;

    @Autowired
    UserQuizRepository userQuizRepository;

    @Autowired
    AchivementRepository achivementRepository;

    @Autowired
    UserAchivementRepository userAchivementRepository;

    @PostMapping(value="/submitAnswer")
    public ResponseForm<QuizResult> submitAnsweResponseForm(@RequestParam Long quizId, @RequestParam Character answer) {
        QuizDao quiz = quizRepository.findQuizById(quizId);
        if (quiz == null) {
            return new ResponseForm<>(0, "Invalid quiz!!!", null);
        }
        String correctAns = "Correct";
        String wrongAns = "Wrong";
        String result = correctAns;
        switch (answer) {
            case 'A':
                result = !Objects.equals(quiz.getAnswerA(), quiz.getCorrectAnswer()) ? wrongAns : correctAns;
                break;
            case 'B':
                result = !Objects.equals(quiz.getAnswerB(), quiz.getCorrectAnswer()) ? wrongAns : correctAns;
                break;
            case 'C':
                result = !Objects.equals(quiz.getAnswerC(), quiz.getCorrectAnswer()) ? wrongAns : correctAns;
                break;
            case 'D':
                result = !Objects.equals(quiz.getAnswerD(), quiz.getCorrectAnswer()) ? wrongAns : correctAns;
                break;
            default:
                break;
        }

        QuizResult quizResult = new QuizResult(result);
        
        return new ResponseForm<>(1, "Success!!!", quizResult);
    }

    public void saveCorrectAnswer(QuizDao quiz) {
        Long userId = getUserIdFromRequest();
        Long quizId = quiz.getId();
        UserQuizDao userQuiz = new UserQuizDao(userId, quizId);
        userQuizRepository.save(userQuiz);
        checkAchivement(quiz.getAchivementId(), userId);
    }

    public void checkAchivement(Long achivementId, Long userId) {
        AchivementDao achivement = achivementRepository.findAchivementById(achivementId);

        Long numberQuizAnswered = userQuizRepository.findNumberOfQuizOfAchivement(achivementId, userId);
        if (Objects.equals(achivement.getNumberQuiz(), numberQuizAnswered)) {
            UserAchivementDao newUserAchivement = new UserAchivementDao(userId, achivementId);
            userAchivementRepository.save(newUserAchivement);
        }
    }

    private Long getUserIdFromRequest() {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username =  userDetails.getUsername();
        return userRepository.getUserByUsername(username).getId();
    }
}
