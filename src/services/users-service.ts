import bcrypt from "bcrypt";
import * as userDB from "../data/users-data";
import { User, UserParams } from "../models/user";

export async function getUser(id: number): Promise<User | undefined> {
    return await userDB.getUser(id);
}

export async function createUser(data: UserParams): Promise<User> {
    const { name, username, email, password } = data;

    const user = await userDB.getUserByUserName(username);

    if(user){
        //mensaje de error
    }

    const costFactor = 10;
    const hashedPassword = await bcrypt.hash(password, costFactor);
    const newUser = await userDB.createUser(name, username, email, hashedPassword);

    return newUser;
}

export async function updateUser(id: number, data: UserParams) {
    const { name, username, email, password } = data;
    const costFactor = 10;
    const hashedPassword = await bcrypt.hash(password, costFactor);
    const updateUser = await userDB.updateUser(id, name, username, email, hashedPassword);
    
    return updateUser;
}

export async function deleteUser(id: number) {
    return await userDB.deleteUser(id);
}