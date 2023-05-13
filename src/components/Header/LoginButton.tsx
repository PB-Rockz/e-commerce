"use client";
type Props = {};
import { useSession, signIn, signOut } from "next-auth/react";
const csignIn = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  signIn();
};
const csignOut = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  signOut();
};
function LoginButton({}: Props) {
  const { data: session, status } = useSession();

  return (
    <div onClick={!session ? csignIn : csignOut} className="link">
      <p>{session ? `Hello, ${session.user?.name}` : "Sign In"}</p>
      <p className="font-extrabold md:text-sm">Accounts & Lists</p>
    </div>
  );
}

export default LoginButton;
