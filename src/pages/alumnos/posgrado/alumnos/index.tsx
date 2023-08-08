import { useRouter } from "next/router";
import { BarraAzul, ButtonNext } from "~/components";
import { LayoutMenu } from "~/layouts";

const PosgradoAlumnos = () => {
  const router = useRouter();
  return (
    <LayoutMenu
      className="!px-0 pb-10"
      styleLogoContainer={{
        padding: "0 1.25rem",
      }}
    >
      <h2 className="mb-4 mt-8 text-center text-xl font-bold">Alumnos</h2>
      <BarraAzul texto="Encargada de gestion escolar">
        <p className="px-2 pb-2 pt-4 text-sm font-bold italic leading-4">
          C. Elsa García Flores
        </p>
        <p className="px-2 pb-4 pt-0 text-sm leading-4">
          Correo institucional: elsaesi@outlook.com
          <br />
          Teléfono: 5729 6000 Ext: 68036
        </p>
      </BarraAzul>

      <BarraAzul texto="Encargado de biblioteca T. M.">
        <p className="px-2 pb-2 pt-4 text-sm font-bold italic leading-4">
          C. Salvador Tovar García
        </p>
        <p className="px-2 pb-4 pt-0 text-sm leading-4">
          Correo institucional: stovarv@ipn.mx
          <br />
          Teléfono: 5729 6000 Ext: 68021
        </p>
      </BarraAzul>

      <BarraAzul texto="Encargado de Biblioteca T. V. ">
        <p className="px-2 pb-2 pt-4 text-sm font-bold italic leading-4">
          C. Liliana Echeverría de la Cruz
        </p>
        <p className="px-2 pb-4 pt-0 text-sm leading-4">
          Correo: liliecheverria0509@gmail.com
          <br />
          Teléfono: 5729 6000 Ext: 68021
        </p>
      </BarraAzul>

      <div className="mt-5 flex justify-end px-2">
        <ButtonNext
          onClick={() => void router.push("/alumnos/posgrado/alumnos/dos")}
        />
      </div>
    </LayoutMenu>
  );
};

export default PosgradoAlumnos;
