import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "David Busuru",
        bio: "I am a software developer passionate about React and Django.",
        imgSrc: "https://media.licdn.com/dms/image/v2/D4E03AQGAjGH6oZcatw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721342954500?e=1748476800&v=beta&t=8udToGa_QsNLU0V5_FOpH-JWn_3LzY_WfB0UjuQfTcw",
        profession: "Software Developer",
      },
      shows: false,
      timeInterval: 0,
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleShow() {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  }

  render() {
    const { person, shows, timeInterval } = this.state;

    return (
      <div className="app">
        <h1>Checkpoint - Class Component & State</h1>
        <button onClick={this.toggleShow} className="toggle-button">
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows && (
          <div className="profile-card">
            <img src={person.imgSrc} alt="Profile" />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <h4>{person.profession}</h4>
          </div>
        )}
        <p>Time since component mounted: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;
