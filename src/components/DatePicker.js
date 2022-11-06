import React, { Fragment, useRef } from 'react';
import datePicker from '../assets/Icons/icon-date.svg';

const DatePicker = () => {
	const datePickerRef = useRef();

	const changeInputType = () => {
		datePickerRef.current.type = 'date';
	};
	return (
		<Fragment>
			<div className='date-picker'>
				<div className='bg-picker'>
					<img src={datePicker} alt='' className='datePicker-icon' />
				</div>
				<input type='text' className='date-picker-input' name='date' placeholder='اختر الفترة من-إلي ' ref={datePickerRef} onClick={changeInputType} />
			</div>
		</Fragment>
	);
};

export default DatePicker;
