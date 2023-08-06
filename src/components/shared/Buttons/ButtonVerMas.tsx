import { Imagen } from "../Imagen";

interface Props {
  onClick?: () => void;
}

export const ButtonVerMas = ({ onClick }: Props) => {
  return (
    <button onClick={onClick}>
      <div className="flex items-center">
        <p className="text-sm font-bold">ver más</p>
        <Imagen
          className="w-5 -rotate-90"
          src="/assets/imgs/arrow.png"
          alt=""
        />
      </div>
    </button>
  );
};
