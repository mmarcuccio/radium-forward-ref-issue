import React, { Component } from "react";
import logo from "./logo.svg";
import Radium from "radium";
import "./App.css";

// This works
const TestRadium = Radium(props => <div>Radium works</div>);

// This works
const TestForwardRefs = React.forwardRef((props, ref) => (
  <div ref={ref}>Forward refs work</div>
));

// This does not render
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
