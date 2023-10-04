import { TextInput } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { useMemo, useState } from "react";
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

  const direccion_filtrado = useMemo(() => {
    const result = directorioDireccion
      .filter((d) => d.nombre.toLowerCase().includes(searchDebounced))
      .map((directorio) => (
        <DirectorioCard key={directorio.id} {...directorio} />
      ));
    if (result.length > 0) {
      return result;
    }
    return <h3 className="font-bold">No se encontraron resultados</h3>;
  }, [searchDebounced]);

  const subdireccion_filtrado = useMemo(() => {
    const result = directorioSubDireccion
      .filter((d) => d.nombre.toLowerCase().includes(searchDebounced))
      .map((directorio) => (
        <DirectorioCard key={directorio.id} {...directorio} />
      ));
    if (result.length > 0) {
      return result;
    }
    return <h3 className="font-bold">No se encontraron resultados</h3>;
  }, [searchDebounced]);

  const subdireccion_administrativa_filtrado = useMemo(() => {
    const result = directorioSubdireccionAdministrativa
      .filter((d) => d.nombre.toLowerCase().includes(searchDebounced))
      .map((directorio) => (
        <DirectorioCard key={directorio.id} {...directorio} />
      ));
    if (result.length > 0) {
      return result;
    }
    return <h3 className="font-bold">No se encontraron resultados</h3>;
  }, [searchDebounced]);

  const subdireccion_servicios_educativos_filtrado = useMemo(() => {
    const result = directorioSubdireccionServiciosEducativos
      .filter((d) => d.nombre.toLowerCase().includes(searchDebounced))
      .map((directorio) => (
        <DirectorioCard key={directorio.id} {...directorio} />
      ));
    if (result.length > 0) {
      return result;
    }
    return <h3 className="font-bold">No se encontraron resultados</h3>;
  }, [searchDebounced]);

  return (
    <div className="container m-auto px-5">
      <h3 className="mt-7 text-center text-2xl font-bold">Directorio</h3>
      <TextInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
        className="mt-5"
        placeholder="Buscar..."
      />

      <TextDivider text="DIRECCIÓN" />
      {direccion_filtrado}

      <TextDivider text="SUBDIRECCIÓN ACADÉMICA" />
      {subdireccion_filtrado}

      <TextDivider text="SUBDIRECCIÓN ADMINISTRATIVA" />
      {subdireccion_administrativa_filtrado}

      <TextDivider text="SUBDIRECCIÓN DE SERVICIOS EDUCATIVOS E INTEGRACIÓN SOCIAL" />
      {subdireccion_servicios_educativos_filtrado}
    </div>
  );
};

export default Directorio;
