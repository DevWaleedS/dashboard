import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AcountEdit, Dashboard, RegisterState } from './pages/index';




import './index.css';
import { Aside, NavBar } from './components';

const App = () => {
	return (
		<Fragment>
			{/* Page wrapper */}
			<div className='page-wrapper'>
				<BrowserRouter>
					{/* Nav bar */}
					<NavBar />

					<div className='row'>
						{/* Aside Section */}
						<div className='col-2 p-0'>
							<aside className='menu'>
								<Aside />
							</aside>
						</div>

						{/* Main Section */}
						<div className='col-10 p-0'>
							<main>
								<Routes>
									<Route path='dashboard/' element={<Dashboard />} />
									<Route path='dashboard/AcountEdit' element={<AcountEdit />} />
									<Route path='dashboard/AcountEdit' element={<RegisterState />} />
								</Routes>
							</main>
						</div>
					</div>
				</BrowserRouter>
			</div>
		</Fragment>
	);
};

export default App;
