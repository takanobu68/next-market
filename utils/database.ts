import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://Takanobu:takanobu19835868@cluster0.qehusnh.mongodb.net/appDataBase?retryWrites=true&w=majority'
    );
    console.log('Success:Conected to MongoDB');
  } catch (err) {
    console.log('Failure:Unconnected to MongoDB');
    throw new Error();
  }
};

export default connectDB;
