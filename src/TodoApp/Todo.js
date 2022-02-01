import { Component } from "react";
class Todo extends Component {
    constructor(props){
        super(props);

    }

    render(){
        console.log(this.props);
        return(
            <div>
                {this.props.todo}
                <button 
                onClick={()=> {
                this.props.deleteTodo(this.props.index);
            }}
            >
                Delete
                </button>
            </div>
        );
    }

}
export default Todo;