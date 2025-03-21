import { Country } from '../interfaces/country.interface';
import { ResponseCountry } from '../interfaces/res.interface';

export class CountryMapper {
  static parseResponseToCountry(country: ResponseCountry): Country {
    return {
      cca2: country.cca2,
      capital: country.name.common,
      flag: country.flag,
      flagSvg: country.flags.svg,
      name: country.name.common,
      population: country.population,
      SPA_nameTraslate: country.translations["spa"].common,
      region: country.region,
      subRegion: country.subregion
    };
  }

  static parseResponseListToCountryList(
    countries: ResponseCountry[]
  ): Country[] {
    const countriesConverted = countries.map((res) =>
      this.parseResponseToCountry(res)
    );
    return countriesConverted;
  }
}
