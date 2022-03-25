import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useEvents } from '../../queries/events';
import Select from '../../shared/formstuff/Select';
import Event from '../components/Event';
import './eventpage.scss';

const EventTab = ({ fetchMore, children }) => {
	const [eventType, setEvent] = useState('');
	const { isLoading, data, isError, error } = useEvents();
	if (isLoading) {
		return <h2 className='heading_large mt-4 cap'>loading....</h2>;
	}
	const events = data.data;
	return (
		<section className='events_section'>
			<div className='container'>
				<div className='events_container'>
					<div className='sp-btw mt-2 '>
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: 'repeat(2,max-content)',
								gap: '1.5rem',
							}}>
							<button className='tablet grid_max_1 circle_btn bg-w '>
								<span className='round circle_color bg-purp center-flex weit-2 upp col-ww'>
									R
								</span>
								<span className='heading_nano weit-1 col-g-3 cap cap  circle_text'>
									regular{' '}
								</span>
							</button>
							<button className='tablet grid_max_1 circle_btn bg-w '>
								<span className='round circle_color bg-gold  weit-2 col-ww center-flex upp'>
									s
								</span>
								<span className='heading_nano weit-1 col-g-3 cap  circle_text'>special</span>
							</button>
						</div>
					</div>
					{events.map((event) => (
						<Event key={event.id} {...event} />
					))}
				</div>
			</div>
		</section>
	);
};

export default EventTab;
