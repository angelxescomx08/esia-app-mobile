import { BarraAzul } from "~/components";
import { ButtonVerMas } from "~/components/shared/Buttons/ButtonVerMas";
import { LayoutMenu } from "~/layouts";

interface PropsItem {
  texto: string;
  onClickVerMas: () => void;
}

const Item = ({ texto, onClickVerMas }: PropsItem) => {
  return (
    <div className="px-2">
      <p className="pb-4 pt-4 text-sm italic leading-4">{texto}</p>
      <div className="flex justify-end">
        <ButtonVerMas onClick={onClickVerMas} />
      </div>
    </div>
  );
};

const PosgradoProfesores = () => {
  const redirect = (url: string) => window.open(url, "_blank");
  return (
    <LayoutMenu
      className="!px-0 pb-10"
      styleLogoContainer={{
        padding: "0 1.25rem",
      }}
    >
      <h2 className="mb-4 mt-8 text-center text-xl font-bold">Profesores</h2>
      <BarraAzul texto="Becas" className="mb-4">
        <Item
          texto="Profesores con reconocimiento (SNI)"
          onClickVerMas={() =>
            redirect("https://conacyt.mx/sistema-nacional-de-investigadores/")
          }
        />
        <Item
          texto="Estímulos al desempeño de la investigación (EDI)"
          onClickVerMas={() =>
            redirect("https://www.ipn.mx/investigacion/estimulos/edi/")
          }
        />
        <Item
          texto="Beca de Exclusividad (COFAA)"
          onClickVerMas={() =>
            redirect(
              "https://www.cofaa.ipn.mx/becas/beca-por-exclusividad.html"
            )
          }
        />
        <Item
          texto="Programa Institucional de Contratación de Personal Académico de Excelencia (PICPAE)"
          onClickVerMas={() =>
            redirect(
              "https://www.ipn.mx/investigacion/convocatorias/internas/picpae-registro.html"
            )
          }
        />
      </BarraAzul>

      <BarraAzul texto="Investigadores" className="mb-4">
        <Item
          texto="Enlace a Plataforma PURE"
          onClickVerMas={() =>
            redirect(
              "https://ipn.elsevierpure.com/es/searchAll/index/?search=ESIA+TEC&pageSize=25&showAdvanced=false&allConcepts=true&inferConcepts=true&searchBy=PartOfNameOrTitle"
            )
          }
        />
        <Item
          texto="Profesores Colegiados"
          onClickVerMas={() => console.log("")}
        />
        <Item
          texto="Acuerdos de Colegio"
          onClickVerMas={() => console.log("")}
        />
        <Item
          texto="Profesores que integran el posgrado"
          onClickVerMas={() => console.log("")}
        />
      </BarraAzul>

      <BarraAzul texto="Nombramiento de Posgrado" className="mb-4">
        <Item
          texto="SIP 32"
          onClickVerMas={() =>
            redirect(
              "https://drive.google.com/file/d/1rhFL_wKp9TGkRXNKWX-2l3Bek1S1YmmG/view?usp=sharing"
            )
          }
        />
      </BarraAzul>

      <BarraAzul
        texto="SOLICITUD ALUMNOS PRACTICAS PROFESIONALES"
        className="mb-4"
      >
        <Item
          texto="REQUISITOS"
          onClickVerMas={() =>
            redirect(
              "https://drive.google.com/file/d/1rhFL_wKp9TGkRXNKWX-2l3Bek1S1YmmG/view?usp=sharing"
            )
          }
        />
      </BarraAzul>

      <BarraAzul texto="SOLICITUD ALUMNOS SERVICIO SOCIAL" className="mb-4">
        <Item texto="REQUISITOS " onClickVerMas={() => console.log("")} />
      </BarraAzul>

      <BarraAzul texto="SOLICITUD ALUMNOS BEIFI" className="mb-4">
        <Item texto="REQUISITOS" onClickVerMas={() => console.log("")} />
      </BarraAzul>
    </LayoutMenu>
  );
};

export default PosgradoProfesores;
