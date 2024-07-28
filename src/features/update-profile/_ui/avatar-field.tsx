import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
// import { selectFile } from "@/components/lib/file";
import { Spinner } from "@/components/ui/spinner";
import { ProfileAvatar } from "@/entities/user/profile";

export function AvatarField({
  value,
  onChange,
}: {
  value?: string;
  onChange: (value?: string) => void;
}) {
  return (
    <Button
      variant="ghost"
      className="w-[84px] h-[84px] p-0.5 rounded-full relative block"
      type="button"
    >
      {false && (
        <div className="inset-0 absolute flex items-center justify-center z-10">
          <Spinner className="w-10 h-10" /*label="Загрузка новой аватарки"*/ />
        </div>
      )}
      <ProfileAvatar
        className="w-full h-full"
        profile={{ email: "alexair.g@yandex.ru", image: value }}
      />
    </Button>
  );
}
