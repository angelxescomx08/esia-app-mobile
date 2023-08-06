import { type ComponentProps } from "react";

export const BlueButton = (props: ComponentProps<"button">) => {
  return (
    <button
      {...props}
      className={`${props.className} rounded-xl border-2 border-negro bg-azul-botones py-3 text-lg font-bold leading-5 text-azul`}
    >
      {props.children}
    </button>
  );
};
