import { BarraAzul } from "~/components";

const OpcionesTitulacionDos = () => {
  return (
    <div className="container m-auto pb-8">
      <BarraAzul
        texto="Experiencia Profesional"
        onVerMas={() =>
          window.open(
            "https://drive.google.com/file/d/1iTeaFVAeLBLU5wARmk3xZSvrtD5U0fjc/view?usp=sharing",
            "_blank"
          )
        }
      >
        <p className="px-2 py-4 text-sm leading-4">
          El pasante deberá tener 3 años de haber concluido el 100% de créditos,
          consiste en la elaboración de un informe escrito de las actividades
          profesionales del pasante durante un período no menor a tres años
          donde aplique los conocimientos de Ingeniería y Arquitectura. El
          informe escrito de la experiencia profesional se realiza sobre un tema
          en particular aprobado previamente por la Subdirección Académica, y se
          hace exposición oral del mismo ante un jurado. El pasante hará una
          exposición oral del trabajo escrito ante el jurado correspondiente.
        </p>
      </BarraAzul>

      <BarraAzul
        texto="Seminarios"
        onVerMas={() =>
          window.open(
            "https://drive.google.com/file/d/1UfjGnsJfGj_FXRC2R280J-ivHpJ--E1j/view?usp=share_link",
            "_blank"
          )
        }
      >
        <p className="px-2 py-4 text-sm leading-4">
          Acreditación de un seminario de titulación avalado por la Dirección de
          Educación Superior del Instituto Politécnico Nacional, con una
          duración mínima de 150 horas. Se acredita con calificación no menor a
          8.0 (ocho), y deberá cubrir el 90% de asistencia como mínimo. Se
          entrega trabajo escrito y exposición ante un jurado.
        </p>
      </BarraAzul>

      <BarraAzul
        texto="SElect"
        onVerMas={() => window.open("https://select-esiatec.com.mx/", "_blank")}
      >
        <p className="px-2 py-4 text-sm leading-4">
          SElect tiene la finalidad de facilitarte el proceso de validación y
          acreditación de la Unidad de Aprendizaje Electiva de tu Programa
          Académico. Con la acreditación de la Unidad de Aprendizaje Electiva se
          pretende que desarrolles competencias profesionales complementarias
          para la construcción de conocimientos y experiencias de aprendizaje,
          privilegiando la participación en proyectos de investigación,
          vinculación y extensión, que te permitan prepararte para tu egreso e
          inserción en el campo laboral.
        </p>
      </BarraAzul>

      <div className="mt-10 px-4">
        <h3 className="mb-3 text-center text-lg font-bold">
          Encargado responsable
        </h3>
        <p className="text-base leading-5">
          Encargado: Eloy Rico
          <br />
          Contacto: 57296000 Ext. 68053
          <br />
          Días de atención: Lunes a Jueves
          <br />
          Horario de atención: 9:00 a 13:00
        </p>
      </div>
    </div>
  );
};

export default OpcionesTitulacionDos;
