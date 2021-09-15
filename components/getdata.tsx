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
  // Get the number of households, and the items to compare. Households is #2 of returned array.
  const variables = `?get=NAME,DP02_0001E,${itemToCompare}`;
  const variablePredicates = ``;
  // example BY PLACE
  // https://api.census.gov/data/2019/acs/acs1/profile?get=NAME,DP02_0001E&for=place:*&in=state:*&key=YOUR_KEY_GOES_HERE
  const geographies = `&for=county:*&in=state:*`;
  const key = `ee638959ae386e00dd646af2980f3da1f171a529`

function calculateAverage(array) {
    var total = 0;
    var count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });

    return total / count;
}

    const url = `${hostname}/${year}/${datasets}${variables}${geographies}&key=${key}`


        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
              // TODO: show data from forms
              // TODO: Display weighted data from multiple inputs
                json.map(item => {
                const toRemove = item.length - 3;
                let justVars = item.splice(1, toRemove);
                const arrSum = arr => arr.reduce((a,b) => Number(a) + Number(b), 0);
              }),
              setAdvice(json);
            } catch (error) {
                console.log("error", error);
            }
          };
        fetchData();
    },[arrToInsert]);


    return (
      <>

      <AllResults jsonResponse={advice}/>

      <MostPopulated jsonResponse={advice}/>

      <MiddlePopulations jsonResponse={advice}/>

      <LeastPopulated jsonResponse={advice}/>






        </>
    );
};
