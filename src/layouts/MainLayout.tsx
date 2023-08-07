import { type PropsWithChildren } from "react";
import { Tabs } from "~/components";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export const MainLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  return (
    <div className="h-screen w-full">
      <div
        className="overflow-y-scroll bg-gris"
        style={{
          height: "calc( 100vh - 48px )",
        }}
      >
        <motion.div
          key={router.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {children}
        </motion.div>
      </div>
      <Tabs />
    </div>
  );
};
