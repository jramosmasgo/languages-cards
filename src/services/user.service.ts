import { ApplicationError } from "@core/index";
import { IUser } from "@interfaces/index";
import { UserModel } from "@models/index.model";

export const getUserService = async (params: Object): Promise<IUser> => {
  try {
    const userFind = await UserModel.findOne({ ...params });
    if (!userFind) throw new Error("user not found");
    return userFind;
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "Get User");
  }
};

export const createUserService = async (user: IUser): Promise<IUser> => {
  try {
    const newUser = await UserModel.create(user);
    return newUser;
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "Create User");
  }
};

export const UpdateUserService = async (user: IUser): Promise<IUser> => {
  try {
    const newUser = await UserModel.findOneAndUpdate(
      { id: user.id },
      { user },
      { new: true }
    );

    if (!newUser) {
      throw new Error("Error");
    }

    return newUser;
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "Update User");
  }
};
