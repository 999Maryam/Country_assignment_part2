interface CountryInfo {
    name: string;
    population: number;
    capital: string;
  }
  
  interface CountryDetailsProps {
    CountryInfo: CountryInfo | undefined;
  }
// export default function CountryDetails()
//     return(
//         <div>
//             {data ? ( 
//                 <div>
//                     <h1>Country Name : {data.CountryInfo.name}</h1>
//                     <h1>Country Population : {data.CountryInfo.population}</h1>
//                     <h1>Country Capital : {data.CountryInfo.capital}</h1>
//                 </div>
//             ) : (
//             <div>
//                 <h1>Country Not Found </h1>
//             </div>
//             )
//             }
//         </div>
//     )
// };
interface CountryInfo {
    name: string;
    population: number;
    capital: string;
  }
  
  interface CountryDetailsProps {
    CountryInfo: CountryInfo | undefined;
  }
  
  export default function CountryDetails({ CountryInfo }: CountryDetailsProps) {
    return (
      <div>
        {CountryInfo ? (
          <div>
            <h1>Country Name: {CountryInfo.name}</h1>
            <h1>Country Population: {CountryInfo.population}</h1>
            <h1>Country Capital: {CountryInfo.capital}</h1>
          </div>
        ) : (
          <div>
            <h1>Country Not Found</h1>
          </div>
        )}
      </div>
    );
  }
  