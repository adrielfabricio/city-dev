export interface City {
	_id: string;
	name: string;
	country_name: string;
}

export interface Place {
	_id: string;
	name: string;
	type: 'restaurant' | 'residencial' | 'other';
	address: string;
	notes: string;
	city_id: string;
}
