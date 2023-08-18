export interface Directorio {
  id: string;
  nombre: string;
  correo: string;
  cargo: string;
  extension: number | "No aplica";
  secretario_extension?: number;
}
