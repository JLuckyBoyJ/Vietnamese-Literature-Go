export default function Author(props) {
    return (
        <div>
            <p>
                {props.name} hay còn được biết đến với bút danh {props.penName} 
                sinh ra tại {props.placeOfBirth} năm {props.yearOfBirth}. {props.description}
            </p>
            <br/>
        </div>
    );
}