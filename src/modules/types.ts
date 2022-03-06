import { profesijaOptions } from "./selectOptions";

type KoeficijentConfigurationValueType = {
  koeficijentPlace: number;
  koeficijentDodatkaNaProfesiju: number;
  koeficijentDodatkaNaProfesiju2: number;
};

export type KoeficijentConfiguration = Record<
  Exclude<keyof typeof profesijaOptions, "drugo">,
  KoeficijentConfigurationValueType
>;
