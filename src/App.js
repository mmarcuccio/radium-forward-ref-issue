import React, { Component } from "react";
import logo from "./logo.svg";
import Radium from "radium";
import "./App.css";

const TestRadium = Radium(props => <div>Radium works</div>);

const TestForwardRefs = React.forwardRef((props, ref) => (
  <div ref={ref}>Forward refs work</div>
));

const TestBoth = Radium(TestForwardRefs);

class App extends Component {
  render() {
    return (
      <div className="App">
        <TestRadium />
        <TestForwardRefs />
        <TestBoth />
      </div>
    );
  }
}

export default App;
