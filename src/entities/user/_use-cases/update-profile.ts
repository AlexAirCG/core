import { Profile, SessionEntity, UserEntity, UserId } from "../_domain/types";
import { userRepository } from "../_repositores/user";
import { createProfileAbility, createUserAbility } from "../_domain/ability";
import { AuthorizatoinError } from "@/components/lib/errors";
import { profileRepository } from "../_repositores/profile";

type UpdateProfile = {
  userId: UserId;
  data: Partial<Profile>;
  session: SessionEntity;
};

export class UpdateProfileUseCase {
  async exec({ userId, session, data }: UpdateProfile): Promise<Profile> {
    const profileAbility = createProfileAbility(session);

    if (!profileAbility.canUpdateProfile(userId)) {
      throw new AuthorizatoinError();
    }

    return await profileRepository.update(userId, data);
  }
}

export const updateProfileUseCase = new UpdateProfileUseCase();
