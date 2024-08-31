import { SessionEntity, UserEntity, UserId } from "../_domain/types";
import { userRepository } from "../_repositores/user";
import { createUserAbility } from "../_domain/ability";
import { AuthorizatoinError } from "@/components/lib/errors";

type GetUser = {
  userId: UserId;
  session: SessionEntity;
};

export class GetUserUseCase {
  async exec({ userId, session }: GetUser): Promise<UserEntity> {
    const userAbility = createUserAbility(session);

    if (!userAbility.canGetUser(userId)) {
      throw new AuthorizatoinError();
    }

    return await userRepository.getUserById(userId);
  }
}

export const getUserUseCase = new GetUserUseCase();
