import React from "react";
import { Imagen } from "./Imagen";
import { type Directorio } from "~/interfaces";

export const DirectorioCard = ({
  cargo,
  correo,
  extension,
  nombre,
  secretario_extension,
}: Directorio) => {
  return (
    <div className="mb-5 rounded-lg bg-blanco p-4 shadow-xl">
      <div className="mb-4 grid grid-cols-12">
        <div className="col-span-5 flex items-center">
          <Imagen
            className="mr-1 aspect-square w-5 text-blanco"
            src="/assets/icons/user.png"
            alt=""
          />
          <p className="text-sm">Nombre</p>
        </div>
        <div className="col-span-7">
          <p className="text-sm">{nombre}</p>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-12">
        <div className="col-span-5 flex items-center">
          <Imagen
            className="mr-1 aspect-square w-5 text-blanco"
            src="/assets/icons/mail1.svg"
            alt=""
          />
          <p className="text-sm">Correo</p>
        </div>
        <div className="col-span-7">
          <p className="break-words text-sm">{correo}</p>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-12">
        <div className="col-span-5 flex items-center">
          <Imagen
            className="mr-1 aspect-square w-5 text-blanco"
            src="/assets/icons/star-empty.svg"
            alt=""
          />
          <p className="text-sm">Cargo</p>
        </div>
        <div className="col-span-7">
          <p className="text-sm">{cargo}</p>
        </div>
      </div>
      <div
        className={`${secretario_extension ? "mb-4" : ""} grid grid-cols-12`}
      >
        <div className="col-span-5 flex items-center">
          <Imagen
            className="mr-1 aspect-square w-5 text-blanco"
            src="/assets/icons/phone.png"
            alt=""
          />
          <p className="text-sm">Extensión</p>
        </div>
        <div className="col-span-7">
          <p className="text-sm">{extension}</p>
        </div>
      </div>

      {secretario_extension ? (
        <div className="grid grid-cols-12">
          <div className="col-span-5 flex items-center">
            <Imagen
              className="mr-1 aspect-square w-5 text-blanco"
              src="/assets/icons/secretary.png"
              alt=""
            />
            <p className="text-sm leading-4">Secretario particular</p>
          </div>
          <div className="col-span-7">
            <p className="text-sm">{secretario_extension}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};
