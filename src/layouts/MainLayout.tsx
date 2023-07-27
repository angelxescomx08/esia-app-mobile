import React, { type PropsWithChildren } from "react";
import { Tabs } from "~/components";

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen w-full">
      <div
        className="overflow-y-scroll bg-gris"
        style={{
          height: "calc( 100vh - 48px )",
        }}
      >
        {children}
      </div>
      <Tabs />
    </div>
  );
};
