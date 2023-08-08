import { BarraAzul } from "~/components";
import { LayoutMenu } from "~/layouts";

const PosgradoAlumnosDos = () => {
  return (
    <LayoutMenu
      className="!px-0 pb-10"
      styleLogoContainer={{
        padding: "0 1.25rem",
      }}
    >
      <h2 className="mb-4 mt-8 text-center text-xl font-bold">Alumnos</h2>
      <BarraAzul
        texto="TRÁMITES ESCOLARES"
        onVerMas={() =>
          window.open(
            "https://drive.google.com/drive/folders/1-DRDlTjA4VgAxpo4H4GFrQsIyslHaVuv?usp=sharing",
            "_blank"
          )
        }
      ></BarraAzul>
      <BarraAzul
        texto="ASPIRANTES"
        onVerMas={() =>
          window.open(
            "https://drive.google.com/drive/folders/1ToveqpIY1Z10rgwnX5kWI8M9vF52lXIy?usp=sharing",
            "_blank"
          )
        }
      ></BarraAzul>
      <BarraAzul
        texto="REINSCRIPCIONES"
        onVerMas={() =>
          window.open(
            "https://drive.google.com/drive/folders/1wyegQb8UVdlXjHaXQ74gaEGywFbWwIO-?usp=sharing",
            "_blank"
          )
        }
      ></BarraAzul>
      <BarraAzul
        texto="ALUMNOS DE NUEVO INGRESO"
        onVerMas={() =>
          window.open(
            "https://drive.google.com/drive/folders/1K2ggJ-lyRKHm2RVpgSGy46iKOGzZ7izu?usp=sharing",
            "_blank"
          )
        }
      ></BarraAzul>

      <BarraAzul
        texto="REQUISITOS DE EXAMEN DE GRADO DE POSGRADO"
        onVerMas={() =>
          window.open(
            "https://drive.google.com/drive/folders/1QgOljQqIizDKwnohn5g-Axj1Iut0XH7F?usp=sharing",
            "_blank"
          )
        }
      ></BarraAzul>

      <BarraAzul
        texto="REGLAMENTO POSGRADO"
        onVerMas={() =>
          window.open(
            "https://drive.google.com/file/d/1ZV57ysm4_3iZ69MOmId8Y6ezZHJgJ4Md/view?usp=sharing",
            "_blank"
          )
        }
      ></BarraAzul>

      <BarraAzul
        texto="RETRIBUCION SOCIAL"
        onVerMas={() =>
          window.open(
            "https://docs.google.com/document/d/1m0yWnJF54H8U9HIrCmGfIOlZCaZV9ZAR/edit?usp=sharing&ouid=110957765882058906807&rtpof=true&sd=true",
            "_blank"
          )
        }
      ></BarraAzul>

      <BarraAzul
        texto="ALUMNOS DE NUEVO INGRESO"
        onVerMas={() =>
          window.open(
            "https://drive.google.com/drive/folders/1jdSG1y1Ll-nWqvHTYYJGcm5Z4pcDdfUe?usp=sharing",
            "_blank"
          )
        }
      ></BarraAzul>

      <BarraAzul
        texto="BECAS"
        onVerMas={() =>
          window.open(
            "https://drive.google.com/drive/folders/1jdSG1y1Ll-nWqvHTYYJGcm5Z4pcDdfUe?usp=sharing",
            "_blank"
          )
        }
      ></BarraAzul>
    </LayoutMenu>
  );
};

export default PosgradoAlumnosDos;
