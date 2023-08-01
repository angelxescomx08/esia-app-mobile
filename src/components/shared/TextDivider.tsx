import React from "react";

interface Props {
  text: string;
}

export const TextDivider = ({ text }: Props) => {
  return (
    <div className="my-5 rounded-xl bg-azul py-2 shadow-sm">
      <p className="text-center text-sm font-bold text-blanco">{text}</p>
    </div>
  );
};
