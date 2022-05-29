import { useDispatch } from "react-redux";
import { deleteToDo } from "store";

const ToDo = ({text, id}) => {
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(deleteToDo(id));
    };
    return (
        <li>
            {text}<button type="button" onClick={onClick}>삭제</button>
        </li>
    );
}

export default ToDo;