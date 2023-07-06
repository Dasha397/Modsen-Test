import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { YMaps, Circle, Map, Placemark } from '@pbe/react-yandex-maps';
import { getObjectByTags } from '../../api/placesData';
import NavBar from '../NavBar/NavBar'
import './map.css'

const MapComponent = () => {
	const [center, setCenter] = useState([]);

	const [objects, setObjects] = useState([])
	const [marks, setMarks] = useState([])

	useEffect(() => {
		const placeMarks = objects.map((o) => {
			return o.map((item) => {
				let coords = [item.lat, item.lon]
				return (
					<Placemark
						key={item.id}
						geometry={coords}
						options={{
							iconColor: '#66B2FF',
						}}
					/>
				)
			})
		})
		setMarks(placeMarks);
	}, [objects])

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

	useEffect(() => {
		if (center.length) {
			for (let i = 0; i < localStorage.length; i++) {
				if (localStorage.getItem('sport')) {
					getObjectByTags(['sport'], 1000, center[0], center[1]).then(data => setObjects(data));
				}
				// if (localStorage.getItem('natural')) {
				// 	getObjectByTags(['amenity=place_of_worship'], 1000, center[0], center[1]).then(data => setObjects(data));
				// }
				// if (localStorage.getItem('culture')) {
				// 	getObjectByTags(['historic'], 1000, center[0], center[1]).then(data => setObjects(data));
				// }
				// if (localStorage.getItem('history')) {
				// 	getObjectByTags(['tourism=hotel'], 1000, center[0], center[1]).then(data => setObjects(data));
				// }
				// if (localStorage.getItem('shop')) {
				// 	getObjectByTags(['tourism=hotel'], 1000, center[0], center[1]).then(data => setObjects(data));
				// }
				// if (localStorage.getItem('cafe')) {
				// 	getObjectByTags(['tourism=hotel'], 1000, center[0], center[1]).then(data => setObjects(data));
				// }
				// if (localStorage.getItem('bank')) {
				// 	getObjectByTags(['tourism=hotel'], 1000, center[0], center[1]).then(data => setObjects(data));
				// }
				// if (localStorage.getItem('adults')) {
				// 	getObjectByTags(['tourism=hotel'], 1000, center[0], center[1]).then(data => setObjects(data));
				// }
				// if (localStorage.getItem('hotel')) {
				// 	getObjectByTags(['tourism=hotel'], 1000, center[0], center[1]).then(data => setObjects(data));
				// }
			}
		}
	}, [center]);

	return (
		<Container fluid
			className='d-flex justify-content-center align-items-center m-0 p-0 w-100'
		>
			<NavBar />
			<YMaps query={{
				load: "package.full",
				apikey: process.env.REACT_APP_YMAPS_API_KEY,
				lang: "ru_RU"
			}}>
				<div className='ymaps'>
					<Map defaultState={{
						center,
						zoom: 14,
					}}
						className='map'
					>
						<Circle geometry={[center, 1000]}
							options={{
								draggable: false,
								fillColor: "#5E7BC717",
								strokeColor: "#5E7BC7",
								strokeOpacity: 0.5,
								strokeWidth: 2,
							}}
						/>
						{marks}
						<Placemark
							geometry={center}
							options={{
								iconColor: '#FF0000',
							}}
						/>
					</Map>
				</div>
			</YMaps>
		</Container >
	);
};

export default MapComponent;