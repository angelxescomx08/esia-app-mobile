import { type PropsWithChildren } from "react";
import { Imagen } from "~/components";

export const LayoutMenu = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div className="container m-auto px-5">
      <div className="mt-6 flex items-end justify-end">
        <div className="mr-2">
          <p className="text-right text-xs font-bold leading-[14px]">
            Escuela Superior <br /> de Ingeniería y Arquitectura
          </p>
          <h3 className="font-bold">Unidad Tecamachalco</h3>
        </div>
        <Imagen className="w-10" src="/assets/imgs/esia.png" alt="" />
      </div>

      {children}
    </div>
  );
};
