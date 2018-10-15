// add some JavaScript
class RateACoder extends React.Component {
  logClick(e) {
    console.log("You have clicked: " + e.target.textContent);
  }

  render() {
    return React.createElement("div", {}, [
      React.createElement("h1", {
        onClick: this.logClick
      }, "Rate a Coder"),
      React.createElement(Coder, {
        name: "Marian",
        job: "Front-End",
        about: "I make the front-end world a better place every day"
      }),
      React.createElement(Coder, {
        name: "Gratiela",
        job: "Social Marketing",
        about: "I make everyone happier every day"
      }),
      React.createElement(Coder, {
        name: "Maya",
        job: "Cute girl",
        about: "I make the my parents happy every day"
      })
    ]);
  }
}

const Coder = data => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, data.name),
    React.createElement("h2", {}, data.job),
    React.createElement("p", {}, data.about)
  ]);
};

ReactDOM.render(
  React.createElement(RateACoder),
  document.getElementById("render-into-me")
);