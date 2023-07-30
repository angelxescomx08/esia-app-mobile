import React, { type ComponentProps } from "react";

export const Imagen = (props: ComponentProps<"img"> & { alt: string }) => {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img {...props} alt={props.alt} />
    </>
  );
};
