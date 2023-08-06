import { type PropsWithChildren } from "react";
import { ButtonVerMas } from "./Buttons/ButtonVerMas";

interface Props {
  texto: string;
  onVerMas?: () => void;
}

export const BarraAzul = ({
  texto,
  onVerMas,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <div>
      <div className="flex select-none items-center justify-between bg-azul py-1">
        <p className="w-full text-center text-sm font-bold text-blanco">
          {texto}
        </p>
      </div>
      {children}
      {onVerMas ? (
        <div className="mb-3 flex justify-end px-2">
          <ButtonVerMas onClick={onVerMas} />
        </div>
      ) : null}
    </div>
  );
};
