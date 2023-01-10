import connectDB from '../../../utils/datebase';
import { ItemModel } from '../../../utils/schemaModels';

const getAllItems = async (req, res) => {
  try {
    await connectDB();
    const allItems = await ItemModel.find();
    return res
      .status(200)
      .json({ message: 'アイテム読み取り成功(オール)', allItems });
  } catch (err) {
    return res.status(200).json({ message: 'アイテム読み取り失敗(オール)' });
  }
};

export default getAllItems;
