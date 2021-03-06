import { invalidnostOptions } from "./selectOptions";

function izracunajPlacu({
  godineStaza,
  brojSatiMjesecno,
  brojNocnih,
  brojPopodne,
  brojSubota,
  brojNedjelja,
  brojPrekovremeni,
  brojBlagdan,
  stopaPrireza,
  brojDjece,
  brojUzdrzavanih,
  invalidnost,
  koeficijentSlozenostiPosla,
  koeficijentPolozajnogDodatka,
  koeficijentDodatkaZaOdgovornost,
}: {
  godineStaza: number;
  brojSatiMjesecno: number;
  brojNocnih: number;
  brojPopodne: number;
  brojSubota: number;
  brojNedjelja: number;
  brojPrekovremeni: number;
  brojBlagdan: number;
  stopaPrireza: number;
  brojDjece: number;
  brojUzdrzavanih: number;
  invalidnost: keyof typeof invalidnostOptions;
  koeficijentSlozenostiPosla: number;
  koeficijentPolozajnogDodatka: number;
  koeficijentDodatkaZaOdgovornost: string;
}) {
  let olaksicaZaDjecu;
  /* console.log(
    koeficijentSlozenostiPosla,
    koeficijentPolozajnogDodatka,
    koeficijentDodatkaZaOdgovornost
  ); */

  switch (brojDjece) {
    case 0:
      olaksicaZaDjecu = 0;
      break;
    case 1:
      olaksicaZaDjecu = 1750;
      break;
    case 2:
      olaksicaZaDjecu = 4250;
      break;
    case 3:
      olaksicaZaDjecu = 7750;
      break;
    case 4:
      olaksicaZaDjecu = 12500;
      break;
    case 5:
      olaksicaZaDjecu = 18750;
      break;
    case 6:
      olaksicaZaDjecu = 26750;
      break;
    default:
      olaksicaZaDjecu = 26750;
  }

  let odbitakZaUzdrzavaneClanove;
  switch (brojUzdrzavanih) {
    case 0:
      odbitakZaUzdrzavaneClanove = 0;
      break;
    case 1:
      odbitakZaUzdrzavaneClanove = 1750;
      break;
    case 2:
      odbitakZaUzdrzavaneClanove = 3500;
      break;
    case 3:
      odbitakZaUzdrzavaneClanove = 5250;
      break;
    case 4:
      odbitakZaUzdrzavaneClanove = 7000;
      break;
    case 5:
      odbitakZaUzdrzavaneClanove = 8750;
      break;
    default:
      odbitakZaUzdrzavaneClanove = 8750;
  }

  let odbitakZaInvaliditet: number;
  switch (invalidnost) {
    case "nema":
      odbitakZaInvaliditet = 0;
      break;
    case "djelomicna":
      odbitakZaInvaliditet = 1000;
      break;
    case "stopostotna":
      odbitakZaInvaliditet = 3750;
      break;
    default:
      throw new Error("Nepoznata invalidnost");
  }

  /* if (profesija !== "drugo") {
    const nadjeniKoeficijenti = koeficijenti[profesija];
    if (nadjeniKoeficijenti === undefined) {
      throw new Error("Nepoznata profesija");
    }
    koeficijentPlace = nadjeniKoeficijenti.koeficijentPlace;
    koeficijentPolozajnogDodatka =
      nadjeniKoeficijenti.koeficijentPolozajnogDodatka;
    koeficijentPolozajnogDodatka2 =
      nadjeniKoeficijenti.koeficijentPolozajnogDodatka2;
  } */

  let osnovica = 6044.51;
  let osnovnaPlaca =
    osnovica * koeficijentSlozenostiPosla * (1 + 0.005 * godineStaza);
  let dodatakNaProfesiju = osnovnaPlaca * koeficijentPolozajnogDodatka;
  let dodatakNaProfesiju2 =
    osnovnaPlaca * Number(koeficijentDodatkaZaOdgovornost);
  if (brojSatiMjesecno === 0) {
    throw new Error("Fond sati je 0");
  }
  let osnovnaSatnica = osnovnaPlaca / brojSatiMjesecno;
  let dodatnoNocni = osnovnaSatnica * 0.4 * brojNocnih;
  let dodatnoPopodnevni = osnovnaSatnica * 0.1 * brojPopodne;
  let dodatnoSubotnji = osnovnaSatnica * 0.25 * brojSubota;
  let dodatnoNedjeljni = osnovnaSatnica * 0.35 * brojNedjelja;
  let dodatnoPrekovremeni = osnovnaSatnica * 1.5 * brojPrekovremeni;
  let dodatnoBlagdanski = osnovnaSatnica * 1.5 * brojBlagdan;

  let brutoPlaca =
    osnovnaPlaca +
    dodatakNaProfesiju +
    dodatakNaProfesiju2 +
    dodatnoNocni +
    dodatnoPopodnevni +
    dodatnoSubotnji +
    dodatnoNedjeljni +
    dodatnoPrekovremeni +
    dodatnoBlagdanski;
  let dohodak = brutoPlaca - brutoPlaca * 0.15 - brutoPlaca * 0.05;
  let poreznaOlaksica =
    3800 + olaksicaZaDjecu + odbitakZaUzdrzavaneClanove + odbitakZaInvaliditet;
  let poreznaOsnovica =
    dohodak < poreznaOlaksica ? 0 : dohodak - poreznaOlaksica;
  let porez24 = poreznaOsnovica < 17500 ? poreznaOsnovica * 0.24 : 17500 * 0.24;
  let porez36 = poreznaOsnovica > 17500 ? (poreznaOsnovica - 17500) * 0.36 : 0;
  let ukupniPorez = porez24 + porez36;
  let prirez = (ukupniPorez * stopaPrireza) / 100;
  let nettoPlaca = dohodak - ukupniPorez - prirez;

  return {
    osnovica,
    koeficijentSlozenostiPosla,
    osnovnaPlaca,
    osnovnaSatnica,
    dodatnoNocni,
    dodatnoPopodnevni,
    dodatnoSubotnji,
    dodatnoNedjeljni,
    dodatnoPrekovremeni,
    dodatnoBlagdanski,

    brutoPlaca,
    dohodak,
    poreznaOlaksica,
    poreznaOsnovica,
    porez24,
    porez36,
    ukupniPorez,
    prirez,
    nettoPlaca,
  };
}

export { izracunajPlacu };
