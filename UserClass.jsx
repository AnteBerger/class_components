import React, { Component } from 'react';

class UserClass extends Component {
  render() {
    const { users} = this.props;
    return (
      <div>
        <p>ime: {users.ime}</p>
        <p>godine: {users.godine}</p>
      </div>
    );
  }
}

export default UserClass;
