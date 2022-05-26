export interface IRowProps {
	item: {
		_id: string;
		name: string;
	};
	handlePress?: () => void;
}
