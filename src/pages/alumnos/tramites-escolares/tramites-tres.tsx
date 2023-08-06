import { BarraAzul } from "~/components";

const TramitesTres = () => {
  return (
    <div className="container m-auto pb-8">
      <BarraAzul className="mb-1" texto="Prácticas Escolares"></BarraAzul>
      <BarraAzul className="mb-1" texto="Visitas Escolares"></BarraAzul>
      <BarraAzul texto="Brigadas de Servicio Social">
        <p className="px-2 py-4 text-sm leading-4">
          Atención:
          <br />
          C. Guadalupe Lara
          <br />
          Horario: 9:00 a 14:00 hrs
          <br />
          Días de atención: Lunes a Jueves
          <br />
          Nota. Acudir al departamento para más información.
        </p>
      </BarraAzul>
    </div>
  );
};

export default TramitesTres;
