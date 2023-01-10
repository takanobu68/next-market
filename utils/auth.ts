import type { NextApiResponse } from 'next';
import type {
  ExtendedNextApiRequestAuth,
  DecodedType,
  ResMessageType,
} from './types';
import jwt from 'jsonwebtoken';

const secret_key = 'nextmarket';

const auth = (handler: Function) => {
  return async (
    req: ExtendedNextApiRequestAuth,
    res: NextApiResponse<ResMessageType>
  ) => {
    if (req.method === 'GET') {
      return handler(req, res);
    }

    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAc2FtcGxlLmNvbSIsImlhdCI6MTY3MzMyNzA4OCwiZXhwIjoxNjczNDA5ODg4fQ.jxbiAoMQ0HMf5pY4rsvJmqaHsnb7i3MyO3IluiwXwPc';

    if (!token) {
      return res.status(401).json({ message: 'トークンがありません' });
    }

    try {
      const decoded = jwt.verify(token, secret_key);
      req.body.email = (decoded as DecodedType).email;
      return handler(req, res);
    } catch (err) {
      return res
        .status(401)
        .json({ message: 'トークンが正しくないので、ログインしてください' });
    }
  };
};

export default auth;
