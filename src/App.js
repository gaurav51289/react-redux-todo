import React, {Component} from 'react';
import MyToDo from './components/MyToDo';

class App extends Component {

    state = {
        todos: [
            {todo: "Do laundry.", status: 'active'},
            {todo: "Grocery.", status: 'active'},
            {todo: "Empty trash.", status: 'done'}
        ]
    };

    handleAddTodo = (newItem) => {
        this.setState((state) => {
            state.todos.push({
                todo: newItem,
                status: 'active'
            });
        });
    };

    handleDone = (changedTodo) => {
        this.setState((state) => {
           state.todos = state.todos.map((item) => {
               if(item.todo === changedTodo){
                   item.status = 'done';
               }

               return item;
           })
        });
    };

    render() {
        return (
            <MyToDo
                todos={this.state.todos}
                handleAddTodo={this.handleAddTodo}
                handleDone = {this.handleDone}
            />
        );
    }
}

export default App;
