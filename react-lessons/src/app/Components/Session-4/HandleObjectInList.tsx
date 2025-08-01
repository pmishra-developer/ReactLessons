function HandleObject() {

    const todoList = [
        { id: 1, title: 'Learn React', completed: false },
        { id: 2, title: 'Learn TypeScript', completed: false },
        { id: 3, title: 'Build a project', completed: false }
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            <ul>
                {todoList.map((item) => (
                    <li key={item.id}> List Items - {item.title} , {
                        item.completed ? "Done" : "Peding"}
                        <input type="checkbox" checked={item.completed} />
                    </li>
                )
                )};
            </ul>
        </div>
    )
}

export default HandleObject;