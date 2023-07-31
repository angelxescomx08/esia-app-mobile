import { type AppType } from "next/dist/shared/lib/utils";
import { MainLayout } from "~/layouts";
import { Toaster } from "react-hot-toast";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <MainLayout>
      <Component {...pageProps} />
      <Toaster />
    </MainLayout>
  );
};

export default MyApp;
