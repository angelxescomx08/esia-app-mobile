import { Header } from "~/components";
import { LayoutPage } from "~/layouts";

export default function Home() {
  return (
    <LayoutPage>
      <div className="container m-auto">
        <Header
          title={"Escuela Superior de Ingeniería y Arquitectura"}
          main_title={"Unidad Tecamachalco"}
          image={"/assets/imgs/esia.png"}
        />

        <div className="mt-24 flex flex-col items-center justify-center">
          <button className="block w-48 rounded-full bg-gradient-to-r from-azul to-azul-claro py-[10px] text-sm text-blanco">
            ALUMNOS
          </button>
          <button className="mt-3 block w-48 rounded-full bg-gradient-to-r from-azul to-azul-claro py-[10px] text-sm text-blanco">
            DOCENTES
          </button>
          <button className="mt-3 block w-48 rounded-full bg-gradient-to-r from-azul to-azul-claro py-[10px] text-sm text-blanco">
            POSGRADO
          </button>
        </div>
      </div>
    </LayoutPage>
  );
}
