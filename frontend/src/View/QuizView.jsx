import './QuizView.scss'
export default function Quiz(props) {
    return (
        <div className="Quiz">
            <p>sdfjoisdjfoj</p>
            <p>{props.question}</p>
            <input type="radio" id="A" name="quiz" value="A"/>
            <label htmlFor="A">{props.answerA}</label>
            <br/>

            <input type="radio" id="B" name="quiz" value="B"/>
            <label htmlFor="B">{props.answerB}</label>
            <br/>

            <input type="radio" id="C" name="quiz" value="C"/>
            <label htmlFor="C">{props.answerC}</label>
            <br/>

            <input type="radio" id="D" name="quiz" value="D"/>
            <label htmlFor="D">{props.answerD}</label>
            <br/>

        </div>
    );
}