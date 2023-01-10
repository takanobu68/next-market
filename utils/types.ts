import type { NextApiRequest } from 'next';
import { Types } from 'mongoose';

export interface ItemDataType {
  title: string;
  image: string;
  price: string;
  description: string;
  email: string;
}

export interface UserDataType {
  name: string;
  email: string;
  password: string;
}

export interface DecodedType {
  email: string;
}

export interface ExtendedNextApiRequestAuth extends NextApiRequest {
  headers: {
    authorization: string;
  };

  body: {
    email: string;
  };
}

export interface ResMessageType {
  message: string;
  token?: string;
}

// register.ts,login.ts
export interface ExtendedNextApiRequestUser extends NextApiRequest {
  body: UserDataType;
}

// login.ts
export interface SavedUserDataType extends UserDataType {
  _id: Types.ObjectId;
}
// readAll.ts,[id].ts,update/[id].ts,delete/[id].ts
export interface SavedItemDataType extends ItemDataType {
  _id: Types.ObjectId;
}

// readAll.ts
export interface ResReadAllTypes {
  message: string;
  allItems?: SavedItemDataType[];
}

// create.ts
export interface ExtendedNextApiRequestItem extends NextApiRequest {
  body: ItemDataType;
}

// [id].ts
export interface ResReadSingleType {
  message: string;
  singleItem?: SavedItemDataType;
}
