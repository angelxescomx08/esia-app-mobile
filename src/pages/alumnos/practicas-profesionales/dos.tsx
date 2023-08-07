import { useRouter } from "next/router";
import { ButtonNext } from "~/components";
import { ButtonVerMas } from "~/components/shared/Buttons/ButtonVerMas";

const Dos = () => {
  const router = useRouter();
  return (
    <div className="container m-auto px-4 pb-8">
      <h2 className="mt-6 text-center text-2xl font-bold">
        Requisitos para inicio
      </h2>

      <p className="mt-3 text-base leading-5">
        1. Contar con la liberación de servicio social.
        <br />
        2. Ser alumno regular. No deber materias y/o estar en dictamen.
        <br />
        3. Contar con el 50% de créditos.
        <br />
        4. Copia de acta de nacimiento.
        <br />
        5. Constancia de Prácticas Profesionales. (solicitar en Gestión Escolar)
        <br />
        6. Vigencia de derechos del IMSS o de cualquier servicio médico que se
        tenga.
        <br />
        7. Carta de presentación. (Solicitar con el encargado del área de
        Prácticas Profesionales)
        <br />
        8. Carta de aceptación. (Solicitar a la empresa)
        <br />
        9. Copia de la cédula de Identificación Fiscal (RFC) de la empresa o
        persona física o persona física con actividad empresarial. Sin
        tachaduras y legible.
        <br />
        10. El alumno o egresado desarrollara cuatro horas diarias de lunes a
        viernes.
      </p>
      <div className="mb-3 mt-4 flex justify-end px-2">
        <ButtonVerMas
          onClick={() =>
            window.open(
              "https://drive.google.com/drive/folders/18UvDtT8DvW0rkxiRLXWhmTz9xUsf6CcG?usp=share_link",
              "_blank"
            )
          }
        />
      </div>

      <div className="mt-20 flex justify-end px-2">
        <ButtonNext
          onClick={() =>
            void router.push("/alumnos/practicas-profesionales/tres")
          }
        />
      </div>
    </div>
  );
};

export default Dos;
