import { BarraAzul } from "~/components";
import { LayoutMenu } from "~/layouts";

const PosgradoConocenosDos = () => {
  return (
    <LayoutMenu
      className="!px-0 pb-10"
      styleLogoContainer={{
        padding: "0 1.25rem",
      }}
    >
      <h2 className="mb-4 mt-8 text-center text-xl font-bold">Conócenos</h2>
      <BarraAzul texto="Coord. de Maestría en Ciencias en Arquitectura y Urbanismo">
        <p className="px-2 pb-2 pt-4 text-sm font-bold italic leading-4">
          Dr. J. Guadalupe Martínez Granados
        </p>
        <p className="px-2 pb-4 pt-0 text-sm leading-4">
          Correo: jogugra@hotmail.com
          <br />
          Teléfono: 5729 6000 Ext: 68020
        </p>
      </BarraAzul>

      <BarraAzul texto="Coord.  De la  Maestría en Conservación y Restauración Arquitectónica">
        <p className="px-2 pb-2 pt-4 text-sm font-bold italic leading-4">
          Dr. Tarsicio Pastrana Salcedo
        </p>
        <p className="px-2 pb-4 pt-0 text-sm leading-4">
          Correo institucional: taarpaa@msn.com
          <br />
          Teléfono: 5729 6000 Ext: 68023
        </p>
      </BarraAzul>

      <BarraAzul texto="Coord. de la Especialidad en Valuación inmobiliaria">
        <p className="px-2 pb-2 pt-4 text-sm font-bold italic leading-4">
          M. Ismael Ramírez Jaimes
        </p>
        <p className="px-2 pb-4 pt-0 text-sm leading-4">
          Correo institucional: jramirezj@ipn.mx
          <br />
          Teléfono: 5729 6000 Ext: 68023
        </p>
      </BarraAzul>

      <BarraAzul texto="Coord. de la Especialidad en Restauración Arquitectónica">
        <p className="px-2 pb-2 pt-4 text-sm font-bold italic leading-4">
          Ing. Arq. Alberto Antelmo Peña Guerrero
        </p>
        <p className="px-2 pb-4 pt-0 text-sm leading-4">
          Teléfono: 5729 6000 Ext: 68023
        </p>
      </BarraAzul>
    </LayoutMenu>
  );
};

export default PosgradoConocenosDos;
