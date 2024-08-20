"use client";

import { ProfileForm } from "./_ui/profile-form";
import { Spinner } from "@/components/ui/spinner";
import { getProfileQuery } from "@/entities/user/_queries";
import { useQuery } from "@tanstack/react-query";

export function UpdateProfileForm({
  userId,
  callbackUrl,
}: {
  userId: string;
  callbackUrl?: string;
}) {
  const profileQuery = useQuery({
    ...getProfileQuery(userId),
  });

  if (profileQuery.isPending) {
    return <Spinner /*label="Загрузка профиля"*/ />;
  }

  if (!profileQuery.data) {
    return <div>Не удалось загрузить профиль, возможно у вас нет прав</div>;
  }

  return (
    <ProfileForm
      userId={userId}
      profile={profileQuery.data.profile}
      // onSuccess={handleSuccess}
      submitText={callbackUrl ? "Продолжить" : "Сохранить"}
    />
  );
}
