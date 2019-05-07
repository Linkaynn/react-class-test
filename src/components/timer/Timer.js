import React from "react";
import "./Timer.scss";

function formatDigit(text, zeros) {
  let formatted = "0000";

  return (formatted + text.toString()).substr(-(zeros + 1));
}

const startState = {
  time: 60000,
  start: 0,
  isOn: false,
  hasEnded: false
};

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = startState;

    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer() {
    this.setState({
      time: startState.time,
      start: Date.now()
    });

    this.timer && clearInterval(this.timer);

    this.timer = setInterval(() => {
      if (this.state.time <= 0) {
        this.setState({
          isOn: false,
          time: 0,
          hasEnded: true
        });
        clearInterval(this.timer);
      } else {
        this.setState({
          isOn: true,
          time: startState.time - (Date.now() - this.state.start)
        });
      }
    }, 1);
  }

  pauseTimer() {
    this.setState({
      time: startState.time,
      isOn: false
    });
    clearInterval(this.timer);
  }

  resetTimer() {
    this.timer && clearInterval(this.timer);
    this.setState({
      time: startState.time,
      isOn: false,
      hasEnded: false
    });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        {this.state.hasEnded ? (
          <h2 className="time-up"> Time up! </h2>
        ) : (
          <h2>
            {formatDigit(Math.floor(this.state.time / 1000), 1)} : {formatDigit(this.state.time.toString().substr(-3), 2)}
          </h2>
        )}
        {this.state.hasEnded ? null : !this.state.isOn ? (
          <i
            className="fas fa-play icon start-icon"
            onClick={this.startTimer}
          />
        ) : (
          <i className="fas fa-stop icon stop-icon" onClick={this.pauseTimer} />
        )}
        <i
          className={
            this.state.hasEnded
              ? "fas fa-undo icon reset-icon"
              : "fas fa-undo icon reset-icon margin-left"
          }
          onClick={this.resetTimer}
        />
      </div>
    );
  }
}

export default Timer;
