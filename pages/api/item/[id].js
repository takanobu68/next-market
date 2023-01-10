import connectDB from '../../../utils/database';
import { ItemModel } from '../../../utils/schemaModels';

const getSingleItem = async (req, res) => {
  try {
    await connectDB();
    const singleItem = await ItemModel.findById(req.query.id);
    return res
      .status(200)
      .json({ message: 'アイテム作成成功(シングル)', singleItem });
  } catch (err) {
    return res.status(400).json({ message: 'アイテム作成失敗(シングル)' });
  }
};

export default getSingleItem;
