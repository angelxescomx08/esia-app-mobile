import { PasswordInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { CustomModal, Header, Imagen } from "~/components";
import { LayoutPage } from "~/layouts";

const Emergencias = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [contrasena, setContrasena] = useState("");

  const onAceptar = () => {
    if (contrasena === "56789") {
      window.open(
        "https://docs.google.com/spreadsheets/d/1k1ESx_2zvjYD1E2rC8tVFsBYCALUlHbw/edit?usp=drive_link&ouid=118331876732910145880&rtpof=true&sd=true",
        "_blank"
      );
      close();
    } else {
      toast.error("Contraseña incorrecta");
    }
  };

  return (
    <LayoutPage>
      <Header
        title="Red de Género"
        main_title="ESIA Emergencia"
        image="/assets/imgs/igualdad.png"
        classNameImage="aspect-square w-24"
      />

      <div className="container m-auto mt-6 px-6 pb-8">
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
          <button
            className=" rounded bg-rojo px-2 py-1 text-sm font-bold text-blanco shadow-md"
            onClick={open}
          >
            SOS DOCENTE
          </button>
        </div>
      </div>

      <CustomModal open={opened} onClose={close}>
        <div className="px-4">
          <h3 className="text-center font-medium">ESIA TECAMACHALCO</h3>
          <PasswordInput
            value={contrasena}
            onChange={(e) => setContrasena(e.currentTarget.value)}
            className="mt-3"
            placeholder="Contraseña"
          />

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
    </LayoutPage>
  );
};

export default Emergencias;
