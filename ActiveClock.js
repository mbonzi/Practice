/* This code is not related to the other files. This is practice utilizing React and JS to create a functional clock that updates each second. */

import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
  componentDidMount() {
    const oneSecond = 1000;
setInterval(() => {
  this.setState({ date: new Date() });
}, oneSecond);
  }
}

ReactDOM.render(<Clock />, document.getElementById('app'));
