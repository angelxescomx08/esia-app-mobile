import React from "react";
import { Header, Imagen } from "~/components";
import { formatos } from "~/data";
import { type Formato } from "~/interfaces";
import { LayoutPage } from "~/layouts";

import { Clipboard } from "@capacitor/clipboard";

const Item = ({ nombre, drive }: Formato) => {
  const onClick = () => window.open(drive, "_blank");
  const onCopy = () => {
    Clipboard.write({
      string: drive,
    })
      .then(() => {
        console.log("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mb-4 flex items-center justify-between rounded-2xl bg-blanco px-3 py-5 shadow-md">
      <p className="text-sm">{nombre}</p>
      <div className="flex items-center">
        <button onClick={onClick}>
          <Imagen
            className="aspect-square w-7"
            src="/assets/imgs/drive.png"
            alt=""
          />
        </button>
        <div className="w-7"></div>
        <button onClick={onCopy}>
          <Imagen
            className="aspect-square w-6"
            src="/assets/icons/copy.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

const Formatos = () => {
  return (
    <LayoutPage>
      <Header />
      <h3 className="text-center text-lg font-bold">Formatos</h3>
      <div className="mt-3 px-2">
        {formatos.map((formato) => (
          <Item key={formato.id} {...formato} />
        ))}
      </div>
    </LayoutPage>
  );
};

export default Formatos;
