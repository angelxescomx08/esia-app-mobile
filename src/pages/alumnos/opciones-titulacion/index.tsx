import { useRouter } from "next/router";
import { BarraAzul, ButtonNext } from "~/components";

const OpcionesTitulacion = () => {
  const router = useRouter();

  return (
    <div className="container m-auto pb-8">
      <BarraAzul
        texto="Escolaridad"
        onVerMas={() =>
          window.open(
            "https://drive.google.com/file/d/1ZEhUBHrL-8ZN1jHx3f2gLFcQu5kf3K1O/view?usp=sharing",
            "_blank"
          )
        }
      >
        <p className="px-2 py-4 text-sm leading-4">
          Aplicable cuando el pasante de la licenciatura obtiene un promedio
          general no menor a 9.0 (nueve) debe haber cubierto todos los créditos
          y no haber reprobado ninguna Unidad de Aprendizaje en todo el
          transcurso de su carrera.
        </p>
      </BarraAzul>

      <BarraAzul
        texto="Curricular"
        onVerMas={() =>
          window.open(
            "https://drive.google.com/file/d/1Wxy9MN3QBRswTzS3HXxLOaqHr44nnLaJ/view?usp=sharing",
            "_blank"
          )
        }
      >
        <p className="px-2 py-4 text-sm leading-4">
          Consiste en la acreditación de cursos o de una serie de actividades
          equivalente a los mismos, diseñados expresamente para efectos de
          titulación. Los cursos o actividades equivalentes deberán estar
          incorporados al plan de estudios de la carrera que se trate, conforme
          a lo establecido por el Artículo 10 del Reglamento para la Aprobación
          de los Planes y Programas de Estudio del Instituto Politécnico
          Nacional.
        </p>
      </BarraAzul>

      <BarraAzul
        texto="Créditos de Posgrado"
        onVerMas={() =>
          window.open(
            "https://drive.google.com/file/d/1FTFfmKNAFhjButfQp1VgleAJygNPnA2j/view?usp=sharing",
            "_blank"
          )
        }
      >
        <p className="px-2 py-4 text-sm leading-4">
          Consiste en la obtención de créditos por cursos requeridos para cubrir
          un programa de posgrado con un (75%) de los créditos por cursos
          requeridos para cubrir un programa de posgrado equivalente a uno de
          maestría y titularse de manera directa. Ambos porcentajes de avance
          deberán ser reconocidos por la Dirección de Estudios de Posgrado e
          Investigación de la Unidad Académica.
        </p>
      </BarraAzul>

      <BarraAzul
        texto="Tesis"
        onVerMas={() =>
          window.open(
            "https://drive.google.com/file/d/1-3ctGjC1H1Rg2eQqa1p2cTkGdLpofcqq/view?usp=sharing",
            "_blank"
          )
        }
      >
        <p className="px-2 py-4 text-sm leading-4">
          La tesis consiste en un trabajo escrito cuyo objetivo puede ser la
          investigación o la aportación de nuevos enfoques sobre un tema
          determinado del área de estudio del pasante. En esta opción, el
          pasante hará una exposición oral resumida del trabajo escrito ante un
          jurado. El tema de tesis podrá ser propuesto por el pasante o asignado
          por la Subdirección Académica de la escuela. Se preenta de forma
          individual, colectiva, colectiva interdisciplinaria o
          multidiciplinaria.
        </p>
      </BarraAzul>
      <div className="mt-10 flex justify-end px-2">
        <ButtonNext
          onClick={() => void router.push("/alumnos/opciones-titulacion/dos")}
        />
      </div>
    </div>
  );
};

export default OpcionesTitulacion;
