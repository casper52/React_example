import React, {Component} from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

class TodoComponent extends Component{

    state = {
        todos: ['AAA','BBB','CCC']
    }

    removeTodo = (idx) => {
        console.log("TodoComponent removeTodo...."+idx)

        this.state.todos.splice(idx,1)
        console.log(this.state.todos)

        this.setState({
            todos: this.state.todos
        })
    }

    addTodo = (newTodo) => {
       console.log("add To do ...." + newTodo)
       console.log(this.state)
        this.setState({
            todos:[...this.state.todos, newTodo]
        })
    }

    render(){
        return(
            <div>
                <TodoInput add={this.addTodo}/>
                <TodoList arr={this.state.todos} remove={this.removeTodo}/>
            </div>
        )
    }
}

export default TodoComponent