"use server";

import { z } from "zod";
import { profileShema } from "@/entities/user/profile";
import { getAppSessionStrictServer } from "@/entities/user/session.server";
import { updateProfileUseCase } from "@/entities/user/profile.server";

const propsShema = z.object({
  userId: z.string(),
  data: profileShema.partial(),
});

const resultShema = z.object({
  profile: propsShema,
});

export const updateProfileAction = async (
  props: z.infer<typeof propsShema>,
) => {
  const { userId, data } = propsShema.parse(props);

  const session = await getAppSessionStrictServer();

  const user = await updateProfileUseCase.exec({
    session,
    data,
    userId,
  });

  return resultShema.parseAsync({
    profile: user,
  });
};
