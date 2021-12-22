import './QuizView.scss'
export default function Quiz(props) {
    return (
        <div className="Quiz">
            <p>Câu hỏi</p>
            <input type="radio" id="A" name="quiz" value="A"/>
            <label htmlFor="A">Đáp án A</label>
            <br/>

            <input type="radio" id="B" name="quiz" value="B"/>
            <label htmlFor="B">Đáp án B</label>
            <br/>

            <input type="radio" id="C" name="quiz" value="C"/>
            <label htmlFor="C">Đáp án C</label>
            <br/>

            <input type="radio" id="D" name="quiz" value="D"/>
            <label htmlFor="D">Đáp án D</label>
            <br/>

            <input type="submit" value="Submit"></input>
        </div>
    );
}