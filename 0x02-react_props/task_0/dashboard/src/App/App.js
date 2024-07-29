import React from 'react';
import Notifications from '../Notifications/Nofitications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer.js';
import './App.css';

function App() {
	return (
		<>
		<Notification />
		<div className='App'>
		<Header />
		<div className='App-body'>
		<login />
		</div>
		<Footer />
		</div>
		</>
	);
}

export default App;
