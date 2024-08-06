import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import BodySection from './BodySection';

class BodySectionWithMarginBottom extends Component {
	  render() {
		      return (
			            <div className={css(styles.bodySectionWithMargin)}>
			              <BodySection {...this.props} />
			            </div>
			          );
		    }
}

const styles = StyleSheet.create({
	  bodySectionWithMargin: {
		      marginBottom: '40px',
		    },
});

BodySectionWithMarginBottom.propTypes = {
	  title: PropTypes.string.isRequired,
	  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default BodySectionWithMarginBottom;
