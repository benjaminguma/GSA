import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import img from '../../../images/photos/cloud.svg';
import sprite from '../../../images/sprite.svg';

const socials = [
	{
		icon: 'twitter',
		to: '',
	},
	{
		icon: 'facebook',
		to: '',
	},
	{
		icon: 'whatsapp',
		to: '',
	},
	{
		icon: 'instagram',
		to: '',
	},
];

const footerLinks = [
	{
		text: 'home',
		to: '/',
	},

	{
		text: ' events',
		to: '/events',
	},
	{
		text: 'books',
		to: '#',
	},
	{
		text: 'about',
		to: '#',
	},
];

export default function Footer() {
	const p = useRouteMatch();
	return (
		<footer className='main_footer'>
			<section className='grid_txt_2'>
				<p className='col-w'>Logo</p>
				<img className='base_img' src={img} alt='' />
				<div className='u-center'>
					<ul className='flexi gap-15 js-con-center links_pack'>
						{footerLinks.map((link, index) => {
							return (
								<li>
									<Link to={`${p.url}${link.to}`} className='btn_txt cap heading_med '>
										{' '}
										{link.text}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>

				<div className='u-center'>
					<ul className='flexi gap-15 socials pos-r js-con-center'>
						{socials.map((social, index) => {
							return (
								<li>
									<Link
										to={`${p.url}${social.to}`}
										className=' cap heading_med center-flex round col-g-1'>
										<svg className='med_svg'>
											<use xlinkHref={sprite + `#${social.icon}`}></use>
										</svg>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</section>
		</footer>
	);
}
