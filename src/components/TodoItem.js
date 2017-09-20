import React, {Component} from 'react';


class TodoItem extends Component {

    handleDone = (changedTodo) => {
        this.props.handleDone(changedTodo)
    };

    render() {

        const {item} = this.props;

        const todoClass = `alert alert-${item.status === 'done' ?  "success" : "danger"}`;

        return (
            <div className="row justify-content-md-center">
                <div className="col-md-12">
                    <div className={todoClass} role="alert">
                        { item.todo }
                        { item.status === 'active' ? (
                            <button
                                className="close"
                                onClick={() => {
                                    this.handleDone(item.todo);
                                }}
                            ><span aria-hidden="true">&times;</span></button>) : ''}
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoItem;