import { useEffect, useState } from "react";


export const AllResults = (jsonResponse) => {

  const {...data} = jsonResponse;


  const [results, setResults] = useState([]);

  useEffect(() => {


      setResults(data.jsonResponse);

    }, [jsonResponse])


                // Sort according to best score.
                const result = results.sort((a, b) => a[2] < b[2] ? 1 : -1);
  return(
        <div>
          Here are the COMBINED top results:
          <ol>
{Object.values(result).slice(1,11).map(item =>
  <li key={item[1]-item[2]}>
    {item[0]}: {item[2]}%; population: {item[1]}
  </li>
)}

          </ol>

        </div>

  )
}
