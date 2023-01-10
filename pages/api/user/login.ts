import type { NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import connectDB from '../../../utils/database';
import { UserModel } from '../../../utils/schemaModels';
import {
  ExtendedNextApiRequestUser,
  ResMessageType,
  SavedUserDataType,
} from '../../../utils/types';

const secret_key = 'nextmarket';

const loginUser = async (
  req: ExtendedNextApiRequestUser,
  res: NextApiResponse<ResMessageType>
) => {
  try {
    await connectDB();
    const savedUserData: SavedUserDataType | null = await UserModel.findOne({
      email: req.body.email,
    });
    if (savedUserData) {
      // ユーザが存在する場合

      // パスワードが正しい場合
      if (req.body.password === savedUserData.password) {
        const payload = {
          email: req.body.email,
        };

        const token = jwt.sign(payload, secret_key, { expiresIn: '23h' });
        console.log(token);
        return res.status(200).json({ message: 'ログイン成功', token });
      } else {
        // パスワードが間違っている場合
        return res
          .status(200)
          .json({ message: 'ログイン失敗：パスワードが間違っています' });
      }
    } else {
      // ユーザが存在しない場合
      return res
        .status(400)
        .json({ message: 'ログイン失敗：ユーザ登録をしてください' });
    }
  } catch (err) {
    return res.status(400).json({ message: 'ログイン失敗' });
  }
};

export default loginUser;
