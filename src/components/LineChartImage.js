import React from 'react';

const LineChartImage = (props) => {
	return (
		<div className='line-chart-image'>
			<img className='img-fluid' src={props.lineChartImage} alt='' />
		</div>
	);
};

export default LineChartImage;
