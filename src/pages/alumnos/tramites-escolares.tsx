import { BarraAzul, ButtonNext } from "~/components";

const TramitesEscolares = () => {
  return (
    <div className="container m-auto pb-8">
      <BarraAzul
        texto="Departamento de Formación Básica Disciplinaria"
        onVerMas={() => console.log("")}
      >
        <p className="px-2 py-4 text-sm leading-4">
          Jefe de Departamento: Ing. Arq. Juan Hernández Flores
          <br />
          Horario de atención: 9:00-14:00 y 16:00-19:00
          <br />
          Días de atención: Lunes a Jueves
          <br />
          Servicios: Orientación de tutorías, asignación o cambio del tutor
          escolar, prácticas y visitas.
        </p>
      </BarraAzul>

      <BarraAzul texto="Departamento de Servicios Estudiantiles">
        <p className="px-2 py-4 text-sm leading-4">
          Jefe de Departamento: Lic. Lorena Lozoya Saldaña
          <br />
          Horario de atención: 7:00-14:00 y 16:00-21:00
          <br />
          Días de atención: Lunes a Jueves
          <br />
          Servicios: Actividades deportivas, culturales, revista “esencia y
          espacio”, red de genero.
        </p>
      </BarraAzul>

      <BarraAzul
        texto="Departamento de Formación Integral e Institucional"
        onVerMas={() =>
          window.open("https://www.facebook.com/esiatectitulacion", "_blank")
        }
      >
        <p className="px-2 py-4 text-sm leading-4">
          Jefe de Departamento: Ing. Arq. Lucio Hernández Trejo
          <br />
          Horario de atención: varía según proceso de titulación.
          <br />
          Días de atención: Lunes a Jueves
          <br />
          Servicios: Procesos de titulación, liberación y orientación de
          liberación de electivas.
        </p>
      </BarraAzul>

      <BarraAzul texto="Departamento de Extensión y Apoyos Educativos">
        <p className="px-2 py-4 text-sm leading-4">
          Jefe de Departamento: M. en E. Jesús Carlos Hernández Cruz
          <br />
          Horario de atención: varía según proceso a realizar.
          <br />
          Días de atención: Lunes a Jueves
          <br />
          Servicios: Proceso de servicio social y prácticas profesionales.
        </p>
      </BarraAzul>

      <div className="flex justify-end px-2">
        <ButtonNext />
      </div>
    </div>
  );
};

export default TramitesEscolares;
