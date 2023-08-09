import { PasswordInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { CustomModal, Header } from "~/components";
import { LayoutPage } from "~/layouts";

export default function Home() {
  const router = useRouter();

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
      <div className="container m-auto">
        <Header
          title={"Escuela Superior de Ingeniería y Arquitectura"}
          main_title={"Unidad Tecamachalco"}
          image={"/assets/imgs/esia.png"}
        />

        <div className="mt-24 flex flex-col items-center justify-center">
          <button
            onClick={() => void router.push("/alumnos")}
            className="block w-48 rounded-full bg-gradient-to-r from-azul to-azul-claro py-[10px] text-sm text-blanco shadow-md"
          >
            ALUMNOS
          </button>
          <button
            className="mt-3 block w-48 rounded-full bg-gradient-to-r from-azul to-azul-claro py-[10px] text-sm text-blanco shadow-md"
            onClick={() => void router.push("/docentes")}
          >
            DOCENTES
          </button>
          <button
            className="mt-3 block w-48 rounded-full bg-gradient-to-r from-azul to-azul-claro py-[10px] text-sm text-blanco shadow-md"
            onClick={() => void router.push("/alumnos/posgrado")}
          >
            POSGRADO
          </button>
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
}
