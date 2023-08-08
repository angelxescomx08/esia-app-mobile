import { useRouter } from "next/router";
import { BarraAzul, ButtonNext } from "~/components";
import { LayoutMenu } from "~/layouts";

const PosgradoConocenos = () => {
  const router = useRouter();
  return (
    <LayoutMenu
      className="!px-0 pb-10"
      styleLogoContainer={{
        padding: "0 1.25rem",
      }}
    >
      <h2 className="mb-4 mt-8 text-center text-xl font-bold">Conócenos</h2>
      <BarraAzul texto="Jefe de la Sección de Estudios de Posgrado e Investigación">
        <p className="px-2 pb-2 pt-4 text-sm font-bold italic leading-4">
          M. en R. Ricardo Lozano Gálvez
        </p>
        <p className="px-2 pb-4 pt-0 text-sm leading-4">
          Correo institucional: rgolvez@ipn.mx
          <br />
          Teléfono: 5729 6000 Ext: 68020
        </p>
      </BarraAzul>

      <BarraAzul texto="Departamento de Investigación">
        <p className="px-2 pb-2 pt-4 text-sm font-bold italic leading-4">
          Dra. Luz Olivia Prieto Domínguez
        </p>
        <p className="px-2 pb-4 pt-0 text-sm leading-4">
          Correo institucional: ludominguezp@ipn.mx
          <br />
          Teléfono: 5729 6000 Ext: 68023
        </p>
      </BarraAzul>

      <BarraAzul texto="Departamento de posgrado">
        <p className="px-2 pb-2 pt-4 text-sm font-bold italic leading-4">
          Ing. Arg. Mario Álvarez Victoria
        </p>
        <p className="px-2 pb-4 pt-0 text-sm leading-4">
          Correo institucional: malvarezv@ipn.mx
          <br />
          Teléfono: 5729 6000 Ext: 68023
        </p>
      </BarraAzul>

      <BarraAzul texto="Coord. del Doctorado en Ciencias en Arquitectura y Urbanismo">
        <p className="px-2 pb-2 pt-4 text-sm font-bold italic leading-4">
          Dr. Alejandro Jimenez Vaca
        </p>
        <p className="px-2 pb-4 pt-0 text-sm leading-4">
          Correo institucional: ajimenezva@ipn.mx
          <br />
          Teléfono: 5729 6000 Ext: 68021
        </p>
      </BarraAzul>
      <div className="mt-5 flex justify-end px-2">
        <ButtonNext
          onClick={() => void router.push("/alumnos/posgrado/conocenos/dos")}
        />
      </div>
    </LayoutMenu>
  );
};

export default PosgradoConocenos;
