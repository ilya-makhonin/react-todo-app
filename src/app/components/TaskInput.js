import React, { Component } from 'react';


class TaskInput extends Component {
    _getData = () => {
        return {
            id: Math.floor(Date.now()),
            title: this.inputTask.value,
            description: this.textDescription.value,
            deadLine: new Date(this.taskDate.value),
            isDone: false
        };
    };

    render() {
        return (
            <div>
                <input ref={ node => this.inputTask = node } type="text"/>
                <textarea ref={ node => this.textDescription = node } />
                <input ref={ node => this.taskDate = node } type="date"/>
                <button onClick={() => { this.props.addTask(this._getData()) }}>Add</button>
            </div>
        );
    }
}


export default TaskInput;
