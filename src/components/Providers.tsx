"use client";

import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { store } from "../store";

type Props = {
  children: React.ReactNode;
};

function Providers({ children }: Props) {
  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
}

export default Providers;
