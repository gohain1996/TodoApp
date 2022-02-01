import { Component } from "react";
class TodoForm extends Component {
    constructor(props){
        super(props);

    }
  render(){
      return (
            <div >
                <h1>TODO APP</h1>
           <form onSubmit={this.props.addTodo}>
              <input type="text" name ="todo" />
              <button>Add Task</button>
          </form>
          </div>
      );
  }
}

export default TodoForm;