import { country_data } from "@/app/country_data/data";

const CountryName = ({ params }: { params: { country_name: string } }) => {
  if (params.country_name === "pakistan") {
    return (
      <div>
        <h1>Country: {country_data.pakistan.name}</h1>
        <p>Name: {country_data.pakistan.name}</p>
        <p>Population: {country_data.pakistan.population}</p>
        <p>Capital: {country_data.pakistan.capital}</p>
      </div>
    );
  } else if (params.country_name === "bangladesh") {
    return (
      <div>
        <h1>Country: {country_data.bangladesh.name}</h1>
        <p>Name: {country_data.bangladesh.name}</p>
        <p>Population: {country_data.bangladesh.population}</p>
        <p>Capital: {country_data.bangladesh.capital}</p>
      </div>
    );
  } else if (params.country_name === "india") {
    return (
      <div>
        <h1>Country: {country_data.india.name}</h1>
        <p>Name: {country_data.india.name}</p>
        <p>Population: {country_data.india.population}</p>
        <p>Capital: {country_data.india.capital}</p>
      </div>
    );
  } else if (params.country_name === "japan") {
    return (
      <div>
        <h1>Country: {country_data.japan.name}</h1>
        <p>Name: {country_data.japan.name}</p>
        <p>Population: {country_data.japan.population}</p>
        <p>Capital: {country_data.japan.capital}</p>
      </div>
    );
  } else if (params.country_name === "china") {
    return (
      <div>
        <h1>Country: {country_data.china.name}</h1>
        <p>Name: {country_data.china.name}</p>
        <p>Population: {country_data.china.population}</p>
        <p>Capital: {country_data.china.capital}</p>
      </div>
    );
  } else {
    return (
      <h1 className="text-2xl font-bold underline p-4">
        ⚠ Country not found 🌐
      </h1>
    );
  }
};

export default CountryName;
