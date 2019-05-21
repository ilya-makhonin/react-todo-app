import { constants } from 'constants';


export default function (state, action) {
    if (action.type === constants.ADD_TASK)
    {
        return { tasks: [ ...state.tasks, action.payload ] };
    }
    else if (action.type === constants.DONE_TASK)
    {
        let newState = state.tasks.map(item => {
            if (item.id === action.payload)
            {
                return { ...item, isDone: true }
            }
            return item;
        });
        return { tasks: newState };
    }
    else if (action.type === constants.DELETE_TASK)
    {
        let newState = state.tasks.filter(item => {
            return item.id !== action.payload;
        });
        return { tasks: newState };
    }
    else
    {
        return state;
    }
}
