import React from 'react';
import Header from './components/Header';
import './App.css';

import Item from './components/Item';
import { CircleIndicator } from './components/CircleIndicator';
import data from './data';

function App() {
	return (
		<div>
			<Header />
			<div className='app__itemsContainer'>
				{data.map((item) => (
					<Item details={item} />
				))}
			</div>
		</div>
	);
}

export default App;
