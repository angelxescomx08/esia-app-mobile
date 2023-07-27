import { type AppType } from "next/dist/shared/lib/utils";
import { MainLayout } from "~/layouts";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
};

export default MyApp;
