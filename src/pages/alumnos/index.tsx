import { BlueButton, Imagen } from "~/components";

const AlumnoPage = () => {
  return (
    <div className="container m-auto px-5">
      <div className="mt-6 flex items-end justify-end">
        <div className="mr-2">
          <p className="text-right text-xs font-bold leading-[14px]">
            Escuela Superior <br /> de Ingeniería y Arquitectura
          </p>
          <h3 className="font-bold">Unidad Tecamachalco</h3>
        </div>
        <Imagen className="w-10" src="/assets/imgs/esia.png" alt="" />
      </div>

      <div className="mt-12 grid grid-cols-2">
        <div className="col-span-1 mb-4 text-center">
          <BlueButton
            className="w-4/5"
            onClick={() => {
              console.log("click");
            }}
          >
            SAES
          </BlueButton>
        </div>
        <div className="col-span-1 mb-4 text-center">
          <BlueButton
            className="w-4/5"
            onClick={() => {
              console.log("click");
            }}
          >
            Becas
          </BlueButton>
        </div>
        <div className="col-span-1 mb-4 text-center">
          <BlueButton
            className="w-4/5"
            onClick={() => {
              console.log("click");
            }}
          >
            Trámites <br /> Escolares
          </BlueButton>
        </div>
        <div className="col-span-1 mb-4 text-center">
          <BlueButton
            className="w-4/5"
            onClick={() => {
              console.log("click");
            }}
          >
            Servicio <br /> Social
          </BlueButton>
        </div>
        <div className="col-span-1 mb-4 text-center">
          <BlueButton
            className="w-4/5"
            onClick={() => {
              console.log("click");
            }}
          >
            Prácticas <br /> Profesionales
          </BlueButton>
        </div>
        <div className="col-span-1 mb-4 text-center">
          <BlueButton
            className="w-4/5"
            onClick={() => {
              console.log("click");
            }}
          >
            Opciones de <br /> Titulación
          </BlueButton>
        </div>
        <div className="col-span-1 mb-4 text-center">
          <BlueButton
            className="w-4/5"
            onClick={() => {
              console.log("click");
            }}
          >
            Apoyo <br /> Estudiantil
          </BlueButton>
        </div>
        <div className="col-span-1 mb-4 text-center">
          <BlueButton
            className="h-full w-4/5"
            onClick={() => {
              console.log("click");
            }}
          >
            Posgrado
          </BlueButton>
        </div>
        <div className="col-span-2 mb-4 text-center">
          <BlueButton
            className="w-3/5"
            onClick={() => {
              console.log("click");
            }}
          >
            Planos Oficiales
          </BlueButton>
        </div>
      </div>
    </div>
  );
};

export default AlumnoPage;
