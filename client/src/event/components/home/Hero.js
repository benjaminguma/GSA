import React from 'react';
import img from '../../../images/photos/cloud.svg';
import pray from '../../../images/photos/pexels-luis-quintero-2774546.jpg';

function Hero() {
	return (
		<section className='hero  pos-r'>
			<div className='container  center-flex '>
				<div className='grid_txt_1  hero_content u-center'>
					<h1 className='heading_huge ff-m col-w'>Global Solution Assembly</h1>
					<p className='heading_med col-w'>
						Sharing the love of Jesus Christ, setting the captives free, bringing hope, life,
						deliverance to several lives and bringing out the greatness in peoples live.
					</p>
					<div>
						<button className='cap btn_large heading_large btn_blue col-w tablet'>explore</button>
					</div>
				</div>
				<article className='hero_img_con'>
					<div className='hero_img round'>
						<img src={pray} alt='people_praying' />
					</div>
				</article>
			</div>
			<img className='base_img' src={img} alt='' />
		</section>
	);
}

export default Hero;

export function Mission() {
	return (
		<section className='mision_section'>
			<div className='mission_box '>
				<div className='grid_txt_2'>
					<h2 className='heading_large ff-m col-w'> mission</h2>
					<p className='heading_med'>
						Providing solution to every life’s challenges and problem through the word of God and the
						power of the holy spirit to build, change and transform lives and community, locally and
						globally.
					</p>
				</div>
			</div>
		</section>
	);
}
