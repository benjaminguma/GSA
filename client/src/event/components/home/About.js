import React from 'react';
import world from '../../../images/svg/world.svg';

function About() {
	return (
		<section className='about'>
			<img src={world} alt='' className='about_img' />
			<div className='container'>
				<div className='about_box br'>
					<div className='bio_img center-flex ff-m round col-b'>SA</div>
					<div className='u-center'>
						<h3 className='heading_big ff-m'>About the oveseer</h3>
					</div>
					<p className='heading_large'>
						Through the prophetic ministry spanning more than a decade, Prophet Sunday M. Abiodun has
						helped so many to experience deliverance, discovery and fulfillment of destiny through the
						interpretation of the word of God. Presiding over a universal interdenominational network
						of Global Solution Assembly (Solution Night) in several state capital of Nigeria with the
						message "There is no Problem without a Solution" He has a great prophetic insight and
						revelation coupled with teaching ministry with which he organizes a TV programme "solution
						on Air". That has brought hope life and deliverance to several lives and homes. Prophet
						Sunday M. Abiodun is a trained business man and graduate of Business Administration. He is
						happily married to Pastor (Mrs) Victoria Abiodun and blessed with four children [4s]. He
						is the author of the bestselling book "The Beauty of My Destiny".
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;
