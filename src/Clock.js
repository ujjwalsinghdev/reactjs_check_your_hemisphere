import React from "react"

class Clock extends React.Component {
  state = {
    time: ""
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() })
    }, 1000)
  }

  render() {
    return (
      <div >
        <h1>Your Current time is : {this.state.time} .</h1>
      </div>
    )
  }
}

export default Clock
