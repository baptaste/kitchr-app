import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	success: boolean;
	data: any;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const { name } = req.body;
	res.status(200).json({ success: true, data: 'your name is ' + name });
}
