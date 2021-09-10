import { useEffect, useState } from "react";
import { array } from "yup/lib/locale";


export default function Data(searchVars: any):any {

  const arrToInsert = searchVars.searchVars.toString();


  function toPercent(val){
    return Number(parseFloat(val).toFixed(2))*100;
  }

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}
   const [advice, setAdvice]: any = useState("");
useEffect(() => {
  const hostname = `https://api.census.gov/data`;
  const year = `2019`;
  const datasets = `acs/acs1/profile`;
  // B23002B_001E African americans in workforce
// B08006_017E	Estimate!!Total:!!Worked from home
  const itemToCompare = arrToInsert;
  const variables = `?get=NAME,${itemToCompare},DP02_0016E`;
  const variablePredicates = ``;
  const geographies = `&for=county:*&in=state:*`;
  const key = `ee638959ae386e00dd646af2980f3da1f171a529`


  // https://api.census.gov/data/2019/acs/acs1/profile?get=NAME,DP02_0029PE,DP02_0030PEDP02_0016E&for=county:*&in=state:*&key=ee638959ae386e00dd646af2980f3da1f171a529

  // https://api.census.gov/data/2019/acs/acs1/profile?get=NAME,DP02_0001E&for=county%20subdivision:*&in=state:36&in=county:*&key=YOUR_KEY_GOES_HERE
    const url = `${hostname}/${year}/${datasets}${variables}${geographies}&key=${key}`
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();



                const result = json.sort((a, b) => a[1] < b[1] ? 1 : -1);


                /**
                 * 1. Get percentage of each
                 * 2. Multiply percentage by weight (so, if 3 variables, multiply by .33)
                 * 3. Add the results of the percentages.
                 */

                setAdvice(result);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);



    return (
        <div>
          Hi
          <ol>
{Object.values(advice).slice(1,50).map(item =>
  <li key={item[1]-item[3]}>
    {item[0]}: {item[1]}%
  </li>
)}

          </ol>

        </div>
    );
};

