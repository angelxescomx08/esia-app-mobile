import { ButtonVerMas } from "~/components/shared/Buttons/ButtonVerMas";

const Tres = () => {
  return (
    <div className="container m-auto px-4 pb-8">
      <h2 className="mt-6 text-center text-2xl font-bold">Proceso</h2>

      <p className="mt-3 text-base leading-5">Durante el desarrollo:</p>
      <p className="mt-3 text-base leading-5">
        1. Debes realizar un reporte de gabinete con 150 horas.
        <br />
        2. Realizar un reporte de campo con 150 horas.
        <br />
        3. Reporte global al concluir con las Prácticas
        <br />
        4. Profesionales donde se detallan las actividades realizadas en
        gabinete y campo.
        <br />
        5. Carta de término elaborada por la empresa.
      </p>
      <p className="mt-3 text-base leading-5">
        Características del punto 8: Hoja membretada y firmada por el
        responsable de la empresa, dirigida al Jefe de departamento. Debe
        contener programa de actividades que el prestador realizará, nombre,
        boleta, periodo y horario.
      </p>
      <div className="mb-3 mt-4 flex justify-end px-2">
        <ButtonVerMas
          onClick={() =>
            window.open(
              "https://www.facebook.com/practicasprofesionalESIATEC",
              "_blank"
            )
          }
        />
      </div>
    </div>
  );
};

export default Tres;
