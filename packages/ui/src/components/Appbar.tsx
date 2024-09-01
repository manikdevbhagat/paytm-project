import { Button } from "./ui/button";

interface AppbarProps {
  user?: {
    name?: string | null;
  };
  onSignin: () => void;
  onSignout: () => void;
}

export const Appbar = ({ user, onSignin, onSignout }: AppbarProps) => {
  return (
    <div className="px-12 py-2 flex justify-between border-b items-center bg-gray-100">
      <div className="text-lg flex flex-col justify-center text-primary">
        PayTM
      </div>

      <div className="flex flex-col justify-center">
        <Button onClick={user ? onSignout : onSignin} className="dark">
          {user ? "Logout" : "Login"}
        </Button>
      </div>
    </div>
  );
};
