// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  dynamicQuery: string | string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { dynamicApi } = req.query;
  console.log(dynamicApi, "다이나믹 api");
  res.status(200).json({ dynamicQuery: dynamicApi });
}
