import React from 'react';
import UseToggle from '../../../../shared/hooks/UseToogle';

import { Link } from 'react-router-dom';
import sprite from '../../../../images/sprite.svg';
import './style.scss';

const optionsData = [
	{
		title: 'events',
		to: 'event',
		image: 'calendar',
		description: 'all church events',
	},
	{
		title: 'media gallery',
		image: 'playlist',
		to: 'gallery',
		description: 'listen to trendy gospel songs',
	},
	{
		title: 'book shop',
		image: 'bible',
		to: 'bookshop',
		description: 'enrich your knowlwge ',
	},
];

export default function Nav({ data }) {
	const _ = UseToggle();
	return (
		<header className='main_header '>
			<nav className={`main_nav  ${_.isOpen ? 'bg-w' : ''}`}>
				<div className='container'>
					<div className='sp-btw flexi'>
						<article className='logo_box col-ww'>logo goes here</article>
						<div onClick={_.toogle} className='toog mt-1'>
							<span></span>
						</div>
						{_.isOpen && (
							<div className='home_actions bg-w'>
								{optionsData.map((option, index) => (
									<Item key={index} {...option} />
								))}
							</div>
						)}
					</div>
				</div>
			</nav>
		</header>
	);
}

function Item({ title, image, description, to }) {
	return (
		<Link to={`/${to}`} className='item_card grid_txt_1  p-3 br'>
			<svg>
				<use xlinkHref={sprite + `#${image}`} />
			</svg>
			<h1 className='heading_med col-pri'>{title}</h1>
		</Link>
	);
}
