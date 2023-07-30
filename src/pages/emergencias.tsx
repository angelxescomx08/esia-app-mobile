import React from "react";
import { Header, Imagen } from "~/components";
import { LayoutPage } from "~/layouts";

const Emergencias = () => {
  return (
    <LayoutPage>
      <Header
        title="Red de Género"
        main_title="ESIA Emergencia"
        image="/assets/imgs/igualdad.png"
        classNameImage="aspect-square w-24"
      />

      <div className="mt-6 px-6">
        <div>
          <p className="text-sm">
            Responsable: Ing. Arq. Tonatiuh Santiago Pablo
          </p>
          <p className="mt-4 text-sm">Correo: santiago@ipn.mx</p>
          <p className="mt-4 text-center text-[15px] leading-5">
            Denuncia en caso de sufrir violencia de género, hostigamiento o
            acoso sexual dentro del instituto.
          </p>
        </div>

        <div className="mt-7 flex items-center justify-between">
          <h3 className="text-center text-lg font-bold">
            Emergencias Naucalpan
            <br />
            53-71-22-50
          </h3>
          <Imagen className="pr-4" src={"/assets/imgs/sos.png"} alt="" />
        </div>

        <div>
          <p className="mt-6 text-base">Bomberos: 52-94-24-16 / 53-73-11-22</p>
          <p className="mt-6 text-base">Cruz Roja: 55-60-48-59</p>
          <p className="mt-6 text-base">Protección Civil:55-60-72-21</p>
        </div>

        <div className="mt-5 flex justify-center">
          <button className=" rounded bg-rojo px-2 py-1 text-sm font-bold text-blanco shadow-md">
            SOS DOCENTE
          </button>
        </div>
      </div>
    </LayoutPage>
  );
};

export default Emergencias;
