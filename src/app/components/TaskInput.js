import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TaskInput extends Component {
    _getData = () => {
        let title = this.inputTask.value;
        let description = this.textDescription.value;
        let deadLine = new Date(this.taskDate.value);
        
        this.inputTask.value = '';
        this.textDescription.value = '';
        this.taskDate.value = '';

        return { id: Math.floor(Date.now()), title, description, deadLine, isDone: false };
    };

    render() {
        return (
            <div className="task-input">
                <label className="task-input_label">
                    <input
                        className="task-input_input"
                        ref={ node => this.inputTask = node }
                        type="text"
                    />
                </label>
                <label className="task-input_label">
                    <textarea
                        className="task-input_textarea"
                        ref={ node => this.textDescription = node }
                    />
                </label>
                <label className="task-input_label">
                    <input
                        className="task-input_input"
                        ref={ node => this.taskDate = node }
                        type="date"
                    />
                </label>
                <button
                    className="task-input_btn-add"
                    onClick={() => { this.props.addTask(this._getData()) }}
                >
                    Add
                </button>
            </div>
        );
    }
}


TaskInput.propTypes = {
    addTask: PropTypes.func.isRequired
};


export default TaskInput;
