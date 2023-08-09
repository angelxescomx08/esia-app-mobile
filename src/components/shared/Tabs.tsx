import { Imagen } from "./Imagen";
import { useRouter } from "next/router";
import { useDisclosure } from "@mantine/hooks";
import { Capacitor } from "@capacitor/core";
import { CustomModal } from "./CustomModal";
import { App } from "@capacitor/app";

export const Tabs = () => {
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);

  const onAceptar = () => {
    if (Capacitor.isNativePlatform()) {
      close();
      if (App) {
        void App.exitApp();
      }
    } else {
      console.log("Salida exitosa");
      close();
    }
  };

  return (
    <div className="flex h-12 w-full justify-evenly bg-azul">
      <button
        className="relative flex w-1/6 items-center justify-center"
        onClick={() => void router.push("formatos")}
      >
        <Imagen
          className="aspect-[37/49] h-10"
          src={"/assets/icons/iconos_formatos_ok.png"}
          alt=""
        />
      </button>
      <button
        className="flex w-1/6 items-center justify-center"
        onClick={() => void router.push("emergencias")}
      >
        <Imagen
          className="aspect-[51/43] w-10"
          src={"/assets/icons/iconos_emergencia_ok.png"}
          alt=""
        />
      </button>
      <button
        className="flex w-1/6 items-center justify-center"
        onClick={() => void router.push("/directorio")}
      >
        <Imagen
          className="aspect-square w-10"
          src={"/assets/icons/iconos_directorio_ok.png"}
          alt=""
        />
      </button>
      <button
        className="flex w-1/6 items-center justify-center"
        onClick={() => void router.push("/rutas")}
      >
        <Imagen
          className="aspect-[32/47] h-10"
          src={"/assets/icons/iconos_ubicacion_ok.png"}
          alt=""
        />
      </button>
      <button
        className="flex w-1/6 items-center justify-center"
        onClick={() => void router.push("/")}
      >
        <Imagen
          className="aspect-square w-4/5 max-w-[50px]"
          src={"/assets/icons/menu.png"}
          alt=""
        />
      </button>
      <button className="flex w-1/6 items-center justify-center" onClick={open}>
        <Imagen
          className="aspect-square w-10"
          src={"/assets/icons/iconos_salida_ok.png"}
          alt=""
        />
      </button>
      <CustomModal open={opened} onClose={close}>
        <div className="px-4">
          <h3 className="text-center font-medium">ESIA TECAMACHALCO</h3>
          <p className="text-center text-xs">¿Desea salir de la aplicación?</p>
          <div className="mt-3 flex items-center justify-between py-3">
            <button
              className="rounded-full border-2 border-negro px-6 py-2 font-semibold"
              onClick={close}
            >
              Cancelar
            </button>
            <button
              className="rounded-full border-2 border-azul bg-azul px-6 py-2 font-semibold text-blanco"
              onClick={onAceptar}
            >
              Aceptar
            </button>
          </div>
        </div>
      </CustomModal>
    </div>
  );
};
