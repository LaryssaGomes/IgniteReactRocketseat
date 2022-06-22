import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default (request: NextApiRequest, response: NextApiRequest) => {
  console.log(request.query);
  const users = [
    { id: 1, name: "Laryssa" },
    { id: 2, name: "Maria" },
  ];
  return response.json(users);
};
