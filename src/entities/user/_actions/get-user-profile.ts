"use server";

import { z } from "zod";
import { getUserUseCase } from "../_use-cases/get-user";
import { getAppSessionStrictServer } from "../session.server";
import { profileShema } from "../profile";

const propsShema = z.object({
  userId: z.string(),
});

const resultShema = z.object({
  profile: profileShema,
});

export const getUserProfileAction = async (
  props: z.infer<typeof propsShema>,
) => {
  const { userId } = propsShema.parse(props);

  const session = await getAppSessionStrictServer();

  const user = await getUserUseCase.exec({
    session,
    userId,
  });

  return resultShema.parseAsync({
    profile: user,
  });
};
