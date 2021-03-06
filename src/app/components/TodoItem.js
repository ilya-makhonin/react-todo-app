import React from 'react';
import PropTypes from 'prop-types';


const TodoItem = ({ id, title, description, deadLine, doneTask, deleteTask, isDone }) => {
    const currentTime = `${deadLine.getFullYear()}.${deadLine.getMonth() + 1}.${deadLine.getDay()}`;
    return (
        <div className={ isDone ? 'todo-item-done' : 'todo-item' }>
            <h4 className="todo-item_header">{ title }</h4>
            <div className="todo-item_content">
                <p className="todo-item_desc">{ description }</p>
                <span className="todo-item_term">{ currentTime }</span>
            </div>
            <div className="todo-item_buttons">
                {
                   !isDone
                       ? <button className="todo-item_btn-done" onClick={() => { doneTask(id) }}>Done</button>
                       : null
                }
                <button className="todo-item_btn-delete" onClick={() => { deleteTask(id) }}>Delete</button>
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
