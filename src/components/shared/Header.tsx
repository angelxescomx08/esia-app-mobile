import React from "react";
import { Imagen } from "./Imagen";

interface Props {
  title?: string;
  main_title?: string;
  image?: string;
  classNameImage?: string;
}

export const Header = ({ title, image, main_title, classNameImage }: Props) => {
  return (
    <div>
      {title && (
        <h2 className="mt-4 text-center text-base font-bold">{title}</h2>
      )}
      {main_title && (
        <h2 className="text-center text-lg font-bold">{main_title}</h2>
      )}

      {image && (
        <Imagen
          className={`m-auto mt-4 aspect-[89/140] w-12 ${classNameImage}`}
          src={image}
          alt=""
        />
      )}
    </div>
  );
};
