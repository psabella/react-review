import React from 'react';
import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
    }
  }

  changeName(e) {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state))
  }

  render() {
    return (
      <div>
        {this.state.firstName === this.props.firstName && this.state.lastName === this.props.lastName ? (<List/>) :
        (<form>
          <label>First Name:</label>
          <input type="text" name="firstName" onChange={this.changeName.bind(this)}></input>
          <label>Last Name:</label>
          <input type="text" name="lastName" onChange={this.changeName.bind(this)}></input>
        </form>)}
      </div>
    )
  }
}

export default App;