import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import svgSprite from '../../images/sprite.svg';
import Modal from '../../shared/uiComponents/Modal';
import { DropBtn, DropDown } from '../../shared/uiComponents/Dropdown';
import UseToggle from '../../shared/hooks/UseToogle';

import './event.scss';
import * as helpers from '../../helpers';

// {
//   reportTomorrow: true;
//   _id: ('609d657a7465ee2d00462e0b');
//   title: ('valentine day');
//   eventType: ('special');
//   speaker: ('john Bobolati');
//   description: ('a day of extreme stuffs for couples with weak abilities :)');
//   cover: ('/public/events/./cover1.jpg');
//   location: ('big church');
//   duration: 120;
//   month: ('febuary');
//   monthDate: 14;
//   day: ('sunday');
//   year: 2021;
//   date: 1613260800000;
//   image: ('/public/events/./cover1.jpg');
//   id: ('609d657a7465ee2d00462e0b');
// }

const Event = ({ date, image, title, dayCount, week, day, duration, society, time, width = 400, ...props }) => {
	const { isOpen, close, toogle } = UseToggle(false);
	function toPos(num) {
		switch (num) {
			case 1:
				return '1st';
			case 2:
				return '2nd ';
			case 3:
				return '3rd ';
			default:
				return num + 'th';
		}
	}
	console.log({ props });

	const dropdown = (
		<DropDown>
			<DropBtn text='view ' />
			<DropBtn text='edit' />
			<DropBtn text='share' />
			<DropBtn text=' delete' classes='col-r' />
		</DropDown>
	);
	return (
		<Fragment>
			<div className='event_con bg-w br '>
				<div className='event_color' style={{ background: helpers.getEventColor(props[' eventType']) }} />

				<div className=' event_details grid_1_max '>
					<div className='grid_txt'>
						{date > 0 && <p className='heading_tiny cap col-p-2'>{helpers.getDate(date)}</p>}

						<p>
							<span class='heading_small upp weit-3 col-b'>{helpers.timeToAmPM(time)}</span>
							<span className='ml-1 heading_small weit-3 cap col-b'>
								- {helpers.timeToAmPM(helpers.addTime(time, duration))}
							</span>
						</p>
						<div>
							<p className='bg-b-lite-2 col-bl-2 ib event_day tablet'>
								{`${dayCount > 0 ? toPos(dayCount) : ' '} ${
									week < 5 ? ' ' + toPos(week) + 'week' : ''
								} ${
									day.length === 1
										? day
										: day.length === 2
										? day[0] + 's and ' + day[1] + 's'
										: day[1] + ' to ' + day[day.length - 1]
								}`}{' '}
								of every month
							</p>
						</div>
					</div>

					<div className='event_control'>
						<div className='action_pack'>
							<button className='action_button center-flex'>
								<svg className='small_svg mr-1 '>
									<use xlinkHref={svgSprite + '#subscribe'} />
								</svg>
							</button>
							{width < 400 ? (
								dropdown
							) : (
								<Fragment>
									<button className='action_button' onClick={toogle}>
										<svg className='small_svg'>
											<use xlinkHref={svgSprite + '#options'} />
										</svg>
									</button>
								</Fragment>
							)}
						</div>
					</div>
				</div>

				<Link className=' event_link  flexi  sp-btw bord-b-2 col-p-2 btn_uline'>
					<h3 className='heading_large col-p-1    weit-3 cap ff-m'>{title || 'this is some title'}</h3>

					<div>
						<button className='round event_link_button col-p-1'>
							<svg className='small_svg '>
								<use xlinkHref={svgSprite + '#rarr'} />
							</svg>
						</button>
					</div>
				</Link>
			</div>
			{width <= 400 && isOpen && (
				<Modal classes='base_bottom ' isOpen={isOpen} close={close}>
					<ul className='base_dropdown bg-w ' onClick={close}>
						<button className='base_dropdown_close tablet' />
						<button className='btn_plain heading_small col-g-d '>view</button>
						<button className='btn_plain heading_small col-g-d '>subscribe</button>
						<button className='btn_plain heading_small col-g-d '>share</button>
						<button className='btn_plain heading_small col-g-d '>edit</button>
						<button className='heading_small col-r'>delete</button>
					</ul>
				</Modal>
			)}
		</Fragment>
	);
};

export default Event;
