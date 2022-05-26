import { City, Place } from './interfaces';

const cities: Array<City> = [
	{
		_id: '1',
		name: 'Itabuna',
		country_name: 'Bahia',
	},
	{
		_id: '2',
		name: 'Ilhéus',
		country_name: 'Bahia',
	},
];

const places: Array<Place> = [
	{
		_id: '1',
		type: 'restaurant',
		notes: 'Restaurante Grill a Kilo',
		city_id: '1',
	},
];

export { cities, places };
