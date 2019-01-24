import React, {Component} from 'react'

class TodoList extends Component{

    render(){

        const todoLI = this.props.arr.map((item, index) => <li key={index}>{item}</li>)
        return(
            <div>
                {todoLI}
            </div>
        )
    }
}

export default TodoList