import TasksList from './TaskList';

const table = () => {
    const tasks = [
        { id: 1, text: 'Realizar compra', completed: false },
        { id: 2, text: 'Ordenar la habitación', completed: true },
        { id: 3, text: 'Terminar tarea', completed: false },
        { id: 4, text: 'Inscripción a la habitación', completed: true },
        { id: 5, text: 'Últimos pendientes', completed: false }
    ];

    return (
        <div>
            <TasksList tasks={tasks} />
        </div>
    );
};

export default table;