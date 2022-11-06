import React from 'react';


function Counts({ counterTitle, counterNumbers, counterPercent, image, bgColor, percentColor }) {
	return (
		<div className='counter-box'>
			<div className='wrapper'>
				<div className='img-bx' style={{ backgroundColor: `${bgColor}` }}>
					<img src={image} alt='' />
				</div>
				<div className='main-bx'>
					<h4 className='counter-title'>{counterTitle}</h4>
					<p className='counter-numbers'> {counterNumbers}</p>
				</div>
				<div className='percent'>
					<span className='counter-percent' style={{ color: `${percentColor}` }}>
						{counterPercent}
					</span>
				</div>
			</div>
		</div>
	);
}

export default Counts;
