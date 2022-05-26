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
		name: 'Restaurante Grill a Kilo',
		type: 'restaurant',
		address: 'Endereço 001',
		notes: 'O melhor da cidade',
		city_id: '1',
	},
	{
		_id: '2',
		name: 'Restaurante Grill a Kilo',
		type: 'restaurant',
		address: 'Endereço 002',
		notes: 'O melhor da cidade 2',
		city_id: '1',
	},
];

export { cities, places };
