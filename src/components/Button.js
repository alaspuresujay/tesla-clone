import React from 'react';
import './Button.css';
import { Button as MuiButton } from '@material-ui/core';
import { motion } from 'framer-motion';

function Button({ imp, text, link = '#' }) {
	return (
		<>
			<motion.button
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
				className={`button ${imp == 'secondary' ? 'button__secondary' : ''}`}>
				{text}
			</motion.button>
		</>
	);
}

export default Button;
