import { type AppType } from "next/dist/shared/lib/utils";
import { MainLayout } from "~/layouts";
import { Toaster } from "react-hot-toast";
import { StatusBar } from "@capacitor/status-bar";
import { Capacitor } from "@capacitor/core";
import { useEffect } from "react";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      StatusBar.setBackgroundColor({
        color: "#1157A1",
      })
        .then(() => console.log("cambiar color status bar"))
        .catch((err) => console.log("Error:", err));
    }
  });
  return (
    <MainLayout>
      <Component {...pageProps} />
      <Toaster />
    </MainLayout>
  );
};

export default MyApp;
