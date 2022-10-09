import React from 'react';
import PropTypes from 'prop-types';
import { BallTriangle } from 'react-loader-spinner';

const Loader = ({isLoad}) => {
	return (
		<BallTriangle
			height={100}
			width={100}
			radius={5}
			color="#4fa94d"
			ariaLabel="ball-triangle-loading"
			wrapperClass='loader'
			wrapperStyle=""
			visible={isLoad}
		/>
	);
};

export default Loader;

Loader.propTypes = {
	isLoad: PropTypes.bool.isRequired,
};