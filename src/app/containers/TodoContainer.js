import React, { Component } from 'react';
import Header from 'components/Header';
import TodoList from 'containers/TodoList';
import TaskInput from 'components/TaskInput';
import { connect } from 'react-redux';
import { addTask, deleteTask, doneTask } from 'actions';


class TodoContainer extends Component {
    render() {
        return ( 
            <div className = "todo-container" >
                <Header />
                <TaskInput addTask = { this.props.addTask }/> 
                <TodoList 
                    tasks = { this.props.tasks }
                    doneTask = { this.props.doneTask }
                    deleteTask = { this.props.deleteTask }
                /> 
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        tasks: state.tasks
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addTask: data => dispatch(addTask(data)),
        doneTask: id => dispatch(doneTask(id)),
        deleteTask: id => dispatch(deleteTask(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoContainer);