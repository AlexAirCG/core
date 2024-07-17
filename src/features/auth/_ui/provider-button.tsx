"use client";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { GitFork } from "lucide-react";
import { ClientSafeProvider } from "next-auth/react";
import { useOAuthSignIn } from "../_vm/use-oauth-sign-in";

export function ProviderButton({ provider }: { provider: ClientSafeProvider }) {
  const oauthSignIn = useOAuthSignIn(provider);

  const getIcon = (provider: ClientSafeProvider) => {
    switch (provider.id) {
      case "github":
        return <GitFork className="mr-2 h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <Button
      variant="outline"
      type="button"
      disabled={oauthSignIn.isPending}
      onClick={() => oauthSignIn.signIn()}
    >
      {oauthSignIn.isPending ? (
        <Spinner className="mr-2 h-4 w-4 animate-spin" /*label="Вход"*/ />
      ) : (
        getIcon(provider)
      )}
      {provider.name}
    </Button>
  );
}
