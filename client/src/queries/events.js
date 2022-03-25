import { useQuery } from 'react-query';
import eventsService from '../service/eventsService';

export function useEvents() {
	return useQuery(['allEvents'], eventsService.getEvents, {
		onError(err) {
			console.log(err);
		},
		onSuccess(err) {
			console.log('successful');
		},
		cacheTime: 20000,
	});
}
