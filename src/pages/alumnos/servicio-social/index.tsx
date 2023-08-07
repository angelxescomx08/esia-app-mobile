import { useRouter } from "next/router";
import { ButtonNext } from "~/components";

const ServicioSocial = () => {
  const router = useRouter();
  return (
    <div className="container m-auto px-4 pb-8">
      <h2 className="mt-6 text-center text-2xl font-bold">Servicio Social</h2>
      <h3 className="my-5 text-center text-base font-bold">Responsables</h3>

      <h3 className="my-4 text-center text-base font-bold">
        Departamento responsable
      </h3>
      <p className="mt-3 text-base leading-5">
        Jefe del departamento: M. en E. Jesús Carlos Hernández Cruz
        <br />
        Contacto: 57-29-60-00 Ext. 68045
        <br />
        Días de atención: Lunes a Viernes
        <br />
        Horario de atención: 11:00 a 14:30 hrs
      </p>

      <h3 className="my-4 text-center text-base font-bold">
        Inicios de servicio
      </h3>
      <p className="mt-3 text-base leading-5">
        Encargada: Marcela Nava
        <br />
        Contacto: manava@ipn.mx
        <br />
        Horario de atención: 9:00 a 14:00 hrs
      </p>

      <h3 className="my-4 text-center text-base font-bold">
        Términos de servicio
      </h3>
      <p className="mt-3 text-base leading-5">
        Encargada: Maricruz Hernández
        <br />
        Contacto: marihernandez@ipn.mx
        <br />
        Horario de atención: modalidad a distancia
      </p>

      <div className="mt-5 flex justify-end px-2">
        <ButtonNext
          onClick={() =>
            void router.push("/alumnos/servicio-social/servicio-social-dos")
          }
        />
      </div>
    </div>
  );
};

export default ServicioSocial;
