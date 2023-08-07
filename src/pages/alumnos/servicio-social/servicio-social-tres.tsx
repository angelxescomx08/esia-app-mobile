import { ButtonNext } from "~/components";
import { ButtonVerMas } from "~/components/shared/Buttons/ButtonVerMas";

const ServicioSocialTres = () => {
  return (
    <div className="container m-auto px-4 pb-8">
      <h2 className="mt-6 text-center text-2xl font-bold">Proceso</h2>
      <p className="mt-8 text-base leading-5">
        Una vez que tienes la documentación anterior:
      </p>
      <p className="mt-4 text-base leading-5">
        1.Debes hacer pre-registro en el SISS y llenado del formulario.
        <br />
        2.Validación de los documentos y preregistro.
        <br />
        3.Inicio de servicio social de acuerdo al {"'calendario de inicio'"}.
        <br />
        4.Envío de documentos.
        <br />
        5.Descarga de {"'carta compromiso'"}.
        <br />
        6.Aceptación de la dependencia para realizar Servicio Social.
        <br />
        7.Término del Servicio Social.
      </p>

      <div className="mb-3 mt-2 flex justify-end px-2">
        <ButtonVerMas
          onClick={() =>
            window.open(
              "https://www.facebook.com/profile.php?id=100057353473510",
              "_blank"
            )
          }
        />
      </div>
    </div>
  );
};

export default ServicioSocialTres;
