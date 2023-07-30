import React from "react";

export const Tabs = () => {
  return (
    <div className="flex h-12 w-full justify-evenly bg-azul">
      <button className="flex w-1/6 items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img
          className="aspect-[37/49] h-10"
          src={"/assets/icons/iconos_formatos_ok.png"}
          alt=""
        />
      </button>
      <button className="flex w-1/6 items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img
          className="aspect-[51/43] w-10"
          src={"/assets/icons/iconos_emergencia_ok.png"}
          alt=""
        />
      </button>
      <button className="flex w-1/6 items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img
          className="aspect-square w-10"
          src={"/assets/icons/iconos_directorio_ok.png"}
          alt=""
        />
      </button>
      <button className="flex w-1/6 items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img
          className="aspect-[32/47] h-10"
          src={"/assets/icons/iconos_ubicacion_ok.png"}
          alt=""
        />
      </button>
      <button className="flex w-1/6 items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img
          className="aspect-[14/47] h-10"
          src={"/assets/icons/iconos_menu_ok.png"}
          alt=""
        />
      </button>
      <button className="flex w-1/6 items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img
          className="aspect-[14/47] h-10"
          src={"/assets/icons/iconos_salida_ok.png"}
          alt=""
        />
      </button>
    </div>
  );
};
