import { Imagen } from "~/components";
import { LayoutMenu } from "~/layouts";

const Becas = () => {
  return (
    <LayoutMenu>
      <h2 className="mt-12 text-center text-xl font-bold">Becas</h2>
      <p className="mt-3 text-center text-base leading-5">
        Desde el primer semestre de tu estancia en el Instituto Politécnico
        Nacional, podrás ser beneficiario de alguno de los distintos programas
        de becas que se ofrecen en el Instituto.
      </p>
      <h2 className="mt-12 text-center text-xl font-bold">
        Departamento responsable
      </h2>
      <p className="mt-3 text-right text-base leading-5">
        Jefe del departamento: M. en E. Jesús Carlos Hernández Cruz
        <br />
        Contacto: 57-29-60-00 Ext. 68045
        <br />
        Días de atención: Lunes a Jueves
        <br />
        Horario de atención: 11:00 a 14:30 hrs
      </p>

      <div className="mt-10 flex justify-end">
        <a
          className="flex items-center"
          href="https://www.esiatec.ipn.mx/estudiantes/becas.html"
          target="_blank"
        >
          <p className="text-sm font-bold">ver más</p>
          <Imagen
            className="w-5 -rotate-90"
            src="/assets/imgs/arrow.png"
            alt=""
          />
        </a>
      </div>
    </LayoutMenu>
  );
};

export default Becas;
