import { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";


class TodoApp extends Component {
    constructor (){
        super();
        this.state = {
            todos : ["Drink Tea","Go for Morning Jog"],
           // title : "kumar"
            
        };
    }

    addTodo =(event) => {
        event.preventDefault();
        let newTodos = [...this.state.todos,event.target.todo.value];
        this.setState({todos:newTodos});
        
    }

    deleteTodo = (indexToDelete) => {
        alert(indexToDelete);
        let newTodos = this.state.todos.filter((val,index)=>{
            if(index == indexToDelete){
                return false;
            }
            return true;
        });
        this.setState({todos:newTodos});
    }
render(){
        return(
            <div>
                <TodoForm addTodo = {this.addTodo} />
                <TodoList todos = {this.state.todos} deleteTodo= {this.deleteTodo}/>
                
               

           
           </div>
        );
    }
}

export default TodoApp;