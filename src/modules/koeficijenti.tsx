import { KoeficijentConfiguration } from "./types";

export const koeficijenti: KoeficijentConfiguration = {
  lijecnikHMP: {
    koeficijentPlace: 1.794,
    koeficijentDodatkaNaProfesiju: 0.16,
    koeficijentDodatkaNaProfesiju2: 0.2,
  },
  lijecnik: {
    koeficijentPlace: 1.794,
    koeficijentDodatkaNaProfesiju: 0.16,
    koeficijentDodatkaNaProfesiju2: 0,
  },
  medicinskiTehnicar: {
    koeficijentPlace: 1.067,
    koeficijentDodatkaNaProfesiju: 0.08,
    koeficijentDodatkaNaProfesiju2: 0.2,
  },
  vozacHMP: {
    koeficijentPlace: 0.951,
    koeficijentDodatkaNaProfesiju: 0.04,
    koeficijentDodatkaNaProfesiju2: 0.2,
  },
};
