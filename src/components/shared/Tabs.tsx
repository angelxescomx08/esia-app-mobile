import React from "react";
import { Imagen } from "./Imagen";
import { useRouter } from "next/router";

export const Tabs = () => {
  const router = useRouter();

  return (
    <div className="flex h-12 w-full justify-evenly bg-azul">
      <button
        className="flex w-1/6 items-center justify-center"
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
      <button className="flex w-1/6 items-center justify-center">
        <Imagen
          className="aspect-square w-10"
          src={"/assets/icons/iconos_directorio_ok.png"}
          alt=""
        />
      </button>
      <button className="flex w-1/6 items-center justify-center">
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
          className="aspect-[14/47] h-10"
          src={"/assets/icons/iconos_menu_ok.png"}
          alt=""
        />
      </button>
      <button className="flex w-1/6 items-center justify-center">
        <Imagen
          className="aspect-square w-10"
          src={"/assets/icons/iconos_salida_ok.png"}
          alt=""
        />
      </button>
    </div>
  );
};
