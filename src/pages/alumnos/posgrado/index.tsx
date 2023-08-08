import { useRouter } from "next/router";
import { BlueButton } from "~/components";
import { LayoutMenu } from "~/layouts";

const Posgrado = () => {
  const router = useRouter();
  return (
    <LayoutMenu>
      <div className="mt-10 flex flex-col items-center justify-center">
        <BlueButton
          className="mb-10 w-44 max-w-full py-5"
          onClick={() => void router.push("/alumnos/posgrado/conocenos")}
        >
          Conócenos
        </BlueButton>
        <BlueButton
          className="mb-10 w-44 max-w-full py-5"
          onClick={() => void router.push("/alumnos/posgrado/programas")}
        >
          Programas
        </BlueButton>
        <BlueButton
          className="mb-10 w-44 max-w-full py-5"
          onClick={() => void router.push("/alumnos/posgrado/alumnos")}
        >
          Alumnos
        </BlueButton>
        <BlueButton
          className="mb-10 w-44 max-w-full py-5"
          onClick={() => void router.push("/alumnos/posgrado/profesores")}
        >
          Profesores
        </BlueButton>
      </div>
    </LayoutMenu>
  );
};

export default Posgrado;
