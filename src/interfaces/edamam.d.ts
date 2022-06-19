export interface DataType {
	count: number;
	from: number;
	hits: HitsType;
	more: boolean;
	q: string;
	to: number;
}

export interface HitsType {
	hits: object[];
}
