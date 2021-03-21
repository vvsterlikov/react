import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class CTIToolbar extends React.Component {
	render() {
		return(
			<div className="CTIToolbar">		
				<button className="ctiButton">Встать в линию</button>
				<button className="ctiButton">Принять звонок</button>
				<button className="ctiButton">Завершить звонок</button>
				<button className="ctiButton">Выйти из постобработки</button>
			</div>
		)
	}
}

class CurrentCallApplet extends React.Component {
	render() {
		return(
		)
	}
}

class ClientInfoApplet extends React.Component {
	render() {
		return(
		)
	}
}

class ClientCardsApplet extends React.Component {
	render() {
		return(
		)
	}
}

class CardInfoApplet extends React.Component {
	render() {
		return(
		)
	}
}


class App extends React.Component {
	render() {
		return(
			<div className="app">
				<CTIToolbar />
				<CurrentCallApplet />
				<ClientInfoApplet />
				<ClientCardsApplet />
				<CardInfoApplet />
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);