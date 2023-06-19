import React, { useState, useEffect, useCallback } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { YMaps, useYMaps, Circle, Map, GeolocationControl, Placemark, FullscreenControl, ZoomControl, SearchControl } from '@pbe/react-yandex-maps';

const MapComponent = () => {
	const [center, setCenter] = useState();
	//const [radius, setRadius] = useState(1)
	const API_KEY = 'f77e92ff-8471-4123-8a9a-38a31dab1797';
	const category = 'Музей';
	const [objects, setObjects] = useState([])
	const [marks, setMarks] = useState([])

	useEffect(() => {
		const placeMarks = objects.map((item, index) => {
			return (
				<Placemark
					key={index}
					geometry={item.geometry._coordinates}
					options={{
						iconColor: '#66B2FF',
					}}
				/>
			)
		})
		setMarks(placeMarks);
		//console.log(placeMarks);
		//console.log(objects);
	}, [objects])

	useEffect(() => {

		if (navigator.geolocation) {
			console.log(center);
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

	const handleSearch = async () => {
		let a = fetch(`https://search-maps.yandex.ru/v1/?text=${category}&apikey=${API_KEY}&format=json&lang=ru_RU&ll=${center}&spn=0.552069,0.400552`)
			.then(res => res.text())
			.then(res => res)
	};

	return (
		<Container className='d-flex justify-content-center align-items-center m-0 p-0 w-100'>
			<YMaps query={{
				load: "package.full",
				apikey: "fd616ce8-3e0f-4d5f-9bfe-0b8b6d42a997",
				lang: "ru_RU"
			}}>
				<div style={{
					width: '100%',
					height: '600px'
				}}>
					<Map defaultState={{
						center,
						zoom: 14,
					}}
						width="100%"
						height="100%"
						onLoad={(ymaps) => {
							// setYMaps(ymaps)
							var myGeocoder = ymaps.geocode("Музей", {
								boundedBy: [[52.9299046, 24.5886341], [55.9299046, 28.5886341]]

							});
							myGeocoder.then(
								function (res) {
									for (let i = 0; i < 10; i++) {
										objects.push(res.geoObjects.get(i));
										setObjects([...objects])

										//console.log(res.geoObjects.get(i).geometry._coordinates);
										//console.log(res.geoObjects.get(i).properties.get('metaDataProperty'));
									}
								},
								function (err) {
									console.log(err);
								}
							);
						}}
					>
						<Circle
							geometry={[center, 2000]}
							options={{
								draggable: false,
								fillColor: "#DB709377",
								strokeColor: "#990066",
								strokeOpacity: 0.8,
								strokeWidth: 5,
							}}
						/>
						{marks}
						<GeolocationControl options={{ float: 'left' }} />
						<Placemark
							geometry={center}
							options={{
								iconColor: '#FF0000',
							}}
						/>

						<FullscreenControl options={{ float: 'left' }} />
						<SearchControl options={{ float: "right" }} />
						<ZoomControl options={{ float: "right" }} />
					</Map>
				</div>
			</YMaps>
			<Form className="mt-3">
				<Button color="primary" onClick={handleSearch}>Поиск</Button>
			</Form>
		</Container>
	);
};

export default MapComponent;