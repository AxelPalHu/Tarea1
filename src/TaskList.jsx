const TasksList = ({tasks}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th className="titulo">Lista de tareas</th>
                </tr>
                <tr>
                    <th>N°</th>
                    <th>Tarea</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody className="task-table">
                {tasks.map((task, index) => (
                    <tr key={index}>
                        <td>{task.id}</td>
                        <td>{task.text}</td>
                        <td className={task.completed ? "completado" : "pendiente"}>
                            {task.completed ? "Completado" : "Pendiente"}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TasksList;