import { useRouter } from "next/router";
import { BarraAzul, ButtonNext } from "~/components";
import { LayoutMenu } from "~/layouts";

const PosgradoProgramas = () => {
  const router = useRouter();
  return (
    <LayoutMenu
      className="!px-0 pb-10"
      styleLogoContainer={{
        padding: "0 1.25rem",
      }}
    >
      <h2 className="mb-4 mt-8 text-center text-xl font-bold">Programas</h2>
      <BarraAzul
        texto="Maestría en Ciencias en Arquitectura y Urbanismo"
        onVerMas={() =>
          window.open(
            "https://www.sepi.esiatec.ipn.mx/oferta-educativa/mcau/inicio.html",
            "_blank"
          )
        }
      >
        <p className="mt-2 px-2 pb-4 text-sm leading-4">
          LGAC 1. Conservación del patrimonio urbano arquitectónico
          <br />
          LGAC 2. Viviendas seguras y sustentables
          <br />
          LGAC 3. Ambientación pasiva de edificios
          <br />
          LGAC 4. Arquitectura y diseño
          <br />
          LGAC 5. Cultura y ciudad
          <br />
          LGAC 6. Espacio público patrimonial
          <br />
          LGAC 7. Ordenamiento territorial y urbano
          <br />
          LGAC 8. Geomática y procesos urbanos
        </p>
      </BarraAzul>

      <BarraAzul
        texto="Doctorado en Ciencias en Arquitectura y Urbanismo"
        onVerMas={() =>
          window.open(
            "https://www.sepi.esiatec.ipn.mx/oferta-educativa/dcau/inicio.html",
            "_blank"
          )
        }
      >
        <p className="mt-2 px-2 pb-4 text-sm leading-4">
          LGAC 1. Ciudad y Proyecto Urbano
          <br />
          LGAC 2. Hábitat y Análisis Urbano-Arquitectónico
          <br />
          LGAC 3. Arquitectura Social y Sustentabilidad
        </p>
      </BarraAzul>

      <div className="mt-5 flex justify-end px-2">
        <ButtonNext
          onClick={() => void router.push("/alumnos/posgrado/programas/dos")}
        />
      </div>
    </LayoutMenu>
  );
};

export default PosgradoProgramas;
