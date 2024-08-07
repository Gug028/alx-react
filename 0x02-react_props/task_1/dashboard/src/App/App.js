import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer.js';
import './App.css';

function App() {
	  return (
		      <>
		        <Notifications />
		        <div className='App'>
		          <Header />
		          <div className='App-body'>
		            <Login />
		          </div>
		          <Footer />
		        </div>
		      </>
		    );
}

export default App;
