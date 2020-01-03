import React from 'react';
import ListEntry from './ListEntry.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      todos: []
    }
  }

  changeTodo(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitTodo(e) {
    e.preventDefault();
    let currentTodos = this.state.todos;
    currentTodos.push(this.state.todo);
    this.setState({
      todos: currentTodos,
      todo: ''
    }, () => console.log(this.state))
    document.getElementById('form').reset();
  }

  render() {
    return (
      <div>
        <form id="form" onSubmit={this.submitTodo.bind(this)}>
          <label>Todo:</label>
          <input type="text" name="todo" required onChange={this.changeTodo.bind(this)}></input>
          <button type="submit">Submit</button>
        </form>
        <ul>
          {this.state.todos.map((todo, index) => {
            return <ListEntry todo={todo} key={index} index={index}/>
          })}
        </ul>
      </div>
    )
  }
}

export default List;