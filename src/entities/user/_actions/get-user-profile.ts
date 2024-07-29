"use server";

import { z } from "zod";
import { getUserUseCase } from "../_use-cases/get-user";
import { getAppSessionStrictServer } from "../session.server";

const propsShema = z.object({
  userId: z.string(),
});

const profileShema = z.object({
  email: z.string(),
  name: z.string().nullable().optional(),
  image: z.string().nullable().optional(),
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
