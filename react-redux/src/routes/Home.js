import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "store";
import ToDo from "components/ToDo";

const Home = () => {
    const [text, setText] = useState("");
    const onChange = (event) => {
        setText(event.target.value);
    };
    const toDo = useSelector(state => state);
    const dispatch = useDispatch();
    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(addToDo(text));
        setText("");
    };
    return (
        <div>
            <h3>투두우?</h3>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button type="submit">추가</button>
            </form>
            <ul>
                {toDo.map(todo =>
                    <ToDo {...todo} key={todo.id} />
                )}
            </ul>
        </div>
    );
};

export default Home;