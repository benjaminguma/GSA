import React from 'react';
import Event from '../Event';
import { useEvents } from '../../../queries/events';

function ProgramAndEvents() {
	const { isLoading, data, isError, error } = useEvents();
	if (isLoading) {
		return (
			<div className='u-center'>
				<h2 className='heading_large mt-4 cap'> loading </h2>;
			</div>
		);
	}
	return (
		<section className='program_events'>
			<div className='container'>
				<div className='grid_txt_2'>
					<div className='u-center'>
						<h2 className='heading_big upp ff-m col-bl-2'>our programs</h2>
					</div>
					<ul className='program_events_pack'>
						{data.data.map((event) => (
							<Event key={event.id} {...event} />
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

export default ProgramAndEvents;
