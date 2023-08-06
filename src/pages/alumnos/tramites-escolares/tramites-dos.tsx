import { useRouter } from "next/router";
import { BarraAzul, ButtonNext } from "~/components";

const TramitesDos = () => {
  const router = useRouter();

  return (
    <div className="container m-auto pb-8">
      <BarraAzul texto="Departamento de Programación">
        <p className="px-2 py-4 text-sm leading-4">
          Jefe de Departamento: Ing. Arq. José Carlos Soberanes Ayala
          <br />
          Horario de atención: 8:00-13:00 y 15:00-20:00
          <br />
          Días de atención: Lunes a Jueves
          <br />
          Servicios: Dudas sobre asignación de profesores y salones de clases.
        </p>
      </BarraAzul>

      <BarraAzul
        texto="Departamento de Gestión Escolar"
        onVerMas={() =>
          window.open("https://www.facebook.com/GestionESIATEK/", "_blank")
        }
      >
        <p className="px-2 py-4 text-sm leading-4">
          Jefa de Departamento: C. Adiana Valdivia Domíngurez
          <br />
          Horario de atención: 7:00-14:00 y 16:00-21:00
          <br />
          Días de atención: Lunes a Jueves
          <br />
          Servicios: Horarios, bajas y altas de materias, boletas, dictamen.
        </p>
      </BarraAzul>

      <BarraAzul texto="Tutorías">
        <p className="px-2 py-4 text-sm leading-4">
          1.Tutoría de Recuperación Académica
          <br />
          2.Tutoría de Regularización Académica
          <br />
          3.Tutoría Grupal
          <br />
          4.Tutoría Individual
          <br />
          5.Tutoría Especial
          <br />
          Atención:
          <br />
          Ing. Arq. Juan Hernández Flores
          <br />
          Horario: 9:00 a 14:00 hrs
          <br />
          Ing. Arq. Ivette Gómez Lugo
          <br />
          Horario: 16:00 a 19:00 hrs
          <br />
          Días de atención: Lunes a Jueves
          <br />
          Nota. Acudir al departamento para más información
        </p>
      </BarraAzul>

      <div className="flex justify-end px-2">
        <ButtonNext
          onClick={() =>
            void router.push("/alumnos/tramites-escolares/tramites-tres")
          }
        />
      </div>
    </div>
  );
};

export default TramitesDos;
