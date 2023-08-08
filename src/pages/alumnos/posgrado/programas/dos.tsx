import { BarraAzul } from "~/components";
import { LayoutMenu } from "~/layouts";

const PosgradoProgramasDos = () => {
  return (
    <LayoutMenu
      className="!px-0"
      styleLogoContainer={{
        padding: "0 1.25rem",
      }}
    >
      <h2 className="mb-4 mt-8 text-center text-xl font-bold">Programas</h2>
      <BarraAzul
        texto="Maestría en Conservación y Restauración Arquitectónica"
        onVerMas={() =>
          window.open(
            "https://www.sepi.esiatec.ipn.mx/oferta-educativa/mcra/inicio.html",
            "_blank"
          )
        }
      ></BarraAzul>

      <BarraAzul
        texto="Especialidad en Restauración Arquitectónica"
        onVerMas={() =>
          window.open(
            "https://www.sepi.esiatec.ipn.mx/oferta-educativa/dcau/inicio.html",
            "_blank"
          )
        }
      ></BarraAzul>

      <BarraAzul
        texto="Especialidad en Valuacion Inmobiliaria"
        onVerMas={() =>
          window.open(
            "https://www.sepi.esiatec.ipn.mx/oferta-educativa/especialidad-en-valuacion-inmobiliaria/inicio.html",
            "_blank"
          )
        }
      ></BarraAzul>
    </LayoutMenu>
  );
};

export default PosgradoProgramasDos;
