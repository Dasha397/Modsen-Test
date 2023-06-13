import React, { useEffect, useState } from 'react';
import { YMaps, Map, GeolocationControl, Placemark } from 'react-yandex-maps';

const MapComponent = () => {
	const [center, setCenter] = useState([150.751574, 137.573856]);

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;
					setCenter([latitude, longitude]);
				},
				(error) => {
					console.error('Error getting geolocation:', error);
				}
			);
		}
	}, []);

	return (
		<YMaps apiKey="fd616ce8-3e0f-4d5f-9bfe-0b8b6d42a997">
			<div style={{ width: '800px', height: '600px' }}>
				<Map defaultState={{ center, zoom: 13 }} width="100%" height="100%" >
					<GeolocationControl options={{ float: 'left' }} />
					<Placemark geometry={center}
						options={{
							iconColor: '#FF0000',
						}} />
				</Map>
			</div>
		</YMaps>
	);
};

export default MapComponent;