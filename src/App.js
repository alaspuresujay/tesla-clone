import React from 'react';
import Header from './components/Header';
import './App.css';

import Accessories from './assets/Desktop-Accessories.jpg';
import model3 from './assets/Desktop-Model3.jpeg';
import Models from './assets/Desktop-ModelS.jpeg';
import ModelX from './assets/Desktop-ModelX.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarPanel from './assets/Desktop-SolarPanels.jpeg';
import SolarRoof from './assets/Desktop-SolarRoof.jpeg';
import Item from './components/Item';

function App() {
	return (
		<div>
			<Header />
			<div className='app__itemsContainer'>
				<Item
					title='Lowest Cost Solar Panel in America'
					desc='Money-back Gurantee'
					descLink=''
					backgroundImg={SolarPanel}
					leftBtnTxt='ORDER NOW'
					leftBtnLink=''
					rightBtnTxt='LEARN MORE'
					rightBtnLink=''
					twoButtons
					first
				/>
				<Item
					title='Model X'
					desc='Best Car'
					descLink=''
					backgroundImg={ModelX}
					leftBtnTxt='ORDER NOW'
					leftBtnLink=''
					rightBtnTxt='LEARN MORE'
					rightBtnLink=''
					twoButtons
				/>
				<Item
					title='Model 3'
					desc='Best Car in the World'
					descLink=''
					backgroundImg={model3}
					leftBtnTxt='ORDER NOW'
					leftBtnLink=''
					rightBtnTxt='LEARN MORE'
					rightBtnLink=''
					twoButtons
				/>
				<Item
					title='Model Y'
					desc='Best Car in the World'
					descLink=''
					backgroundImg={ModelY}
					leftBtnTxt='ORDER NOW'
					leftBtnLink=''
					rightBtnTxt='LEARN MORE'
					rightBtnLink=''
					twoButtons
				/>
				<Item
					title='Model S'
					desc='Best Car in the World'
					descLink=''
					backgroundImg={Models}
					leftBtnTxt='ORDER NOW'
					leftBtnLink=''
					rightBtnTxt='LEARN MORE'
					rightBtnLink=''
					twoButtons
				/>
				<Item
					title='Solar for New Roofs'
					desc='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
					descLink=''
					backgroundImg={SolarRoof}
					leftBtnTxt='ORDER NOW'
					leftBtnLink=''
					rightBtnTxt='LEARN MORE'
					rightBtnLink=''
					twoButtons
				/>
				<Item
					title='Lowest cost Accessories in America'
					desc='Best Car Accessories in the World'
					descLink=''
					backgroundImg={Accessories}
					leftBtnTxt='ORDER NOW'
					leftBtnLink=''
					rightBtnTxt='LEARN MORE'
					rightBtnLink=''
					twoButtons={false}
				/>
			</div>
		</div>
	);
}

export default App;
