import React, { useEffect, useState } from 'react';
import { YMaps, Map, GeolocationControl, Placemark } from 'react-yandex-maps';
import { Container } from 'react-bootstrap';

const MapComponent = () => {
	const [center, setCenter] = useState([53, 30]);

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;
					console.log(position.coords)
					setCenter([latitude, longitude]);
				},
				(error) => {
					console.error('Error getting geolocation:', error);
				}
			);
		}
	}, []);

	return (
		<Container className='d-flex justify-content-center align-items-center'>
			<YMaps apiKey="fd616ce8-3e0f-4d5f-9bfe-0b8b6d42a997">
				<div style={{ width: '100%', height: '600px' }}>
					<Map defaultState={{ center, zoom: 13 }} width="100%" height="100%" >
						<GeolocationControl options={{ float: 'left' }} />
						<Placemark geometry={center}
							options={{
								iconColor: '#FF0000',
							}} />
					</Map>
				</div>
			</YMaps>
		</Container>
	);
};

export default MapComponent;