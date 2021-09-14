import { useEffect, useState } from "react";
import { array } from "yup/lib/locale";
import { AllResults } from "./AllResults";
import { MostPopulated } from "./MostPopulated";
import { MiddlePopulations } from "./MiddlePopulations";
import { LeastPopulated } from "./LeastPopulated";

export default function Data(searchVars: any):any {
   const [advice, setAdvice]: any = useState([]);

  const arrToInsert = searchVars.searchVars.toString();
  function toPercent(val){
    return Number(parseFloat(val).toFixed(2))*100;
  }

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

useEffect(() => {
  const hostname = `https://api.census.gov/data`;
  const year = `2019`;
  const datasets = `acs/acs1/profile`;
  // B23002B_001E African americans in workforce
// B08006_017E	Estimate!!Total:!!Worked from home
  const itemToCompare = arrToInsert;
  const variables = `?get=NAME,DP02_0001E,${itemToCompare}`;
  const variablePredicates = ``;
  // example BY PLACE
  // https://api.census.gov/data/2019/acs/acs1/profile?get=NAME,DP02_0001E&for=place:*&in=state:*&key=YOUR_KEY_GOES_HERE
  const geographies = `&for=county:*&in=state:*`;
  const key = `ee638959ae386e00dd646af2980f3da1f171a529`

    const url = `${hostname}/${year}/${datasets}${variables}${geographies}&key=${key}`;
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setAdvice(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, [arrToInsert]);



    return (
      <>

      <AllResults jsonResponse={advice}/>

      <MostPopulated jsonResponse={advice}/>

      <MiddlePopulations jsonResponse={advice}/>

      <LeastPopulated jsonResponse={advice}/>






        </>
    );
};

