import { ROLES, UserEntity } from "../_domain/types";
import { createId } from "@/components/lib/id";
import { userRepository } from "../_repositores/user.repositores";
import { privateConfig } from "@/components/config/private";

type CreateUser = {
  email: string;
  name?: string | null;
  image?: string | null;
  emailVerified?: Date | null;
};

export class CreateUserUseCase {
  async exec(data: CreateUser) {
    const adminEmails = privateConfig.ADMIN_EMAILS?.split(",") ?? [];
    const role = adminEmails.includes(data.email) ? ROLES.ADMIN : ROLES.USER;

    const user: UserEntity = {
      id: createId(),
      role,
      ...data,
    };

    return await userRepository.createUser(user);
  }
}

export const createUserUseCase = new CreateUserUseCase();
