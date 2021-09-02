import { useEffect, useState } from "react";
import { array } from "yup/lib/locale";
// import { arrayAverage } from "../utlities/methods";

export default function Data():any {


  function toPercent(val){
    return (parseFloat(val).toFixed(2))+"%";
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
  // DP02_0016E Number of children
// DP02_0135PE percent irish
  const itemToCompare = `DP02_0135PE,DP02_0016E`
  const variables = `?get=NAME,${itemToCompare}`;
  const variablePredicates = ``;
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



                const avgNums = (arrSum(justVars)) / justVars.length;

                item.push(avgNums);


              });
// 1. Get data response

// 2. Get the parts to use in calculations.

                const result = json.sort((a, b) => a[3] < b[3] ? 1 : -1);

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
  <li key={item[1]}{...item[2]}>
    {item[0]}{toPercent(item[3])}
    {console.log(advice)}
  </li>
)}

          </ol>

        </div>
    );
};

