import Country from "@/app/components/Country";

export default function CountryName({ params }: {params: {country_name:string}}) {
  const countries: {
    name: string;
    population: number;
    capital: string;
  }[] = [
    {
      name: "Pakistan",
      population: 252257154,
      capital: "Islamabad",
    },
    {
      name: "Bangladesh",
      population: 174094621,
      capital: "Dhaka",
    },
    {
      name: "India",
      population: 1454180397,
      capital: "Dehli",
    },
    {
      name: "Japan",
      population: 123588886,
      capital: "Tokyo",
    },
    {
      name: "China",
      population: 1418507432,
      capital: "Beijing",
    },
  ];
  function findCountry(name: string): {name:string,population:number,capital:string} | undefined {
    return countries.find(
      (country) => name.toLowerCase() == country.name.toLowerCase()
    );
  }
  const result = findCountry(params.country_name);
  return (
    <div>
      <Country CountryInfo = {result}/>
    </div>
  );
};