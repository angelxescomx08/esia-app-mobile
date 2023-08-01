import { TextInput } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import React, { useState } from "react";
import { DirectorioCard, TextDivider } from "~/components";
import {
  directorioDireccion,
  directorioSubDireccion,
  directorioSubdireccionAdministrativa,
  directorioSubdireccionServiciosEducativos,
} from "~/data/directorios";

const Directorio = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchDebounced] = useDebouncedValue(searchTerm, 400);

  return (
    <div className="container m-auto  px-5">
      <h3 className="mt-7 text-center text-2xl font-bold">Directorio</h3>
      <TextInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
        className="mt-5"
        placeholder="Buscar..."
      />

      <TextDivider text="DIRECCIÓN" />
      {directorioDireccion
        .filter((d) => d.nombre.toLowerCase().includes(searchDebounced))
        .map((directorio) => (
          <DirectorioCard key={directorio.id} {...directorio} />
        ))}

      <TextDivider text="SUBDIRECCIÓN ACADÉMICA" />
      {directorioSubDireccion
        .filter((d) => d.nombre.toLowerCase().includes(searchDebounced))
        .map((directorio) => (
          <DirectorioCard key={directorio.id} {...directorio} />
        ))}

      <TextDivider text="SUBDIRECCIÓN ADMINISTRATIVA" />
      {directorioSubdireccionAdministrativa
        .filter((d) => d.nombre.toLowerCase().includes(searchDebounced))
        .map((directorio) => (
          <DirectorioCard key={directorio.id} {...directorio} />
        ))}

      <TextDivider text="SUBDIRECCIÓN DE SERVICIOS EDUCATIVOS E INTEGRACIÓN SOCIAL" />
      {directorioSubdireccionServiciosEducativos
        .filter((d) => d.nombre.toLowerCase().includes(searchDebounced))
        .map((directorio) => (
          <DirectorioCard key={directorio.id} {...directorio} />
        ))}
    </div>
  );
};

export default Directorio;
