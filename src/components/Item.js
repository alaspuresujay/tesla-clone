import React from 'react';
import Button from './Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { motion } from 'framer-motion';

import './Item.css';
function Item(props) {
	const {
		title,
		desc,
		descLink,
		backgroundImg,
		leftBtnTxt,
		leftBtnLink,
		rightBtnTxt,
		rightBtnLink,
		twoButton,
		first,
	} = props.details;

	return (
		<div
			className='item'
			style={{
				backgroundImage: `url(${backgroundImg})`,
			}}>
			<div className='item__container'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { type: 'spring', stiffness: 300 },
					}}
					transition={{ duration: 2  }}
					className='item__text'>
					<p>{title}</p>
					<div className='item__textDesc'>
						<p>{desc}</p>
					</div>
				</motion.div>
				<div className='item__lowerThird'>
					<div className='item__button'>
						<Button imp='primary' text={leftBtnTxt} link={leftBtnLink} />
						{twoButton && (
							<Button imp='secondary' text={rightBtnTxt} link={rightBtnLink} />
						)}
					</div>
					{first && (
						<div className='item__expand'>
							<ExpandMoreIcon />
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Item;
