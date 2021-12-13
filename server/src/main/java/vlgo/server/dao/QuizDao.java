package vlgo.server.dao;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "quiz")
@Data
public class QuizDao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "quiz_id", unique = true, nullable = false)
    private Long id;

    @Column(name = "achivement_id")
    private Long achivementId;

    @Column(name = "fact_id")
    private Long factId;

    @Column(name = "question")
    private String question;

    @Column(name = "answer_a")
    private String answerA;

    @Column(name = "answer_b")
    private String answerB;

    @Column(name = "answer_c")
    private String answerC;

    @Column(name = "answer_d")
    private String answerD;

    @Column(name = "correct_answer")
    private String correctAnswer;

    public QuizDao(){}

    public QuizDao(Long achivementId, Long factId, String question, List<String> ans, String correctAns){
        this.achivementId = achivementId;
        this.factId = factId;
        this.question = question;
        this.answerA = ans.get(0);
        this.answerB = ans.get(1);
        this.answerC = ans.get(2);
        this.answerD = ans.get(3);
        this.correctAnswer = correctAns;
    }
}
