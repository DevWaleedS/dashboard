import React from 'react';

const LineChartsTitle = (props) => {
	return (
		<div className='title'>
			<h3 className='h4'>{props.title} </h3>
			<p>{props.avg}</p>
		</div>
	);
};

export default LineChartsTitle;
