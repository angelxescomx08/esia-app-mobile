import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/router";
import { BlueButton, CustomModal } from "~/components";
import { LayoutMenu } from "~/layouts";

const DocentesPage = () => {
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
          <BlueButton className="h-full w-[135px] max-w-full" onClick={open}>
            SAES
          </BlueButton>
        </div>
        <div className="col-span-1 mb-4 text-center">
          <BlueButton
            className="w-[135px] max-w-full"
            onClick={() => void router.push("/alumnos/apoyo-estudiantil")}
          >
            Apoyo <br /> Estudiantil
          </BlueButton>
        </div>
        <div className="col-span-1 mb-4 text-center">
          <BlueButton
            className="h-full w-[135px] max-w-full"
            onClick={() => void router.push("/alumnos/posgrado")}
          >
            Posgrado
          </BlueButton>
        </div>
        <div className="col-span-1 mb-4 text-center">
          <BlueButton
            className="w-[135px] max-w-full"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1__ZprHFRzmTOc9ggsdHjdVUVvhXnWHdc/view?usp=share_link",
                "_blank"
              )
            }
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

export default DocentesPage;
