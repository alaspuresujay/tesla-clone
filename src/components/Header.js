import React from 'react';
import './Header.css';
import TeslaLogo from '../assets/teslaLogoSmall.svg';
import MenuIcon from '@material-ui/icons/Menu';
import { motion } from 'framer-motion';
function Header() {
	return (
		<motion.div
			className='header'
			initial={{ y: -50 }}
			animate={{
				x: 0,
				y: 0,
				transition: { type: 'spring', stiffness: 200 },
			}}
			transition={{ duration: 1 }}>
			<div className='header__logo'>
				<img src={TeslaLogo} alt='Tesla Logo' />
			</div>
			<div className='header__center'>
				<p>Model X</p>
				<p>Model 3</p>
				<p>Model 5</p>
				<p>Model Y</p>
				<p>Solar Roof</p>
				<p>Solar panel</p>
			</div>
			<div className='header__right'>
				<p>Shop</p>
				<p>Tesla Account</p>
				<p>
					<MenuIcon />
				</p>
			</div>
		</motion.div>
	);
}

export default Header;
