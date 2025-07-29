import { useState } from "react";

function HandleArrayObject() {

    const [todo, setTodo] = useState(
        [
            { id: 1, title: "Vivek", Completed: true },
            { id: 2, title: "Vihaan", Completed: true }
        ]);

    return (
        <div>
            <ul>
                {todo.map((item) => (
                    <li key={item.id}>
                        {item.id} - {item.title} -
                        {item.Completed ? "Completed" : "Pending"}
                    </li>
                ))};
            </ul>
        </div>
    )
}
export default HandleArrayObject;