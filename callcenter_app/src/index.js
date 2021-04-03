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
				<input type="text" className="phoneNum" value="1213"></input>				
			</div>
		)
	}
}

class CurrentCallApplet extends React.Component {
	render() {
		return(
			<div className="CurrentCallApplet">
				<div>
					<label>Продукт</label>
					<input type="text"></input>
				</div>
				<div>
					<label>Тематика</label>
					<input type="text"></input>
				</div>
				<div>
					<label>Подтематика</label>
					<input type="text"></input>
				</div>
			</div>
		)
	}
}

class ClientInfoApplet extends React.Component {
	render() {
		return(
			<div className="ClientInfoApplet">
				<div>
					<label>Фамилия</label>
					<input type="text"></input>
				</div>
				<div>
					<label>Имя</label>
					<input type="text"></input>
				</div>
				<div>
					<label>Отчество</label>
					<input type="text"></input>
				</div>
			</div>
		)
	}
}

class ClientCardsApplet extends React.Component {
	render() {
		return(
			<div className="ClientCardsApplet">
				<table>
					<tr>
						<th>Номер карты</th>
						<th>Срок действия</th>
						<th>Эмбоссированное имя</th>
					</tr>
					<tr>
						<th>1111222244445555</th>
						<th>15,05,2025</th>
						<th>IVAN IVANOV</th>
					</tr>

				</table>
			</div>
		)
	}
}

class CardInfoApplet extends React.Component {
	render() {
		return(
			<div className="CardInfoApplet">
				<div>
					<label>Номер карты</label>
					<input type="text"></input>
				</div>
				<div>
					<label>Остаток</label>
					<input type="text"></input>
				</div>
				<div>
					<label>Контрольная информация</label>
					<input type="text"></input>
				</div>			
			</div>
		)
	}
}


class App extends React.Component {
	render() {
		return( 
			<div className="App">
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