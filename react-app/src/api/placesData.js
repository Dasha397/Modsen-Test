const fetchOverpassApiDataByLocation = async (tag, radius, latitude, longitude) => {
	try {
		const query = `[out:json];
    (
      node[${tag}](around:${radius},${latitude},${longitude});
    );
    out center;`;

		const response = await fetch(
			`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`
		);

		if (response.ok) {
			const data = await response.json();
			return data.elements;
		} else {
			console.error('Error fetching sightseeing data');
		}
	} catch (error) {
		console.error('Error fetching sightseeing data:', error);
	}
};

export async function getObjectByTags(tags, radius, latitude, longitude) {
	const objects = [];

	for (const tag of tags) {
		const geoObjectsData = await fetchOverpassApiDataByLocation(tag, radius, latitude, longitude);

		if (geoObjectsData) {
			objects.push(geoObjectsData);
		}
	}
	return objects;
}

// const fetchOverpassApiDataByNameAddress = async (name) => {
// 	try {
// 		const query = `[out:json];
//     (
//         node["name"="${name}"];
//     );
//     out center;`;

// 		const response = await fetch(
// 			`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`
// 		);

// 		if (response.ok) {
// 			const data = await response.json();
// 			return data.elements;
// 		} else {
// 			console.error('Error fetching sightseeing data');
// 		}
// 	} catch (error) {
// 		console.error('Error fetching sightseeing data:', error);
// 	}
// };

// export const attractionsTags = [
// 	'"leisure"="park"',
// 	'"amenity"="place_of_worship"',
// 	'sport',
// 	'amenity=restaurant',
// 	'shop=supermarket',
// 	'industrial',
// 	'tourism=hotel',
// 	'historic=monument',
// 	'amenity=fuel',
// 	'leisure',
// 	'amenity=arts_centre',
// 	'amenity=cafe',
// 	'amenity=car_rental',
// 	'amenity=bicycle_rental',
// 	'amenity=bank',
// 	'historic=architectural',
// 	'stripclub'
// ]
