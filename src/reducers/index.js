import {ADD_TODO, DONE_TODO} from "../actions/index";


const initialState = {
        "Do laundry" : 'active',
        "Empty trash" : 'active'
};

const todos = (state = initialState, action) => {


    switch (action.type) {
        case ADD_TODO :
           return {
               ...state,
               [action.newItem] : 'active'
           };

        case DONE_TODO :
            return {
                ...state,
                [action.changedTodo] : 'done'
            };

        default :
            return state;

    }
};

export default todos;