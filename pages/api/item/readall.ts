import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../utils/database';
import { ItemModel } from '../../../utils/schemaModels';
import { SavedItemDataType, ResReadAllTypes } from '../../../utils/types';

const getAllItems = async (
  req: NextApiRequest,
  res: NextApiResponse<ResReadAllTypes>
) => {
  try {
    await connectDB();
    const allItems: SavedItemDataType[] = await ItemModel.find();
    return res
      .status(200)
      .json({ message: 'アイテム読み取り成功(オール)', allItems });
  } catch (err) {
    return res.status(200).json({ message: 'アイテム読み取り失敗(オール)' });
  }
};

export default getAllItems;
