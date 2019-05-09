import React from "react";
import { isNumber } from "util";
import { formatDigit } from "../timer/Timer"
import "./BinaryRepresentation.scss"

function toBinaryRepresentation(time) {
  return formatDigit(Number(time).toString(2), 5).split("");
}

class BinaryRepresentation extends React.Component {
  constructor(props) {
    super(props);

    if (isNumber(props.time)) {
      this.state = {
        representation: toBinaryRepresentation(props.time)
      };
    } else {
      this.state = {
        representation: toBinaryRepresentation(60)
      };
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.time !== this.props.time) {
      this.setState({
        representation: toBinaryRepresentation(nextProps.time)
      });
    }
  }

  render() {
    return (
      <div className="binary-representation-container">
        {this.state.representation.map((digit, index) => {
          if (digit === "1") {
            return <div key={index} className="digit active" />;
          } else {
            return <div key={index} className="digit" />;
          }
        })}
      </div>
    );
  }
}

export default BinaryRepresentation;