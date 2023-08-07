import { type ComponentProps } from "react";
import { Imagen } from "../Imagen";

export const ButtonNext = (props: ComponentProps<"button">) => {
  return (
    <button
      {...props}
      className="grid aspect-square w-10 place-content-center rounded-full bg-azul shadow-md shadow-negro"
    >
      <Imagen className="w-5" src={"/assets/icons/flecha-blanca.png"} alt="" />
    </button>
  );
};
