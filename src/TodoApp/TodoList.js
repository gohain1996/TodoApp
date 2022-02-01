import { Component } from "react";
import Todo from "./Todo";
class TodoList extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="hello">
            {this.props.todos.map((val,index)=>{
                 return(
                     <Todo 
                     todo = {val}
                     deleteTodo = {this.props.deleteTodo}
                     index = {index}
                     />
                 );
            })}


            </div>

        )
    }
}

export default TodoList;