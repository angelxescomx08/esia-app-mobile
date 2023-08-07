import { useRouter } from "next/router";
import { ButtonNext } from "~/components";
import { ButtonVerMas } from "~/components/shared/Buttons/ButtonVerMas";

const ServicioSocialDos = () => {
  const router = useRouter();
  return (
    <div className="container m-auto px-4 pb-8">
      <h2 className="mt-6 text-center text-2xl font-bold">
        Requisitos para inicio
      </h2>
      <p className="mt-8 text-base leading-5">
        Debes cumplir con lo siguiente:
      </p>
      <p className="mt-4 text-base leading-5">
        1.Estar inscrito o ser egresado
        <br />
        2.Tener más del 70% de créditos cubiertos
        <br />
        3.Ser alumno (a) regular
        <br />
        4.El alumno o egresado desarrollara cuatro horas diarias de lunes a
        viernes
      </p>
      <p className="mt-4 text-base leading-5">Documentos en físico y PDF:</p>
      <p className="mt-4 text-base leading-5">
        1.Acta de nacimiento
        <br />
        2.Vigencia de derechos del IMSS
        <br />
        3.CURP vigente (no mayor a tres meses)
        <br />
        4.Comprobante de domicilio (no mayor atres meses)
        <br />
        5.Constancia de créditos para Servicio Social (se tramita en el
        departamento de Gestión Escolar)
      </p>
      <div className="mb-3 mt-2 flex justify-end px-2">
        <ButtonVerMas
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1JAfJ6zTuosUNc4aEoMgMaLnaLyTDXbL-/view?usp=sharing",
              "_blank"
            )
          }
        />
      </div>

      <div className="mt-5 flex justify-end px-2">
        <ButtonNext
          onClick={() =>
            void router.push("/alumnos/servicio-social/servicio-social-tres")
          }
        />
      </div>
    </div>
  );
};

export default ServicioSocialDos;
