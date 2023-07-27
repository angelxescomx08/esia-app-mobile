import Image from "next/image";
import React from "react";

export const Tabs = () => {
  return (
    <div className="flex h-12 w-full justify-evenly bg-azul">
      <button className="flex w-1/6 items-center justify-center">
        <div className="relative aspect-[37/49] h-10">
          <Image src={"/assets/icons/iconos_formatos_ok.png"} fill alt="" />
        </div>
      </button>
      <button className="flex w-1/6 items-center justify-center">
        <div className="relative aspect-[51/43] w-10">
          <Image src={"/assets/icons/iconos_emergencia_ok.png"} fill alt="" />
        </div>
      </button>
      <button className="flex w-1/6 items-center justify-center">
        <div className="relative aspect-square w-10">
          <Image src={"/assets/icons/iconos_directorio_ok.png"} fill alt="" />
        </div>
      </button>
      <button className="flex w-1/6 items-center justify-center">
        <div className="relative aspect-[32/47] h-10">
          <Image src={"/assets/icons/iconos_ubicacion_ok.png"} fill alt="" />
        </div>
      </button>
      <button className="flex w-1/6 items-center justify-center">
        <div className="relative aspect-[14/47] h-10">
          <Image src={"/assets/icons/iconos_menu_ok.png"} fill alt="" />
        </div>
      </button>
      <button className="flex w-1/6 items-center justify-center">
        <div className="relative aspect-square w-10">
          <Image src={"/assets/icons/iconos_salida_ok.png"} fill alt="" />
        </div>
      </button>
    </div>
  );
};
