import { constants } from 'constants';


function addTask(taskDescription) {
    return {
        type: constants.ADD_TASK,
        payload: taskDescription
    };
}


function deleteTask(taskId) {
    return {
        type: constants.DELETE_TASK,
        payload: taskId
    };
}


function doneTask(taskId) {
    return {
        type: constants.DONE_TASK,
        payload: taskId
    };
}

export { addTask, deleteTask, doneTask };
