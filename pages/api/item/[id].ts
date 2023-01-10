import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../utils/database';
import { ItemModel } from '../../../utils/schemaModels';
import { ResReadSingleType, SavedItemDataType } from '../../../utils/types';

const getSingleItem = async (
  req: NextApiRequest,
  res: NextApiResponse<ResReadSingleType>
) => {
  try {
    await connectDB();
    const singleItem: SavedItemDataType | null = await ItemModel.findById(
      req.query.id
    );
    if (!singleItem)
      return res
        .status(400)
        .json({ message: 'アイテムが存在していないため読み取り失敗' });
    return res
      .status(200)
      .json({ message: 'アイテム作成成功(シングル)', singleItem });
  } catch (err) {
    return res.status(400).json({ message: 'アイテム作成失敗(シングル)' });
  }
};

export default getSingleItem;
