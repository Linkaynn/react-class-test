import React from "react";
import Timer from "./components/timer/Timer";
import "./App.css";
import BinaryRepresentation from "./components/binary_representation/BinaryRepresentation";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timing: 60
    };
    this.onTimerChange = this.onTimerChange.bind(this);
  }

  onTimerChange(time) {
    this.setState({
      timing: Math.floor(time / 1000)
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">The incredible super timer</h1>

        <header className="App-header">
          <Timer onTimerChange={this.onTimerChange}/>
          <BinaryRepresentation time={this.state.timing}></BinaryRepresentation>
        </header>
      </div>
    );
  }
}

export default App;
