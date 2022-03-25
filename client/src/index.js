import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import EventsApp from './EventsApp';

// css
import './css/base/base.scss';
import './css/typography/typography.scss';
import './css/utils/utils.scss';
import './css/layout/layout.scss';
// components
import './css/components/basecard.scss';
import './css/components/button.scss';
import sw from './sw-src';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 6000,
		},
	},
});

ReactDOM.render(
	<QueryClientProvider client={client}>
		<React.StrictMode>
			<BrowserRouter>
				<EventsApp />
			</BrowserRouter>
		</React.StrictMode>
	</QueryClientProvider>,
	document.getElementById('root'),
);

sw();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
