import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/router";
import { BlueButton, CustomModal } from "~/components";
import { LayoutMenu } from "~/layouts";

const AlumnoPage = () => {
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);

  const onAceptar = () => {
    window.open("https://www.saes.esiatec.ipn.mx/", "_blank");
    close();
  };
  return (
    <LayoutMenu>
      <div className="mt-12 grid grid-cols-2">
        <div className="col-span-1 mb-4 text-center">
          <BlueButton className="w-4/5" onClick={open}>
            SAES
          </BlueButton>
        </div>
        <div className="col-span-1 mb-4 text-center">
          <BlueButton
            className="w-4/5"
            onClick={() => void router.push("/alumnos/becas")}
          >
            Becas
          </BlueButton>
        </div>
        <div className="col-span-1 mb-4 text-center">
          <BlueButton
            className="w-4/5"
            onClick={() => void router.push("/alumnos/tramites-escolares")}
          >
            Trámites <br /> Escolares
          </BlueButton>
        </div>
        <div className="col-span-1 mb-4 text-center">
          <BlueButton
            className="w-4/5"
            onClick={() => void router.push("/alumnos/servicio-social")}
          >
            Servicio <br /> Social
          </BlueButton>
        </div>
        <div className="col-span-1 mb-4 text-center">
          <BlueButton
            className="w-4/5"
            onClick={() => void router.push("/alumnos/practicas-profesionales")}
          >
            Prácticas <br /> Profesionales
          </BlueButton>
        </div>
        <div className="col-span-1 mb-4 text-center">
          <BlueButton
            className="w-4/5"
            onClick={() => {
              console.log("click");
            }}
          >
            Opciones de <br /> Titulación
          </BlueButton>
        </div>
        <div className="col-span-1 mb-4 text-center">
          <BlueButton
            className="w-4/5"
            onClick={() => {
              console.log("click");
            }}
          >
            Apoyo <br /> Estudiantil
          </BlueButton>
        </div>
        <div className="col-span-1 mb-4 text-center">
          <BlueButton
            className="h-full w-4/5"
            onClick={() => {
              console.log("click");
            }}
          >
            Posgrado
          </BlueButton>
        </div>
        <div className="col-span-2 mb-4 text-center">
          <BlueButton
            className="w-3/5"
            onClick={() => {
              console.log("click");
            }}
          >
            Planos Oficiales
          </BlueButton>
        </div>
      </div>

      <CustomModal open={opened} onClose={close}>
        <div className="px-4">
          <h3 className="text-center font-medium">ESIA TECAMACHALCO</h3>
          <p className="text-center text-xs">
            ¿Desea abrir la página del SAES?
          </p>
          <div className="mt-3 flex items-center justify-between py-3">
            <button
              className="rounded-full border-2 border-negro px-6 py-2 font-semibold"
              onClick={close}
            >
              Cancelar
            </button>
            <button
              className="w-[120px] rounded-full border-2 border-azul bg-azul px-6 py-2 font-semibold text-blanco"
              onClick={onAceptar}
            >
              Si
            </button>
          </div>
        </div>
      </CustomModal>
    </LayoutMenu>
  );
};

export default AlumnoPage;
