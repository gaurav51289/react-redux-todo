import React, {Component} from 'react';
import TodoItem from "./TodoItem";


class MyToDo extends Component {

    handleAddTodo = (newItem) => {
        this.props.handleAddTodo(newItem)
    };

    render() {

        const {todos} = this.props;

        return (
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-md-6">
                        <h2 className="text-center">My Todos</h2>
                    </div>

                </div>
                <hr/>
                <div className="row justify-content-md-center">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input
                                className="form-control"
                                ref={(input) => this.input = input}
                                type="text"
                                placeholder="Enter a Todo"
                            />
                        </div>
                        <button
                            className="btn btn-primary btn-sm"
                            onClick={() => {
                                this.handleAddTodo(this.input.value)
                            }}
                        >Add</button>
                    </div>
                </div>

                <hr/>
                <div className="row justify-content-md-center">
                    <div className="card col-md-6">
                        <div className="card-body">
                            {
                                todos.map((todo,index) => {
                                    return(
                                        <TodoItem
                                            key={index}
                                            item={todo}
                                            handleDone = {this.props.handleDone}
                                        />
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyToDo;