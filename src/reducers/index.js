import {ADD_TODO, DONE_TODO} from "../actions/index";


const initialState = {
    todos: [
        {todo: "Do laundry.", status: 'active'},
        {todo: "Grocery.", status: 'active'},
        {todo: "Empty trash.", status: 'done'}
    ]
};

const todos = (state = initialState, action) => {


    switch (action.type) {
        case ADD_TODO :
            state.todos.push({
                todo: action.newItem,
                status: 'active'
            });
            return state;

        case DONE_TODO :

            return {
                todos: state.todos.map((item) => {
                            if (item.todo === action.changedTodo) {
                                item.status = 'done';
                            }
                            return item;
                        })
            };

        default :
            return state;

    }
};

export default todos;