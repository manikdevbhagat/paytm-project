"use client";
import { Appbar } from "@repo/ui/components/Appbar";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const AppbarClient = () => {
  const session = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/api/auth/signin");
  };
  return (
    <div>
      <Appbar
        onSignin={signIn}
        onSignout={handleSignOut}
        user={session.data?.user}
      />
    </div>
  );
};

export default AppbarClient;
