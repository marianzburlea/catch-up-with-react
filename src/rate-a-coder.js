// add some JavaScript
const RateACoder = () => {
  return React.createElement('div', {}, 
    React.createElement('h1', {}, 'Rate a Coder'),
    React.createElement(Coder),
    React.createElement(Coder),
    React.createElement(Coder),
  );
}

const Coder = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Marian'),
    React.createElement('h2', {}, 'Front-End'),
    React.createElement('p', {}, 'I make the front-end world a better place every day')
  ]);
}

ReactDOM.render(React.createElement(RateACoder), document.getElementById('render-into-me'));
