import { ProfileForm } from "./_ui/profile-form";
import { Spinner } from "@/components/ui/spinner";
import { useRouter } from "next/navigation";

export function UpdateProfileForm({
  userId,
  callbackUrl,
}: {
  userId: string;
  callbackUrl?: string;
}) {
  if (false) {
    return <Spinner /*label="Загрузка профиля"*/ />;
  }

  if (false) {
    return <div>Не удалось загрузить профиль, возможно у вас нет прав</div>;
  }

  return (
    <ProfileForm
      //   profile={profile}
      // onSuccess={handleSuccess}
      submitText={callbackUrl ? "Продолжить" : "Сохранить"}
    />
  );
}
