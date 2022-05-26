export interface IRowProps {
	item: {
		_id: string;
		name: string;
		address: string;
		type: string;
		notes: string;
		city_id: string;
	};
	handlePress?: () => void;
}
