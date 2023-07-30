import React from "react";
import { Imagen } from "./Imagen";

export const Header = () => {
  return (
    <div>
      <h2 className="mt-4 text-center text-base font-bold">
        Escuela Superior de Ingeniería y Arquitectura
      </h2>
      <h2 className="text-center text-lg font-bold">Unidad Tecamachalco</h2>

      <Imagen
        className="m-auto mt-4 aspect-[89/140] w-12"
        src={"/assets/imgs/esia.png"}
        alt=""
      />
    </div>
  );
};
