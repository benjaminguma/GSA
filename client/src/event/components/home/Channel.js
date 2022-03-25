import React from 'react';
import sprite from '../../../images/sprite.svg';

export default function Channel() {
	return (
		<section className='channel'>
			<div className='grid_txt_3'>
				<div className='u-center grid_txt'>
					<h3 className='heading_big ff-m cap col-w'> subscribe to our channel</h3>
					<p
						className='heading_med col-w'
						style={{
							width: '60%',
							justifySelf: 'center',
						}}>
						from all around the world, engage in all our live programs and seminars.
					</p>
				</div>

				<div className='center-flex'>
					<button className='btn_red col-ww btn_icon cap heading_large tablet   btn_large flexi gap-15'>
						<svg className='med_svg'>
							<use xlinkHref={sprite + '#ytube'}></use>
						</svg>
						<span>join us!</span>
					</button>
				</div>
			</div>
		</section>
	);
}
