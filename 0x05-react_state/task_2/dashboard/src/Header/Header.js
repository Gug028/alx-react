/** @jest-environment jsdom */
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Logo from '../assets/holberton-logo.jpg';
import { AppContext } from '../App/AppContext';

class Header extends Component {
	  static contextType = AppContext;

	  render() {
		      const { user, logOut } = this.context;
		      return (
			            <div className={css(styles['App-header'])}>
			              <img src={Logo} className={css(styles['App-logo'])} alt='logo' />
			              <h1>School dashboard</h1>
			              {user?.isLoggedIn && (
					                <section id='logoutSection'>
					                  Welcome {user.email} (
								              <a href='#' onClick={logOut}>
								                logout
								              </a>
								              )
					                </section>
					              )}
			            </div>
			          );
		    }
}

const styles = StyleSheet.create({
	  'App-header': {
		      display: 'flex',
		      alignItems: 'center',
		      fontSize: '1.25rem',
		      color: '#e0364b',
		      padding: '1.2rem 0 0.3rem 0',
		      borderBottom: '4px solid #e0364b',
		    },

	  'App-logo': {
		      width: '200px',
		      height: '200px',
		    },
});

export default Header;
