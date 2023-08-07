import { BarraAzul } from "~/components";

const ApoyoEstudiantilDos = () => {
  return (
    <div className="container m-auto pb-8">
      <BarraAzul texto="Prestamo de equipo por la UDI">
        <p className="px-2 py-4 text-sm leading-4">
          Requisitos:
          <br />
          *2 fotografías infantiles de estudio, blanco y negro o color.
          <br />
          *Copia de comprobante de reinscrepción del semestre en curso
          <br />
          *Deposito de $27.00 en la cuenta de BBVA No. 0135892384
          <br />
          Horario: 8:00 a 13:00 y 16:00 a 20:00 hrs
          <br />
          Días de atención: Lunes a Viernes
          <br />
          La solicitud se realiza en la jefatura de la UDI.
        </p>
      </BarraAzul>
    </div>
  );
};

export default ApoyoEstudiantilDos;
