import { useRouter } from "next/router";
import { BarraAzul, ButtonNext } from "~/components";

const ApoyoEstudiantil = () => {
  const router = useRouter();

  return (
    <div className="container m-auto pb-8">
      <BarraAzul texto="Servicio Médico">
        <p className="px-2 py-4 text-sm leading-4">
          Atención:
          <br />
          Dr. Ana Luisa Barrientos Álvarez – Turno Matutino
          <br />
          Dr. Thania Montellano López – Turno Vespertino
          <br />
          Días de atención: Lunes a Viernes
        </p>
      </BarraAzul>

      <BarraAzul
        texto="Orientación Juvenil"
        onVerMas={() =>
          window.open(
            "https://www.facebook.com/profile.php?id=100075908950878",
            "_blank"
          )
        }
      >
        <p className="px-2 py-4 text-sm leading-4">
          Atención:
          <br />
          Lic. Psic. Brenda Viridiana Suárez Gutiérrez
          <br />
          Horario: 7:00 a 14:00 hrs
          <br />
          Lic. Psic. Gabriela Aguilar Guiza
          <br />
          Horario: 8:00 a 15:00 hrs
          <br />
          Días de atención: Lunes a Viernes
          <br />
          Citas: Presenciales.
        </p>
      </BarraAzul>

      <BarraAzul texto="Servicio Odontológico">
        <p className="px-2 py-4 text-sm leading-4">
          Atención:
          <br />
          Dr. Lucia Gabriela Ramírez Guerrero
          <br />
          Horario 7:00 a 14:00 hrs
          <br />
          Días de atención: Lunes a Viernes
          <br />
          Citas: Presenciales.
        </p>
      </BarraAzul>

      <BarraAzul
        texto="Afiliación del Instituto Mexicano del Seguro Social"
        onVerMas={() => window.open("http://www.imss.gob.mx/", "_blank")}
      >
        <p className="px-2 py-4 text-sm leading-4">
          Atención:
          <br />
          Departamento de Gestión Escolar
          <br />
          C. Adriana Valdivia Domínguez
          <br />
          Horario: 8:00-12:00 y 13:00-14:30 hrs
          <br />
          Días de atención: Lunes a Jueves
        </p>
      </BarraAzul>
      <div className="mt-10 flex justify-end px-2">
        <ButtonNext
          onClick={() => void router.push("/alumnos/apoyo-estudiantil/dos")}
        />
      </div>
    </div>
  );
};

export default ApoyoEstudiantil;
