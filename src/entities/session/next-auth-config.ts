import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { dbClient } from "@/components/lib/db";
import { compact } from "lodash-es";
import { privateConfig } from "@/components/config/private";

const emailToken = privateConfig.TEST_EMAIL_TOKEN
  ? {
      generateVerificationToken: () => privateConfig.TEST_EMAIL_TOKEN ?? "",
      sendVerificationRequest: () =>
        console.log("we don't send emails in test mode"),
    }
  : {};

export const nextAuthConfig: AuthOptions = {
  adapter: PrismaAdapter(dbClient) as AuthOptions["adapter"],
  providers: compact([
    EmailProvider({
      ...emailToken,
      server: {
        host: privateConfig.EMAIL_SERVER_HOST,
        port: privateConfig.EMAIL_SERVER_PORT,
        auth: {
          user: privateConfig.EMAIL_SERVER_USER,
          pass: privateConfig.EMAIL_SERVER_PASSWORD,
        },
      },
      from: privateConfig.EMAIL_FROM,
    }),
    privateConfig.GITHUB_ID &&
      privateConfig.GITHUB_SECRET &&
      GithubProvider({
        clientId: privateConfig.GITHUB_ID,
        clientSecret: privateConfig.GITHUB_SECRET,
      }),
  ]),
};
