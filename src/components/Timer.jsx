import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: {},
      seconds: 180
    };
    this.timer = 0;

    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

   componentDidMount() {
     let timeLeftVar = this.secondsToTime(this.state.seconds);
     this.setState({ time: timeLeftVar });
     this.startTimer();
   }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisorForMinutes = secs % (60 * 60);
    let minutes = Math.floor(divisorForMinutes / 60);

    let divisorForSeconds = divisorForMinutes % 60;
    let seconds = Math.ceil(divisorForSeconds);

    return {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
  }

  startTimer() {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds === 0) {
      this.setState({seconds: 180});
      this.props.requestNewComments();
    }
  }

  render() {
    return(
      <div>
        <p>Timer</p>
        <span>{(this.state.time.m < 10 ? "0" : "") + this.state.time.m} : </span>
        <span>{(this.state.time.s < 10 ? "0" : "") + this.state.time.s}</span>
      </div>
    )
  }
}

export default Timer
