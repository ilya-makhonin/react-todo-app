import React from 'react';
import PropTypes from 'prop-types';


const TodoItem = ({ id, title, description, deadLine, doneTask, deleteTask, isDone }) => {
    const currentTime = `${deadLine.getFullYear()}.${deadLine.getMonth() + 1}.${deadLine.getDay()}`;
    return (
        <div className={ isDone ? 'todo-item-done' : 'todo-item' }>
            <h4>{ title }</h4>
            <div>
                <p>{ description }</p>
                <span>{ currentTime }</span>
            </div>
            <div>
                {
                   !isDone
                       ? <button onClick={() => { doneTask(id) }}>Done</button>
                       : null
                }
                <button onClick={() => { deleteTask(id) }}>Delete</button>
            </div>
        </div>
    );
};


TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    deadLine: PropTypes.instanceOf(Date).isRequired,
    doneTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    isDone: PropTypes.bool.isRequired
};


export default TodoItem;
