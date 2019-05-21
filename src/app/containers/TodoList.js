import React from 'react';
import TodoItem from 'components/TodoItem';
import PropTypes from 'prop-types';


const TodoList = (props) => {
    const notTasks = <div>Not tasks yet. Create a new task!</div>;
    return (
        <section>
            {
                props.tasks.length
                    ?
                    props.tasks.map(item => {
                        return (
                            <TodoItem
                                key={ item.id }
                                doneTask={ props.doneTask }
                                deleteTask={ props.deleteTask }
                                { ...item }
                            />
                        );
                    })
                    :
                    notTasks
            }
        </section>
    );
};


TodoList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        deadLine: PropTypes.instanceOf(Date).isRequired,
        isDone: PropTypes.bool.isRequired
    })).isRequired,
    doneTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired
};


export default TodoList;
