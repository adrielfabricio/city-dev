export interface City {
	_id: string;
	name: string;
	country_name: string;
}

export interface Place {
	_id: string;
	type: 'restaurant' | 'residencial' | 'other';
	notes: string;
	city_id: string;
}
