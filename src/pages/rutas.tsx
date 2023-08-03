import { Collapse, Imagen } from "~/components";
import { LayoutPage } from "~/layouts";

const Rutas = () => {
  const openMap = () =>
    window.open("https://goo.gl/maps/XGHf1a9fF9AezVcP8", "_blank");

  return (
    <LayoutPage>
      <div className="p-7">
        <div className="my-10 flex items-center justify-between">
          <Imagen className="w-14" src="/assets/imgs/maps.png" alt="" />
          <p
            className="text-center text-base leading-5 text-gris-oscuro underline"
            onClick={openMap}
          >
            Av. Fuente de los Leones 28.
            <br />
            Lomas de Tecamachalco, 53950.
            <br />
            Naucalpan de juarez, México.
          </p>
        </div>
        <div className="flex items-center">
          <h3 className="text-lg font-bold">Rutas</h3>
          <Imagen className="w-5" src="/assets/imgs/arrow.png" alt="" />
        </div>
      </div>

      <Collapse title="Tacuba">
        <ul className="list-none px-3 text-sm text-gris-oscuro">
          <li className="mb-4 mt-4">
            <p>
              ● Necesitas ubicarte en la línea dos del metro “cuatro
              caminostasqueña”, línea azul.
            </p>
          </li>
          <li className="mb-4">
            <p>
              ● Deberás tomar el metro en dirección “cuatro caminos” y bajar en
              la estación “Tacuba”.
            </p>
          </li>
          <li className="mb-4">
            <p>
              ● En el paradero de “Tacuba” debes tomar el camión morado ruta 00
              con dirección a ESIA Tecamachalco.
            </p>
          </li>
          <li className="mb-4 font-bold">
            <p>
              ● Nota. El camión te dejara en la entrada principal de la ESIA
              Tecamachalco.
            </p>
          </li>
        </ul>
      </Collapse>

      <Collapse title="Cuatro Caminos" className="mt-4">
        <ul className="list-none px-3 text-sm text-gris-oscuro">
          <li className="mb-4 mt-4">
            <p>
              ● Necesitas ubicarte en la línea dos del metro “cuatro
              caminos-tasqueña”, línea azul.
            </p>
          </li>
          <li className="mb-4">
            <p>
              ● Deberás tomar el metro en dirección “cuatro caminos” y bajar en
              la estación “Cuatro caminos”
            </p>
          </li>
          <li className="mb-4">
            <p>
              ● El paradero de “Cuatro caminos” se encuentra dentro del centro
              comercial “Toreo Parque Central”, ahí debes tomar la combi, ruta
              00 con dirección a ESIA Tecamachalco.
            </p>
          </li>
          <li className="mb-4 font-bold">
            <p>
              ● Nota. La combi te dejara en la entrada principal de la ESIA
              Tecamachalco.
            </p>
          </li>
        </ul>
      </Collapse>

      <Collapse title="Chapultepec" className="mb-5 mt-4">
        <ul className="list-none px-3 text-sm text-gris-oscuro">
          <li className="mb-4 mt-4">
            <p>
              ● Necesitas ubicarte en la línea dos del metro “cuatro
              caminos-tasqueña”, línea azul.
            </p>
          </li>
          <li className="mb-4">
            <p>
              ● Deberás tomar el metro en dirección “cuatro caminos” y bajar en
              la estación “Cuatro caminos”
            </p>
          </li>
          <li className="mb-4">
            <p>
              ● El paradero de “Cuatro caminos” se encuentra dentro del centro
              comercial “Toreo Parque Central”, ahí debes tomar la combi, ruta
              00 con dirección a ESIA Tecamachalco.
            </p>
          </li>
          <li className="mb-4 font-bold">
            <p>
              ● Nota. La combi te dejara en la entrada principal de la ESIA
              Tecamachalco.
            </p>
          </li>
        </ul>
      </Collapse>
    </LayoutPage>
  );
};

export default Rutas;
