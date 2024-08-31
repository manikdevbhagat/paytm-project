import client from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import z from "zod";

const UserCredentials = z.object({
  phone: z.string(),
  password: z.string(),
});
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: {
          label: "Phone number",
          type: "text",
          placeholder: "123-456-7890",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: { phone: string; password: string } | undefined
      ) {
        if (!credentials) {
          return null;
        }
        const { success } = UserCredentials.safeParse(credentials);
        if (!success) {
          return null;
        }
        const hashedPassword = await bcrypt.hash(credentials.password, 10);
        const existingUser = await client.user.findFirst({
          where: {
            number: credentials.phone,
          },
        });
        if (existingUser) {
          const passwordMatch = await bcrypt.compare(
            credentials.password,
            existingUser.password
          );
          if (passwordMatch) {
            return {
              id: existingUser.id.toString(),
              name: existingUser.name,
              email: existingUser.email,
              number: existingUser.number,
            };
          }
          return null;
        }

        try {
          const newUser = await client.user.create({
            data: {
              number: credentials.phone,
              password: hashedPassword,
            },
          });
          return {
            id: newUser.id.toString(),
            name: newUser.name,
            email: newUser.email,
            number: newUser.number,
          };
        } catch (e) {
          console.log(e);
        }

        return null;
      },
    }),
  ],
  secret: process.env.JWT_SECRET || "secret",
  callbacks: {
    async session({ token, session }: { token: any; session: any }) {
      session.user.id = token.sub;
      return session;
    },
  },
};
