
import './App.css';
import { Component } from "react";
import FunctionComponent from './FunctionComponent'
import UserCLass from './UserClass'
import ChildrenComponent from './ChildrenComponent'

const users = [
  {ime: "Ante", godine: 34},
  {ime: "Marko", godine: 37},
  {ime: "Tereza", godine: 25},
];

class App extends Component {
  render() {
    return (
      <>
        <h1>Korisnici</h1>
        <UserCLass users={users[0]} />
        <FunctionComponent users={users[1]} />
        <FunctionComponent users={users[2]}>
          <ChildrenComponent />
        </FunctionComponent>
      </>
    );
  }
}

export default App;
